const tabsFunc = () => {
  const tabs = document.querySelectorAll(".card-detail__change");
  const tabsTitle = document.querySelector(".card-details__title");
  const tabsPrice = document.querySelector(".card-details__price");
  const tabsImage = document.querySelector(".card__image_item");
  const pageTitle = document.querySelector('title');

  const tabOptions = [
    {
      name: "Graphite",
      memory: "128",
      price: 60000,
      image: "img/iPhone-graphite.webp",
      title: 'iPhone13 Pro Graphite'
    },
    {
      name: "Silver",
      memory: "256",
      price: 65000,
      image: "img/iPhone-silver.webp",
      title: 'iPhone13 Pro Silver'
    },
    {
      name: "Sierra Blue",
      memory: "512",
      price: 70000,
      image: "img/iPhone-sierra_blue.webp",
      title: 'iPhone13 Pro Sierra Blue'
    },
  ];

  const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[index].memory}GB ${tabOptions[index].name}`;
    tabsPrice.textContent = `${tabOptions[index].price}грн`;
    tabsImage.setAttribute("src", tabOptions[index].image);
    pageTitle.textContent = tabOptions[index].title;
  };

  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");
      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });
    changeContent(indexClickedTab);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      changeActiveTabs(index);
    });
  });

  changeContent(0);
};

tabsFunc()