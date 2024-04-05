let accordianHead = Array.from(document.querySelectorAll(".accordian_head"));

accordianHead.map((item) =>
  item.addEventListener("click", () => {
    closeAllAccordian(item);
  })
);

function closeAllAccordian(current_target) {
  console.log(current_target);
  accordianHead.map((item) => {
    if (current_target !== item) {
      const accordianBody = item.nextElementSibling;
      const togglerBtn = item.firstElementChild;
      togglerBtn.classList.remove("active");
      accordianBody.classList.remove("active_body");
    } else {
      const accordianBody = current_target.nextElementSibling;
      const togglerBtn = item.firstElementChild;
      togglerBtn.classList.toggle("active");
      accordianBody.classList.toggle("active_body");
    }
  });
}
