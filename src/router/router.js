import {
    createRouter,
    createWebHashHistory
} from "vue-router";

import HomePage from "../pages/HomePage.vue";
import MoviesPage from "../pages/MoviesPage.vue";
import TvsPage from "../pages/TvsPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },

        {
            path: '/movie',
            name: 'movie',
            component: MoviesPage,
        },
        {
            path: '/tv',
            name: 'tv',
            component: TvsPage,
        },
    ],
    scrollBehavior() {
        return {
            top: 0,
        }
    }
});

export default router;