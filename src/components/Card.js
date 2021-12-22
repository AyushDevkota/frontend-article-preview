import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Description from "./Description";
import Share from "./Share";
import ShareVisible from "./ShareVisible";
import classes from "./card.module.css";
import Popup from "./Popup";

const Card = () => {
	const [showShare, setShowShare] = useState(true);
	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowSize(window.innerWidth);

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleHandler = () => setShowShare(!showShare);

	return (
		<main className={classes.card}>
			<Banner />
			<Description />
			{windowSize < 1024 && showShare ? (
				<ShareVisible onClickHandler={toggleHandler} />
			) : (
				<Share onClickHandler={toggleHandler} />
			)}
			{windowSize > 1024 && !showShare && <Popup />}
		</main>
	);
};

export default Card;
