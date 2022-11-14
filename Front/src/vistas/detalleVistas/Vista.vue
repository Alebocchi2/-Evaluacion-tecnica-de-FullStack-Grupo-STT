<template>
	<div class="container">
		<div class="event-card">
			<h4>{{ event ? event.name : "" }}</h4>
			<div class="estado">
				<span
					:class="
						statusColor == 'unknown'
							? 'gris'
							: statusColor == 'Alive'
							? 'estadoVerde'
							: 'estadoRojo'
					"
				></span>
				<span>Estado: {{ event ? event.status : "" }}</span>
			</div>
			<img :src="event ? event.image : ''" />
			<nav class="nav-details">
				<router-link :to="{ name: 'Detalles' }">Detalles</router-link>
				|
				<router-link :to="{ name: 'Ubicacion' }">Ubicación</router-link>
				|
				<router-link :to="{ name: 'Comentarios' }"
					>Comentarios</router-link
				>
				|
				<router-link :to="{ name: 'Episodios' }">Episodios</router-link>
			</nav>
			<router-view :event="event" />
		</div>
	</div>
</template>

<script>
import Servicios from "@/servicios/ServiciosApi.js";

export default {
	props: ["id"],
	data() {
		return {
			event: null,
			statusColor: null
		};
	},
	created() {
		Servicios.getPersonaje(this.id)
			.then((response) => {
				console.log("Evento personaje:", response.data);
				this.event = response.data;
				this.statusColor = this.event.status;
			})
			.catch((error) => {
				console.log(error);

				this.$router.push({
					name: "404Resource",
					params: { resource: "event" }
				});
			});
	}
};
</script>

<style scope>
.event-card {
}
.estadoVerde,
.estadoRojo,
.gris {
	margin: auto 0;
	height: 0.5rem;
	width: 0.5rem;
	margin-right: 0.375rem;
	background: red;
	border-radius: 50%;
}
.estadoVerde {
	background: green;
}
.gris {
	background: gray;
}
</style>
