import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							A slice of life (of projects) 🍕
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on various projects over my degree (and on). Each one was a learning experience
							where I gained valuable lessons. Each one I became a slightly better programmer.
							
							I started developing websites (I still do) in my first role, 
							which got me involved in AWS, which then got working with 
							data in my data science role, which opened up my
							interest in machine learning, which got me interested in computer 
							vision and deep learning, which culminated (so far) in my final 
							year thesis project in Federated Learning.

							Check out some of these projects and more by clicking on the project tile.
							Beware! Some of the earlier projects are from the begining of my career ;)
							<br></br>
							<br></br>
							I want to try my hand in contributing in open source projects. Once I do that,
							you'll be able to see it here.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
