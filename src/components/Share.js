import React from "react";
import classes from "./share.module.css";
import avatarImg from "../images/avatar-michelle.jpg";
import { ReactComponent as Logo } from "../images/icon-share.svg";

const Share = ({ onClickHandler }) => {
	return (
		<section className={classes.share}>
			<div className={classes.avatar}>
				<img src={avatarImg} alt="profile" />
				<div className={classes.title}>
					<h3>Michelle Appleton</h3>
					<p>28 Jun 2020</p>
				</div>
			</div>

			<div className={classes.shareImg} onClick={onClickHandler}>
				<Logo fill="#6E8098" />
			</div>
		</section>
	);
};

export default Share;
