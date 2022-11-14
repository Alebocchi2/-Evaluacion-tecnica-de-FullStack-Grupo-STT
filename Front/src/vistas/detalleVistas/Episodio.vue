<template>
	<div class="container">
		<h1><b>Episodio:</b> {{ event ? event.id : "" }}</h1>
		<div>
			<p><b>ID:</b> {{ event ? event.id : "" }}</p>
			<p><b>Nombre:</b> {{ event ? event.name : "" }}</p>
			<p><b>Fecha de estreno:</b> {{ event ? event.air_date : "" }}</p>
			<p><b>Episodio:</b> {{ event ? event.episode : "" }}</p>
			<p><b>Fecha de creación:</b> {{ event ? event.created : "" }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ["event"]
};
</script>
