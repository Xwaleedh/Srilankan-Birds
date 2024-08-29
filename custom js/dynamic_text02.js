const texts = [
    "Want To Save Our Flying Colours?",
      "Continue Scrolling!",
  ];
  
  const textElement = document.getElementById("text1");
  let index = 0;
  let charIndex = 0;
  
  function typeText() {
    if (charIndex < texts[index].length) {
      textElement.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 200);
    } else {
      setTimeout(eraseText, 2000);
    }
  }
  
  function eraseText() {
    if (charIndex > 0) {
      textElement.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 100);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(typeText, 500);
    }
  }
  
  typeText();
  