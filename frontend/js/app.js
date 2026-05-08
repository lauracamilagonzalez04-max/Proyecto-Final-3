function mostrarVista(idVista) {

    const vistas = document.querySelectorAll('.vista');

    vistas.forEach(vista => {
        vista.classList.add('oculto');
        vista.classList.remove('activa');
    });

    document.getElementById(idVista).classList.remove('oculto');
    document.getElementById(idVista).classList.add('activa');
}

function iniciarSesion() {

    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    if(correo === '' || password === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    if(!correo.includes('@')) {
        alert('Correo inválido');
        return;
    }

    alert('Inicio de sesión exitoso');

    mostrarVista('inicio');
    }

function agregarCarrito(nombre, precio) {

    const lista = document.getElementById('listaCarrito');

    const item = document.createElement('li');

    item.textContent = `${nombre} - $${precio}`;

    lista.appendChild(item);
    }