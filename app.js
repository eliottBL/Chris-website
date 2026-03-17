async function getDataUrl() {
    const array = await fetch("./url-datas.json")
    const json = await array.json()
    
    for (let i=0; i < json.length; i++) {

        genererArticles(json, i)
        
    }
}
getDataUrl()

function genererArticles(json, i) {
    const data = json[i];
    const section = document.getElementById(data.type);
    const liste = document.createElement("li");
    const link = document.createElement("a");
    link.href = data.url;
    link.textContent = data.text;
    section.appendChild(liste);
    liste.appendChild(link);
}

//
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