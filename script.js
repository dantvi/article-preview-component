const shareBtn = document.getElementById('share-btn');
const shareBubble = document.getElementById('share-bubble');

let isHidden = true;

const changeBubbleVisibility = () => {
  if (isHidden) {
    // Show bubble
    shareBubble.classList.remove('hidden');
    isHidden = false;
  } else {
    // Hide bubble
    shareBubble.classList.add('hidden');
    isHidden = true;
  }
}




/* 

Start --> bubble är hidden
OM bubble är hidden --> kör funktionen displayShareBubble();
OM bubble är visible --> kör funktionen hideShareBubble();

*/

shareBtn.addEventListener('click', changeBubbleVisibility);
