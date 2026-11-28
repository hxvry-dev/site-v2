import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const RootLayout = () => {
	return (
		<div>
			<Navbar />
            <Outlet />
            <Footer />
		</div>
	);
};
