import axios from 'axios';



const url ='http://localhost:5005/posts';

const fetchPosts = () => axios.get(url);