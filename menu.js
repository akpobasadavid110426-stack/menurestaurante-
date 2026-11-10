// 1. Los datos del menú
const platos = [
  { nombre: "Arroz jollof", descripcion: "Arroz con salsa de tomate y especias", precio: 2500, categoria: "comida", imagen: "imgenes/imgenes/IMG_9454.jpeg"},
  { nombre: "Pollo a la parrilla", descripcion: "Con plátano frito y ensalada", precio: 3500, categoria: "comida", imagen: "imgenes/IMG_9459.jpeg" },
  { nombre: "Sopa de egusi", descripcion: "Con pescado y pounded yam", precio: 3000, categoria: "comida", imagen: "imgenes/IMG_9460.jpeg" },
  { nombre: "Zobo", descripcion: "Bebida fría de hibisco", precio: 800, categoria: "bebida", imagen: "imgenes/.jpeg" },
  { nombre: "Jugo de naranja", descripcion: "Natural, sin azúcar añadida", precio: 1000, categoria: "bebida", imagen: "imgenes/IMG_9464.png"},
  { nombre: "Tarta de chocolate", descripcion: "Porción con crema", precio: 1500, categoria: "postre", imagen: "imgenes/IMG_9461.jpeg" },
  { nombre: "Helado de vainilla", descripcion: "Dos bolas con galleta", precio: 1200, categoria: "postre", imagen: "imgenes/IMG_9463.jpeg" }
];

// 2. Buscar los elementos del HTML
const listaPlatos = document.getElementById("listaPlatos");
const buscador = document.getElementById("buscador");
const botones = document.querySelectorAll(".filtro");

let categoriaActual = "todos";

// 3. Dibujar los platos según filtro y búsqueda
function mostrarPlatos() {
  const texto = buscador.value.toLowerCase();

  const filtrados = platos.filter(function (plato) {
    const coincideCategoria =
      categoriaActual === "todos" || plato.categoria === categoriaActual;
    const coincideTexto = plato.nombre.toLowerCase().includes(texto);
    return coincideCategoria && coincideTexto;
  });

  listaPlatos.innerHTML = "";

  if (filtrados.length === 0) {
    listaPlatos.innerHTML = "<p>No se encontraron platos.</p>";
    return;
  }

  filtrados.forEach(function (plato) {
    const div = document.createElement("div");
    div.classList.add("plato");
    div.innerHTML = `
     <img src="${plato.imagen}" alt="${plato.nombre}">
  <div class="info">
    <h3>${plato.nombre}</h3>
    <p>${plato.descripcion}</p>
  </div>
  <span class="precio">₦${plato.precio.toLocaleString()}</span>
`;
    listaPlatos.appendChild(div);
  });
}

// 4. Clic en los botones de categoría
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    botones.forEach(function (b) {
      b.classList.remove("activo");
    });
    boton.classList.add("activo");
    categoriaActual = boton.dataset.categoria;
    mostrarPlatos();
  });
});

// 5. Escribir en el buscador
buscador.addEventListener("input", mostrarPlatos);

// 6. Mostrar el menú al abrir la página
mostrarPlatos();
