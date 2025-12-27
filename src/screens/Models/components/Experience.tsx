import { useFBX, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Fish } from './Fish';

export const Experience = () => {
	// const { scene } = useGLTF('/models/Fish.gltf');
	// const dino = useFBX('/models/Dino.fbx');

	//const model = useLoader(GLTFLoader, '/models/Fish.gltf');

	return (
		<>
			<ambientLight intensity={1} />

			<Fish />
			{/* <primitive object={scene} /> */}
			{/* <primitive object={dino} scale={0.01} position-x={-3} /> */}
		</>
	);
};
