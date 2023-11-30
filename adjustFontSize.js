function adjustFontSize() {
    const container = document.getElementById('title');
    const resizeText = container.querySelector('h1');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const maxWidth = containerWidth * 0.9; 
    const maxHeight = containerHeight * 0.9;

    // Tamanho inicial da fonte. Nao usar número quebrado.
    let fontSize = 42;
    fontSize = parseInt(fontSize);
    let textFits = false;

    while (!textFits) {
      resizeText.style.fontSize = fontSize + 'px';
      if (resizeText.scrollWidth <= maxWidth && resizeText.scrollHeight <= maxHeight) {
        textFits = true;
      } else {
        fontSize--;
      }
    }
  }

  // Call the function initially and on window resize
  adjustFontSize();
  window.addEventListener('resize', adjustFontSize);