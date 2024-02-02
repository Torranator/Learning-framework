function createHeader(element) {
    let header = document.createElement("header");
    header.classList.add("header");
  
    let headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
  
    let logoLink = document.createElement("a");
    logoLink.classList.add("logo-link");
    logoLink.href = "/";
  
    let imgLogo = document.createElement("img");
    imgLogo.src = "darklogo.png";
  
    let headerLinks = document.createElement("nav");
    headerLinks.classList.add("header-links");
  
    let navList = document.createElement("ul");
    navList.classList.add("nav-list");
  
    let navItemTg = document.createElement("li");
    navItemTg.classList.add("nav-item");
  
    let aTg = document.createElement("a");
    aTg.classList.add("nav-link");
    aTg.href = "/";
    aTg.textContent = "💬 TG";
  
    let navItemVk = document.createElement("li");
    navItemVk.classList.add("nav-item");
  
    let aVk = document.createElement("a");
    aVk.classList.add("nav-link");
    aVk.href = "/";
    aVk.textContent = "😊 VK";
  
    let navItemYt = document.createElement("li");
    navItemYt.classList.add("nav-item");
  
    let aYt = document.createElement("a");
    aYt.classList.add("nav-link");
    aYt.href = "/";
    aYt.textContent = "📺 YouTube";
  
    navItemTg.append(aTg);
    navItemVk.append(aVk);
    navItemYt.append(aYt);
    navList.append(navItemTg, navItemVk, navItemYt);
    logoLink.append(imgLogo);
    headerLinks.append(navList);
    headerContainer.append(logoLink, headerLinks);
    header.append(headerContainer);
  
    element.prepend(header);
  }
  
  function createMenu(element) {
    let menu = document.createElement("menu");
    menu.classList.add("menu");
  
    let menuList = document.createElement("ul");
    menuList.classList.add("menu-list");
  
    let navItemNew = document.createElement("li");
    navItemNew.classList.add("nav-item");
    navItemNew.textContent = "Новые коллекции";
    let navItemMan = document.createElement("li");
    navItemMan.classList.add("nav-item");
    navItemMan.textContent = "Мужские";
    let navItemWoman = document.createElement("li");
    navItemWoman.classList.add("nav-item");
    navItemWoman.textContent = "Женские";
  
    menuList.append(navItemNew, navItemMan, navItemWoman);
    menu.append(menuList);
    element.append(menu);
  }
  
  function createMain(element) {
    let main = document.createElement("main");
    main.classList.add("main");
  
    let content = document.createElement("div");
    content.classList.add("content");
  
    let title = document.createElement("h1");
    title.textContent = "Коллекция. {октябрь:2023}";
  
    let sneakers = document.createElement("div");
    sneakers.classList.add("sneakers");
  
    content.append(title, sneakers);
    main.append(content);
  
    element.append(main);
  }
  
  function createSneakerCard(element, name, description, img) {
    let sneakerCard = document.createElement("div");
    sneakerCard.classList.add("sneaker");
  
    let imgSneaker = document.createElement("img");
    imgSneaker.classList.add("sneaker-image");
    imgSneaker.src = img;
  
    let sneakerInfo = document.createElement("div");
    sneakerInfo.classList.add("sneaker-info");
  
    let title = document.createElement("h3");
    title.textContent = name;
  
    let paragraph = document.createElement("p");
    title.textContent = description;
  
    sneakerInfo.append(title, paragraph);
    sneakerCard.append(imgSneaker, sneakerInfo);
  
    element.append(sneakerCard);
  }
  
  function createFooter(element) {
    let footer = document.createElement("footer");
    footer.classList.add("footer");
  
    let footerContent = document.createElement("div");
    footerContent.classList.add("footer-content");
  
    let logoLink = document.createElement("a");
    logoLink.classList.add("footer__logo-link");
    logoLink.href = "/";
  
    let imgLogo = document.createElement("img");
    logoLink.classList.add("footer__logo-image");
    imgLogo.src = "White logo.png";
  
    let footerLinks = document.createElement("nav");
    footerLinks.classList.add("footer-links");
  
    let navList = document.createElement("ul");
    navList.classList.add("nav-list");
  
    let navItemTg = document.createElement("li");
    navItemTg.classList.add("nav-item");
  
    let aTg = document.createElement("a");
    aTg.classList.add("nav-link");
    aTg.href = "/";
    aTg.textContent = "💬 TG";
  
    let navItemVk = document.createElement("li");
    navItemVk.classList.add("nav-item");
  
    let aVk = document.createElement("a");
    aVk.classList.add("nav-link");
    aVk.href = "/";
    aVk.textContent = "😊 VK";
  
    let navItemYt = document.createElement("li");
    navItemYt.classList.add("nav-item");
  
    let aYt = document.createElement("a");
    aYt.classList.add("nav-link");
    aYt.href = "/";
    aYt.textContent = "📺 YouTube";
  
    let copyright = document.createElement("div");
    copyright.classList.add("copyright");
  
    let copyrightText = document.createElement("p");
    copyrightText.classList.add("copyright-text");
    copyrightText.textContent = "КРОССЫ И ТОЧКА® 2023";
  
    navItemTg.append(aTg);
    navItemVk.append(aVk);
    navItemYt.append(aYt);
    navList.append(navItemTg, navItemVk, navItemYt);
    logoLink.append(imgLogo);
    footerLinks.append(navList);
    footerContent.append(logoLink, footerLinks);
    copyright.append(copyrightText);
    footer.append(footerContent, copyright);
  
    element.append(footer);
  }
  