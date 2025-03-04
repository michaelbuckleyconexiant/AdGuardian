
// Accordian

document.querySelectorAll('.accordion-header').forEach(button => {
    let content = button.nextElementSibling;
    let icon = button.querySelector("i");

    // Open all sections by default
    button.classList.add('active');
    content.style.maxHeight = content.scrollHeight + "px";
    content.classList.add('open');

    button.addEventListener('click', () => {
      button.classList.toggle('active');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove('open');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('open');
      }
    });
  });