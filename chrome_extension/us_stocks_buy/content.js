// content.js


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

function tapOnBuy() {
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

function updateInput() {
  const text = '';

  const matches = [];

  for (const div of document.querySelectorAll('Input')) {
    if (div.textContent.includes(text)) {
      matches.push(div);
    }
  }

  console.log(matches);

  matches[2].focus()

  // matches[2].dispatchEvent

  document.execCommand('insertText', false, '5');
}

const dipStartValue = 1
const dipEndValue = 100
const buyOnDip = false

function isDip() {
  var divElement = document.getElementsByClassName("ml-3 text-brand-black")
  var span = divElement[0].getElementsByClassName('text-brand-red-cinnabar')

  if (span.length > 0) {
    var str = span[0].innerHTML
    str = str.split('<')

    var value = parseFloat(str[0])

    if (value > dipStartValue && value < dipEndValue) {
      return true
    }
  }

  return false
}

function startBuying() {
  setTimeout(() => {
    tapOnBuy()
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
    alert("Not buying this")
  }
}

setTimeout(() => {
  if (buyOnDip) {
    startBuyingOnDip()
  } else {
    startBuying()
  }
}, 2000)










// console.log(matches);



// alert("Hello from your Chrome extension!")
// alert(matches[0].name)
