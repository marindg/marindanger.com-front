/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "rgba(71, 109, 129, 1)",
				secondary: "rgba(57, 159, 210, 1)",
				tertiary: "rgba(225, 235, 251, 1)",
				bluedark: "rgba(45, 56, 138, 1)",
				greylight: "rgba(43, 57, 62, 1)",
			},
			boxShadow: {
				nav: "0px 5px 15px 0px rgba(0, 0, 0, 0.7)",
				navMobile: "-5px 5px 15px 0px rgba(0, 0, 0, 0.7);",
				card: "0px 35px 120px -15px rgba(0, 0, 0, 0.7)",
				cardBlue: "0px 35px 120px -15px rgba(0, 0, 35, 0.7)",
				cardLight: "0px 5px 10px -5px rgba(0, 0, 35, 0.7)",
			},
		},

		fontFamily: {
			fira: ["FiraRegular", "FiraLight", "FiraMedium", "FiraSemiBold"],
		},
	},
	plugins: [],
};
