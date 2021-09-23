document.addEventListener("DOMContentLoaded", async function () {
  // Código que será executado quando o navegador carregar
  const URL = "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic";
  const apiData = await (await fetch(URL)).json();
  console.log(apiData);
  const allImages = document.getElementById('all-images');
  apiData.map((photo, index)=>{
    const createContainerDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const hoverDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    allImages.appendChild(createContainerDiv).classList.add('container');
    const container = document.getElementsByClassName('container');
    container[index].appendChild(imageDiv).classList.add('instagram-photo');
    container[index].appendChild(hoverDiv).classList.add('overlay');
    const instagramPhoto = document.getElementsByClassName('instagram-photo');
    const createImg = document.createElement('img');
    createImg.src = photo.imagens.resolucaoPadrao.url;
    instagramPhoto[index].appendChild(createImg).classList.add('image');
    const hoverInfo = document.getElementsByClassName('overlay');
    hoverInfo[index].appendChild(textDiv).classList.add('text');
    const text = document.getElementsByClassName('text');
    text[index].innerText = "hello world"
  })
});