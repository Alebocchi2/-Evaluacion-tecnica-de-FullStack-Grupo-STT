<template>
	<div>
		<h1><u>Ubicación</u></h1>
		<p>{{ event.location.name ? event.location.name : "" }}</p>
	</div>
</template>

<script>
export default {
	props: ["event"]
};
</script>
