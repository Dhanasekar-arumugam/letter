const pages = [
  {
    image: "assets/page1.jpg",
    alt: "Handwritten love letter page 1",
    sideText: "Every word here<br>comes straight<br>from my heart.",
  },
  {
    image: "assets/page2.jpg",
    alt: "Handwritten love letter page 2",
    sideText: "And every feeling<br>is something<br>I truly mean.",
  },
];

let currentPage = 0;

const openBtn = document.getElementById("openBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const replayBtn = document.getElementById("replayBtn");

const letterImage = document.getElementById("letterImage");
const pageIndicator = document.getElementById("pageIndicator");
const sidePage = document.getElementById("sidePage");
const sideText = document.getElementById("sideText");
const toast = document.getElementById("toast");

function showPage(index) {
  if (index < 0 || index >= pages.length) return;

  const paper = document.querySelector(".paper");

  paper.classList.remove("page-changing");

  void paper.offsetWidth;

  paper.classList.add("page-changing");

  currentPage = index;

  letterImage.src = pages[index].image;
  letterImage.alt = pages[index].alt;

  pageIndicator.textContent = `Page ${index + 1} of ${pages.length}`;

  sidePage.textContent = index + 1;

  sideText.innerHTML = pages[index].sideText;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pages.length - 1;

  if (index === pages.length - 1) {
    nextPageBtn.innerHTML = `See My Final Message <span>❤️</span>`;
  } else {
    nextPageBtn.innerHTML = `Next Page <span>→</span>`;
  }
}

/* OPEN LETTER */

openBtn.addEventListener("click", () => {
  document.getElementById("letter").scrollIntoView({
    behavior: "smooth",
  });

  showToast("A little message from my heart ❤️");
});

/* NEXT */

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
});

/* PREVIOUS */

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
});

/* NEXT PAGE BUTTON */

nextPageBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);

    document.getElementById("letter").scrollIntoView({
      behavior: "smooth",
    });
  } else {
    document.getElementById("ending").scrollIntoView({
      behavior: "smooth",
    });

    showToast("And this is the part I really wanted you to know ❤️");
  }
});

/* REPLAY */

replayBtn.addEventListener("click", () => {
  currentPage = 0;
  showPage(0);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  showToast("Let's read it again together ❤️");
});

/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.fontSize = Math.random() * 18 + 10 + "px";

  heart.style.animationDuration = Math.random() * 6 + 6 + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}

setInterval(createHeart, 900);

/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {
  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* =========================
   SWIPE SUPPORT
========================= */

let touchStartX = 0;

letterImage.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].screenX;
  },
  { passive: true },
);

letterImage.addEventListener(
  "touchend",
  (event) => {
    const touchEndX = event.changedTouches[0].screenX;

    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) < 50) return;

    if (difference > 0 && currentPage < pages.length - 1) {
      showPage(currentPage + 1);
    }

    if (difference < 0 && currentPage > 0) {
      showPage(currentPage - 1);
    }
  },
  { passive: true },
);

/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    if (currentPage < pages.length - 1) {
      showPage(currentPage + 1);
    }
  }

  if (event.key === "ArrowLeft") {
    if (currentPage > 0) {
      showPage(currentPage - 1);
    }
  }
});

/* INITIAL STATE */

showPage(0);
document.addEventListener("DOMContentLoaded", function () {

    const envelope = document.getElementById("rose");

    if (!envelope) {
        console.log("Envelope not found");
        return;
    }

    envelope.addEventListener("pointerdown", function (event) {

        event.preventDefault();

        this.classList.toggle("show-love");

    });

});
javascript
/* =========================================================
   ENVELOPE CLICK / TOUCH
========================================================= */

const envelopeWrap = document.getElementById("rose");

if (envelopeWrap) {
  envelopeWrap.addEventListener("click", function () {
    this.classList.toggle("show-love");
  });
}
;
