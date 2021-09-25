import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "./styles/index.scss";
import "./styles/custom.scss";
import App from "./App";
import { io } from "socket.io-client";
import { SERVER_URL } from "./utils/constants";
export const socket = io(SERVER_URL);

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root"),
);
