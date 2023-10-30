document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Esto evita que el formulario se envíe de la forma tradicional

    // Obteniendo los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;

    // Creando un objeto con los datos del producto
    const productData = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    };

    // Realizando la petición POST para añadir el producto
    fetch('https://siaweb-nodejs.carlos-reneren7.repl.co/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
        // Muestra el mensaje "guardado con éxito"
        alert("Guardado con éxito");

        // Redirige a otra página
        window.location.href = 'index.html'; // Reemplaza con la URL deseada
    })
    .catch(error => {
        console.error('Hubo un error al añadir el producto:', error);
    });
});

// Lógica para el botón "Cancelar"
document.getElementById('cancelButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Reemplaza con la URL deseada
});
