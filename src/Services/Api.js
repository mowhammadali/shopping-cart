import axios from "axios";

const Base_Url = `https://fakestoreapi.com`;

export const getProduct = async () => {
    const response = await axios.get(`${Base_Url}/products`);
    return response.data;
}
