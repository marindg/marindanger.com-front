import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Cosmonaut = () => {
	// const computer = useGLTF("../../assets/gltf/cosmonaut/scene.gltf");
	const computer = useGLTF("./cosmonaut/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.8} groundColor="black" />
			<pointLight intensity={0.9} />

			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={0.65}
				position={[5, -80, 0]}
				rotation={[0, 4.5, 0]}
			/>
		</mesh>
	);
};

const CosmonautCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [-580, 200, 0], fov: 20 }}
			gl={{ preserveDrawingBuffer: true }}
			style={{ height: "45vh" }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					// minPolarAngle={Math.PI / 2}
				/>
				<Cosmonaut />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default CosmonautCanvas;
