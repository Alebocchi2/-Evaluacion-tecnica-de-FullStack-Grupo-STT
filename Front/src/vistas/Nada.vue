<template>
	<h1>Nada por aquí</h1>
	<router-link :to="{ name: 'Inicio' }">Volver al inicio</router-link>
</template>
<script>
export default {
	props: {
		resource: {
			type: String,
			requires: true,
			default: "page"
		}
	}
};
</script>
