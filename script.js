// Array de strings
const imgPreview = "";
const opciones = [
  {
    nombre: "Espada",
    url: "https://i.postimg.cc/fTb4fb8n/descarga-2.jpg",
  },
  {
    nombre: "sedan",
    url: "/images/sedan.png",
  },
];
// Obtener referencia al select
const selectElement = document.getElementById("mySelect");

// Obtener referencia al contenedor de la imagen
const imageElement = document.getElementById("selectedImage");

const nameImg = document.getElementById("nameImage");

// Rellenar el select usando .map
const options = opciones.map((opcion) => {
  const optionElement = document.createElement("option");
  optionElement.text = opcion.nombre;
  optionElement.value = opcion.url;
  nameImg.innerHTML= opcion.nombre;
  return optionElement;
});


// Añadir las opciones al select
options.forEach((option) => selectElement.appendChild(option));
// Función para mostrar la imagen correspondiente
console.log(options);
const showImage = (optionValue) => {
  // Ajusta la ruta de las imágenes según tu estructura de directorios
  const imagePath = `${optionValue.replace(" ", "")}`;
  imageElement.src = imagePath;
  imageElement.alt = optionValue;
};
// Agregar event listener al select
selectElement.addEventListener("change", (event) => {
  showImage(event.target.value);
});

// Mostrar la imagen inicial (si es necesario)
if (selectElement.value) {
  showImage(selectElement.value);
}

console.log(imgPreview);
