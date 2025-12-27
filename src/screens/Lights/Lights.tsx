import {
	SpotLight as DreiSpotLight,
	OrbitControls,
	useHelper,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import * as THREE from 'three';

const PointLight = () => {
	const ref = useRef(null);
	useHelper(ref as any, THREE.PointLightHelper, 0.5, 'red');
	const { color, distance, decay, intensity } = useControls({
		color: '#7f58ff',
		distance: 3,
		decay: 2,
		intensity: 0.5,
	});

	return (
		<pointLight
			ref={ref}
			position={[1, 1, 1]}
			intensity={intensity}
			distance={distance}
			decay={decay}
			color={color}
		/>
	);
};

const HemisphereLight = () => {
	const ref = useRef(null);
	useHelper(ref as any, THREE.HemisphereLightHelper, 0.5, 'red');
	const controls = useControls({
		color: 'deepskyblue',
		groundColor: 'sandybrown',
	});

	return <hemisphereLight ref={ref} {...controls} />;
};

const SpothLight = () => {
	const ref = useRef(null);
	useHelper(ref as any, THREE.SpotLightHelper, 'red');
	const controls = useControls({
		color: '#876ae5',
		distance: 6,
		attenuation: 2.2,
		angle: 1,
		anglePower: 1,
	});

	return <DreiSpotLight ref={ref} {...controls} />;
};

const Lights = () => {
	return (
		<Canvas camera={{ position: [0, 3, 3] }}>
			<OrbitControls />
			{/* <PointLight /> */}
			{/* <HemisphereLight /> */}
			<SpothLight />

			{/* <ambientLight intensity={0.5} color="royalblue" /> */}
			{/* <directionalLight intensity={0.5} position={[3, 3, 3]} color="red" /> */}
			{/* <directionalLight intensity={0.5} position={[0, 3, -3]} color="green" /> */}
			{/* <directionalLight intensity={0.5} position={[-3, 3, 3]} color="blue" /> */}

			<mesh rotation-y={Math.PI / 4}>
				<boxGeometry />
				<meshStandardMaterial color="white" roughness={1} metalness={0} />
			</mesh>

			<mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
				<planeGeometry args={[5, 5]} />
				<meshPhysicalMaterial
					color="white"
					clearcoat={0.5}
					reflectivity={0.8}
				/>
			</mesh>
		</Canvas>
	);
};

export default Lights;
