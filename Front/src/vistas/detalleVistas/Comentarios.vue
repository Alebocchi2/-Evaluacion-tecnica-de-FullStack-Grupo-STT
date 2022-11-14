<template>
	<div class="container">
		<h1><u>Comentarios</u></h1>
		<p
			v-for="comentario in events"
			:key="comentario.id"
			:event="comentario"
		>
			{{ comentario }}
		</p>
		<input
			v-model="comentario"
			placeholder="Ingrese su comentario"
			class="comentario-input"
		/>
		<button class="btn-confirmar-comentario" v-on:click="confirmar">
			Confirmar
		</button>
	</div>
</template>

<script>
import Servicios from "@/servicios/ServiciosBack.js";

export default {
	props: ["event"],

	created() {
		Servicios.getComentarios()
			.then((response) => {
				console.log(response.data);
				this.events = response.data.results;
			})
			.catch((error) => {
				console.log(error);
			});
	},

	methods: {
		confirmar: function () {
			console.log(this.event);
		}
	}
};
</script>

<style>
.comentario-input {
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 10px;
	padding-right: 10px;
}
.btn-confirmar-comentario {
	text-align: center;
	margin-top: 20px;
	background: coral;
}

.btn-confirmar-comentario:hover {
	color: coral;
	background: white;
}
</style>
