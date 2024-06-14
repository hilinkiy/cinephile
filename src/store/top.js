import {
    defineStore
} from "pinia";
import {
    apiKey
} from "../url.js";
import axios from "axios";



export const useTopStore = defineStore({
    id: 'top',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        top10: null,
    }),
    actions: {
        async getTop() {
            try {
                const responce = await axios.get(`${this.url}movie/top_rated?api_key=${apiKey}&language=ru-RU`)
                this.top10 = responce.data.results.slice(0, 10)
                console.log(responce.data.results);
            } catch (error) {
                console.error(error);
            }
        }
    },
    getters: {

    }
});