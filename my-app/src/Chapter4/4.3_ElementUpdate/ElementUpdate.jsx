import React from "react";

function tick() {
	const element = (
		<div>
			<h1>안녕, 리액트!</h1>
			<h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
		</div>
	);
	
	const root = ReactDOM.createRoot(document.getElementId('root'));
	root.render(element);
}

setInterval(tick, 1000);

export default ElementUpdate;