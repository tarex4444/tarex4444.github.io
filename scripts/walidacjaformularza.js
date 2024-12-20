document.getElementById("formularz").addEventListener("submit", function(event){
    let dataOd=new Date(document.getElementById("dataOd").value);
    let dataDo=new Date(document.getElementById("dataDo").value);

    if (dataOd >= dataDo){
        let info=document.getElementById("info");
        info.innerHTML="<p>Data rozpoczęcia musi być wcześniejsza niż data zakończenia!</p>";
        event.preventDefault();
    }
    else document.getElementById("info").inerHTML="";
});