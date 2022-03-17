(function () {
  if (window.location.hostname == "blog.csdn.net") {
    //允许复制
    let preElList = document.querySelectorAll('pre')
    preElList.forEach(el => {
      el.style.userSelect = 'auto'
      let codeEl = el.querySelector('code')
      if (codeEl) {
        codeEl.style.userSelect = 'auto'
      }
    })

    function InjectJs(jsPath) {
      var s = document.createElement('script');
      s.setAttribute('type', 'text/javascript');
      s.src = chrome.runtime.getURL(jsPath);
      document.head.appendChild(s);
    }
    InjectJs("hack.js");

  }
  if (window.location.hostname == 'www.it1352.com') {
    //移除it1352的登录限制
    let maskDom = document.querySelector('.arc-body-main-more')
    if (maskDom) {
      maskDom.style.display = 'none'
    }
    let codeDom = document.querySelector('.arc-body-main')
    if (codeDom) {
      codeDom.style.height = 'auto'
      codeDom.style.overflow = 'auto'
    }
  }
  if (window.location.hostname == 'cloud.tencent.com') {
    //移除腾讯云社区需要关注限制
    maskDom = document.querySelector('.com-markdown-collpase-toggle')
    if (maskDom) {
      maskDom.style.display = 'none'
    }
    codeDom = document.querySelector('.com-markdown-collpase-main')
    if (codeDom) {
      codeDom.style.maxHeight = '100%'
    }
  }

  if (window.location.hostname == 'www.baidu.com') {
    //去百度搜索广告
    let innerHTML = "";
    setInterval(function () {
      let temp = document.querySelector('#content_left').innerHTML;
      if (innerHTML != temp) {
        innerHTML = temp
        let adTags = document.querySelectorAll('.ec-tuiguang')
        adTags.forEach(tag => {
          let parent = tag.parentNode
          while (parent != null) {
            if (parent.className.indexOf('c-container') > -1) {
              parent.style.display = 'none'
              break;
            } else {
              parent = parent.parentNode
            }
          }
        })
        //去百度爱采购
        let b2bDom = document.querySelector('.op-b2b-straight')
        if (b2bDom != null) {
          b2bDom.parentNode.style.display = 'none'
        }
      }
    }, 500);
  }
})()