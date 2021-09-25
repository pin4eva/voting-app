import React from "react";
import styled from "styled-components";
import SidebarComp from "../components/dashbord/Sidebar";
import HeaderComp from "../components/HeaderComp";

const DashboardLayout = ({ children }) => {
	return (
		<Wrapper>
			<HeaderComp />
			<div className="main container mt-5">{children}</div>
			{/* <div className="wrapper">
				<SidebarComp />
			</div> */}
		</Wrapper>
	);
};

export default DashboardLayout;

const Wrapper = styled.div`
	/* .wrapper {
		display: grid;
		grid-template-columns: auto 1fr;
		.main {
			background-color: red;
		}
	} */
`;
