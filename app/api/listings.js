import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addMaintenance = maintain => {
    const data = new FormData();
}

export default {
    getListings,
}