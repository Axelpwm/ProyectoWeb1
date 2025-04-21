
  function toggleDropdown(id) {
    const content = document.getElementById(id);
    const arrow = content.previousElementSibling.querySelector(".arrow");

    if (content.style.display === "block") {
      content.style.display = "none";
      arrow.classList.remove("rotate");
    } else {
      content.style.display = "block";
      arrow.classList.add("rotate");
    }
  }

