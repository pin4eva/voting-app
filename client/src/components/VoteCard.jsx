/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { socket } from "..";
import { UserAtom } from "../atoms/userAtom";

const VoteCardComp = ({ candidate }) => {
	const user = useRecoilValue(UserAtom);
	const [votes, setVotes] = useState(candidate.votes);
	const router = useHistory();

	useEffect(() => {
		// socket.on("error-vote", (data) => {
		// 	alert(data);
		// });
		socket.on("vote-response", (data) => {
			if (candidate?._id === data?.candidate) {
				// socket.on("user-voted", (data) => console.log(data));
				setVotes([data, ...votes]);
			}
			// socket.off("vote-response");
		});

		// return () => socket.off("vote-response");
	});

	const handleVote = async () => {
		if (!user) return router.push("/login");
		const payload = {
			voter: user?._id,
			candidate: candidate?._id,
			election: candidate?.election,
		};
		socket.emit("voted", payload);
	};
	return (
		<Wrapper className="">
			<div className="inner">
				<div className="left d-flex align-items-center">
					<img src={candidate?.user?.image} alt="" className="avatar" />
					<div className="text-content ms-2">
						<h5 className="m-0">{candidate?.user?.name}</h5>
						<button
							className="btn  btn-sm mt-2 btn-warning"
							disabled={!user}
							onClick={handleVote}
						>
							Vote {votes.length}
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default VoteCardComp;

const Wrapper = styled.div`
	.avatar {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
	}
`;
