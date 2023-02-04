const nav = document.querySelectorAll(".nav")
nav.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1)
    const element = document.getElementById(id)
    const position = element.offsetTop
    if (id != "classes") {
      window.scrollTo({
        left: 0,
        top: position - 63,
      });
    }
    if (id == "classes") {
      window.scrollTo({
        left: 0,
        top: position + 93,
      });
    }
  })
});

function homeHover() {
  document.getElementById("hp").style.color = "rgb(212, 3, 90)";
}
function homeLeave() {
  document.getElementById("hp").style.color = "darkblue";
}
function classHover() {
  document.getElementById("Classes").style.color = "rgb(212, 3, 90)";
}
function classLeave() {
  document.getElementById("Classes").style.color = "darkblue";
}
function blogHover() {
  document.getElementById("blog").style.color = "rgb(212, 3, 90)";
}
function blogLeave() {
  document.getElementById("blog").style.color = "darkblue";
}
function aboutHover() {
  document.getElementById("About").style.color = "rgb(212, 3, 90)";
}
function aboutLeave() {
  document.getElementById("About").style.color = "darkblue";
}
function contactHover() {
  document.getElementById("Contact").style.color = "rgb(212, 3, 90)";
}
function contactLeave() {
  document.getElementById("Contact").style.color = "darkblue";
}

