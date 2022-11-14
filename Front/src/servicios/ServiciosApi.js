import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://rickandmortyapi.com/api/",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
});

export default {
	getPersonajes() {
		return apiClient.get("character/");
	},
	getPersonajesXpagina(pagina) {
		return apiClient.get("character?page=" + pagina);
	},
	getPersonaje(id) {
		return apiClient.get("character/" + id);
	},
	getEpisodios() {
		return apiClient.get("episode/");
	},
	getEpisodioXid(id) {
		return apiClient.get("episode/" + id);
	}
};
