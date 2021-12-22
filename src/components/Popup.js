import React from "react";
import classes from "./popup.module.css";
import fbImg from "../images/icon-facebook.svg";
import twitterImg from "../images/icon-twitter.svg";
import pinterestImg from "../images/icon-pinterest.svg";

const Popup = () => {
	return (
		<div className={classes.icon}>
			<p>SHARE</p>
			<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
				<img src={fbImg} alt="facebook icon" />
			</a>
			<a href="https://twitter.com/" target="_blank" rel="noreferrer">
				<img src={twitterImg} alt="twitter icon" />
			</a>
			<a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
				<img src={pinterestImg} alt="pinterest icon" />
			</a>
		</div>
	);
};

export default Popup;
