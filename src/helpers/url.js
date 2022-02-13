import axios from "axios"

export const url = "https://sprint2-reto1.herokuapp.com/registros/"

export function getInfo() {
    return axios.get("https://sprint2-reto1.herokuapp.com/registros/")
}

