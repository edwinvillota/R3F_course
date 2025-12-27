import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import {
	type Camera,
	Canvas,
	type ThreeElements,
	useFrame,
	useThree,
} from '@react-three/fiber';
import { button, useControls } from 'leva';
import { useRef } from 'react';
import { type Mesh, PerspectiveCamera } from 'three';

type CubeProps = ThreeElements['mesh'];

const Cube = (props: CubeProps) => {
	const camera: Camera = useThree((state) => state.camera);

	const updateFov = (fov: number) => {
		if (camera instanceof PerspectiveCamera) {
			camera.fov = fov;
			camera.updateProjectionMatrix();
		}
	};

	useControls('FOV', {
		smallFov: button(() => updateFov(20)),
		normalFov: button(() => updateFov(42)),
		bigFov: button(() => updateFov(60)),
		hugeFov: button(() => updateFov(102)),
	});

	const ref = useRef<Mesh>(null);

	const { speed } = useControls('SPEED', {
		speed: {
			value: 0,
			min: -12,
			max: 12,
		},
	});

	useFrame((_state, delta) => {
		if (ref.current) {
			ref.current.rotation.y += speed * delta;
		}
	});

	return (
		<mesh {...props} ref={ref}>
			<boxGeometry />
			<meshStandardMaterial color="white" />
		</mesh>
	);
};

const R3FHooks = () => {
	return (
		<Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
			<OrbitControls />
			<Cube rotation-y={Math.PI / 4} />
			<ContactShadows
				position-y={-2}
				opacity={0.5}
				blur={2}
				color="pink"
				scale={10}
			/>
			<Environment preset="city" />
		</Canvas>
	);
};

export default R3FHooks;
