import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Amazon Web Services</div>
							<div className="work-subtitle">
								Software Developer Intern
							</div>
							<div className="work-duration">Summer 2022</div>
						</div>

						<div className="work">
							<div className="work-title">Oncology Outcomes</div>
							<div className="work-subtitle">
								Data Science Intern
							</div>
							<div className="work-duration">Summer 2021 - Summer 2022</div>
						</div>
						<div className="work">
							<div className="work-title">Oncology Outcomes</div>
							<div className="work-subtitle">
								Research Assistant
							</div>
							<div className="work-duration">Fall 2022 - Summer 2023</div>
						</div>
						<div className="work">
							<div className="work-title">Vision Research Lab</div>
							<div className="work-subtitle">
								Research Assistant
							</div>
							<div className="work-duration">Fall 2022 - Spring 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
