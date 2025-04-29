 // Sélectionne tous les boutons "J'aime"
 const likeButtons = document.querySelectorAll('.btn');

 // Parcours chaque bouton et ajoute un événement de clic
 likeButtons.forEach(button => {
   button.addEventListener('click', function(event) {
     // Empêche l'action par défaut du bouton
     event.preventDefault();

     // Récupère l'élément <img> à l'intérieur du bouton pour modifier l'icône
     const likeIcon = this.querySelector('.like-icon');

     // Change l'icône et le texte du bouton selon l'état actuel (liked ou non)
     if (likeIcon.src.includes('miniature_unlike.png')) {
       likeIcon.src = './img/miniature_like.png'; // Change l'icône "like"
       this.innerHTML = '<img src="./img/miniature_like.png" alt="pouce" class="like-icon"> J\'aime';
     } else {
       likeIcon.src = './img/miniature_unlike.png'; // Remet l'icône "unlike"
       this.innerHTML = '<img src="./img/miniature_unlike.png" alt="pouce" class="like-icon"> J\'aime';
     }
   });
 });