(function () {
  //允许复制
  let preElList = document.querySelectorAll('pre')
  preElList.forEach(el => {
    el.style.userSelect = 'auto'
    let codeEl = el.querySelector('code')
    codeEl.style.userSelect = 'auto'
  })

  function InjectJs(jsPath) {
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.src = chrome.extension.getURL(jsPath);
    document.head.appendChild(s);
  }
  InjectJs("hack.js");
})()