const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
    const response = await fetch(`${API_URL}/posts`);
    return response.json();
}

export const getPostById = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`);
    return response.json();
}