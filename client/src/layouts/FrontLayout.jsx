import React from "react";
import Footer from "../components/Footer";
import HeaderComp from "../components/HeaderComp";

const FrontLayout = ({ children }) => {
	return (
		<div>
			<HeaderComp />
			{children}
			<Footer />
		</div>
	);
};

export default FrontLayout;
