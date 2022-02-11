(function () {
  //允许复制
  let preElList = document.querySelectorAll('pre')
  preElList.forEach(el => {
    el.style.userSelect = 'auto'
    let codeEl = el.querySelector('code')
    if(codeEl ){
        codeEl.style.userSelect = 'auto'
    }
  })

  function InjectJs(jsPath) {
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.src = chrome.extension.getURL(jsPath);
    document.head.appendChild(s);
  }
  InjectJs("hack.js");

  //移除it1352的登录限制
  let maskDom = document.querySelector('.arc-body-main-more')
  if(maskDom){
    maskDom.style.display='none'
  }
  let codeDom = document.querySelector('.arc-body-main')
  if(codeDom){
    codeDom.style.height='auto'
    codeDom.style.overflow='auto'
  }
})()