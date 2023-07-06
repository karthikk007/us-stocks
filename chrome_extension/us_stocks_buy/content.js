// content.js


const buyOnDip = false
const dipStartValue = 0
const dipEndValue = 100

const recoverLoss = false
const recoverAt = 20


function tapOnBuyOrder() {
  var text = 'Place Buy Order';

  const matches = [];

  for (const div of document.querySelectorAll('Button')) {
    if (div.textContent.includes(text)) {
      matches.push(div);
    }
  }

  matches[0].click()
}

function tapOnBuyV1() {
  var text = 'Buy Shares';

  const matches = [];

  for (const div of document.querySelectorAll('Button')) {
    if (div.textContent.includes(text)) {
      matches.push(div);
    }
  }

  if (matches.length == 0) {
    text = 'Buy ETF'

    for (const div of document.querySelectorAll('Button')) {
      if (div.textContent.includes(text)) {
        matches.push(div);
      }
    }

  }

  matches[0].click()
}

function tapOnBuyV2() {
  var text = 'BUY';

  const matches = [];

  for (const div of document.querySelectorAll('Button')) {
    if (div.textContent.includes(text)) {
      matches.push(div);
    }
  }

  if (matches.length == 0) {
    text = 'Buy ETF'

    for (const div of document.querySelectorAll('Button')) {
      if (div.textContent.includes(text)) {
        matches.push(div);
      }
    }

  }

  matches[0].click()
}

function updateInput() {
  const text = '';

  const matches = [];

  for (const div of document.querySelectorAll('Input')) {
    if (div.textContent.includes(text)) {
      matches.push(div);
    }
  }

  console.log(matches);

  const element = matches.filter(element => element.outerHTML.includes("$0"))
  element[0].focus()
  // matches[1].focus()

  // matches[2].dispatchEvent

  document.execCommand('insertText', false, '5');
}

function getElementsByText(str, tag = 'a') {
  return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
}


function isLoss() {
  var element = getElementsByText("Overall Return", "td")
  var parent = element[0].parentElement

  var span = parent.getElementsByClassName('text-brand-red-carnation')

  if (span.length > 0) {
    var text = span[0].innerText

    text = text.split('%')[0].split("▼").pop()

    var value = parseFloat(text)

    if (value >= recoverAt) {
      return true
    }
  }

  return false
}

function isDip() {
  var divElement = document.getElementsByClassName("ml-3 text-brand-black")
  var span = divElement[0].getElementsByClassName('text-brand-red-cinnabar')

  if (span.length > 0) {
    var str = span[0].innerHTML
    str = str.split('<')

    var value = parseFloat(str[0])

    if (value >= dipStartValue && value < dipEndValue) {
      return true
    }
  }

  return false
}

function startBuying() {
  setTimeout(() => {
    tapOnBuyV2()
  }, 2000)

  setTimeout(() => {
    updateInput()
  }, 5000)

  setTimeout(() => {
    tapOnBuyOrder()
  }, 8000)
}

function startBuyingOnDip() {
  if (isDip()) {
    startBuying()
  } else {
    alert("Dip: Not buying this")
  }
}

function startLossRecovery() {
  if (isLoss()) {
    startBuying()
  } else {
    alert("LossRecovery: Not buying this")
  }
}

setTimeout(() => {
  if (recoverLoss) {
    startLossRecovery()
  } else if (buyOnDip) {
    startBuyingOnDip()
  } else {
    startBuying()
  }
}, 2000)









// console.log(matches);



// alert("Hello from your Chrome extension!")
// alert(matches[0].name)
