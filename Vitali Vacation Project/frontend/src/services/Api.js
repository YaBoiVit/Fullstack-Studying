import axios from 'axios'
const LocalHostlurl = 'http://localhost:5000/'

export const GetRequest = async (functionName) => {
    const res = await axios.get(LocalHostlurl+functionName);
    return res.data;
};


export const PostRequest = (url) => {
    return "post";
};


