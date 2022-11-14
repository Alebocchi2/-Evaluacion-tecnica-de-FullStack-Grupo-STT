import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../vistas/Inicio.vue";
import Vista from "../vistas/detalleVistas/Vista.vue";
import Detalles from "../vistas/detalleVistas/Detalles.vue";
import Ubicacion from "../vistas/detalleVistas/Ubicacion.vue";
import Comentarios from "../vistas/detalleVistas/Comentarios.vue";
import Episodios from "../vistas/detalleVistas/Episodios.vue";
import Episodio from "../vistas/detalleVistas/Episodio.vue";
import Nada from "../vistas/Nada.vue";
import NProgress from "nprogress";

const routes = [
	{
		path: "/",
		name: "Inicio",
		component: Inicio
	},
	{
		path: "/Character/:id",
		name: "Vista",
		props: true,
		component: Vista,
		children: [
			{
				path: "",
				name: "Detalles",
				component: Detalles
			},
			{
				path: "Ubicacion",
				name: "Ubicacion",
				component: Ubicacion
			},
			{
				path: "Comentarios",
				name: "Comentarios",
				component: Comentarios
			},
			{
				path: "Episodios",
				name: "Episodios",
				component: Episodios,
				children: [
					{
						path: "Episodio",
						name: "Episodio",
						component: Episodio
					}
				]
			}
		]
	},
	{
		path: "/ayuda",
		name: "ayuda",
		component: () => import("../vistas/Ayuda.vue")
	},
	{
		path: "/:catchAll(.*)",
		name: "Nada",
		component: Nada
	},
	{
		path: "/404/:resource",
		name: "404Resource",
		component: Nada,
		props: true
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

export default router;
