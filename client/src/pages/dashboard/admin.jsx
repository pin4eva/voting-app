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
