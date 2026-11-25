import "../App.css";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const RootLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};
