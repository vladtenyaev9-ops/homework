const reviewSection = document.querySelector('.review__section');
const reviewList = reviewSection?.querySelector('.review__article-wrapper');
const showMoreButton = reviewSection?.querySelector('.review__show-more');
const hideCommentsButton = reviewSection?.querySelector('.review__hide-comments');
const modal = document.getElementById('block');
const closeButton = document.getElementById('close');
const sliderImg = document.getElementById('slider-img');
const sliderCount = document.getElementById('slider-count');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let sliderImages = [];
let currentImageIndex = 0;

const getReviewImages = (review) => {
  return [...review.querySelectorAll('.review__comment-image')].map((image) => ({
    src: image.currentSrc || image.src,
    alt: image.alt || 'Фото из отзыва',
  }));
};

const updateSlider = () => {
  const currentImage = sliderImages[currentImageIndex];

  if (!currentImage) {
    return;
  }

  sliderImg.src = currentImage.src;
  sliderImg.alt = currentImage.alt;
  sliderCount.textContent = `${currentImageIndex + 1} / ${sliderImages.length}`;
};

const openSlider = (clickedImage) => {
  const review = clickedImage.closest('.review__article');
  sliderImages = getReviewImages(review);
  currentImageIndex = sliderImages.findIndex((image) => image.src === (clickedImage.currentSrc || clickedImage.src));

  if (currentImageIndex === -1) {
    currentImageIndex = 0;
  }

  updateSlider();
  modal.classList.remove('review__block-hidden');
  document.body.classList.add('no-scroll');
};

const closeSlider = () => {
  modal.classList.add('review__block-hidden');
  document.body.classList.remove('no-scroll');
};

const showNextImage = () => {
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  updateSlider();
};

const showPrevImage = () => {
  currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
  updateSlider();
};

const showAllReviewPhotos = (button) => {
  const review = button.closest('.review__article');
  const hiddenPhotos = review.querySelectorAll('.review__comment-picture--hidden');
  const hidePhotosButton = review.querySelector('.review__comment-button--hide');

  hiddenPhotos.forEach((photo) => {
    photo.classList.remove('review__comment-picture--hidden');
    photo.dataset.openedByButton = 'true';
  });

  button.hidden = true;
  hidePhotosButton.hidden = false;
};

const hideAllReviewPhotos = (button) => {
  const review = button.closest('.review__article');
  const openedPhotos = review.querySelectorAll('[data-opened-by-button="true"]');
  const showPhotosButton = review.querySelector('.review__comment-button:not(.review__comment-button--hide)');

  openedPhotos.forEach((photo) => {
    photo.classList.add('review__comment-picture--hidden');
    delete photo.dataset.openedByButton;
  });

  button.hidden = true;
  showPhotosButton.hidden = false;
};

const createReview = ({ name, title, text, date }) => {
  const article = document.createElement('article');
  article.className = 'review__article';
  article.innerHTML = `
    <div class="review__info">
      <p class="review__info-name">${name}</p>
      <img
        class="review__five-stars"
        src="./icons/stars.svg"
        alt="Пять звезд"
      />
    </div>
    <div class="review__comment">
      <h3 class="review__comment-title">${title}</h3>
      <p class="review__comment-text">${text}</p>
      <div class="review__comment-images-box">
        <picture class="review__comment-picture">
          <source
            srcset="./images/reviews/dyson-img.webp"
            type="image/webp"
          />
          <img
            class="review__comment-image"
            src="./images/reviews/dyson-img.png"
            alt="Фен Dyson"
          />
        </picture>
        <picture class="review__comment-picture review__comment-picture--hidden">
          <source
            srcset="./images/reviews/dyson-img.webp"
            type="image/webp"
          />
          <img
            class="review__comment-image"
            src="./images/reviews/dyson-img.png"
            alt="Фен Dyson"
          />
        </picture>
      </div>
      <button class="review__comment-button" type="button">Смотреть все фото</button>
      <button class="review__comment-button review__comment-button--hide" type="button" hidden>Скрыть все фото</button>
    </div>
    <time class="review__article-date" datetime="${date}">${date.split('-').reverse().join('/')}</time>
  `;

  return article;
};

const extraReviews = [
  {
    name: 'Марина',
    title: 'Очень удобно каждый день',
    text: 'Сушит волосы быстро, насадки держатся крепко, после укладки волосы выглядят гладкими и не пушатся.',
    date: '2022-05-22',
  },
  {
    name: 'Алексей',
    title: 'Подарок понравился',
    text: 'Покупал в подарок. Упаковка аккуратная, сам фен легкий, мощный и выглядит очень качественно.',
    date: '2022-05-23',
  },
  {
    name: 'Екатерина',
    title: 'Стоит своих денег',
    text: 'Понравилось, что можно быстро менять режимы. Волосы после сушки мягкие, пользоваться приятно.',
    date: '2022-05-24',
  },
];

const showMoreReviews = () => {
  extraReviews.forEach((review) => {
    const reviewElement = createReview(review);
    reviewElement.classList.add('review__article--extra');
    reviewList.append(reviewElement);
  });

  showMoreButton.hidden = true;
  hideCommentsButton.hidden = false;
};

const hideExtraReviews = () => {
  reviewList.querySelectorAll('.review__article--extra').forEach((review) => {
    review.remove();
  });

  hideCommentsButton.hidden = true;
  showMoreButton.hidden = false;
};

reviewSection?.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('.review__comment-image');
  const photoButton = event.target.closest('.review__comment-button');

  if (clickedImage) {
    openSlider(clickedImage);
    return;
  }

  if (photoButton) {
    if (photoButton.classList.contains('review__comment-button--hide')) {
      hideAllReviewPhotos(photoButton);
      return;
    }

    showAllReviewPhotos(photoButton);
  }
});

showMoreButton?.addEventListener('click', showMoreReviews);
hideCommentsButton?.addEventListener('click', hideExtraReviews);
closeButton?.addEventListener('click', closeSlider);
nextButton?.addEventListener('click', showNextImage);
prevButton?.addEventListener('click', showPrevImage);

modal?.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeSlider();
  }
});

document.addEventListener('keydown', (event) => {
  if (modal.classList.contains('review__block-hidden')) {
    return;
  }

  if (event.key === 'Escape') {
    closeSlider();
  }

  if (event.key === 'ArrowRight') {
    showNextImage();
  }

  if (event.key === 'ArrowLeft') {
    showPrevImage();
  }
});
