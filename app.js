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


