    import {
    defineStore
} from "pinia";
import {
    apiKey
} from "../url.js";
import axios from "axios";



export const useItemById = defineStore({
    id: 'itemById',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null,
    }),
    actions: {
        async getItemById({
            type,
            id
        }) {
            console.log(type);
            try {
                const response = await axios.get(
                    `${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU`
                );
                if (type == 'movie') {
                    this.movie = response.data;
                } else {
                    this.tv = response.data;
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
});