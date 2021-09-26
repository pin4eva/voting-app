import React from "react";
import { Link } from "react-router-dom";
import contest1 from "../assets/contestant 1.png";
import contest2 from "../assets/contestant 2.png";

const Firstbody = () => {
	// const [show, setShow] = useState(false);
	return (
		<div className="grid container1">
			{/* <LoginComp show={show} onHide={() => setShow(false)} /> */}
			<div className="g-col-6 box1 ">
				<h1 className="display-6 disPlay">
					Vote Your Favourite <br />
					Instructors <b>Here</b>{" "}
				</h1>

				<p className="h4 Ph1">
					Our design projects are fresh and simple and will <br />
					benefit your business greatly. Learn more about our work!
				</p>

				<Link to="/#vote">
					<button type="button" className="btn btn-warning d-btn">
						VOTE NOW
					</button>
				</Link>
				<Link
					to="/login"
					type="button"
					className="text-uppercase btn btn-outline-secondary d-btn2"
				>
					Login to VOTE
				</Link>
			</div>

			<div className="g-col-6 box2">
				<div className="container d-container">
					<div className="row d-row">
						<div className="col-6 col-md-4 dcol6">
							<img
								src={contest1}
								alt="..."
								className="rounded-circle d-image"
							/>
						</div>
						<div className="col-6 col-md-4 d-col6">
							<p className="card-text d-text">
								<b>Peter Akaliro</b> <br /> Web development
							</p>
						</div>
						<div className="col-6 col-md-4 d-bio">
							<p>
								Mr. Peter Akaliro <br /> is a Full Stack web developer.{" "}
							</p>
							{/* <div className="progress d-progress">
                  <div className="progress-bar" role="progressbar" style={{width: 60}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">20 vote</div>
                </div>
                <button type="button" className="btn btn-warning d-btn3 d-bt">Vote</button> */}
						</div>
					</div>
				</div>

				<div className="container d-container2">
					<div className="row d-row2">
						<div className="col-6 col-md-4 dcol6">
							<img
								src={contest2}
								className="rounded-circle d-image"
								alt="..."
							/>
						</div>
						<div className="col-6 col-md-4 d-col6">
							<p className="card-text d-text">
								<b>Charles Clifford</b> <br /> UI/UX Designer
							</p>
						</div>
						<div className="col-6 col-md-4 d-bio">
							<p>
								Mr. Peter Akaliro <br /> is a Full Stack web developer.
							</p>
							{/* <div className="progress d-progress2">
                  <div className="progress-bar" role="progressbar" style={{width: 90}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50 vote</div>
                </div>
                <button type="button" className="btn btn-warning d-btn3">Vote</button> */}
						</div>
					</div>
				</div>

				<div className="container d-container .d-container3">
					<div className="row d-row3">
						<div className="col-6 col-md-4 dcol6">
							<img
								src={contest1}
								alt="..."
								className="rounded-circle d-image"
							/>
						</div>
						<div className="col-6 col-md-4 d-col6 d-P">
							<p className="card-text d-text">
								<b>Peter Akaliro</b> <br /> Web development
							</p>
						</div>
						<div className="col-6 col-md-4 d-bio">
							<p>
								Mr. Peter Akaliro <br /> is a Full Stack web developer.{" "}
							</p>
							{/* <div className="progress d-progress d-pro3">
                  <div className="progress-bar" role="progressbar" style={{width: 60}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">20 vote</div>
                </div>
                <button type="button" className="btn btn-warning d-btn3">Vote</button> */}
						</div>
					</div>
				</div>

				{/* <div className="container d-container3">

<div className="row d-row3">
              <div className="col-6 col-md-4 dcol6">
                <img src={contest3} className="rounded-circle d-image1" alt="..." />
              </div>
              <div className="col-6 col-md-4 d-col6">
                <p className="card-text d-text"><b>Duff Caleb</b> <br /> Networking Instructor</p>
              </div>
              <div className="col-6 col-md-4">
                <div className="progress d-progress3">
                  <div className="progress-bar" role="progressbar" style={{width:190}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80 vote</div>
                </div>
                <button type="button" className="btn btn-warning d-btn3">Vote</button>
              </div>
            </div>

</div> */}
			</div>
		</div>
	);
};

export default Firstbody;
