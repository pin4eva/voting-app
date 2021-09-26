import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Displaychart from "../components/Displaychart";
import Firstbody from "../components/Firstbody";
import VoteCardComp from "../components/VoteCard";

const HomePage = () => {
	const [election, setElection] = useState({});
	const [candidates, setCandidates] = useState([]);
	// const [voters, setVoters] = useState([]);
	// const user = useRecoilValue(UserAtom);

	useEffect(() => {
		const getElection = async () => {
			try {
				const { data } = await axios.get(`/vote/election/currect`);

				setElection(data);
				setCandidates(data?.candidates);
				console.log("data :", data);
				// setVoters(data?.voters);
			} catch (error) {
				console.log(error);
			}
		};
		getElection();
	}, []);

	return (
		<Wrapper className="homepage">
			<div className="container">
				<Firstbody />
				{election?.type ? (
					<h2 className="mt-4">
						{election?.type} {election?.year}
					</h2>
				) : (
					<h2 className="mt-4">There is no on-going election</h2>
				)}
				<div className="vote-list" id="vote">
					{candidates?.map((candidate, i) => (
						<VoteCardComp key={i} candidate={candidate} />
					))}
				</div>
			</div>
			{/* <VotingSection /> */}
			{/* <Displaychart /> */}
		</Wrapper>
	);
};

export default HomePage;

const Wrapper = styled.div`
	.vote-list {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
`;
