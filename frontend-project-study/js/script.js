(function () {
  const spanE1 = document.querySelector('main h2 span');
  const txtArr = [
    'Web Publisher',
    'Front-End Developer',
    'Web UI Designer',
    'UX Designer',
  ];
  let index = 0;
  let currentTxt = txtArr[index].split('');

  function deleteTxt() {
    currentTxt.pop();
    spanE1.textContent = currentTxt.join('');
    if (currentTxt.length !== 0) {
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split('');
      writeTxt();
    }
  }

  function writeTxt() {
    spanE1.textContent += currentTxt.shift();
    if (currentTxt.length !== 0) {
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
      currentTxt = spanE1.textContent.split('');
      setTimeout(deleteTxt, 3000);
    }
  }

  writeTxt();
})();
