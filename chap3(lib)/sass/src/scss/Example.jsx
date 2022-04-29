/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Example.scss";

export default function Example() {
	return (
		<>
			<div>
				<p>Example</p>
				<p className="base">Example</p>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">안녕</a>
					</li>
					<li>
						<a href="#">인평</a>
					</li>
					<li>
						<a href="#">리엑트</a>
					</li>
					<li>
						<a href="#">짱짱맨</a>
					</li>
				</ul>
			</nav>
			<div>
				<p className="info">Example</p>
				<p className="test">Example</p>
				<p className="success">Example</p>
				<p className="success2">성공!</p>
				<p className="warning">경고!</p>
				<p className="error">에러!</p>
			</div>
		</>
	);
}
