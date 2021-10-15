import axios from 'axios';


export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID gGDxFofEr0LMgcbkGIkYmOLZE-uoPn8_0oWF9n_t-k4'
    }

});