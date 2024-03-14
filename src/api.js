import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/z8CoayrmoVHHJ4Wzzqrm0tuVSDf6xzGD',
})

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    }
};

export default api;