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



const cursorDot = document.querySelector("[dataCurserDot]");
const cursorOutline = document.querySelector("[dataCurserOutline]");

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = "0.3";
    cursorDot.style.width = "30px";
    cursorDot.style.height = "30px";
  });
  
  link.addEventListener("mouseleave", () => {
    cursorDot.style.width = "5px";
    cursorDot.style.height = "5px";
  });
  
  link.addEventListener("mouseenter", () => {
    cursorOutline.style.opacity = "0";
  });
  
  link.addEventListener("mouseleave", () => {
    cursorOutline.style.opacity = "1";
  });
});
