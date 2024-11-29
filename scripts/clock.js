function initLocalClocks() {
    // Get the local time using JS
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
  
    // Create an object with each hand and it's angle in degrees
    var hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ];
    // Loop through each of these hands to set their angle
    for (var j = 0; j < hands.length; j++) {
      var elements = document.querySelectorAll('.' + hands[j].hand);
      for (var k = 0; k < elements.length; k++) {
          elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
          elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (hands[j].hand === 'minutes') {
            elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
          }
      }
    }
  }
  function setUpMinuteHands() {
    // Find out how far into the minute we are
    var containers = document.querySelectorAll('.minutes-container');
    var secondAngle = containers[0].getAttribute("data-second-angle");
    if (secondAngle > 0) {
      // Set a timeout until the end of the current minute, to move the hand
      var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
      setTimeout(function() {
        moveMinuteHands(containers);
      }, delay);
    }
  }
  
  function moveSecondHands() {
    const containers = document.querySelectorAll('.seconds-container');
    setInterval(() => {
        for (let i = 0; i < containers.length; i++) {
            if (!containers[i].angle) {
                containers[i].angle = 6; // Ustawienie kąta początkowego na 6 stopni
            } else {
                containers[i].angle += 6; // Dodanie 6 stopni na każdą sekundę
            }
            containers[i].style.transform = `rotateZ(${containers[i].angle}deg)`;
        }
    }, 1000); // Odświeżanie co sekundę
}

function moveMinuteHands() {
    const containers = document.querySelectorAll('.minutes-container');
    setInterval(() => {
        for (let i = 0; i < containers.length; i++) {
            if (!containers[i].angle) {
                containers[i].angle = 6; // Ustawienie kąta początkowego na 6 stopni
            } else {
                containers[i].angle += 6; // Dodanie 6 stopni na każdą minutę
            }
            containers[i].style.transform = `rotateZ(${containers[i].angle}deg)`;
        }
    }, 60000); // Odświeżanie co minutę
}

// Wywołanie funkcji dla wskazówek sekundowych i minutowych
document.addEventListener('DOMContentLoaded', () => {
    initLocalClocks();
    moveSecondHands();
    moveMinuteHands();
});
// Inicjalizacja zegara
document.addEventListener('DOMContentLoaded', initLocalClocks);