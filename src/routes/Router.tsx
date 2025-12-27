import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '@/screens/Home';
import CanvasLayout from '../components/layouts/CanvasLayout';
import Camera from '../screens/Camera/Camera';
import Controls from '../screens/Controls/Controls';
import Debug from '../screens/Debug/Debug';
import Events from '../screens/Events/Events';
import HTML from '../screens/HTML/HTML';
import Lights from '../screens/Lights/Lights';
import Models from '../screens/Models/Models';
import Objects from '../screens/Objects/Objects';
import R3FHooks from '../screens/R3FHooks/R3FHooks';
import Shadows from '../screens/Shadows/Shadows';
import Text from '../screens/Text/Text';
import Textures from '../screens/Textures/Textures';
import Transforms from '../screens/Transforms/Transforms';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="fundamentals" element={<CanvasLayout />}>
					<Route path="objects" element={<Objects />} />
					<Route path="transforms" element={<Transforms />} />
					<Route path="camera" element={<Camera />} />
					<Route path="debug" element={<Debug />} />
					<Route path="lights" element={<Lights />} />
					<Route path="shadows" element={<Shadows />} />
				</Route>
				<Route path="core" element={<CanvasLayout />}>
					<Route path="r3f-hooks" element={<R3FHooks />} />
					<Route path="controls" element={<Controls />} />
					<Route path="events" element={<Events />} />
					<Route path="models" element={<Models />} />
					<Route path="textures" element={<Textures />} />
					<Route path="html" element={<HTML />} />
					<Route path="text" element={<Text />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
