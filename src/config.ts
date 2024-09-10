// https://jsonplaceholder.typicode.com/posts/1/users

const BASE_URL: string = "https://jsonplaceholder.typicode.com/posts/1/";

export const ALL_USERS: string = BASE_URL + "users";

axios.defaults.baseURL = "https://slbeck.onrender.com/api/";
// axios.defaults.baseURL = "http://localhost:3000/api/";
