import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://localhost:3000/",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
});

export default {
	getComentarios() {
		return apiClient.get("getComentarios");
	},
	postComentario(comentario) {
		return apiClient.post("cargarComentario" + comentario);
	}
};
