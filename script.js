const images = [
    st1.src,
    st2.src,
    st3.src,
    st4.src,
    st5.src,
  ];
  const texts = [
    "<b style='font-size:20px'>Hey👋, Youuu! 😆</b><br><br><span class='altText'>It’s your birthday today 🫣💗</span><br><br><b><i>Happy Birthday!</i> 🥳</b>",
    "Would you like a gift? 😆",
    "<span id='textStuck'><b style='font-size:20px'>Alright! 😆</b><br><br><span class='altText' style='line-height:1.5em'>On the count of <b style='color:yellow;'>5</b>, I will give you a<br>gift! 🥳</span></span><br><br><span id='teksTime'><b style='font-size:20px'>⏳ <span id='timerLeft'>0</span></b></span>",
    "<b style='font-size:20px'>Yup, Traffic Jam! 🫣</b><br><br><span class='altText' style='line-height:1.5em'>Not giving you the gift then 😝🫵</span>",
    "<span style='font-size:17px;font-weight:400'>Don't be mad, haha 😆</span>",
  ];
  
  let currentIndex = 0;
  var selectedButton = "";
  const mainSt = document.querySelector('.mainSt');
  const mainTxt = document.querySelector('.mainTxt');
  
  function showElements() {
    mainSt.style.transform = 'scale(1)';
    mainTxt.style.transform = 'scale(1)';
    setTimeout(() => { functionActive = true; }, 1000);
  }
  
  function nextSection() {
    functionActive = false;
    mainSt.style.transform = 'scale(0)';
    mainTxt.style.transform = 'scale(0)';
  
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
  
      if (currentIndex == 1) {
        button.style = "position:relative;transform:scale(1);opacity:1";
      }
      if (currentIndex == 2) {
        button.style = "";
      }
      if (currentIndex == 4) {
        setTimeout(nextSection, 3500);
      }
      if (currentIndex == 5) {
        mainTxt.innerHTML = "";
        mainSt.querySelector('img').src = images[5];
        setTimeout(() => { textAnimation(texts[currentIndex]) }, 200);
      }
  
      if (currentIndex < 5) {
        mainSt.querySelector('img').src = images[currentIndex];
        mainTxt.innerHTML = texts[currentIndex];
      }
  
      showElements();
    }, 400);
  }
  
  function fnYes() {
    selectedButton = "Blue";
    button.style = "position:relative;";
    nextSection();
  
    setTimeout(() => {
      const timerElement = document.getElementById('timerLeft');
      let timeCount = 0;
  
      const countdown = setInterval(() => {
        timeCount++;
        timerElement.textContent = timeCount;
  
        if (timeCount >= 4) {
          clearInterval(countdown);
          setTimeout(() => {
            mainSt.style.transform = 'scale(0)';
            textStuck.style.opacity = '0';
  
            setTimeout(function() {
              mainSt.querySelector('img').src = images[3];
            }, 400);
  
            setTimeout(function() {
              textStuck.innerHTML = texts[3];
              mainSt.style.transform = 'scale(1)';
              textStuck.style.opacity = '1';
  
              setTimeout(() => {
                mainSt.style.transform = 'scale(0)';
                teksTime.style.opacity = '0';
  
                setTimeout(function() {
                  mainSt.querySelector('img').src = images[4];
                }, 400);
  
                setTimeout(function() {
                  teksTime.innerHTML = texts[4];
                  setInterval(falling, 200);
                  mainSt.style.transform = 'scale(1)';
                  teksTime.style.opacity = '1';
                }, 450);
              }, 2400);
            }, 450);
          }, 2300);
        }
      }, 1000);
    }, 800);
  }
  
  function fnNo() {
    doNotWant();
  }
  
  document.addEventListener("click", function(e) {
    const circle = document.createElement("div");
    circle.classList.add("click-effect");
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
    document.body.appendChild(circle);
    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  });
  
  const body = document.querySelector("body");
  var audio = new Audio('' + linkmp3.src);
  var button = document.querySelector('#button');
  
  function textAnimation(textString) {
    mainTxt.innerHTML = "";
    new TypeIt(mainTxt, {
      strings: [textString],
      startDelay: 50,
      speed: 27,
      cursor: true,
      waitUntilVisible: true,
      afterComplete: function() {
        const cursorElement = document.querySelector(".mainTxt .ti-cursor");
        if (cursorElement) {
          cursorElement.style.display = "none";
        }
        if (currentIndex == 0) {
          setTimeout(nextSection, 1800);
        }
      },
    }).go();
  }
  
  var alreadyClicked = true;
  var functionActive = false;
  
  document.getElementById("loveIn").onclick = function() {
    if (alreadyClicked) {
      document.querySelector(".cover").style = "opacity:0;transition:all .8s ease";
      document.querySelector(".overlay").style = "opacity:0;transition:all .8s ease";
      setTimeout(function() {
        audio.play();
        document.querySelector(".overlay").style.display = "none";
        wallpaper.style = "transform:scale(1)";
        document.querySelector(".mainMsg").style = "transform:scale(1)";
        
        setTimeout(() => { showElements() }, 300);
        setTimeout(() => { textAnimation(texts[currentIndex]) }, 300);
        
        setTimeout(function() { functionActive = true; }, 300);
      }, 500);
    } else {
      alreadyClicked = true;
      document.getElementById('loveIn').innerHTML = '<style>.loveIn svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="loveIn"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="note">Touch the LOVE!</p>';
    }
  };
  
  function falling() {
    const heart = document.createElement("div");
    heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100;stroke:#FFC2B8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 95) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(heart);
  }
  
  setInterval(function() {
    var heartArr = document.querySelectorAll(".heart-icon");
    if (heartArr.length > 100) {
      heartArr[0].remove();
    }
  }, 100);
  
  var clickCount = 0;
  var already = false;
  
  function moveButton(btn) {
    var buttonEl = document.getElementById("" + btn);
    var buttonParent = buttonEl.parentNode;
  
    var buttonPosX = Math.floor(Math.random() * 50) + 1;
    var buttonPosY = Math.floor(Math.random() * 75) + 1;
    var randomRotation = Math.floor(Math.random() * 360);
  
    buttonEl.style.position = "relative";
    buttonEl.style.left = buttonPosX + "px";
    buttonEl.style.top = buttonPosY + "px";
    buttonEl.style.transform = "rotate(" + randomRotation + "deg)";
    buttonParent.appendChild(buttonEl);
  
    clickCount++;
  
    if (clickCount == 3) {
      clickCount = 0;
    }
  }
  
  function doNotWant() {
    Swal.fire({
      title: '' + textNo.innerHTML,
      imageUrl: '' + stickerNo.src,
      imageWidth: 90,
      imageHeight: 90,
      imageAlt: 'by aoudumber.dev',
      confirmButtonText: 'OK',
      allowOutsideClick: false,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        // No action needed on close
      }
    });
  }