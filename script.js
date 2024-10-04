const shareBtn = document.getElementById('share-btn');
const shareBubble = document.getElementById('share-bubble');
const shareIcon = document.querySelector('.share-icon');

let isHidden = true;

const changeBubbleVisibility = () => {
  if (isHidden) {
    // Show bubble
    shareBubble.classList.remove('hidden');
    shareBtn.style.backgroundColor = '#6e8098';
    shareBtn.style.marginTop = '12px';
    shareIcon.style.color = '#ffffff'
    isHidden = false;
  } else {
    // Hide bubble
    shareBubble.classList.add('hidden');
    shareBtn.style.backgroundColor = '#ecf2f8';
    shareBtn.style.marginTop = '0';
    shareIcon.style.color = '#6e8098'
    isHidden = true;
  }
}

shareBtn.addEventListener('click', changeBubbleVisibility);
