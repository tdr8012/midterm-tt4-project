document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const productPhoto = document.getElementById("productPhoto").files[0];
        const productTitle = document.getElementById("productTitle").value.trim();
        const productDescription = document.getElementById("productDescription").value.trim();
        const productPrice = parseFloat(document.getElementById("productPrice").value);
        const productQuantity = parseInt(document.getElementById("productQuantity").value, 10);

        if (!productPhoto || !productTitle || !productDescription || isNaN(productPrice) || isNaN(productQuantity)) {
            alert("Please fill in all fields correctly.");
            return;
        }

        const formData = new FormData();
        formData.append("photo", productPhoto);
        formData.append("title", productTitle);
        formData.append("description", productDescription);
        formData.append("price", productPrice);
        formData.append("quantity", productQuantity);

        console.log("Uploading Product:", {
            photo: productPhoto.name,
            title: productTitle,
            description: productDescription,
            price: productPrice,
            quantity: productQuantity
        });

        alert("Product added successfully!");
        form.reset();
    });
});
