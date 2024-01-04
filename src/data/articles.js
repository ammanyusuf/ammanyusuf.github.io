import React from "react";

function article_1() {
	return {
		date: "Jan 4 2024",
		title: "Federated Learning and its Applications",
		description:
			"Federated Learning is a growing field in AI, where it boasts potential benefits in privacy and performance.",
		keywords: [
			"The Benefits of Federated Learning",
			"Federated Learning",
			"Amman",
			"Amman Y",
			"Amman Yusuf",
			"Machine Learning",
			"Computer Vision",
			"Deep Learning",
			"PyTorch"
		],
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					<section>
						<h2>Key Takeaways</h2>
						<p>
						This project was an immersive exploration of advanced concepts in computer science, encompassing deep learning, computer vision, federated learning, and machine learning. The implementation and evaluation of a federated learning pipeline, employing a U-Net model for precise image segmentation, showcased an understanding of cutting-edge technologies. I utilized ARC remote server training to train the models in a reasonable amount of time. I gained additional experience in image processing and transformation techniques, highlighting the significance of preprocessing steps in enhancing model performance. I further engaged in a comprehensive literature review which improved my research techniques.
						</p>
					</section>
					<section>
					<section>
						<h2>Paper</h2>
						<p>
							You can find all citations and references used in this project in the draft manuscript available for download:
						</p>
						<div className="articles-image-container">
							<a href={"../articles/FL_draft_manuscript.pdf"} download="FL_Amman_Yusuf.pdf">
								Download draft manuscript
							</a>
						</div>
					</section>
					<h2>Abstract:</h2>
					
					<p>
						In my final year thesis project at the University of Calgary, we tackled the challenges associated with centralized learning in wheat head instance segmentation, specifically addressing privacy concerns and computational limitations that come with centralized learning. The project aim was to enhance the accuracy and efficiency of this agricultural process by leveraging federated learning (FL), an approach that improves data privacy and computational limitations posed by centralized learning.
					</p>
					<div className="articles-image-container">
						<div className="articles-image-wrapper">
						<img
							src="../articles/FL Representation.drawio.png"
							alt="Federated learning representation diagram with servers."
							className="articles-image"
						/>
						</div>
					</div>
					</section>

					<section>
					<h2>Introduction:</h2>
					<p>
						Centralized learning, a conventional method storing data on a central server for analysis, faces significant hurdles, especially in sensitive domains like healthcare and agriculture. The privacy, security, and regulatory challenges associated with handling personal health information (PHI) in the medical field are mirrored in the agricultural sector, where farmers are reluctant to share critical data. These concerns hinder the development of large-scale datasets necessary for training machine learning models.
					</p>
					</section>

					<section>
					<h2>Federated Learning Solution:</h2>
					<p>
						Federated learning emerged as a solution to these challenges, aiming to overcome privacy and computational limitations posed by centralized learning. Our project focused on implementing and evaluating a federated learning pipeline for wheat head instance segmentation. The pipeline, designed to be model-agnostic, utilized a modified U-Net model for comparison across clients.
					</p>
					<div className="articles-image-container">
						<div className="articles-image-wrapper">
						<img
							src="../articles/unet-architecture.png"
							alt="The U-Net model architecture."
							className="articles-image"
						/>
						</div>
					</div>
					</section>

					<section>
					<h2>Comparison of Approaches:</h2>
					<p>
						The study delved into a comparative analysis of two federated learning approaches—FedAvg and FedProx—applied to wheat head instance segmentation (all citations and models are included in the paper, which you can download above). The evaluation criteria included Intersection Over Union and a Dice score, with a traditional centralized learning baseline for reference. Wheat head images from 18 different institutions were sourced from the Global Wheat Head Dataset.
					</p>
					<div className="articles-image-container">
						<div className="articles-image-wrapper">
						<img
							src="../articles/segmented-examples.png"
							alt="Wheat head segmented examples."
							className="articles-image"
						/>
						</div>
					</div>
					</section>

					<section>
					<h2>Results:</h2>
					<p>
						The findings revealed that both federated learning approaches performed well, closely matching the results of the centralized approach across selected domains. Notably, FedAvg achieved an impressive Dice score of 0.9355 on the test dataset, surpassing the centralized approach with a score of 0.8904. The study identified FedProx as the more effective federated learning approach, particularly in scenarios with high data variability.
					</p>
					</section>

					<section>
					<h2>Conclusion:</h2>
					<p>
						This project demonstrates the transformative potential of federated learning in overcoming the challenges associated with centralized learning in wheat head instance segmentation. By ensuring data privacy and computational efficiency, our approach opens new avenues for applying machine learning in agriculture, paving the way for improved global food production.
					</p>
					</section>

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
		date: "4 Jan 2024",
		title: "Emotinon in Motion",
		description:
			"Can a robot feel? Not yet anyway. But how can a robot effectively display emotion? We'll be exploring this in the following paragraphs, including some of the work I did in helping to answer this question.",
		style: ``,
		keywords: [
			"Human-Robot Interaction",
			"Non-anthropomorphic",
			"UI",
			"UX",
			"User interface",
			"User experience",
			"User elicitation study",
			"User study",
			"Elicitation study",
			"Robot",
			"Emotion",
			"Amman",
			"Amman Y",
			"Amman Yusuf",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<section>
						<h2>Key Takeaways</h2>
						<p>
							In this project, we delved into the captivating intersection of robotics, emotions, and human-robot interaction. Conducting a user elicitation study with a Sony Toio robot, we explored user-defined movements for non-anthropomorphic robots, navigating the intricate challenge of conveying emotions effectively. This exploration showcased my proficiency in UI and UX, as we crafted a study that engaged participants in ideation sessions, generating user-defined motions for emotional expression. The project underscored my skills in conducting user studies, revealing valuable insights into emotional perception and preferences. This hands-on experience broadened my skill set, merging technical expertise with a deep understanding of user needs, ultimately enhancing my capabilities in designing emotionally expressive non-anthropomorphic robots.
						</p>
					</section>
					<section>
					<section>
						<h2>Paper</h2>
						<p>
							You can find all citations and references used in this project in the draft manuscript available for download:
						</p>
						<div className="articles-image-container">
							<a href={"../articles/Emotion_In_Motion_manuscript.pdf"} download="Emotion_In_Motion_Amman_Yusuf.pdf">
								Download draft manuscript
							</a>
						</div>
					</section>
					<h2>Abstract:</h2>
					
					<p>
						The challenge of human-robot communication in non-anthropomorphic robots prompted an in-depth exploration into user-defined movements. This elicitation study, conducted with a Sony Toio robot controlled by hand gestures, aimed to advance our understanding of the human perception of emotion conveyed by such robots. Analyzing participants' ideation, we identified general movement patterns and generated a set of user-defined motions for emotional expression. The outcomes of this study provide crucial insights for the development of non-anthropomorphic robots in social settings and the improvement of human-robot interactions through motion-based emotional expression.					</p>
					<div className="articles-image-container">
						<div className="articles-image-wrapper">
						<img
							src="../articles/teaser-figure.png"
							alt="A teaser figure of the emotino in motion elicitation study."
							className="articles-image"
						/>
						</div>
					</div>
					</section>

					<section>
					<h2>Introduction:</h2>
					<p>
						Recent advancements in the field of human-robot interaction underscore the importance of developing emotionally expressive robots. Emotions play a vital role in human communication, and their expression in robots facilitates natural interaction while conveying the robot's internal state. However, non-anthropomorphic robots, lacking human-like physical features for expression, face a unique challenge in effectively conveying emotions. This study focuses on motion as a primary modality for communication, acknowledging the impact of robot movements on human perception. Our goal is to bridge the gap in emotional communication with non-anthropomorphic robots by exploring the connection between user-defined movements and the emotions conveyed.
					</p>
					</section>

					<section>
					<h2>Methodology:</h2>
					<p>
						Participants were tasked with generating movements for eight different emotions using a small non-anthropomorphic robot (Sony Toio) controlled by hand. Originally intended for touch-screen control, an expert recommendation led to the adoption of hand control for improved emotional modeling. User-defined motions and key metrics, including distance and speed, were recorded and analyzed to extract essential features corresponding to each emotion. Plutchik's model for emotional classification guided the selection of emotions, expanding beyond traditional approaches using Ekman's six basic emotions.					</p>
					<div className="articles-image-container">
						<div className="articles-image-wrapper">
						<img
							src="../articles/plutchik-wheel.png"
							alt="The Plutchik wheel emotion representation, conveying different emotions we tried to model."
							className="articles-image"
						/>
						</div>
					</div>
					</section>

					<section>
					<h2>Results:</h2>
					<p>
						The analysis of participant-generated movements yielded valuable insights into emotional perception conveyed by non-anthropomorphic robots. Distinct patterns and features associated with each emotion were identified, contributing to the development of emotionally expressive robots. The study's findings hold significant implications for understanding user preferences in designing motion-based emotional expressions. The resulting emotions were modeled in the following diagram:
					</p>
					<div className="articles-image-container">
						<div className="articles-image-wrapper">
						<img
							src="../articles/User-defined_motions.png"
							alt="Our user defined motions results."
							className="articles-image"
						/>
						</div>
					</div>
					</section>
					<section>
					<h2>Conclusion:</h2>
					<p>
						Our project presents an exploration into the intricate world of human-robot emotional communication. By uncovering the relationships between movements and emotions, we aim to enhance communication between individuals and non-anthropomorphic robots. The identified user preferences and emotional perceptions offer a foundation for designing more emotionally expressive robots in social settings.
					</p>
					</section>
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
