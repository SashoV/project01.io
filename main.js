console.log('Loaded');

let cardsContainer = document.querySelector('.cards-container');
let loadMoreBtn = document.querySelector('#loadMore');
let allDeveloperCards = [];
let allDesignerCards = [];
let allMarketingCards = [];
let allCards = [];
let cardsToRender = [];
let cardsPerLoad = 6;

// helper fuction to render designer card
function createDesignerCard() {
    return `<div class="col-md-4 col-sm-6 card-holder designer">
                 <div class="card">
                    <img class="card-img-top img-responsive"
                        src="images/StockSnap_DZV.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Академија за дизајн</h5>
                        <p class="card-text">Име на проектот стои овде во две линии</p>
                        <p class="card-text2">Краток опис во кој студентите ќе можат да опишат за што се работи во проектот.</p>
                        <span class="card-date">Април - Октомври 2019</span>
                    <div class="text-right">
                         <a href="#" class="btn red-btn">Дознај повеќе</a>
                    </div>
                    </div>
                </div>
            </div>`;
}

// helper fuction to render developer card
function createDeveloperCard() {
    return `<div class="col-md-4 col-sm-6 card-holder developer">
                <div class="card">
                    <img class="card-img-top img-responsive"
                        src="images/StockSnap_V2B.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Академија за програмирање</h5>
                        <p class="card-text">Име на проектот стои овде во две линии</p>
                        <p class="card-text2">Краток опис во кој студентите ќе можат да опишат за што се работи во проектот.</p>
                        <span class="card-date">Април - Октомври 2019</span>
                    <div class="text-right">
                        <a href="#" class="btn red-btn">Дознај повеќе</a>
                    </div>
                    </div>
                </div>
            </div>`;
}

// helper fuction to render marketing card
function createMarketingCard() {
    return `<div class="col-md-4 col-sm-6 card-holder marketing">
                <div class="card">
                    <img class="card-img-top img-responsive"
                        src="images/StockSnap_IDD.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Академија за маркетинг</h5>
                        <p class="card-text">Име на проектот стои овде во две линии</p>
                        <p class="card-text2">Краток опис во кој студентите ќе можат да опишат за што се работи во проектот.</p>
                        <span class="card-date">Април - Октомври 2019</span>
                    <div class="text-right">
                        <a href="#" class="btn red-btn">Дознај повеќе</a>
                    </div>
                    </div>
                </div>
        </div>`;
}

// function to create cards and render them
function createAllCards() {
    for (let i = 0; i < 10; i++) {
        allDeveloperCards.push(createDeveloperCard());
        allCards.push(createDeveloperCard());
    }
    for (let i = 0; i < 6; i++) {
        allDesignerCards.push(createDesignerCard());
        allCards.push(createDesignerCard());

    }
    for (let i = 0; i < 4; i++) {
        allMarketingCards.push(createMarketingCard());
        allCards.push(createMarketingCard());

    }
    cardsToRender = allCards.slice();
    renderCards();
}

createAllCards();

// helper function to descide if cardsToRender has more cards than the limit
function renderCards() {
    if (cardsToRender.length > cardsPerLoad) {
        loadMoreBtn.style.display = 'flex';
        let cardsToAppend = cardsToRender.splice(0, cardsPerLoad);
        appendCards(cardsToAppend);
    } else {
        loadMoreBtn.style.display = 'none';
        appendCards(cardsToRender);
    }
}

// helper function to append cards html
function appendCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        cardsContainer.innerHTML += card;
    }
}

// function that is called on click of Tab Title
function setActive(type, element) {
    console.log(type, element);

    // check if element that is clicked on, already contains 'active' class;
    let isActive = element.classList.contains('active');

    // select active item to remove his 'active' class
    let myActiveItem = document.querySelector('.projects-nav li.active');

    // make sure that you have found active li
    if (myActiveItem) {
        myActiveItem.classList.remove('active');
    }

    // select list items for further use in switch cas
    let myListItems = document.querySelectorAll('.projects-nav li');

    cardsContainer.innerHTML = '';
    // execute different code depening od 'type' parameter
    switch (type) {
        case 'marketing':
            if (!isActive) {
                myListItems[0].classList.add('active');
                isActive = true;
                cardsToRender = allMarketingCards.slice();
                renderCards(allMarketingCards);
            } else {
                myListItems[0].classList.remove('active');
                isActive = false;
                cardsToRender = allCards.slice();
                renderCards(allCards);
            }
            break;
        case 'development':
            if (!isActive) {
                myListItems[1].classList.add('active');
                isActive = true;
                cardsToRender = allDeveloperCards.slice();
                renderCards(allDeveloperCards);
            } else {
                myListItems[1].classList.remove('active');
                isActive = false;
                cardsToRender = allCards.slice();
                renderCards(allCards);
            }
            break;
        case 'design':
            if (!isActive) {
                myListItems[2].classList.add('active');
                isActive = true;
                cardsToRender = allDesignerCards.slice();
                renderCards(allDesignerCards);
            } else {
                myListItems[2].classList.remove('active');
                isActive = false;
                cardsToRender = allCards.slice();
                renderCards(allCards);
            }
            break;
    }

}
