document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameToDelete = document.getElementById('deleteName').value;

    // Realizando la petición DELETE para eliminar el producto
    fetch(`https://siaweb-nodejs.carlos-reneren7.repl.co/productos/${nameToDelete}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Producto eliminado con éxito");
            // Limpiamos el campo después de eliminar con éxito
            document.getElementById('deleteName').value = '';
            window.location.href = 'index.html';
        } else {
            alert("Hubo un error al eliminar el producto. Verifica si el nombre es correcto.");
        }
    })
    .catch(error => {
        console.error('Error al eliminar el producto:', error);
    });
});

