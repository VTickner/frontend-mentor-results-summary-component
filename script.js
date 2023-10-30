const card = document.querySelector(".card--summary");

if (card) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((obj) => {
        const category = obj.category;
        const score = obj.score;
        const icon = obj.icon;

        const container = document.createElement("div");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const actualScore = document.createElement("span");
        const totalScore = document.createElement("span");

        container.classList.add(
          "group",
          `group--${category.toLowerCase()}`,
          "flex"
        );
        div.classList.add("group__icon-title", "flex");
        img.src = icon;
        img.alt = `${category.toLowerCase()} icon`;
        h3.classList.add(
          "group__title",
          `group__title--${category.toLowerCase()}`
        );
        h3.textContent = category;
        actualScore.textContent = `${score} / `;
        totalScore.classList.add("group__score");
        totalScore.textContent = "100";

        p.append(actualScore);
        p.append(totalScore);
        div.append(img);
        div.append(h3);
        container.append(div);
        container.append(p);
        card.insertBefore(container, card.querySelector(".btn"));
      });
    });
}
