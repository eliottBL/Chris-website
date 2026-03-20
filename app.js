function genererWorkList(json, i) {
    const data = json[i];
    const section = document.getElementById(data.type);
    const liste = document.createElement("li");
    const link = document.createElement("a");
    link.href = data.url;
    link.textContent = data.text;
    section.appendChild(liste);
    liste.appendChild(link);
}
function genererAbout(json, i){
    const data = json[i];
    const section = document.getElementById("about");
    const text = document.createElement("p");
    text.textContent = data.paragraphe;
    section.appendChild(text);    
}
////

const workURL = "https://69bd2e332bc2a25b22adc478.mockapi.io/api/chriswebsite/data/work"; // replace with your URL
const aboutURL ="https://69bd2e332bc2a25b22adc478.mockapi.io/api/chriswebsite/data/about"; //

fetch(workURL)
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(work => {
    for (let i=0; i < work.length; i++) {
        genererWorkList(work, i)        
    }

  })
  .catch(error => console.error("Fetch error:", error));

fetch(aboutURL)
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(about => {
    for (let i=0; i < about.length; i++) {
        genererAbout(about, i)        
    }

  })
  .catch(error => console.error("Fetch error:", error));

////
const boutonOpenWork = document.querySelector(".work");
const boutonOpenAbout = document.querySelector(".about");
const boutonClose = document.querySelector(".close");

const modal = document.querySelector(".modal");
const background = document.querySelector(".main_container");
const modal_work = document.querySelector(".modal_work");
const modal_about = document.querySelector(".modal_about");
const work_sel = document.querySelector(".work_sel");
const about_sel = document.querySelector(".about_sel");

function openModal() {
    background.classList.add('blured');
    modal.style.display = "flex";
    modal.classList.add('in');
}
function closeModal() {
  work_sel.style.display = "none";
  about_sel.style.display = "none";
  background.classList.remove('blured');
  setTimeout(() => { 
        modal.style.display = "none";
        }, 150); 
} 

function closeWork(){
    work_sel.style.display = "none";
    modal_work.style.display = "none";   
}
function closeAbout(){
    about_sel.style.display = "none";
    modal_about.style.display = "none";
}
function openWork(){
    work_sel.style.display = "inline";
    modal_work.style.display = "flex";   
}
function openAbout(){
    about_sel.style.display = "inline";
    modal_about.style.display = "flex";   
}

boutonClose.addEventListener("click", function () {
    closeModal();
});
boutonOpenWork.addEventListener("click", function () {
    openModal();
    closeAbout();
    openWork();
});
boutonOpenAbout.addEventListener("click", function () {
    openModal();
    closeWork();
    openAbout();
});