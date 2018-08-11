export function saveUser({ token, user }) {
	localStorage.setItem("token", token);
	localStorage.setItem("user", JSON.stringify(user));
}

export function logout() {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
}

export function getToken() {
	return localStorage.getItem("token") || false;
}

export function getUserId() {
	const user = localStorage.getItem("user");

	if (!user) {
		return undefined;
	}

	const userObj = JSON.parse(user);

	return userObj.id;
}
