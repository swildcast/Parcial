document.addEventListener("DOMContentLoaded", function () {
    const listaProductos = document.getElementById("product_list");

    const data = [
        {
            "product_id": "1",
            "product_name": "Libro Codigo da vinci",
            "product_description": "Dan Brown",
            "product_price": "150.000",
            "product_image": "assets/pantalon1.png",
            "product_material": "Cuero",
            "product_size": "16cmts",
            "product_color": "Rojo"
        },
        {
            "product_id": "Libro don quijote de la mancha",
            "product_name": "Pantalón negro de mezclilla",
            "product_description": "Libro de cultura española ",
            "product_price": "100.000",
            "product_image": "assets/don quijote de la mancha.png",
            "product_material": "Mezclilla",
            "product_size": "34",
            "product_color": "Negro"
        },
        {
            "product_id": "El principito ",
            "product_name": "Pantalón negro de mezclilla",
            "product_description": "Pantalón negro de mezclilla",
            "product_price": "100.000",
            "product_image": "assets/pantalon2.png",
            
        }
    ];

    let products = '';
    data.forEach(product => {
        const li = document.createElement("li");
        products += `<section id="${product.id_product}" class="product product-background">
                <img src="${productoduct_image}" alt="Esta es una imagen de un pantalón" width="200px" height="200px">
                <h2>${product.product_name}</h2>
                <p>${product.product_description}</p>
                <h3>Descripción del producto</h3>
                <ol>
                    
                <a href="pages/product.html" target="_blank">Ver detalles</a>
            </section>`;
    });
    listaProductos.innerHTML = products;

});

document.addEventListener('scroll', function (){
    console.log('Hiciste scroll');
});

const buttonClick = document.getElementById('click_button');
const myForm = document.getElementById('my_form');
const mySelect = document.getElementById('myselect');
const myInput = document.getElementById('myinput');
const myDiv = document.getElementById('mydiv');
const inputElement = document.getElementById('myinput');

// Evento clic en el botón
buttonClick.addEventListener('click', () => {
    alert('Me diste click');
});

// Evento envío del formulario
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado');
});

// Evento cambio en el select
mySelect.addEventListener('change', () => {
    console.log('Valor seleccionado: ' + mySelect.value);
});

// Evento de entrada de texto en el input
myInput.addEventListener('input', () => {
    console.log('Texto ingresado: ' + myInput.value);
});

// Cambio de color al pasar el mouse sobre el div
myDiv.addEventListener('mouseover', () => {
    myDiv.classList.add('mouseover');
});

myDiv.addEventListener('mouseout', () => {
    myDiv.classList.remove('mouseover');
});

// Evento keydown y keyup para el input
inputElement.addEventListener('keydown', function(event) {
    console.log('Tecla presionada:', event.key);
});

inputElement.addEventListener('keyup', function(event) {
    console.log('Tecla soltada:', event.key);
});

// Evento focus y blur para el input
inputElement.addEventListener('focus', function() {
    console.log('Elemento enfocado');
});

inputElement.addEventListener('blur', function() {
    console.log('Elemento desenfocado');
});