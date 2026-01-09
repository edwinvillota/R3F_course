import { useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Experience } from './components/Experience';

const CubeLoader = () => {
	return (
		<mesh>
			<boxGeometry />
			<meshNormalMaterial />
		</mesh>
	);
};

const LoadingScreen = () => {
	const { progress, active } = useProgress();

	if (!active) {
		return null;
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-400 to-purple-600 text-white font-sans">
			<svg width="64" height="64" viewBox="0 0 50 50" className="mb-6">
				<title>Loader</title>
				<circle
					cx="25"
					cy="25"
					r="20"
					fill="none"
					stroke="#fff"
					strokeWidth="5"
					strokeDasharray="90"
					strokeDashoffset={90 - (progress / 100) * 90}
					strokeLinecap="round"
					style={{
						transition: 'stroke-dashoffset 0.5s ease',
						opacity: 0.7,
					}}
				/>
			</svg>
			<div className="text-2xl font-semibold mb-2">Loading...</div>
			<div className="text-base opacity-80">{Math.round(progress)}%</div>
		</div>
	);
};

const Loading = () => {
	return (
		<>
			<LoadingScreen />
			<Canvas camera={{ position: [-4, 4, 12], fov: 30 }}>
				<Suspense fallback={<CubeLoader />}>
					<group>
						<Experience />
					</group>
				</Suspense>
			</Canvas>
		</>
	);
};

export default Loading;
