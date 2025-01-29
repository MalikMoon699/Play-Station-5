document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".navbar");
  const signInBtn = document.querySelector(".signInBtn");
  const imgUl = document.querySelector(".img-ul");

  if (!burger || !navbar || !signInBtn || !imgUl) {
    console.error("One or more elements could not be found in the DOM.");
    return;
  }

  burger.addEventListener("click", () => {
    imgUl.classList.toggle("v-nav-resp");
    navbar.classList.toggle("h-nav-resp");
    console.log("Event is Working");
  });
});

// Curser

const curserDot = document.querySelector("[dataCurserDot]");
const curserOutline = document.querySelector("[dataCurserOutline]");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  curserDot.style.left = `${posX}px`;
  curserDot.style.top = `${posY}px`;

  curserOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});


// Time

function getDateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  let dateTime =
   year + "/" + month + "/" + day + "<br> " + hour + ":" + minute + ":" + second;
  return dateTime;
}

setInterval(function () {
  currentTime = getDateTime();
  document.getElementById("time").innerHTML = currentTime;
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const innerContainer = document.querySelector(".innerContainer-1");
  const clear = document.querySelector(".cross");

  setTimeout(() => {
    innerContainer.hidden = false;
  }, 5000);

  clear.addEventListener("click", () => {
    innerContainer.hidden = true;
  });
});