/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const templateOption = document.querySelectorAll("#templateOption");

const inputTemplateOption = document.getElementById("inputTemplateOption");

const ButtonDiv = document.getElementById("ButtonDiv");

for (let i = 0; i < templateOption.length; i++) {
  templateOption[i].addEventListener("click", function (event) {
    inputTemplateOption.value = templateOption[i].getAttribute("data-Rid");
    ButtonDiv.innerHTML =
      "<button type='button' class='dropbtn'>" +
      templateOption[i].textContent +
      " <i class='fa fa-angle-down' aria-hidden='true'></i></button>";
  });
}
