import { Html, useGLTF } from '@react-three/drei';
import type { ThreeElements } from '@react-three/fiber';
import { useState, type ComponentProps } from 'react';

const sceneItems = [
	{
		model: 'Japanese Door.glb',
		position: [0, -0.88, -1.2],
		scale: 1.8,
		name: 'Hemnes',
		price: 300,
		labelOffset: [3, 6, -1],
	},
	{
		model: 'Counter Sink.glb',
		position: [1.3, 0, -2.8],
		name: 'Lillangen',
		price: 450,
		labelOffset: [-0.5, 1, 1.5],
	},
	{
		model: 'Chopping board.glb',
		position: [2.8, 1.9, -2.8],
		scale: 0.5,
		name: 'Skogsta',
		price: 25,
		labelOffset: [0, 1, 0],
	},
	{
		model: 'Fridge.glb',
		position: [-2.1, 0, -3],
		name: 'Lagan',
		price: 600,
		labelOffset: [-0.5, 3, 2],
	},
	{
		model: 'Table.glb',
		position: [-1, 0, 2],
		scale: [1, 1, 1],
		name: 'Lerhamn',
		price: 80,
		labelOffset: [1, 1, 0],
	},
	{
		model: 'Dango.glb',
		position: [-1.4, 1.64, 2],
		scale: 0.72,
		rotation: [0, Math.PI / 6, 0],
		name: 'Dango',
		price: 4,
		labelOffset: [-1, 0.5, 0],
	},
] satisfies Array<
	ThreeElements['group'] & {
		model: string;
		name: string;
		price: number;
		labelOffset: ComponentProps<typeof Html>['position'];
	}
>;

type ItemProps = {
	model: string;
} & ThreeElements['group'] &
	Omit<ThreeElements['primitive'], 'object'>;

const Item = ({
	model,
	position,
	rotation,
	name,
	price,
	labelOffset,
	...props
}: ItemProps) => {
	const gltf = useGLTF(`/models/${model}`);
	const [hidden, setHidden] = useState(false);

	return (
		<group position={position} rotation={rotation}>
			<primitive object={gltf.scene} {...props} />
			<Html
				occlude
				position={labelOffset}
				onOcclude={setHidden}
				transform
				scale={0.5}
			>
				<h1
					className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow mb-1 transition-opacity duration-500 ${hidden ? 'opacity-0' : 'opacity-100'}`}
				>
					{name}
				</h1>
				<p
					className={`text-base font-medium text-gray-800 bg-white/70 px-2 py-0.5 rounded shadow transition-opacity duration-500 ${hidden ? 'opacity-0' : 'opacity-100'}`}
				>
					{price}
				</p>
			</Html>
		</group>
	);
};

export const Experience = () => {
	return (
		<>
			{sceneItems.map((item, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <The rule is no needed here>
				<Item {...item} key={index} />
			))}
		</>
	);
};
