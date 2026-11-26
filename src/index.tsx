import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { RootLayout } from "./components/RootLayout";

import "./App.css";

const container = document.getElementById("app");

if (container) {
	const root = createRoot(container);
	root.render(
		<StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<RootLayout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</StrictMode>,
	);
}
