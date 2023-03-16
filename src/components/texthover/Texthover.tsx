// import "./TexthoverStyle.css";
import "./texthoverStyle.scss";

interface texthoverProps extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
}

const TexthoverComponent = (props: texthoverProps) => {
	const words = props.text.trim().split(" ");

	const getSpan = (word: string) => {
		const letters = word.split("");

		return letters.map((letter: string, index: number) => {
			return <span className="letter">{letter}</span>;
		});
	};

	return (
		<p {...props}>
			{words.map((word: string, index: number) => {
				return (
					<span className="word" key={index}>
						{getSpan(word)}
						&nbsp;
					</span>
				);
			})}
		</p>
	);
};
export default TexthoverComponent;
