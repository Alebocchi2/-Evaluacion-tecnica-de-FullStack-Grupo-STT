<template>
	<div class="container">
		<router-link
			class="event-link"
			:to="{
				name: 'Episodio',
				params: { event: episodio }
			}"
		>
			<b> - Episodio:</b> {{ episodio ? episodio.id : "" }} -
			<hr />
		</router-link>
		<router-view :event="episodio" />
	</div>
</template>

<script>
import EventService from "@/servicios/ServiciosApi.js";

export default {
	props: ["event"],

	data() {
		return {
			episodio: null
		};
	},

	created() {
		const e = this.event.slice(40);
		EventService.getEpisodioXid(e)
			.then((response) => {
				console.log("Episodio:", response.data);
				this.episodio = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}
};
</script>

<style>
.event-link {
	color: white;
	text-decoration: none;
	font-weight: 100;
}

.event-link:hover {
	color: coral;
	text-decoration: none;
	font-weight: 100;
}
</style>
