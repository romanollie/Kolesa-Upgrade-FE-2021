import '../scss/style.scss';

// let currentCategory = null;
const catalog = document.querySelector('.js__catalog');
const buttonAll = document.querySelector('.js__input--all');
const buttonClothes = document.querySelector('.js__input--clothes');
const buttonAccessories = document.querySelector('.js__input--accessories');
const modalContainer = document.querySelector('.js__pop');
const clothes = [
    {
        id:    0,
        title: 'Зеленая рубашка',
        price: 100,
        isNew: false,
        img:   'images/mainpage/tshirt--green.svg',
        alt:   'Зеленая рубашка',
        type:  'clothes',
    },
    {
        id:    1,
        title: 'Зеленый свитер',
        price: 300,
        isNew: false,
        img:   'images/mainpage/sweater--green.svg',
        alt:   'Зеленый свитер',
        type:  'clothes',
    },
    {
        id:    2,
        title: 'Белая рубашка',
        price: 110,
        isNew: false,
        img:   'images/mainpage/tshirt--white.svg',
        alt:   'Белая рубашка',
        type:  'clothes',
    },
    {
        id:    3,
        title: 'Белые джинсы',
        price: 220,
        isNew: false,
        img:   'images/mainpage/trousers--white.svg',
        alt:   'Белые джинсы',
        type:  'clothes',
    },
    {
        id:    4,
        title: 'Синие джинсы',
        price: 270,
        isNew: false,
        img:   'images/mainpage/trousers--blue.svg',
        alt:   'Синие джинсы',
        type:  'clothes',
    },
    {
        id:    5,
        title: 'Белый халат',
        price: 400,
        isNew: false,
        img:   'images/mainpage/coat--white.svg',
        alt:   'Белый халат',
        type:  'clothes',
    },
];

const accessories = [
    {
        id:    6,
        title: 'Бутылка для воды',
        price: 50,
        isNew: false,
        img:   'images/mainpage/bottle.svg',
        alt:   'Бутылка для воды',
        type:  'accessories',
    },
    {
        id:    7,
        title: 'Зеленая сумка',
        price: 450,
        isNew: false,
        img:   'images/mainpage/bag--green.svg',
        alt:   'Зеленая сумка',
        type:  'accessories',
    },
    {
        id:    8,
        title: 'Красный шарф',
        price: 140,
        isNew: false,
        img:   'images/mainpage/scarf--red.svg',
        alt:   'Красный шарф',
        type:  'accessories',
    },
    {
        id:    9,
        title: 'Белый шарф',
        price: 115,
        isNew: false,
        img:   'images/mainpage/scarf--white.svg',
        alt:   'Белый шарф',
        type:  'accessories',
    },
    {
        id:    10,
        title: 'Синяя сумка',
        price: 470,
        isNew: false,
        img:   'images/mainpage/bag--blue.svg',
        alt:   'Синяя сумка',
        type:  'accessories',
    },
    {
        id:    11,
        title: 'Наушники',
        price: 700,
        isNew: false,
        img:   'images/mainpage/headphones.svg',
        alt:   'Наушники',
        type:  'accessories',
    },
];

const makeProductCard = (title, price, img, alt, type, id) => `
<div data-id="${id}" class="catalog__card card js__card ${type}">
    <img class="card__img" src="${img}" width="330px" height="330px" alt="${alt}">
    <p class="card__points">${price} баллов</p>
    <p class="card__description">${title}</p>
    <p class="card__sizes">Размеры S/M/L</p>
    <div class="card__hidden">
        <button class="card__button">Заказать</button>
    </div>
</div>`;

clothes.forEach((card) => {
    const {
        title, price, img, alt, type, id,
    } = card;
    const cardHtml = makeProductCard(title, price, img, alt, type, id);

    catalog.innerHTML += cardHtml;
});

accessories.forEach((card) => {
    const {
        title, price, img, alt, type, id,
    } = card;
    const cardHtml = makeProductCard(title, price, img, alt, type, id);

    catalog.innerHTML += cardHtml;
});

const allCards = document.querySelectorAll('.js__card');
const clothesList = document.querySelectorAll('.clothes');
const accessoriesList = document.querySelectorAll('.accessories');

buttonClothes.addEventListener('click', () => {
    // currentCategory = 'clothes';

    accessoriesList.forEach((element) => {
        if (element.classList.contains('accessories')) {
            element.style.display = 'none';
        }
    });
    clothesList.forEach((element) => {
        if (element.classList.contains('clothes')) {
            element.style.display = 'block';
        }
    });
});

buttonAccessories.addEventListener('click', () => {
    // currentCategory = 'accessories';

    accessoriesList.forEach((element) => {
        if (element.classList.contains('accessories')) {
            element.style.display = 'block';
        }
    });
    clothesList.forEach((element) => {
        if (element.classList.contains('clothes')) {
            element.style.display = 'none';
        }
    });
});

buttonAll.addEventListener('click', () => {
    // currentCategory = 'allThings';

    accessoriesList.forEach((element) => {
        if (element.classList.contains('accessories')) {
            element.style.display = 'block';
        }
    });
    clothesList.forEach((element) => {
        if (element.classList.contains('clothes')) {
            element.style.display = 'block';
        }
    });
});

// MODAL WINDOW

const openModal = () => {
    modalContainer.style.display = 'flex';
};

const createModal = (cardData) => {
    const {
        title, price, img, alt,
    } = cardData[0];
    const modalTitle = modalContainer.querySelector('.title');
    const modalPrice = modalContainer.querySelector('.price');
    const modalImg = modalContainer.querySelector('.js__modal-img');
    const modalDsc = modalContainer.querySelector('.modal__dsc');

    if (title) {
        modalTitle.textContent = title;
    }

    if (price) {
        modalPrice.textContent = `${price} баллов`;
    }

    if (img) {
        modalImg.src = img;
    }

    if (alt) {
        modalDsc.textContent = alt;
    }

    openModal();
};

allCards.forEach((card) => {
    card.addEventListener('click', () => {
        const cardId = card.dataset.id;

        if (cardId) {
            const cardData = clothes.filter(item => item.id === Number(cardId));

            createModal(cardData);
        }
    });
});

allCards.forEach((card) => {
    card.addEventListener('click', () => {
        const cardId = card.dataset.id;

        if (cardId) {
            const cardData = accessories.filter(item => item.id === Number(cardId));

            createModal(cardData);
        }
    });
});

const closeBtn = document.querySelector('.js__close-modal');

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});
