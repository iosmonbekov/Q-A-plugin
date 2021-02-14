const arr = [
  {
    id: 1,
    question: "Question of Naruto ?",
    text:
      "	Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate, accusamus qui debitis molestiae, odit assumenda quo hic libero inventore eligendi et, ducimus corporis esse eius. Laborum pariatur consequuntur veroLorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate, accusamus qui debitis molestiae, odit assumenda quo hic libero inventore eligendi et, ducimus corporis esse eius. Laborum pariatur consequuntur vero.",
  },
  { id: 2, question: "Question ?", text: "Answer answer answer" },
  { id: 3, question: "Question ?", text: "Answer answer answer" },

  { id: 4, question: "Question ?", text: "Answer answer answer" },
  { id: 5, question: "Question ?", text: "Answer answer answer" },
  { id: 6, question: "Question ?", text: "Answer answer answer" },
];

arr.map((el) => $.qanda(el));

// function render() {
//   arr.map((el) => {
//     const qanda = $.qanda(el);
//     qanda_main.append(qanda);
//   });
// }

// render();

// document.addEventListener("click", (event) => {
//   event.preventDefault();
//   const text = document.getElementsByClassName("qanda_text");
//   const item = document.getElementsByClassName("qanda_item");

//   const id = +event.target.dataset.id;

//   if (event.target.dataset.btn === "show-answer") {
//     if (text[id - 1].classList[1] === "active") {
//       text[id - 1].classList.remove("active");
//       item[id - 1].classList.remove("active");
//     } else {
//       for (let i = 0; i < text.length; i++) {
//         if (text[i].classList[1] === "active") {
//           text[i].classList.remove("active");
//           item[i].classList.remove("active");
//         }
//       }
//       text[id - 1].classList.add("active");
//       item[id - 1].classList.add("active");
//     }
//   }
// });
