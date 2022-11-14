<template>
	<router-link
		class="event-link"
		:to="{
			name: 'Detalles',
			params: { id: event.id }
		}"
	>
		<div class="event-card">
			<h4>{{ event.name }}</h4>
			<div class="estado">
				<span v-if="estadoRojo" class="iconoEstadoRojo"></span>
				<span v-else-if="estadoVerde" class="iconoEstadoVerde"></span>
				<span v-else-if="gris" class="iconoEstadoGris"></span>
				<span>Estado: {{ event.status }}</span>
			</div>
			<img :src="event.image" />
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		event: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			status: this.event.status
		};
	},
	computed: {
		estadoRojo() {
			if (this.status === "Dead") {
				return 1;
			} else return 0;
		},
		estadoVerde() {
			if (this.status === "Alive") {
				return 1;
			} else return 0;
		},
		gris() {
			if (this.status.toLowerCase() === "unknown") {
				return 1;
			} else return 0;
		}
	}
};
</script>

<style>
.event-card {
	width: 300px;
	height: auto;
	min-height: 430px;
	background: rgb(32, 39, 102);
	border-radius: 30px;
	overflow: hidden;
	padding: 15px 15px;
	margin-bottom: 24px;
	margin-right: 10px;
	transition: all 0.2s linear;
	cursor: pointer;
	color: white;
}
.estado {
	display: flex;
	justify-content: center;
}
.iconoEstadoRojo,
.iconoEstadoVerde,
.iconoEstadoGris {
	margin: auto 0;
	height: 0.5rem;
	width: 0.5rem;
	margin-right: 0.375rem;
	background: red;
	border-radius: 50%;
}
.iconoEstadoVerde {
	background: green;
}
.iconoEstadoGris {
	background: gray;
}
img {
	margin-top: 5%;
}
.event-card:hover {
	transform: scale(1.01);
	box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
		0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
	margin: 0;
}
.event-link {
	color: rgb(32, 39, 102);
	text-decoration: none;
	font-weight: 100;
}
</style>
