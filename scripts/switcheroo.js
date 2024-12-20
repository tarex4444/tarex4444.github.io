function reorderDiv() {
    var elements = document.getElementsByClassName("isolated-card");
    var parent = elements[0].parentNode;
    for(const element of elements){
        parent.appendChild(element);
    }

  }
  //Fisher–Yates shuffle
  function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
