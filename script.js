console.log("VANTA Loaded");
document.addEventListener("DOMContentLoaded", () => {

  document.body.classList.add("page-loaded");

  const links = document.querySelectorAll("a");

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("http") &&
      !link.target
    ) {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        document.body.classList.remove("page-loaded");
        document.body.classList.add("page-exit");

        setTimeout(() => {
          window.location.href = href;
        }, 450);
      });
    }
  });

});
