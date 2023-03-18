import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
	const { progress } = useProgress();

	return (
		<Html className="flex w-full justify-center">
			<span className="canvas-load"></span>
			<p className="xl:text-4xl text-2xl text-tertiary font-[FiraSemiBold]">
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
};

export default Loader;
