<template>
	<div>
		<h1><u>Episodios</u></h1>
		<Episodio
			v-for="episodio in event.episode"
			:key="episodio.slice(40)"
			:event="episodio"
		/>
	</div>
</template>

<script>
import Episodio from "@/componentes/ComponenteEpisodio.vue";

export default {
	name: "Episodios",
	props: ["event"],

	components: {
		Episodio
	}
};
</script>

<style>
.episodios {
	color: white;
}
.episodios:hover {
	color: coral;
}
</style>
