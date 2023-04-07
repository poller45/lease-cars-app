import React from "react";
import Header from "../components/page/Header";
import Main from "../components/page/Main";
import Footer from "../components/page/Footer";
const MainPage = () => {
	return (
		<div class="wrapper">
			<Header headerClass={"header-main"} />
			<Main />
			<Footer />
		</div>
	);
};

export default MainPage;
