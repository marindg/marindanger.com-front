import "./resumeStyle.css";
import resumePDF from "../../assets/pdf/resume.pdf";

interface ResumeProps extends React.HTMLAttributes<HTMLDivElement> {}

const ResumeComponent = (props: ResumeProps) => {
	return (
		<div className={`${props.className} resume_button`}>
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
