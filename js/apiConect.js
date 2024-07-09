
async function productList () {
    const conect = await fetch("http://localhost:3000/products");
    const data = await conect.json();
    return data;
}

async function createData (name, price, image){
    const conect = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            price: price,
            img: image
        })
    });
    const data = await conect.json();
    return data;
}

async function deleteData(id) {
    const conect = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
    });
    const data = await conect.json();
    return data;
}

export const apiConect = { productList, createData, deleteData };