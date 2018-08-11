import axios from "axios";
import { getUserId, getToken, logout } from "./storage";

const headers = { Authorization: getToken() };

export function login({ username, password }) {
	return axios.post(`http://localhost:3000/auth/login`, { username, password });
}

export function logOut() {
	logout();
	return axios.get(`http://localhost:3000/auth/logout`);
}

export function postComment({ postId, message }) {
	return axios({
		method: "POST",
		url: `http://localhost:3000/api/eco-plan/${postId}/comment`,
		headers,
		data: {
			message,
			userId: getUserId(),
		},
	});
}

export function fetchAll() {
	return axios.get("http://localhost:3000/api/eco-plan/");
}

export function fetchById({ id }) {
	return axios.get(`http://localhost:3000/api/eco-plan/${id}`);
}
