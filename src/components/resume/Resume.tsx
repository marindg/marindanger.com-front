import "./resumeStyle.css";
import resumePDF from "../../assets/pdf/resume.pdf";

const ResumeComponent = () => {
	return (
		<div className="resume_button">
			<a
				className="resume_text"
				href={resumePDF}
				target="_blank"
				rel="noopener noreferrer"
			>
				Curriculum
			</a>
		</div>
	);
};
export default ResumeComponent;
