import axios from "axios";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ElectionAtom } from "../../atoms/ElectionAtom";

const ElectionTable = () => {
	const [elections, setElections] = useRecoilState(ElectionAtom);

	const handleDelete = async (id) => {
		const confirmed = window.confirm(
			"Do you really want to delete this Election ?",
		);
		if (!confirmed) return;
		try {
			await axios.delete(`/vote/election/${id}`);
			setElections(elections.filter((election) => election._id !== id));
		} catch (error) {
			alert("Failed to delete election");
			console.log(error);
		}
	};

	const handleCurrent = async (id) => {
		const confirmed = window.confirm(
			"Do you really want to set this Election as current ?",
		);
		if (!confirmed) return;
		try {
			const { data } = await axios.post(`/vote/election/current`, {
				election: id,
			});
			const mapped = elections.map((election) =>
				election._id === id
					? { ...election, isCurrent: data.isCurrent }
					: { ...election, isCurrent: false },
			);

			setElections(mapped);
		} catch (error) {
			alert("Failed to delete election");
			console.log(error);
		}
	};

	return (
		<Table className="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Year</th>
					<th align="right"></th>
				</tr>
			</thead>
			<tbody>
				{elections?.map((election, i) => (
					<tr key={i}>
						<td>
							{election?.type}
							{election?.isCurrent && (
								<i className="fas fa-check text-success ms-2"></i>
							)}
						</td>
						<td> {election?.year}</td>
						<td align="right">
							<button
								className="btn p-0 text-danger"
								onClick={() => handleDelete(election?._id)}
							>
								Delete
							</button>
							<button
								className="btn p-0 text-info ms-2"
								onClick={() => handleCurrent(election?._id)}
							>
								Set as Current
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default ElectionTable;

const Table = styled.table``;
