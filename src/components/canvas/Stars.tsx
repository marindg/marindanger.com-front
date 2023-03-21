import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const Stars = (props: any) => {
	// const refStart = useRef() as React.MutableRefObject<HTMLInputElement>;
	const refStart = useRef<THREE.Points>(null);
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(4500), { radius: 0.7 })
	);

	useFrame((state, delta) => {
		if (refStart.current) {
			refStart.current.rotation.x -= delta / 10;
			refStart.current.rotation.y -= delta / 15;
		}
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={refStart}
				positions={sphere}
				stride={3}
				frustumCulled
				{...props}
			>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
