import {
    defineStore
} from "pinia";
import {
    apiKey
} from "../url.js";
import axios from "axios";



export const useActorsStore = defineStore({
    id: 'actors',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        actorMovie: null,
        actorTv: null,
    }),
    actions: {
        async getActors({
            type,
            id
        }) {
            try {
                const response = await axios.get(
                    `${this.url}${type}/${id}/credits?api_key=${apiKey}&language=ru-RU`,
                );
                const actors = response.data.cast;
                if (type == 'movie') {
                    this.actorMovie = actors;

                } else {
                    this.actorTv = actors;
                }
            } catch (error) {
                console.error('ошибка получения актеров');
            }
        }
    },
    getters: {
        getActorsMovies(state) {
            return function (count) {
                return state.actorMovie?.slice(0, 4);
            }
        },
        getActorsTv(state) {
            return function (count) {
                return state.actorTv?.slice(0, 4);
            }
        },
    }
});