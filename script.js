let items = document.querySelectorAll(".items");
let back = document.querySelector(".back");
let next = document.querySelector(".next");

function colorNext() {
  for (let i = 0 ; i < items.length; i++) {
    if (!items[i].classList.contains('active')) {
      items[i].classList.add('active');
      (i === items.length - 1) ? next.classList.add('disabled') : back.classList.remove('disabled')
      break;
    }
  }
}

function colorBack() {
  for (let i = items.length - 1 ; i > 0 ; i--) {
    if(items[i].classList.contains('active')){
      if (i === 1) {
        back.classList.add('disabled')
      } else next.classList.remove('disabled')
      items[i].classList.remove('active');
      break;
    }
  }
}


next.addEventListener('click', colorNext);
back.addEventListener('click', colorBack);

