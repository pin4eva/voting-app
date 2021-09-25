import React from "react";
import CandidateTable, {
	CreateCandidate,
} from "../../components/dashbord/CandidateTable";
import CreateElection from "../../components/dashbord/CreateElection";
import ElectionTable from "../../components/dashbord/ElectionTable";

const AdminPage = () => {
	return (
		<div>
			<h1>Welcome Admin !</h1>

			<div className="d-flex justify-content-around">
				<button className="btn btn-primary">Create new Election</button>
				<button className="btn btn-primary ms-2">Register Candidate</button>
				<button className="btn btn-primary ms-2">View Candidate</button>
				<button className="btn btn-primary ms-2">View Election Results</button>
			</div>
			<div className="election-view mt-3">
				<h2>Elections</h2>
				<ElectionTable />
				<div className="mt-4">
					<h2>Add Election</h2>
					<CreateElection />
				</div>
			</div>

			<div className="election-view mt-3">
				<h2>View Candidates</h2>
				<CandidateTable />
				<div className="mt-4">
					<h2>Add Election</h2>
					<CreateCandidate />
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
