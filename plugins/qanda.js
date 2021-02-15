const _createQanda = (options) => {
  const item = document.createElement("div");
  item.classList.add("qanda_item");
  item.dataset.btn = "show-answer";
  item.insertAdjacentHTML(
    "afterbegin",
    `   
        <div class="qanda_cover" data-id = ${options.id}></div>
        <span class="qanda_question">${options.question}</span>
        <p class="qanda_text">${options.text}</p>
  `
  );
  document.getElementById("qanda_container").append(item);
  return item;
};

$.qanda = function (options) {
  const $qanda = _createQanda(options);

  const item = document.getElementsByClassName("qanda_item");
  const cover = document.getElementsByClassName("qanda_cover");

  const listener = (e) => {
    if (e.target.className === "qanda_cover") {
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("active");
        cover[i].classList.remove("active");
      }
      qanda.open(+e.target.dataset.id);
    } else if (e.target.className === "qanda_cover active") {
      qanda.close(+e.target.dataset.id);
    }
  };

  const qanda = {
    open(id) {
      $qanda.classList.add("active");
      cover[id - 1].classList.add("active");
    },
    close(id) {
      cover[id - 1].classList.remove("active");
      $qanda.classList.remove("active");
    },
  };

  $qanda.addEventListener("click", listener);

  return qanda;
};
