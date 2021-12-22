import React from "react";
import classes from "./shareVisible.module.css";
import fbImg from "../images/icon-facebook.svg";
import twitterImg from "../images/icon-twitter.svg";
import pinterestImg from "../images/icon-pinterest.svg";
import { ReactComponent as Logo } from "../images/icon-share.svg";

const ShareVisible = ({ onClickHandler }) => {
	return (
		<section className={classes.visible}>
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
			<div className={classes.shareImg} onClick={onClickHandler}>
				<Logo fill="white" />
			</div>
		</section>
	);
};

export default ShareVisible;
