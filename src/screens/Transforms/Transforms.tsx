import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const Transforms = () => {
	return (
		<Canvas camera={{ position: [0, 3, 8] }}>
			{/* Lighing */}
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 3, 5]} intensity={0.5} />

			{/* Objects */}
			<mesh
				position={[-2, 0, 0]}
				scale={[1, 0.5, 0.5]}
				rotation={[THREE.MathUtils.degToRad(45), 0, 0]}
			>
				<boxGeometry />
				<meshStandardMaterial color="red" />
			</mesh>
			<mesh scale-y={4}>
				<boxGeometry />
				<meshStandardMaterial color="blue" />
			</mesh>
			<mesh position={[2, 0, 0]} rotation-z={Math.PI / 4}>
				<boxGeometry />
				<meshStandardMaterial color="green" />
			</mesh>
		</Canvas>
	);
};

export default Transforms;
