import {
    defineStore
} from "pinia";
import {
    apiKey
} from "../url.js";
import axios, {
    AxiosHeaders
} from "axios";


export const useUpcoming = defineStore({
    id: 'upcoming',
    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        upcoming: null,
    }),
    actions: {
        // ?api_key=551a32193a05f43ed6fe4524a5a64ec3
        async getUpcomingItems() {
            try {
                const response = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-Ru`);

                this.upcoming = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    },
});