const game = () => {
  let pScore = 0;
  let cScore = 0;
  var counter = 60;
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const introStay = document.querySelector(".stay");
    const match = document.querySelector(".match");
    
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      introStay.classList.add("fadeOut");
      match.classList.add("fadeIn");
  setInterval(function() {
    counter--;

    if (counter >= 0) {
      id = document.getElementById("count");
      id.innerHTML = counter;
    }
    if (counter === 0) {
      clearInterval();
      playagain();
    }
  }, 1000)
    });
  };

const updateScore = () => {
  const playerScore = document.querySelector(".playscore");
  const computerScore = document.querySelector(".compscore");
  playerScore.innerHTML = pScore;
  computerScore.innerHTML = cScore;
};

function getPilihanComputer() {
  const comp = Math.random();
  
  if (comp < 0.34) return  'gajah';
  if (comp >= 0.34 && comp < 0.67) return  'orang';
  return 'semut';
}

function getHasil(comp, player) {
  setTimeout(function() {
  const info = document.querySelector('.info')
  if (player === comp) {
    info.innerHTML = 'SERI!';
    return;
  }
    if (player === "gajah") {
      if (comp === "orang") {
        info.innerHTML = "MENANG!";
        pScore++;
        updateScore();
        return;
      } else {
        info.innerHTML = "KALAH!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (player === "orang") {
      if (comp === "gajah") {
        info.innerHTML = "KALAH!";
        cScore++;
        updateScore();
        return;
      } else {
        info.innerHTML = "MENANG!";
        pScore++;
        updateScore();
        return;
      }
    }
  if (player === "semut") {
    if (comp === "gajah") {
      info.innerHTML = "MENANG!";
      pScore++;
      updateScore();
      return;
    } else {
      info.innerHTML = "KALAH!";
      cScore++;
      updateScore();
      return;
    }
  }
  }, 1000)
}
function putar(){
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = [ 'gajah', 'orang', 'semut'];
  let i = 0;
  const start= new Date().getTime();
  setInterval(function() {
    if(new Date().getTime() - start > 1000) {
      clearInterval;
      return;
    }
  imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
  if( i == gambar.length) i = 0;
    
  }, 100) 
}
  
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
    putar();
    
    setTimeout(function() {
          const imgComputer = document.querySelector('.img-komputer')
          imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    }, 1000)
  });
});


//const pGajah = document.querySelector('.gajah');
//pGajah.addEventListener('click' , function() {
  //const pilihanComputer = getPilihanComputer();
  //const pi=lihanPlayer = pGajah.className;
  //console.log('comp : ' + pilihanComputer);
  //console.log('player : ' + pilihanPlayer);
  //const hasil = getHasil(pilihanComputer, pilihanPlayer);
  //const imgComputer = document.querySelector('.img-komputer');
  //imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
  //const info = document.querySelector('.info');
  //info.innerHTML = hasil;
//})
function playagain() {
  window.location.reload();
  };
startGame();
};
game();
