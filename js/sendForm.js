const sendForm = () => {
  const btnOpenModal = document.querySelector(".card-details__button_delivery");
  const cardTitle = document.querySelector(".card-details__title");
  const modal = document.querySelector(".modal");
  const modalTitle = modal.querySelector(".modal__title");
  const modalClose = modal.querySelector(".modal__close");
  const modalSubmit = modal.querySelector(".modal__submit");
  const modalForm = modal.querySelector("form");

  btnOpenModal.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = cardTitle.textContent;
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modalSubmit.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalForm.addEventListener("submit", (event) => {                         //повесили на модальное окно обработчик событий submit-отправка(и перезагружает страницу)
    event.preventDefault();                                                 //убираем перезагрузку страницы
    
    const labels = document.querySelectorAll(".modal__label");             // нашли все labels формы

    const sendMessage = {};                                                 //создали пустой объект

    labels.forEach((label) => {                                             //перебрали лейблы
      const span = label.querySelector("span");
      const input = label.querySelector("input");

      sendMessage[span.textContent] = input.value;                              //переписали значения чтобы при заполнении сохранялись данные, чтобы они перешли в (23)
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {                           //применили метод fetch
      method: "POST",                                                               // с методом пост передает аргументы
      body: JSON.stringify(sendMessage),                                              //объект превращает в строку и передаем что заполнили в форме
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
          console.log('Отправлено');
        })
        event.target.reset()                                            //после заполнения очищаем форму
  });
};

sendForm();