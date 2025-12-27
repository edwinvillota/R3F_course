import { useTexture, useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';
import { roughness } from 'three/tsl';

export const Experience = () => {
	// const texture = useTexture('/textures/PavingStones130_1K_Color.jpg');
	// texture.wrapS = THREE.RepeatWrapping;
	// texture.wrapT = THREE.RepeatWrapping;
	// texture.repeat.set(3, 3);

	// const texture = useTexture({
	// 	map: '/textures/PavingStones130_1K_Color.jpg',
	// 	normalMap: '/textures/PavingStones130_1K_NormalGL.jpg',
	// 	roughnessMap: '/textures/PavingStones130_1K_Roughness.jpg',
	// 	aoMap: '/textures/PavingStones130_1K_AmbientOcclusion.jpg',
	// });

	// const texture = useTexture('/textures/matcapTexture.png');

	const texture = useVideoTexture('/textures/spongebob-squarepants.mp4');

	return (
		<>
			<mesh>
				<boxGeometry />
				{/* <meshStandardMaterial {...texture} /> */}
				{/* <meshMatcapMaterial matcap={texture} /> */}
				<meshBasicMaterial map={texture} />
			</mesh>
		</>
	);
};
