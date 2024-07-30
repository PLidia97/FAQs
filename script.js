const dataArray = [
  {
    title: "Why is JavaScript cool?",
    detail:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus fuga, a corrupti sequi debitis doloribus id eos maxime adipisci accusamus reprehenderit non inventore ducimus, consequatur cum repellendus illum nihil!",
  },
  {
    title: "What is JavaScript cool?",
    detail:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus fuga, a corrupti sequi debitis doloribus id eos maxime adipisci accusamus reprehenderit non inventore ducimus, consequatur cum repellendus illum nihil!",
  },
  {
    title: "How can I learn JavaScript?",
    detail:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus fuga, a corrupti sequi debitis doloribus id eos maxime adipisci accusamus reprehenderit non inventore ducimus, consequatur cum repellendus illum nihil!",
  },
];

const makeHTML = (data) => {
  return `<details>
<summary>${data.title}</summary>
<p>${data.detail}</p>
</details>`;
};

const containerEl = document.getElementById("faq-container");

containerEl.innerHTML = dataArray
  .map((dataItem) => makeHTML(dataItem))
  .join("");
