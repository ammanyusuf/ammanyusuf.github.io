import React from "react";

function article_1() {
	return {
		date: "1 May 2023",
		title: "Federated Learning and its Applications",
		description:
			"Federated Learning is a growing field in AI, where it boasts potential benefits in privacy and performance.",
		keywords: [
			"The Benefits of Federated Learning",
			"Federated Learning",
			"Amman",
			"Amman Y",
			"Amman Yusuf",
		],
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Federated Learning is a growing field in AI, where it boasts potential benefits in privacy and performance.
					</div>
					<br></br>
					<div className="paragraph">Person at work 👷 ... check back later 😁 </div>
					<img
						src="../freetze.jpg"
						alt="freetze"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "1 May 2023",
		title: "Emotinon in Motion",
		description:
			"Can a robot feel? Not yet anyway. But how can a robot effectively display emotion? We'll be exploring this in the following paragraphs, including some of the work I did in helping to answer this question.",
		style: ``,
		keywords: [
			"Human-Robot Interaction",
			"Non-anthropomorphic",
			"Robot",
			"Emotion",
			"Amman",
			"Amman Y",
			"Amman Yusuf",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Can a robot feel? Not yet anyway. But how can a robot effectively display emotion? We'll be exploring this in the following paragraphs, including some of the work I did in helping to answer this question. 
					</div>
					<br></br>
					<div className="paragraph">Person at work 👷 ... check back later 😁 </div>
					<img
						src="../freetze.jpg"
						alt="freetze"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
