/** biome-ignore-all lint/a11y/noStaticElementInteractions: <Rule not needed> */
import { useCursor, useKeyboardControls } from '@react-three/drei';
import { type ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import type { Mesh } from 'three';
import { Controls } from '../Events';

const MOVEMENT_SPEED = 0.05;

export const MoveableSphere = (props: ThreeElements['mesh']) => {
	const [hovered, setHovered] = useState(false);
	const [selected, setSelected] = useState(false);
	let color = hovered ? 'pink' : 'white';

	if (selected) {
		color = 'hotpink';
	}

	useCursor(hovered);

	const forwardPressed = useKeyboardControls(
		(state) => state[Controls.forward],
	);
	const backPressed = useKeyboardControls((state) => state[Controls.back]);
	const leftPressed = useKeyboardControls((state) => state[Controls.left]);
	const rightPressed = useKeyboardControls((state) => state[Controls.right]);

	const ref = useRef<Mesh>(null);

	useFrame(() => {
		if (!selected || !ref.current) {
			return;
		}

		if (forwardPressed) {
			ref.current.position.y += MOVEMENT_SPEED;
		}
		if (backPressed) {
			ref.current.position.y -= MOVEMENT_SPEED;
		}
		if (leftPressed) {
			ref.current.position.x -= MOVEMENT_SPEED;
		}
		if (rightPressed) {
			ref.current.position.x += MOVEMENT_SPEED;
		}
	});

	return (
		<mesh
			ref={ref}
			{...props}
			onPointerEnter={(e) => {
				e.stopPropagation();
				setHovered(true);
			}}
			onPointerLeave={(e) => {
				e.stopPropagation();
				setHovered(false);
			}}
			onClick={(e) => {
				e.stopPropagation();
				setSelected(!selected);
			}}
			onPointerMissed={() => setSelected(false)}
		>
			<sphereGeometry args={[0.5, 64, 64]} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};
