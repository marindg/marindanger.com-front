import {
	coding,
	development,
	evaluation,
	excel,
	mobileApplication,
	css,
	docker,
	figma,
	git,
	html,
	javascript,
	mongodb,
	nodejs,
	reactjs,
	redux,
	tailwind,
	threejs,
	typescript,
	meta,
	shopify,
	starbucks,
	tesla,
} from "../assets";

export const homeSubText = "Developpeur Fullstack.";

export const services = [
	{
		text: "Developpeur web client",
		icon: coding,
	},
	{
		text: "Developpeur backend serveur",
		icon: development,
	},
	{
		text: "Developpeur d'application mobile",
		icon: mobileApplication,
	},
	{
		text: "Developpeur Excel",
		icon: excel,
	},
	{
		text: "Auditeur",
		icon: evaluation,
	},
];

export const skills = [
	{ name: "css", icon: css },
	{ name: "docker", icon: docker },
	{ name: "figma", icon: figma },
	{ name: "git", icon: git },
	{ name: "html", icon: html },
	{ name: "javascript", icon: javascript },
	{ name: "mongodb", icon: mongodb },
	{ name: "nodejs", icon: nodejs },
	{ name: "reactjs", icon: reactjs },
	{ name: "redux", icon: redux },
	{ name: "tailwind", icon: tailwind },
	{ name: "threejs", icon: threejs },
	{ name: "typescript", icon: typescript },
];

export const projects = [
	{
		_id: "640055ab214676a534a60211",
		name: "marindanger.com",
		shortDescription: "site personnel",
		longDescription:
			"Durant mon temps libre, j'ai développé mon propre site internet, du back au front en passant par le design.",
		image:
			"https://res.cloudinary.com/dn6nm16kn/image/upload/v1677743007/marindanger.com/marindanger.com_whmtl5.png",
		color: ["", ""],
		order: 1,
		startDate: "2023-01-01T00:00:00.000Z",
		endDate: "2023-03-01T00:00:00.000Z",
		client: {
			name: "https://marindanger.com",
			shortDescription: "site personnel",
			longDescription: "site personnel",
			image:
				"https://res.cloudinary.com/dn6nm16kn/image/upload/v1677743007/marindanger.com/marindanger.com_whmtl5.png",
			url: "marindanger.com",
			_id: "640055ab214676a534a60213",
		},
		technologies: [
			"react",
			"figma",
			"node.js",
			"noSQL",
			"redux-toolkit",
			"CSS",
		],
		visible: true,
		__v: 0,
	},
	{
		_id: "640687ed70daa3c237ff59c5",
		name: "Promantis",
		shortDescription: "Application Angular à réécrire en React",
		longDescription:
			"Dans le cadre d'une harmonisation de ses outils, EtherHealthcare, associée à Promantis a demandé à refaire l'outil Promantis en React tout en y apportant une amélioration UI/UX.",
		image:
			"https://res.cloudinary.com/dn6nm16kn/image/upload/v1678149470/marindanger.com/Promantis_rkbakh.png",
		color: ["", ""],
		order: 2,
		startDate: "2023-02-24T04:44:11.444Z",
		endDate: "2023-02-24T04:44:11.444Z",
		client: {
			name: "EtherHealthcare",
			shortDescription: "startup d'outils médicales numériques",
			longDescription: "startup d'outils médicales numériques",
			image:
				"https://res.cloudinary.com/dn6nm16kn/image/upload/v1678149470/marindanger.com/Promantis_rkbakh.png",
			url: "https://promantis.fr/",
			_id: "640687ed70daa3c237ff59c7",
		},
		technologies: [
			"react",
			"redux-saga",
			"typescript",
			"mui",
			"react-router-dom",
		],
		visible: true,
		__v: 0,
	},
	{
		_id: "6406883170daa3c237ff59cd",
		name: "Dashboard",
		shortDescription: "Application de gestion de patientelle pour les hôpitaux",
		longDescription:
			"Application desktop proposant la gestion et l'organisation des rendez-vous patients. L'outil propose un workflow de l'accueil du patient jusqu'à sa sortie.",
		image:
			"https://res.cloudinary.com/dn6nm16kn/image/upload/v1678149469/marindanger.com/etherHealthcare_pudr7a.png",
		color: ["", ""],
		order: 3,
		startDate: "2023-02-24T04:44:11.444Z",
		endDate: "2023-02-24T04:44:11.444Z",
		client: {
			name: "EtherHealthcare",
			shortDescription: "startup d'outils médicales numériques",
			longDescription: "startup d'outils médicales numériques",
			image:
				"https://res.cloudinary.com/dn6nm16kn/image/upload/v1678149469/marindanger.com/etherHealthcare_pudr7a.png",
			url: "https://ether.healthcare/",
			_id: "6406883170daa3c237ff59cf",
		},
		technologies: [
			"react",
			"figma",
			"redux-thunk",
			"typescript",
			"mui",
			"react-router-dom",
		],
		visible: true,
		__v: 0,
	},
	{
		_id: "6406888170daa3c237ff59d8",
		name: "GymTogether",
		shortDescription: "Application mobile de rencontres sportives",
		longDescription:
			"Application mobile dont le but est de répondre à la problématique de ne plus faire de sport seul en salle de gym.",
		image:
			"https://res.cloudinary.com/dn6nm16kn/image/upload/v1678149469/marindanger.com/GymTogether_ilzyt6.png",
		color: ["red", "blue"],
		order: 1,
		startDate: "2023-02-24T04:44:11.444Z",
		endDate: "2023-02-24T04:44:11.444Z",
		client: {
			name: "GymTogether",
			shortDescription: "projet de fin de formation",
			longDescription:
				"Dans le cadre de la formation la Capusle, nous avons du créer un projet afin de valider la formation",
			image:
				"https://res.cloudinary.com/dn6nm16kn/image/upload/v1678149469/marindanger.com/GymTogether_ilzyt6.png",
			url: "https://www.lacapsule.academy/",
			_id: "6406888170daa3c237ff59da",
		},
		technologies: [
			"react native",
			"Mongoose",
			"express",
			"socket.io",
			"jest",
			"expo",
			"redux",
			"native-base",
		],
		visible: true,
		__v: 0,
	},
];

export const experiences = [
	{
		education: false,
		title: "React.js Developer",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		education: true,
		title: "Fullstack developpeur",
		company_name: "La Capsule",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		education: false,
		title: "React Native Developer",
		company_name: "Tesla",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		education: false,
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		education: false,
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];
