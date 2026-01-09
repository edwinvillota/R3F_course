import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { foodItems } from '../Scroll';

export const Interface = () => {
	const introductionRef = useRef<HTMLElement>(null);
	const scrollData = useScroll();

	useFrame(() => {
		if (introductionRef.current) {
			introductionRef.current.style.opacity = String(
				1 - scrollData.range(0, 0.2),
			);
		}
	});

	return (
		<>
			<section
				className="w-[100vw] h-[100vh] grid place-items-center"
				ref={introductionRef}
			>
				<div className="pt-[25vh]">
					<p className="text-2xl text-center leading-12">
						Welcome to Panda Sushi, scroll down to discover our delicious
						dishes!
						<br />
					</p>
				</div>
			</section>
			{foodItems.map((foodItem) => (
				<section
					key={`${foodItem.name}-section`}
					className="w-[100vw] h-[100vh] grid place-items-center"
				>
					<div className="bg-white/25 backdrop-blur-sm rounded-lg p-8 w-[420px] max-w-full">
						<h2>{foodItem.name}</h2>
						<p>{foodItem.description}</p>
					</div>
				</section>
			))}
		</>
	);
};
