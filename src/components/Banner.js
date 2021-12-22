import React from "react";
import classes from "./banner.module.css";
import bannerImg from "../images/drawers.jpg";

const Banner = () => {
	return (
		<section className={classes.imgArea}>
			<img src={bannerImg} alt="banner" />
		</section>
	);
};

export default Banner;
