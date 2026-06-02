const offersSection = document.querySelector(".offers__section");

if (offersSection) {
  const products = [
    {
      title:
        "Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческамия",
      category: "dyson стайлер для длинных волос",
      image: "offers-1-img",
      price: 59990,
      oldPrice: 69990,
      discount: "-15%",
      rating: 4.9,
      date: 6,
      popularity: 98,
    },
    {
      title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
      category: "dyson стайлер красный",
      image: "offers-2-img",
      price: 47990,
      oldPrice: 51990,
      discount: "-15%",
      rating: 4.8,
      date: 5,
      popularity: 94,
    },
    {
      title:
        "Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень",
      category: "dyson hs01 airwrap compliete",
      image: "offers-3-img",
      price: 46990,
      oldPrice: 51990,
      discount: "-15%",
      rating: 4.7,
      date: 4,
      popularity: 88,
    },
    {
      title: "Фен-щетка Dyson Airwrap Complete Long с набором насадок",
      category: "фен щетка дайсон",
      image: "offers-1-img",
      price: 62990,
      oldPrice: 71990,
      discount: "-13%",
      rating: 4.9,
      date: 3,
      popularity: 91,
    },
    {
      title: "Стайлер Dyson Airwrap HS05 Complete Long медный никель",
      category: "dyson стайлер для длинных волос",
      image: "offers-2-img",
      price: 57990,
      oldPrice: 64990,
      discount: "-11%",
      rating: 4.6,
      date: 10,
      popularity: 84,
    },
    {
      title: "Стайлер Dyson Airwrap красный с дорожным чехлом",
      category: "dyson стайлер красный",
      image: "offers-3-img",
      price: 54990,
      oldPrice: 59990,
      discount: "-8%",
      rating: 4.5,
      date: 9,
      popularity: 82,
    },
    {
      title: "Dyson HS01 Airwrap Complete для укладки и сушки волос",
      category: "dyson hs01 airwrap compliete",
      image: "offers-1-img",
      price: 43990,
      oldPrice: 48990,
      discount: "-10%",
      rating: 4.4,
      date: 8,
      popularity: 76,
    },
    {
      title: "Фен-щетка Dyson с круглыми насадками и кейсом",
      category: "фен щетка дайсон",
      image: "offers-2-img",
      price: 39990,
      oldPrice: 45990,
      discount: "-13%",
      rating: 4.3,
      date: 7,
      popularity: 72,
    },
    {
      title: "Выпрямитель Dyson Corrale фуксия никель",
      category: "выпрямитель dyson",
      image: "offers-3-img",
      price: 44990,
      oldPrice: 52990,
      discount: "-15%",
      rating: 4.8,
      date: 2,
      popularity: 86,
    },
    {
      title: "Фен Dyson Supersonic HD15 с насадкой Flyaway",
      category: "фен dyson supersonic",
      image: "offers-1-img",
      price: 52990,
      oldPrice: 59990,
      discount: "-12%",
      rating: 4.9,
      date: 1,
      popularity: 96,
    },
    {
      title: "Стайлер Dyson Airwrap Origin для коротких волос",
      category: "dyson airwrap origin",
      image: "offers-2-img",
      price: 49990,
      oldPrice: 55990,
      discount: "-11%",
      rating: 4.2,
      date: 12,
      popularity: 70,
    },
    {
      title: "Фен Dyson Supersonic Professional Edition",
      category: "фен dyson supersonic",
      image: "offers-3-img",
      price: 66990,
      oldPrice: 74990,
      discount: "-11%",
      rating: 4.7,
      date: 11,
      popularity: 89,
    },
    {
      title: "Выпрямитель Dyson Corrale черный никель с подставкой",
      category: "выпрямитель dyson",
      image: "offers-1-img",
      price: 48990,
      oldPrice: 54990,
      discount: "-11%",
      rating: 4.6,
      date: 13,
      popularity: 78,
    },
    {
      title: "Стайлер Dyson Airwrap Complete Long яркий медный",
      category: "dyson airwrap origin",
      image: "offers-2-img",
      price: 58990,
      oldPrice: 67990,
      discount: "-13%",
      rating: 4.5,
      date: 14,
      popularity: 80,
    },
    {
      title:
        "Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческамия",
      category: "dyson стайлер для длинных волос",
      image: "offers-1-img",
      price: 59990,
      oldPrice: 69990,
      discount: "-15%",
      rating: 4.9,
      date: 15,
      popularity: 97,
    },
    {
      title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
      category: "dyson стайлер красный",
      image: "offers-2-img",
      price: 47990,
      oldPrice: 51990,
      discount: "-15%",
      rating: 4.8,
      date: 16,
      popularity: 93,
    },
    {
      title:
        "Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень",
      category: "dyson hs01 airwrap compliete",
      image: "offers-3-img",
      price: 46990,
      oldPrice: 51990,
      discount: "-15%",
      rating: 4.7,
      date: 17,
      popularity: 87,
    },
    {
      title: "Фен-щетка Dyson Airwrap Complete Long с набором насадок",
      category: "фен щетка дайсон",
      image: "offers-1-img",
      price: 62990,
      oldPrice: 71990,
      discount: "-13%",
      rating: 4.9,
      date: 18,
      popularity: 90,
    },
    {
      title: "Стайлер Dyson Airwrap HS05 Complete Long медный никель",
      category: "dyson стайлер для длинных волос",
      image: "offers-2-img",
      price: 57990,
      oldPrice: 64990,
      discount: "-11%",
      rating: 4.6,
      date: 19,
      popularity: 83,
    },
    {
      title: "Стайлер Dyson Airwrap красный с дорожным чехлом",
      category: "dyson стайлер красный",
      image: "offers-3-img",
      price: 54990,
      oldPrice: 59990,
      discount: "-8%",
      rating: 4.5,
      date: 20,
      popularity: 81,
    },
    {
      title: "Dyson HS01 Airwrap Complete для укладки и сушки волос",
      category: "dyson hs01 airwrap compliete",
      image: "offers-1-img",
      price: 43990,
      oldPrice: 48990,
      discount: "-10%",
      rating: 4.4,
      date: 21,
      popularity: 75,
    },
    {
      title: "Фен-щетка Dyson с круглыми насадками и кейсом",
      category: "фен щетка дайсон",
      image: "offers-2-img",
      price: 39990,
      oldPrice: 45990,
      discount: "-13%",
      rating: 4.3,
      date: 22,
      popularity: 71,
    },
    {
      title: "Выпрямитель Dyson Corrale фуксия никель",
      category: "выпрямитель dyson",
      image: "offers-3-img",
      price: 44990,
      oldPrice: 52990,
      discount: "-15%",
      rating: 4.8,
      date: 23,
      popularity: 85,
    },
    {
      title: "Фен Dyson Supersonic HD15 с насадкой Flyaway",
      category: "фен dyson supersonic",
      image: "offers-1-img",
      price: 52990,
      oldPrice: 59990,
      discount: "-12%",
      rating: 4.9,
      date: 24,
      popularity: 95,
    },
    {
      title: "Стайлер Dyson Airwrap Origin для коротких волос",
      category: "dyson airwrap origin",
      image: "offers-2-img",
      price: 49990,
      oldPrice: 55990,
      discount: "-11%",
      rating: 4.2,
      date: 25,
      popularity: 69,
    },
    {
      title: "Фен Dyson Supersonic Professional Edition",
      category: "фен dyson supersonic",
      image: "offers-3-img",
      price: 66990,
      oldPrice: 74990,
      discount: "-11%",
      rating: 4.7,
      date: 26,
      popularity: 88,
    },
    {
      title: "Выпрямитель Dyson Corrale черный никель с подставкой",
      category: "выпрямитель dyson",
      image: "offers-1-img",
      price: 48990,
      oldPrice: 54990,
      discount: "-11%",
      rating: 4.6,
      date: 27,
      popularity: 77,
    },
    {
      title: "Стайлер Dyson Airwrap Complete Long яркий медный",
      category: "dyson airwrap origin",
      image: "offers-2-img",
      price: 58990,
      oldPrice: 67990,
      discount: "-13%",
      rating: 4.5,
      date: 28,
      popularity: 79,
    },
  ];

  const sortOptions = [
    { text: "Сначала популярные", value: "popular" },
    { text: "Сначала дешёвые", value: "cheap" },
    { text: "Сначала дорогие", value: "expensive" },
    { text: "Новинки", value: "new" },
    { text: "Высокий рейтинг", value: "rating" },
  ];

  const list = offersSection.querySelector(".offers__list");
  const count = offersSection.querySelector(".offers__title-accent");
  const chooseList = offersSection.querySelector(".offers__choose-list");
  const chooseButton = offersSection.querySelector(".offers__choose-button");
  const filter = offersSection.querySelector(".offers__filter");
  const filterButton = offersSection.querySelector(".offers__filter-button");
  const pagination = offersSection.querySelector(".offers__pagination");
  const cartCounter = document.querySelector(".header__cart-quantity");
  const allCategoriesName = "все категории";
  const categories = [
    allCategoriesName,
    ...new Set(products.map((product) => product.category)),
  ];
  const firstCategoriesCount = 5;
  const productsPerPage = 6;

  let activeCategory = allCategoriesName;
  let currentSort = "popular";
  let currentPage = 1;
  let categoriesOpen = false;
  let cartTotal = Number(cartCounter?.textContent) || 0;

  const formatPrice = (price) =>
    `${price.toLocaleString("ru-RU").replace(/\u00a0/g, " ")} Р`;

  const getVisibleProducts = () => {
    const filtered =
      activeCategory === allCategoriesName
        ? products
        : products.filter((product) => product.category === activeCategory);

    return [...filtered].sort((a, b) => {
      if (currentSort === "cheap") return a.price - b.price;
      if (currentSort === "expensive") return b.price - a.price;
      if (currentSort === "new") return a.date - b.date;
      if (currentSort === "rating") return b.rating - a.rating;
      return b.popularity - a.popularity;
    });
  };

  const createCategory = (category) => {
    const item = document.createElement("li");
    const link = document.createElement("a");

    item.className = "offers__choose-item";
    link.className = "offers__choose-link";
    link.href = "";
    link.textContent = category;

    if (category === activeCategory) {
      item.classList.add("offers__choose-item--active");
    }

    link.addEventListener("click", (event) => {
      event.preventDefault();
      activeCategory = category;
      currentPage = 1;
      renderOffers();
    });

    item.append(link);

    return item;
  };

  const createCard = (product) => {
    const article = document.createElement("article");

    article.className = "offers__list-item";
    article.innerHTML = `
      <picture class="offers__list-image-box">
        <source srcset="./images/offers/${product.image}.webp" type="image/webp" />
        <img class="offers__list-image" src="./images/offers/${product.image}.png" width="448" height="448" alt="Фен Dyson и пренодлежности" />
      </picture>
      <div class="offers__item-info">
        <h2 class="offers__item-title">${product.title}</h2>
        <div class="offers__add-info">
          <p class="offers__stock">В наличии</p>
          <div class="offers__discount">${product.discount}</div>
        </div>
        <div class="offers__price">
          <div class="offers__price-now">${formatPrice(product.price)}</div>
          <div class="offers__price-before">${formatPrice(product.oldPrice)}</div>
        </div>
      </div>
      <div class="offers__cart-box">
        <div class="offers__cart-quantity">
          <button class="offers__quantity-minus" type="button" aria-label="Уменьшить количество">
            <svg width="20" height="20">
              <use href="./icons/main-sprite.svg#minus"></use>
            </svg>
          </button>
          <p class="offers__quantity-value">1</p>
          <button class="offers__quantity-plus" type="button" aria-label="Увеличить количество">
            <svg width="20" height="20">
              <use href="./icons/main-sprite.svg#plus"></use>
            </svg>
          </button>
        </div>
        <button class="offers__cart-add" type="button">В корзину</button>
      </div>
    `;

    return article;
  };

  const renderCategories = () => {
    const visibleCategories = categoriesOpen
      ? categories
      : categories.slice(0, firstCategoriesCount);

    chooseList.replaceChildren(...visibleCategories.map(createCategory));
    chooseButton.textContent = categoriesOpen ? "Скрыть" : "Показать еще";
  };

  const renderPagination = (totalPages) => {
    pagination.innerHTML = `
      <button class="offers__pagination-button" type="button" data-page="prev" aria-label="Предыдущая страница" ${currentPage === 1 ? "disabled" : ""}><svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.49954 16.0344L33.2505 15.7074C33.8028 15.7013 34.2455 15.2487 34.2395 14.6965C34.2334 14.1442 33.7808 13.7014 33.2285 13.7075L3.3322 14.0361L14.912 1.68395C15.2897 1.28103 15.2693 0.64819 14.8663 0.270468C14.4634 -0.107255 13.8306 -0.086829 13.4529 0.31609L0.270387 14.3779C-0.107335 14.7808 -0.0869094 15.4137 0.31601 15.7914L15.0205 29.5763C15.4234 29.9541 16.0563 29.9336 16.434 29.5307C16.8117 29.1278 16.7913 28.495 16.3884 28.1172L3.49954 16.0344Z" fill="#111111" />
</svg></button>
      <button class="offers__pagination-button" type="button" data-page="next" aria-label="Следующая страница" ${currentPage === totalPages ? "disabled" : ""}><svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.74 16.0344L0.98898 15.7074C0.436728 15.7013 -0.00603869 15.2487 3.19817e-05 14.6965C0.00610265 14.1442 0.458713 13.7014 1.01096 13.7075L30.9073 14.0361L19.3275 1.68395C18.9498 1.28103 18.9702 0.64819 19.3732 0.270468C19.7761 -0.107255 20.4089 -0.086829 20.7866 0.31609L33.9691 14.3779C34.3468 14.7808 34.3264 15.4137 33.9235 15.7914L19.219 29.5763C18.8161 29.9541 18.1832 29.9336 17.8055 29.5307C17.4278 29.1278 17.4482 28.495 17.8511 28.1172L30.74 16.0344Z" fill="#111111" />
</svg></button>
      <span class="offers__pagination-count">${currentPage} из ${totalPages}</span>
    `;
  };

  const renderProducts = () => {
    const visibleProducts = getVisibleProducts();
    const totalPages = Math.max(
      Math.ceil(visibleProducts.length / productsPerPage),
      1,
    );
    const start = (currentPage - 1) * productsPerPage;
    const currentProducts = visibleProducts.slice(
      start,
      start + productsPerPage,
    );

    count.textContent = visibleProducts.length;
    list.replaceChildren(...currentProducts.map(createCard));
    renderPagination(totalPages);
  };

  const renderFilter = () => {
    const openedList = filter.querySelector(".offers__filter-list");

    if (openedList) {
      openedList.remove();
      filter.classList.remove("offers__filter--open");
      return;
    }

    const options = document.createElement("div");
    options.className = "offers__filter-list";

    sortOptions.forEach((option) => {
      const button = document.createElement("button");
      button.className = "offers__filter-option";
      button.type = "button";
      button.textContent = option.text;

      if (option.value === currentSort) {
        button.classList.add("offers__filter-option--active");
      }

      button.addEventListener("click", () => {
        currentSort = option.value;
        currentPage = 1;
        filterButton.textContent = option.text;
        renderProducts();
        renderFilter();
      });

      options.append(button);
    });

    filter.classList.add("offers__filter--open");
    filter.append(options);
  };

  const renderOffers = () => {
    renderCategories();
    renderProducts();
  };

  chooseButton.addEventListener("click", () => {
    categoriesOpen = !categoriesOpen;
    renderCategories();
  });

  filter.addEventListener("click", (event) => {
    if (!event.target.closest(".offers__filter-option")) {
      renderFilter();
    }
  });

  pagination.addEventListener("click", (event) => {
    const button = event.target.closest(".offers__pagination-button");
    const totalPages = Math.max(
      Math.ceil(getVisibleProducts().length / productsPerPage),
      1,
    );

    if (!button) return;
    if (button.dataset.page === "prev" && currentPage > 1) currentPage -= 1;
    if (button.dataset.page === "next" && currentPage < totalPages)
      currentPage += 1;
    renderProducts();
  });

  list.addEventListener("click", (event) => {
    const card = event.target.closest(".offers__list-item");
    const quantity = card?.querySelector(".offers__quantity-value");

    if (!card || !quantity) return;

    if (event.target.closest(".offers__quantity-minus")) {
      quantity.textContent = Math.max(Number(quantity.textContent) - 1, 1);
    }

    if (event.target.closest(".offers__quantity-plus")) {
      quantity.textContent = Number(quantity.textContent) + 1;
    }

    if (event.target.closest(".offers__cart-add")) {
      const cartButton = event.target.closest(".offers__cart-add");

      cartTotal += Number(quantity.textContent);
      if (cartCounter) cartCounter.textContent = cartTotal;

      cartButton.textContent = "В корзину";
      cartButton.classList.add("offers__cart-add--success");
      cartButton.disabled = true;

      setTimeout(() => {
        cartButton.textContent = "В корзину";
        cartButton.classList.remove("offers__cart-add--success");
        cartButton.disabled = false;
      }, 2000);
    }
  });

  document.addEventListener("click", (event) => {
    if (!filter.contains(event.target)) {
      filter.querySelector(".offers__filter-list")?.remove();
      filter.classList.remove("offers__filter--open");
    }
  });

  renderOffers();
}
