import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader";
import React from "react";

const Ball = React.memo((props: any) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={1} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.8}>
				<icosahedronGeometry args={[1, 9]} />
				<meshStandardMaterial
					color="rgba(0, 0, 35, 1)"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1.15}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
});

const BallCanvas = ({ icon }: any) => {
	return (
		<Canvas
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
