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
			},
		},
	},
	plugins: [],
};
