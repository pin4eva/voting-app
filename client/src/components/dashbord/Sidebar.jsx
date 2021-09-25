import React from "react";
import styled from "styled-components";

const SidebarComp = () => {
	return (
		<Aside>
			<p>Side bar</p>
		</Aside>
	);
};

export default SidebarComp;

const Aside = styled.aside`
	width: 100%;
	min-width: 10rem;
`;
