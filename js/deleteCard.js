import { apiConect } from "./apiConect.js";

const list = document.querySelector("[data-list]");

async function deleteCard (id) {
    await apiConect.deleteData(id);
}

list.addEventListener("click", event => {
    const trash = event.target.className === "icon_trash";
    if (trash) {
        const card = event.target.closest(".product_card");
        const id = card.id;
        deleteCard(id);
        card.remove();
    }
});