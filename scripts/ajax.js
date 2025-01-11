document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("dwnlTxt").addEventListener("click", function(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("txtData").innerHTML=xhr.responseText;
            }
        };
        xhr.open("GET", "../../contents/data.txt", true);
        xhr.send();
    });
    document.getElementById("dwnlJSON").addEventListener("click", function(){
        fetch('../../contents/data.json')
        .then(response => {
            if(!response.ok){
                throw new Error("Błąd odpowiedzi!");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let e = document.getElementById("jsonData");
            e.innerHTML="<ul>";
            data.forEach(item => {
                e.innerHTML += `<li>${item.Text}: ${item.Code}</li>`;
            });
            e.innerHTML +="</ul>";
        })
        .catch(error =>{
            document.getElementById("result".innerHTML="Wystąpił błąd: " + error);
        });
    });
});

$(document).ready(function(){
    $.ajax({
        url:'../../contents/data.json',
        dataType: 'json',
        success: function(data){
            let html = '<table border="1"><tr><th>Tekst</th><th>Wynik</th></tr>';
            $.each(data, function(index, item){
                html += '<tr><td>' + item.Text + '</td><td>' + item.Code + '</td></tr>';
            });
            html += "</table>";
            $('#jsonDataAJAX').html(html);
        } 
    });
});