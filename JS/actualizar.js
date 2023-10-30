document.getElementById('searchButton').addEventListener('click', function() {
    const nameToSearch = document.getElementById('searchName').value;

    // Aquí deberías hacer una petición al servidor para obtener los datos actuales del producto con ese nombre
    fetch(`https://siaweb-nodejs.carlos-reneren7.repl.co/productos/${nameToSearch}`)
    .then(response => response.json())
    .then(product => {
        // Llenando los campos del formulario con los datos actuales del producto
        document.getElementById('updateNombre').value = product.nombre;
        document.getElementById('updatePrecio').value = product.precio;
        document.getElementById('updateDescripcion').value = product.descripcion;
    })
    .catch(error => {
        console.error('Hubo un error buscando el producto:', error);
    });
});

document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const updatedData = {
        nombre: document.getElementById('updateNombre').value,
        precio: document.getElementById('updatePrecio').value,
        descripcion: document.getElementById('updateDescripcion').value
    };

    // Realizando la petición PUT para actualizar el producto
    fetch(`https://siaweb-nodejs.carlos-reneren7.repl.co/productos/${updatedData.nombre}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Producto actualizado con éxito");

        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Hubo un error al actualizar el producto:', error);
    });
});
