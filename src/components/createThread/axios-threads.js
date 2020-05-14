import axios from 'axios';
const instance=axios.create({
    baseURL:"https://blog-post-8bd1d.firebaseio.com/"
})


export default instance;