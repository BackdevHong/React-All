import React from "react";

export default function list() {
	// const numbers = [1, 2, 3, 4, 5];
	// return (
	// 	<div>
	// 		<ul>
	// 			{numbers.map((item) => (
	// 				<li key={item.toString()}>{item}</li>
	// 			))}
	// 		</ul>
	// 	</div>
	// );

	const todos = [
		{
			id: 1,
			value: "집가기",
		},
		{
			id: 2,
			value: "회사가기",
		},
		{
			id: 3,
			value: "밥먹기",
		},
		{
			id: 4,
			value: "리엑트 공부하기",
		},
	];

	const Item = (props) => {
		return <li>{props.value}</li>;
	};

	const TodoLists = todos.map((todo) => <Item key={todo.id} {...todo} />);

	return <>{TodoLists}</>;
}
