const usersInPhoto = (photo, index) => {
  const userInfo = document.getElementsByClassName('userInfo');
  const listedUsers = photo.metadados.users_in_photo;
  if (listedUsers.length > 0) {
    listedUsers.map(({user: {username}})=> userInfo[index].innerText = `@${username}`);
  }
}

const likesInPhoto = (photo, index) => {
  const likes = document.getElementsByClassName('likes');
  const likesQuant = photo.upvotes;
  likes[index].innerText = `❤ ${likesQuant}`;
}

const commentsInPhoto = (photo, index) => {
  const comments = document.getElementsByClassName('comments');
  const commentsQuant = photo.comentarios;
  comments[index].innerText = `💬 ${commentsQuant}`;
}

const createLinkToInstagram = (photo, index) => {
  const hoverInfo = document.getElementsByClassName('overlay');
  hoverInfo[index].href = photo.link;
  hoverInfo[index].setAttribute('target', '_blank');
}


document.addEventListener("DOMContentLoaded", async function () {
  // Código que será executado quando o navegador carregar
  const URL = "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic";
  const apiData = await (await fetch(URL)).json();
  const allImages = document.getElementsByClassName('all-images');
  apiData.map((photo, index)=>{
    const createContainerDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const hoverDiv = document.createElement('a');
    const infoDiv = document.createElement('div');
    allImages[0].appendChild(createContainerDiv).classList.add('container');
    const container = document.getElementsByClassName('container');
    container[index].appendChild(imageDiv).classList.add('instagram-photo');
    container[index].appendChild(hoverDiv).classList.add('overlay');
    const instagramPhoto = document.getElementsByClassName('instagram-photo');
    const createImg = document.createElement('img');
    createImg.src = photo.imagens.resolucaoPadrao.url;
    instagramPhoto[index].appendChild(createImg).classList.add('image');
    const hoverInfo = document.getElementsByClassName('overlay');
    hoverInfo[index].appendChild(infoDiv).classList.add('info');
    const info = document.getElementsByClassName('info');
    const createUserInfo = document.createElement('div');
    const createLikes = document.createElement('div');
    const createComments = document.createElement('div');
    info[index].appendChild(createUserInfo).classList.add('userInfo');
    info[index].appendChild(createLikes).classList.add('likes');
    info[index].appendChild(createComments).classList.add('comments');
    usersInPhoto(photo, index);
    likesInPhoto(photo, index);
    commentsInPhoto(photo, index);
    createLinkToInstagram(photo, index);
    
    
    
  })
});