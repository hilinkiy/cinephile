import {
    defineStore
} from "pinia";
import {
    apiKey
} from "../url.js";
import axios from "axios";



export const usePopular = defineStore({
    id: 'popular',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        popularMovies: null,
        popularTvs: null,
    }),
    actions: {
        async getPopular({
            type,
            page = 1
        }, ) {
            try {
                const response = await axios.get(`${this.url}${type}/popular?api_key=${apiKey}&language=ru-RU&page=${page}`);
                if (type == 'movie') {
                    this.popularMovies = response.data.results;
                } else {
                    this.popularTvs = response.data.results;
                }
            } catch (error) {
                console.error('Произошла ошибка получения данных');
            }
        }
    },
});