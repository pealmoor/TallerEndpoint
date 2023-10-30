document.addEventListener('DOMContentLoaded', function() {
    // Solicitar los productos cuando el DOM esté completamente cargado
    fetchProducts();
});

function fetchProducts() {
    console.log("Solicitud iniciada"); // Para verificar que inicia la solicitud
    fetch('https://siaweb-nodejs.carlos-reneren7.repl.co/productos')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Para verificar la respuesta del servidor
            displayProducts(data);
        })
        .catch(error => {
            console.error("Hubo un error al obtener los productos:", error);
        });
}

    function displayProducts(products) {
    const productsTable = document.getElementById('productsTable');
    
    products.forEach(product => {
        const row = productsTable.insertRow();  // Inserta una nueva fila al final de la tabla

        const cellName = row.insertCell(0);     // Inserta una nueva celda en la fila
        cellName.textContent = product.nombre;  // Establece el contenido de la celda

        const cellPrice = row.insertCell(1);
        cellPrice.textContent = product.precio;

        const cellDescription = row.insertCell(2);
        cellDescription.textContent = product.descripcion;

        
    });
}
