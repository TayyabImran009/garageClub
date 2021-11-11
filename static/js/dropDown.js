/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
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

//************************************************** Template dropdown Selection

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

//************************************************** Form dropdown Selection

const formOption = document.querySelectorAll("#formOption");

const inputFormOption = document.getElementById("inputFormOption");

const formButtonDiv = document.getElementById("formButtonDiv");

for (let i = 0; i < formOption.length; i++) {
  formOption[i].addEventListener("click", function (event) {
    inputFormOption.value = formOption[i].getAttribute("data-Rid");
    formButtonDiv.innerHTML =
      "<button type='button' class='dropbtn'>" +
      formOption[i].textContent +
      " <i class='fa fa-angle-down' aria-hidden='true'></i></button>";
  });
}
