<template>
	<div>
		<h1><u>Detalles</u></h1>
		<p><b>Especie:</b> {{ event ? event.species : "" }}</p>
		<p><b>Origen:</b> {{ event ? event.origin.name : "" }}</p>
		<p><b>Género:</b> {{ event ? event.gender : "" }}</p>
	</div>
</template>
<script>
export default {
	props: ["event"]
};
</script>
