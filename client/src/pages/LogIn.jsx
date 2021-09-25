import axios from "axios";
import cookie from "js-cookie";
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { UserAtom } from "../atoms/userAtom";

const LogIn = () => {
	const user = useRecoilValue(UserAtom);

	const onLoginSuccess = async (res) => {
		const { data } = await axios.post("/auth/google", res.profileObj);
		cookie.set("token", data);
		alert("Login Successful !!");
		window.location.href = "/";
	};

	const onFailureSuccess = (res) => {
		console.log("Login Failed:", res);
	};

	return (
		<Wrapper>
			<div className="container login">
				<GoogleLogin
					clientId={process.env.REACT_APP_GOOGLE_CLIENT}
					onSuccess={onLoginSuccess}
					onFailure={(e) => console.log(e)}
					disabled={Boolean(user)}
					className="btn"
					render={(props) => (
						<button
							// eslint-disable-next-line react/prop-types
							onClick={props.onClick}
							className="btn border mb-3 text-muted fs-5 d-block fw-bold"
							// eslint-disable-next-line react/prop-types
							disabled={props?.disabled}
						>
							<span>
								<svg
									width="27"
									height="27"
									viewBox="0 0 27 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0)">
										<path
											d="M5.98377 16.3165L5.04394 19.825L1.60887 19.8977C0.582293 17.9936 0 15.8151 0 13.5C0 11.2614 0.54443 9.15034 1.50947 7.2915H1.51021L4.56838 7.85218L5.90804 10.892C5.62765 11.7094 5.47483 12.5869 5.47483 13.5C5.47494 14.491 5.65444 15.4405 5.98377 16.3165Z"
											fill="#FBBB00"
										/>
										<path
											d="M26.7642 10.978C26.9192 11.7947 27.0001 12.6381 27.0001 13.5C27.0001 14.4665 26.8985 15.4093 26.7049 16.3187C26.0477 19.4133 24.3305 22.1155 21.9517 24.0278L21.951 24.0271L18.099 23.8305L17.5539 20.4273C19.1323 19.5016 20.3659 18.0529 21.0157 16.3187H13.7969V10.978H21.121H26.7642Z"
											fill="#518EF8"
										/>
										<path
											d="M21.9509 24.0272L21.9516 24.0279C19.6381 25.8875 16.6992 27.0002 13.5 27.0002C8.35889 27.0002 3.88907 24.1266 1.60889 19.8978L5.98378 16.3167C7.12385 19.3593 10.059 21.5253 13.5 21.5253C14.9791 21.5253 16.3647 21.1254 17.5537 20.4275L21.9509 24.0272Z"
											fill="#28B446"
										/>
										<path
											d="M22.1168 3.10795L17.7434 6.68841C16.5128 5.91922 15.0582 5.47488 13.4998 5.47488C9.9809 5.47488 6.99086 7.74019 5.9079 10.892L1.51002 7.29148H1.50928C3.75608 2.95961 8.28227 0 13.4998 0C16.7754 0 19.7788 1.1668 22.1168 3.10795Z"
											fill="#F14336"
										/>
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="27" height="27" fill="white" />
										</clipPath>
									</defs>
								</svg>
								&nbsp;&nbsp;Sign in with Google
							</span>
						</button>
					)}
				/>
			</div>
		</Wrapper>
	);
};

export default LogIn;

const Wrapper = styled.div`
	margin-top: 3rem;
	.login {
		.btn {
			/* background-color: red; */
			width: 100%;
		}
	}
`;
