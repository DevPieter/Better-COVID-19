replaceTextCovid(document.body);
function replaceTextCovid(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceTextCovid)
    } else if (element.nodeType === Text.TEXT_NODE){
      const re = new RegExp("covid-19", "i");
      if(element.textContent.match(re)) {
        const newElement = document.createElement('span');
        newElement.innerHTML = element.textContent.replace(re, '<span class="SuperGRB"><b>COVID-19 🤢</b></span>')
          element.replaceWith(newElement)
    }
  }
}