import axios from "axios";

export const getTodos = () => axios.get("/api/todos").them((res) => res.data);

export const postTodo = (todo) =>
	axios.post("/api/todo", { todo }).then((res) => res.data);
