document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("message");
  const counter = document.getElementById("counter");
  const warning = document.getElementById("warning");
  const maxChars = 200;

  textarea.addEventListener("input", () => {
    const typed = textarea.value.length;
    const remaining = maxChars - typed;

    counter.textContent = `${ typed }/${maxChars} characters`;

    if (typed >= maxChars) {
      textarea.value = textarea.value.substring(0, maxChars);
      warning.classList.remove("hidden");
    } else {
      warning.classList.add("hidden");
    }
  });
});