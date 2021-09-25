import axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { ElectionAtom } from "../../atoms/ElectionAtom";

const CreateElection = () => {
	const setElection = useSetRecoilState(ElectionAtom);
	const [info, setInfo] = useState({
		year: "",
		type: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo({
			...info,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!info.year || !info.type) return alert("All input must be filled");
		try {
			const { data } = await axios.post("/vote/election/create", info);
			setElection((election) => [data, ...election]);
			setInfo({
				year: "",
				type: "",
			});
		} catch (error) {
			console.log(error);
			alert(error?.response?.data);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name="type"
					className="form-control mb-2"
					value={info.type}
					onChange={handleChange}
					placeholder="Election name"
				/>

				<select
					name="year"
					className="form-select"
					value={info.year}
					onChange={handleChange}
				>
					<option value=""></option>
					{years.map((year, i) => (
						<option key={i} value={year}>
							{year}
						</option>
					))}
				</select>
				<button className="btn btn-primary mt-2">Create</button>
			</form>
		</div>
	);
};

export default CreateElection;

const years = ["2021", "2022", "2023", "2024"];
