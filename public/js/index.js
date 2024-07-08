(() => {
  "use strict";

  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme) => {
    if (theme === "auto") {
      document.documentElement.setAttribute(
        "data-bs-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  setTheme(getPreferredTheme());

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector("#bd-theme");

    if (!themeSwitcher) {
      return;
    }

    const themeSwitcherText = document.querySelector("#bd-theme-text");
    const activeThemeIcon = document.querySelector(".theme-icon-active use");
    const btnToActive = document.querySelector(
      `[data-bs-theme-value="${theme}"]`
    );
    const svgOfActiveBtn = btnToActive
      .querySelector("svg use")
      .getAttribute("href");

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    });

    btnToActive.classList.add("active");
    btnToActive.setAttribute("aria-pressed", "true");
    activeThemeIcon.setAttribute("href", svgOfActiveBtn);
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
    themeSwitcher.setAttribute("aria-label", themeSwitcherLabel);

    if (focus) {
      themeSwitcher.focus();
    }
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    });

  window.addEventListener("DOMContentLoaded", () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        setStoredTheme(theme);
        setTheme(theme);
        showActiveTheme(theme, true);
      });
    });
  });
})();

AOS.init();
function sendMessage() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var whatsapp = "6289509758465";

  var url =
    "https://api.whatsapp.com/send?phone=" +
    whatsapp +
    "&text=Nama saya " +
    name +
    ". " +
    message;
  window.open(url);
}

document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://667c35de3c30891b865bc3d5.mockapi.io/admin";
  const cardContainer = document.getElementById("card-container");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const card = document.createElement("div");
        card.className = `col ${item.category.toLowerCase()}`;

        const cardContent = `
          <div class="card h-100 shadow bg-body-tertiary">
            <img src="${item.image}" class="card-img-top" loading="lazy" alt="${item.name}" />
            <div class="card-body me-2 ms-2">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
              <a class="btn btn-outline-success mt-3" href="${item.link}" role="button">View</a>
            </div>
          </div>
        `;

        card.innerHTML = cardContent;
        cardContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function filterCards(category) {
  const cards = document.querySelectorAll("#card-container .col");
  cards.forEach((card) => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      if (card.classList.contains(category.toLowerCase())) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

function getGreeting() {
  const now = new Date();
  const hours = now.getHours();

  let greeting;
  if (hours >= 5 && hours < 10) {
    greeting = "Good morning";
  } else if (hours >= 11 && hours < 15) {
    greeting = "Good afternoon";
  } else if (hours >= 16 && hours < 19) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  return greeting;
}

document.getElementById("greeting").innerText = getGreeting();

// document.addEventListener("contextmenu", (event) => {
//   alert ("Sorry this is a secret code")
//   event.preventDefault();
// });

const skills = [
  {
    imgSrc: "./public/assets/canva.png",
    imgAlt: "Canva_logo",
    title: "Canva",
  },
  {
    imgSrc: "./public/assets/figma.png",
    imgAlt: "Figma_logo",
    title: "Figma",
  },
  {
    imgSrc: "./public/assets/ai.png",
    imgAlt: "Adobe Illustrator_logo",
    title: "Adobe Illustrator",
  },
  {
    imgSrc: "./public/assets/html.png",
    imgAlt: "HTML_logo",
    title: "HTML",
  },
  {
    imgSrc: "./public/assets/css.png",
    imgAlt: "CSS_logo",
    title: "CSS",
  },
  {
    imgSrc: "./public/assets/Bootstrap.png",
    imgAlt: "Bootstrap_logo",
    title: "Bootstrap",
  },
  {
    imgSrc: "./public/assets/flutter.png",
    imgAlt: "Flutter_logo",
    title: "Flutter",
  },
  {
    imgSrc: "./public/assets/laravel.png",
    imgAlt: "Laravel_logo",
    title: "Laravel",
  },
  {
    imgSrc: "./public/assets/java.png",
    imgAlt: "Java_logo",
    title: "Java",
  },
];

const container = document.getElementById("skills-card");
skills.forEach((skill) => {
  const col = document.createElement("div");
  col.className = "col";
  col.id = "card-skill";

  const card = `
    <div class="card h-100 shadow">
      <img src="${skill.imgSrc}" class="card-img-top p-0" alt="${skill.imgAlt}" />
      <div class="card-body">
        <h5 class="card-title text-center">${skill.title}</h5>
      </div>
    </div>
  `;

  col.innerHTML = card;
  container.appendChild(col);
});
