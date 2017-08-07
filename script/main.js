var buttons = document.getElementsByClassName('dot'),
    quoteContainer = document.getElementsByClassName('quote-container')[0],
    teamItems = document.getElementsByClassName('orange-block'),
    teamButton = document.getElementsByClassName('team-button'),
    noDisplay = document.getElementsByClassName('no-display');





// activeLink обеспечивает метку для активного элемента
var activeLink = 0;

// устанавливаем обработчик событий
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', setClickedItem, false);

    // определяем элемент для activeLink
    button.itemID = i;
}

// устанавливаем первый элемент в качестве активного
buttons[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();
    activeLink = e.target.itemID;
    changePosition(e.target);
}

function removeActiveLinks() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
}

// изменяем позицию слайдера, после того, как мы проверили,
// что в качестве активной обозначена нужная ссылка.
function changePosition(button) {
    button.classList.add("active");

    var position = button.getAttribute("data-pos");
    quoteContainer.style.left = position;
};




for (i = 0; i < teamItems.length; i++){
    
    var teamItem = teamItems[i];  
    teamItem.addEventListener('mouseover', teamItemHover);
    teamItem.addEventListener('mouseout', teamItemOut);
}


function teamItemHover(e){

    if (e.target.firstElementChild){
        e.target.firstElementChild.classList.remove('no-display');
        e.target.nextElementSibling.style.top = 300 + 'px';
        e.target.nextElementSibling.style.backgroundColor = '#fff3f0';
        e.target.nextElementSibling.style.boxShadow = 'none';
    };

    
};

function teamItemOut(e){

    if (e.target.firstElementChild){
        e.target.firstElementChild.classList.add('no-display');
        e.target.nextElementSibling.style.top = 395 + 'px';
        e.target.nextElementSibling.style.backgroundColor = '#fff';
        e.target.nextElementSibling.style.boxShadow = '0 0 15px 2px rgba(51, 47, 46, 0.3)';
    };
}





















