const shareBtn = document.getElementById('share-btn');
const shareBubble = document.getElementById('share-bubble');
const shareIcon = document.querySelector('.share-icon');

let isHidden = true;

const changeBubbleVisibility = () => {
  if (isHidden) {
    // Show bubble
    shareBubble.classList.remove('hidden');
    shareBtn.style.backgroundColor = '#6e8098';
    shareIcon.style.color = '#ffffff'
    shareBtn.classList.add('move-down');
    isHidden = false;
  } else {
    // Hide bubble
    shareBubble.classList.add('hidden');
    shareBtn.style.backgroundColor = '#ecf2f8';
    shareIcon.style.color = '#6e8098'
    shareBtn.classList.remove('move-down');
    isHidden = true;
  }
}

shareBtn.addEventListener('click', changeBubbleVisibility);
