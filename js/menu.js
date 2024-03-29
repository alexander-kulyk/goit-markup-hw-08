(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const bodyNoScroll = document.querySelector("[data-nonScroll]");
  
    menuBtnRef.addEventListener("click", () => {
      console.log('menu js');
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
      bodyNoScroll.classList.toggle("no-scroll") 
    });
  })();