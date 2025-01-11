document.addEventListener("DOMContentLoaded", function(){
    loadSubpage('subpages/stronaglowna.html');
});

function loadSubpage(page){
    const element = document.getElementById("subpageContent");
    fetch(page)
        .then(response=> {
            if (!response.ok){
                throw new Error('Błąd ładowania podstron!');
            }
            return response.text();
        })
        .then(data =>{
            element.innerHTML = data;
        })
        .catch(error=>{
            element.innerHTML = '<p>Błąd ładowania treści podstrony</p>';
        });
}
