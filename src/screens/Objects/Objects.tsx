import { Canvas } from '@react-three/fiber';

const Objects = () => {
	return (
		<Canvas camera={{ position: [3, 3, 3] }}>
			<mesh>
				<torusKnotGeometry args={[1, 0.3, 200, 32]} />
				<meshToonMaterial color={0x00ff00} />
				<ambientLight intensity={0.5} />
				<directionalLight position={[0, 0, 3]} intensity={1} />
				<directionalLight position={[0, 3, 3]} intensity={0.5} />
			</mesh>
		</Canvas>
	);
};

export default Objects;
