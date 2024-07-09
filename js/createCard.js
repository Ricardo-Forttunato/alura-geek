import { apiConect } from "./apiConect.js";    

const form = document.querySelector("[data-form]");

async function createCard (event) {
    event.preventDefault();
    const title = document.querySelector("[data-title]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;
    await apiConect.createData(title, price, image);
}

form.addEventListener("submit", event => createCard(event));