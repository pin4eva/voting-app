import axios from "axios";
import React, { Fragment } from "react";
import { useRecoilState } from "recoil";
import { UsersAtom } from "../../atoms/userAtom";

const UsersPage = () => {
	const [users, setUsers] = useRecoilState(UsersAtom);

	const makeAdmin = async (_id) => {
		try {
			const { data } = await axios.post("/user/admin", { _id });
			const mapped = users.map((user) =>
				user._id === data._id ? { ...user, isAdmin: data.isAdmin } : user,
			);
			setUsers(mapped);
			console.log(mapped);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteUser = async (_id) => {
		const confirmed = window.confirm("DO you want to delete this user ?");
		if (!confirmed) return;
		try {
			const { data } = await axios.delete(`/user/single/${_id}`);
			const fillted = users.filter((user) => user._id !== data._id);
			setUsers(fillted);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Fragment>
			<div className="container">
				<h1 className="text-center">User List</h1>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>isAdmin</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users?.map((user, i) => (
							<tr key={i}>
								<td>{user?.name}</td>
								<td>{user?.isAdmin ? "Admin" : "User"}</td>
								<td align="right">
									<button
										className="btn text-primary p-0 btn-sm"
										onClick={() => makeAdmin(user._id)}
									>
										Make admin
									</button>
									<button
										className="btn text-danger p-0 btn-sm ms-2"
										onClick={() => deleteUser(user?._id)}
									>
										Remove User
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default UsersPage;
