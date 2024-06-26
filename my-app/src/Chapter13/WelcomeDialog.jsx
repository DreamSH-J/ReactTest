import React from "react";
import FancyBorder from './FancyBorder';
import Dialog from './Dialog';

function WelcomeDialog(props){
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				어서오세요
			</h1>
			<p className="Dialog-message">
				사이트에 방문하신 것을 환영!
			</p>
		</FancyBorder>
	);
}
export default WelcomeDialog;