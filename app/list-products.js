document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { image: "assets/images/pexels-enginakyurt-4458519.jpg", title: "Product 1", description: "High-quality Clothes", price: "$10" },
        { image: "assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg", title: "Product 2", description: "Hublot Watch", price: "$20" },
        { image: "assets/images/pexels-yaazhini-17307532.jpg", title: "Product 3", description: "Cucumber Soap", price: "$30" },
        
    ];

    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <h6 class="card-price">${product.price}</h6>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
});
