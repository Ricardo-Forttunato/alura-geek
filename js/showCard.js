import { apiConect } from "./apiConect.js";

const list = document.querySelector("[data-list]");

function dataCard (name, price, img, id) {
    const card = document.createElement('li');
    card.classList = "product_card";
    card.innerHTML = `
		<img src="${img}" alt="">
		<p class="description">${name}</p>
		<div class="card_footer">
			<p class="price">$ ${price}</p>
			<img class="icon_trash" src="./image/icon_trash.png" alt="icone de lixeira" >
		</div>
    `
    return card;
}

async function renderCard () {
    const newList = await apiConect.productList();
    newList.forEach(element => list.appendChild(
        dataCard(element.name, element.price, element.img, element.id)
    ));
}

renderCard();   