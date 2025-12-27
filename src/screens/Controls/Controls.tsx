import {
	Environment,
	OrbitControls,
	PivotControls,
	PresentationControls,
} from '@react-three/drei';
import { Canvas, events } from '@react-three/fiber';
import { Lighthouse } from './components/Lighthouse';

const Controls = () => {
	return (
		<Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
			{/* <OrbitControls */}
			{/* 	enablePan={false} */}
			{/* 	maxPolarAngle={Math.PI / 2} */}
			{/* 	maxAzimuthAngle={Math.PI / 2} */}
			{/* 	minAzimuthAngle={-Math.PI / 2} */}
			{/* 	minDistance={3} */}
			{/* 	maxDistance={10} */}
			{/* /> */}
			{/* <PresentationControls */}
			{/* 	enabled */}
			{/* 	global={false} */}
			{/* 	cursor */}
			{/* 	snap={true} */}
			{/* 	speed={1} */}
			{/* 	zoom={1} */}
			{/* 	rotation={[0, 0, 0]} */}
			{/* 	polar={[0, Math.PI / 2]} */}
			{/* 	azimuth={[-Infinity, Infinity]} */}
			{/* > */}
			{/* 	<Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} /> */}
			{/* </PresentationControls> */}
			<PivotControls depthTest={false}>
				<Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />
			</PivotControls>

			<Environment preset="sunset" />
		</Canvas>
	);
};

export default Controls;
