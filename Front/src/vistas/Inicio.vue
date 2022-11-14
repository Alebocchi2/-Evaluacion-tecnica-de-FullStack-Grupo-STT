<template>
	<div class="btn-container">
		<!--  Puede y debe mejorarse !! -->
		<button v-if="muestroPagina" v-on:click="paginas(pagina - 1)">
			{{ pagina - 1 }}
		</button>
		<button v-on:click="paginas(pagina)" class="pagina-active">
			{{ pagina }}
		</button>
		<button v-on:click="paginas(pagina + 1)">{{ pagina + 1 }}</button>
		<button v-on:click="paginas(pagina + 2)">{{ pagina + 2 }}</button>
	</div>
	<!--  Puede y debe mejorarse !! -->
	<div class="btn-container">
		<button v-on:click="anterior">Anterior</button>
		<button v-on:click="siguiente">Siguiente</button>
	</div>
	<div class="container">
		<ComponenteInicio
			v-for="event in events"
			:key="event.id"
			:event="event"
		/>
	</div>
</template>

<script>
import ComponenteInicio from "@/componentes/ComponenteInicio.vue";
import Servicios from "@/servicios/ServiciosApi.js";

export default {
	name: "Inicio",
	components: {
		ComponenteInicio
	},
	data() {
		return {
			events: null,
			pagina: 1
		};
	},
	created() {
		Servicios.getPersonajes()
			.then((response) => {
				this.events = response.data.results;
			})
			.catch((error) => {
				console.log(error);
			});
	},
	methods: {
		siguiente: function () {
			this.pagina++;
			this.getPagina();
		},
		anterior: function () {
			this.pagina < 2 ? this.pagina : this.pagina--;
			this.getPagina();
		},
		paginas: function (pag) {
			this.pagina = pag;
			this.getPagina();
		},
		getPagina: function () {
			Servicios.getPersonajesXpagina(this.pagina)
				.then((response) => {
					this.events = response.data.results;
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},

	computed: {
		muestroPagina() {
			if (this.pagina === 1) {
				return 0;
			} else return 1;
		}
	}
};
</script>

<style lang="scss">
@import "../assets/styles.scss";
.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.pagina-active {
	background-color: initial;
	background-position: 0 0;
	color: coral;
}
</style>
