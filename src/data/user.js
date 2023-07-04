const INFO = {
	main: {
		title: "Amman Yusuf - CS Portfolio",
		name: "Amman Yusuf",
		email: "ammanyusuf85@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/ammanyusuf",
		linkedin: "https://www.linkedin.com/in/amman-yusuf-230a69177/",
		instagram: "https://www.instagram.com/ammany85/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},
	homepage: {
		title: "Computer scientist coding away ... 🧑‍💻🤺",
		description:
			"Hello. I am Amman and welcome to my website. My experience has touched nearly all aspects of computer science. " + 
			"I built scalable web applications, performed UI/UX work, analyzed, displayed and collected data, trained machine learning models, " +
			"handled distributed applications, and traversed  backend worked with ease (not so easy while doing it). I am a passionate learner and " + 
			"always look to tackle challenging problems. My curiosity  moves me from project to project, but I never fail to land on new challenges and " +
			"exciting problems to overcome as a computer scientist 🧑‍💻"
	},

	about: {
		title: "I am Amman, born in Italy 🇮🇹, currently living in Cowtown Canada 🇨🇦",
		description:
			"My interest in coding started in my high school robotics class where I coded up battle bots (with arduino brains) " +
			"to duke it out in a high stakes tournament. From there my passion in coding blossomed at the University of Calgary, where I graduated first class. " + 
			"Through my degree I took on various projects and internships. While varied, the common theme between my experience is challenging, interesting, and fulfilling work. " + 
			"I started developing websites (I still do) in my first role, which got me involved in AWS, which then got working with data in my data science role, which opened up my " +
			"interest in machine learning, which got me interested in computer vision and deep learning, which culminated (so far) in my final year thesis project in Federated Learning. " +
			"Apart from work experience, I still have a great interest in distributed applications and theory. One of my favourite courses from my degree was 'Introduction to Distributed Algorithms " + 
			"where we proved the correctness of distributed algorithms. It was a delight understanding how the algorithms work and the proofs at the end were no short of amazing.",
	},

	articles: {
		title: "I partake in blogging 🕵️",
		description:
			"Some throughts and ideas I like to type out. They are related to coding, personal projects, or other random stuff I find.",
	},

	projects: [
		{
			title: "CoverHelper",
			description:
				"In my job search post-graduation, I tagged along on a project that helped generate tailored cover letters based on the resume. Helped me (and some friends) get some interviews.",
			logo: "https://coverhelper.live/favicon/favicon-32x32.png",
			tools: "React, MUI, Firebase, Node.js, Express.js",
			linkText: "View Project",
			link: "https://coverhelper.live",
		},

		{
			title: "Federated Learning",
			description:
				"As part of my final year thesis project, I worked on a Federated Learning (FL) pipeline for the task of wheat head instance segmentation. It is essentially distributed machine learning on multiple machines. The appeal for FL is privacy and performance as the data is not directly shared between clients when training, only the model is shared. This work has not yet been published, but you can read more of it in my article section where I talk about FL and the work I completed.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			tools: "PyTorch, Deep Learning, U-Net, Clusters, Distributed Machine Learning",
			linkText: "View Project",
			link: "https://github.com/ammanyusuf",
		},

		{
			title: "Emotion in Motion - HRI",
			description:
				"Conducted an investigative user study on how the motion of a non-anthropomorphic robot can impact the emotion perceived in the interaction between the person and robot. This was a cool, research-based project where we worked with Toio robots. A more detailed exploration of the project can be viewed in the article section of my page.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			tools: "Human-Robot Interaction, HRI, Toio, JavaScript",
			linkText: "View Project",
			link: "https://github.com/ammanyusuf",
		},

		{
			title: "r/Piazza",
			description:
				"Following the 'r/Place' craze over at Reddit, our group thought it would be an interesting challenge in replicating this distributed systems project. It was. Quite challenging. Handling race conditions, consistency, and fault tolerance was part of the fun of this project.",
			logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
			tools: "React, NGINX, AWS, Node.js, Express.js, MongoDB",
			linkText: "View Project",
			link: "https://github.com/ammanyusuf/rPiazza",
		},

		{
			title: "Pet Finder Web Application",
			description:
				"Pet Finder was built as part of a web applications course. We designed a MERN stack web application with CRUD user functionality to help find lost pets. It was fun generating test data and had a great time with my team members.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			tools: "React, Node.js, Express.js, MongoDB, HTML, Bootstrap",
			linkText: "View Project",
			link: "https://github.com/ammanyusuf/pet-finder",
		},

		{
			title: "Canadian Cancer Society",
			description:
				"Designed 22 interactive data visualizations in D3 and Python exploring the impact of cancer in Canadian society, helping stakeholders bring about informed decisions on cancer policies. Fun project where I utilized principle component analysis (PCA) and regression techniques to analyze cleaned data.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			tools: "Python, D3.js, Tableau",
			linkText: "View Project",
			link: "https://observablehq.com/@ammanyusuf/ccs-2021",
		},


		{
			title: "WaitLess",
			description:
				"Designed a queueing application for University student advising through the use of UX/UI design principles. We then constructed a high fidelity, fully interactable user interface using Adobe XD." + 
				"After which we conducted research of end users using IDEO card methods and tested the look and feel of the interface though a Heuristic Evaluation.",
			logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
			tools: "AdobeXD, HCI, Figma",
			linkText: "View Project",
			link: "https://github.com/ammanyusuf/WaitLess",
		},


		{
			title: "Travollor",
			description:
				"Built a traveller management system that deals with tourists finding recommendations as provided by locals. " + 
				"Constructed the database schema to represent the interactions in the MySQL database. We then connected the logic of the application and the database with the ASP.NET framework.",
			logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
			tools: "MySQL, ASP.NET, Postman",
			linkText: "View Project",
			link: "https://github.com/ammanyusuf/Travollor",
		},

		{
			title: "Journal Web Application",
			description:
				"Developed a platform to manage the interaction between Authors, Reviewers, and Editors of journal. " + 
				"Utilized Spring Framework to manage the interaction between front-end and back-end development.",
			logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
			tools: "MySQL, Spring Boot Framework, HTML, CSS",
			linkText: "View Project",
			link: "https://github.com/ammanyusuf/Journalr",
		},
	],
};

export default INFO;
