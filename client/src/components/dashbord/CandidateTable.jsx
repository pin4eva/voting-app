import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { CandidatesAtom, ElectionAtom } from "../../atoms/ElectionAtom";
import { UsersAtom } from "../../atoms/userAtom";

const CandidateTable = () => {
	const [candidates, setCandidate] = useRecoilState(CandidatesAtom);

	useEffect(() => {
		const getCandidates = async () => {
			try {
				const { data } = await axios.get("/vote/candidate");
				setCandidate(data);
			} catch (error) {
				console.log(error);
			}
		};
		if (candidates?.length < 1) getCandidates();
	}, []);

	const handleDelete = async (id) => {
		try {
			const {} = await axios.delete(`/vote/candidate/${id}`);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Table className="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Election type</th>
					<th>Year</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{candidates?.map((candidate, i) => (
					<tr key={i}>
						<td>{candidate?.user?.name}</td>
						<td>{candidate?.election?.type}</td>
						<td>{candidate?.election?.year}</td>
						<td>
							<button
								className="btn text-danger p-0"
								onClick={() => handleDelete(candidate._id)}
							>
								Delete
							</button>{" "}
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default CandidateTable;

export const CreateCandidate = () => {
	const users = useRecoilValue(UsersAtom);
	const elections = useRecoilValue(ElectionAtom);
	const setCandidates = useSetRecoilState(CandidatesAtom);
	const [info, setInfo] = useState({
		user: "",
		election: "",
	});

	const handleChange = (e) => {
		const { value, name } = e.target;
		setInfo({
			...info,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await axios.post("/vote/candidate/create", info);
			setCandidates((candidate) => [data, ...candidate]);
			alert("New Candidate created !!");
			setInfo({
				user: "",
				election: "",
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group mb-2">
				<select
					name="election"
					className="form-select"
					onChange={handleChange}
					value={info.election}
				>
					<option value="">Select an Election</option>
					{elections?.map((election, i) => (
						<option value={election?._id} key={i}>
							{election?.type}
						</option>
					))}
				</select>
			</div>
			<div className="form-group mb-2">
				<select
					name="user"
					className="form-select"
					onChange={handleChange}
					value={info.user}
				>
					<option value="">Select a user for candiate</option>
					{users?.map((user, i) => (
						<option value={user?._id} key={i}>
							{user?.name}
						</option>
					))}
				</select>
			</div>
			<button className="btn btn-primary">Create Candidate</button>
		</form>
	);
};

const Table = styled.table``;
