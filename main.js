/*
Ricreiamo un feed social aggiungendo al layout di base fornito il nostro script.
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
*/

//objects array (posts data)
const posts = [
    {
        name : 'Andrea Marchetti',
        profilePic : 'https://i.pravatar.cc/300?img=2',
        date : '3 mesi fa',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'https://picsum.photos/id/444/367/267', 
        likeNum : 24,
    },

    {
        name : 'Gianluca Mancini',
        profilePic : 'https://i.pravatar.cc/300?img=18',
        date : '3 mesi fa',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'https://picsum.photos/id/555/367/267', 
        likeNum : 38,
    },

    {
        name : 'Simone Sperduti',
        profilePic : 'https://i.pravatar.cc/300?img=3',
        date : '3 mesi fa',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'https://picsum.photos/id/888/367/267', 
        likeNum : 1,
    },

    {
        name : 'Mara Mattei',
        profilePic : 'https://i.pravatar.cc/300?img=12',
        date : '3 mesi fa',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'https://picsum.photos/id/222/367/267', 
        likeNum : 89,
    },

    {
        name : 'Gianmarco Tocco',
        profilePic : 'https://i.pravatar.cc/300?img=11',
        date : '3 mesi fa',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'https://picsum.photos/id/111/367/267', 
        likeNum : 4000,
    },
]

// dom refs 
const postsFeed = document.querySelector('.posts-list');

//print posts taking data from objects array
printObjectsInDom(posts, postsFeed);


/***************** FUNCTIONS ***********************/


/**
 * 
 * @param {array} objectsArray 
 * @param {node} container 
 * prints in dom objects from an array 
 */
function printObjectsInDom (objectsArray, container) {
   container.innerHTML = ''
   for (let key in objectsArray) {
       let member = objectsArray[key];
       container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${member.profilePic}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${member.name}</div>
                        <div class="post-meta__time">${member.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${member.text}</div>
            <div class="post__image">
                <img src="${member.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${member.likeNum}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
       `
       
   }
}
