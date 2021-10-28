import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID SIfsvVShLERNVASFp5vgDNvQ5yIzp4XN1Pub0Q5BrUI'
    }
})