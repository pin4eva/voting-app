import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import "bootstrap/dist/js/bootstrap";
import Cookies from "js-cookie";
import React, { Fragment, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState } from "recoil";
import { socket } from ".";
import { ElectionAtom } from "./atoms/ElectionAtom";
import { UserAtom, UsersAtom } from "./atoms/userAtom";
import Routes from "./routes";
import "./styles/custom.scss";
import "./styles/index.scss";
import { SERVER_URL } from "./utils/constants";

const token = Cookies.get("token");
axios.defaults.baseURL = SERVER_URL;

axios.defaults.withCredentials = true;
axios.defaults.headers.common["authorization"] = token;

const App = () => {
	const setUser = useSetRecoilState(UserAtom);
	const setUsers = useSetRecoilState(UsersAtom);
	const setElections = useSetRecoilState(ElectionAtom);

	useEffect(() => {
		const getUser = async () => {
			try {
				const { data } = await axios.get("/auth/me", {
					headers: {
						authorization: token,
					},
				});
				setUser(data);
				if (!data) {
					Cookies.remove("token");
				}
			} catch (error) {
				console.log(error);
				Cookies.remove("token");
			}
		};
		const getUsers = async () => {
			try {
				const { data } = await axios.get("/user/");
				setUsers(data);
			} catch (error) {
				console.log(error);
			}
		};

		if (token) getUser();
		getUsers();
	}, [token]);

	useEffect(() => {
		const getElections = async () => {
			try {
				const { data } = await axios.get("/vote/election");
				setElections(data);
			} catch (error) {
				console.log(error);
			}
		};
		getElections();
	}, []);

	useEffect(() => {
		socket.on("user-voted", (data) => toast(data));
	}, []);

	return (
		<Fragment>
			<Routes isAuth={Boolean(token)} />
			<ToastContainer />
		</Fragment>
	);
};

export default App;
