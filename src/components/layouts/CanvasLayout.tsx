import { Link, Outlet } from 'react-router';

const CanvasLayout = () => {
	return (
		<main className="h-[100vh] w-[100vw] relative">
			<div className="flex w-12 absolute top-13 z-10 left-2 bg-black text-white p-1.5 w-max">
				<Link to={'/'} className="text-xs">
					{'<- Go back'}
				</Link>
			</div>
			<Outlet />
		</main>
	);
};

export default CanvasLayout;
