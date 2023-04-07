import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/app/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./app/layouts/MainPage";
import CarsPage from "./app/layouts/CarsPage";
import ContactsPage from "./app/layouts/ContactsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "contacts",
				element: <ContactsPage />,
			},
			{
				path: "cars",
				element: <CarsPage />,
			},
			{
				path: "/",
				element: <MainPage />,
			},
			// {
			// 	path: "/cars/:carsId",
			// 	element: <Users />,
			// },
		],
	},
]);
root.render(<RouterProvider router={router} />);
