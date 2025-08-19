const btn = document.getElementById("btn-carregar");
const galeria = document.getElementById("galeria");

btn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      const img = document.createElement("img");
      img.src = data.message;
      galeria.appendChild(img);
    })
    .catch(error => {
      console.error("Erro ao buscar imagem:", error);
    });
});
