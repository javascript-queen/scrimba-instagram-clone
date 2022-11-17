const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment: 'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

const card = document.getElementById('card');

function render() {
  let getCard = '';
  for (let i = 0; i < posts.length; i++) {
    getCard += `
    <div class="user-info">
      <img class="avatar" src="${posts[i].avatar}">
      <div class="user-paragraph">
        <p class="user-name">${posts[i].name}</p>
        <p class="user-city">${posts[i].location}</p>
      </div>
    </div>
    <img id="post" src="${posts[i].post}">
    <div class="icons">
      <img class="icon" src="images/icon-comment.png">
      <img class="icon" src="images/icon-dm.png">
      <img id="like" class="icon" src="images/icon-heart.png">
    </div>
    <p class="likes comment-author"><span id="likes">${posts[i].likes}</span> likes</p>
    <p class="comments"><span class="comment-author">${posts[i].username}</span> ${posts[i].comment}</p>
    `
  }
  card.innerHTML = getCard;
}
render();

const like = document.getElementById('like');
const likes = document.getElementById('likes');

// like[0].addEventListener('click', () => {
//   likes[0].innerHTML = parseInt(posts[0].likes) + 1;
// });



like.addEventListener('click', () => {
  likes.innerHTML = parseInt(likes.innerHTML) + 1;
});
