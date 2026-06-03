export default class BurgerMenu {
  constructor(config, headerFixedInstance = null) {
    this.config = config;
    this.burgerButton = document.querySelector(`.${this.config.BURGER}`);
    this.burgerMenu = document.querySelector(`.${this.config.HEADER_MENU}`);
    this.body = document.querySelector(`.${this.config.PAGE_BODY}`);
    this.headerFixedInstance = headerFixedInstance;
    this.main = document.querySelector(`.${this.config.MAIN}`);

    if (!this.burgerButton || !this.burgerMenu || !this.body) {
      throw new Error("Required DOM elements are missing.");
    }

    this.onBurgerClick = this.onBurgerClick.bind(this);
    this.onBodyClick = this.onBodyClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.initEvents();
    this.handleResize();
  }

  initEvents() {
    this.burgerButton.addEventListener("click", this.onBurgerClick);
    this.body.addEventListener("click", this.onBodyClick);

    this.body.addEventListener("touchstart", this.handleTouchStart);
    this.body.addEventListener("touchmove", this.handleTouchMove);
    this.body.addEventListener("touchend", this.handleTouchEnd);
    window.addEventListener("resize", this.handleResize);
  }

  isBurgerDisabled() {
    return window.innerWidth > this.config.BREAKPOINT;
  }

  onBurgerClick() {
    if (this.isBurgerDisabled()) {
      this.hideBurgerMenu();
      return;
    }

    const isOpen = this.burgerButton.classList.toggle(this.config.BURGER_OPEN);
    this.burgerButton.ariaLabel = isOpen
      ? this.config.lABEL.CLOSE
      : this.config.lABEL.OPEN;
    this.burgerButton.ariaExpanded = isOpen;
    this.burgerMenu.classList.toggle(this.config.HEADER_MENU_OPEN, isOpen);
    this.body.classList.toggle(this.config.PAGE_BODY_NO_SCROLL, isOpen);

    if (this.main) {
      this.main.style.pointerEvents = isOpen ? "none" : "";
    }

    if (this.headerFixedInstance) {
      if (isOpen) {
        this.headerFixedInstance.removeFixedClass();
      } else {
        this.headerFixedInstance.updateFixedClass();
      }
    }
  }

  handleResize() {
    const isDisabled = this.isBurgerDisabled();

    this.burgerButton.disabled = isDisabled;
    this.burgerButton.ariaDisabled = isDisabled;

    if (isDisabled) {
      this.hideBurgerMenu();
    }
  }

  hideBurgerMenu() {
    const wasOpen = this.isBurgerMenuOpen();
    this.burgerButton.classList.remove(this.config.BURGER_OPEN);
    this.burgerButton.ariaLabel = this.config.lABEL.OPEN;
    this.burgerButton.ariaExpanded = false;
    this.burgerMenu.classList.remove(this.config.HEADER_MENU_OPEN);
    this.body.classList.remove(this.config.PAGE_BODY_NO_SCROLL);

    if (this.main) {
      this.main.style.pointerEvents = "";
    }

    if (wasOpen && this.headerFixedInstance) {
      this.headerFixedInstance.updateFixedClass();
    }
  }

  isBurgerMenuOpen() {
    return this.burgerMenu.classList.contains(this.config.HEADER_MENU_OPEN);
  }

  onBodyClick(event) {
    const target = event.target;
    const isLinkInMenu = Boolean(
      target.closest(`.${this.config.HEADER_MENU} a`),
    );
    const isMenuOpen = this.isBurgerMenuOpen();
    const isClickOutsideMenu =
      !target.closest(`.${this.config.HEADER_MENU}`) &&
      !target.closest(`.${this.config.BURGER}`);

    if (isLinkInMenu || (isMenuOpen && isClickOutsideMenu)) {
      this.hideBurgerMenu();
    }
  }

  handleTouchStart(event) {
    if (!this.isBurgerMenuOpen()) return;
    this.touchStartX = event.changedTouches[0].screenX;
    this.burgerMenu.style.transition = "none";
  }

  handleTouchMove(event) {
    if (!this.isBurgerMenuOpen()) return;
    const currentX = event.changedTouches[0].screenX;
    const translateX = Math.min(0, currentX - this.touchStartX);
    this.burgerMenu.style.transform = `translateX(${translateX}px)`;
  }

  handleTouchEnd(event) {
    if (!this.isBurgerMenuOpen()) return;
    const touchEndX = event.changedTouches[0].screenX;
    const swipeDistance = touchEndX - this.touchStartX;

    this.burgerMenu.style.transition = "";
    this.burgerMenu.style.transform = "";

    if (swipeDistance < -70) {
      this.hideBurgerMenu();
    }
  }
}
