import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5000';

export default axios;