/** biome-ignore-all lint/suspicious/noExplicitAny: <This is a 3D model for demo purposes> */
import { useGLTF } from '@react-three/drei';

export function Lighthouse(props: any) {
	const { nodes, materials } = useGLTF('/models/Lighthouse.glb') as any;

	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Lighthouse.geometry}
				material={materials.lambert2SG}
			/>
		</group>
	);
}

useGLTF.preload('/models/Lighthouse.glb');
