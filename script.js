function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Emerson Colder sorrindo, usando óculos de sol e jaqueta preta no fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Emerson Colder sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }

  //se tiver sem light mode, manter a imagem normal
}
