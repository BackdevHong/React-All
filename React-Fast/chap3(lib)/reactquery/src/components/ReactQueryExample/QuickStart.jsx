/* eslint-disable array-callback-return */
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, postTodo } from "./my-api";

export default function QuickStart() {
	const queryClient = useQueryClient();

	const query = useQuery("todos", getTodos);

	const mutation = useMutation(postTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries("todos");
		},
	});

	if (query.isLoading) {
		return "is Loading...";
	}

	if (query.error) {
		return "Error!";
	}

	return (
		<div>
			<ul>
				{query.data.map((todo) => {
					<li key={todo.id}>{todo.title}</li>;
				})}
			</ul>
		</div>
	);
}
