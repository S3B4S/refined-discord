const arrowUp = 38
const arrowDown = 40

const hideElements = () => {
  scrollChannelsTop("[class*='channels-'] [class*='scroller-']")

  const elements = document.querySelectorAll("[class*='iconDefault-']")
  if (elements.length) {
    elements.forEach(channelGroup => channelGroup.parentElement.click())
    setTimeout(hideElements, 10)
  }
}

const showElements = () => {
  const elements = document.querySelectorAll("[class*='closed-']")
  if (elements.length) {
    Array.from(elements)
      .reverse()
      .forEach(channelGroup => channelGroup.parentElement.click())
    setTimeout(showElements, 10)
  }
}

const scrollTop = (selector) => {
  const element = document.querySelector(selector)
  const distanceTop = element.scrollTop
  element.scrollBy(0, -distanceTop)
}

window.addEventListener('keydown', event => {
  if (event.keyCode === arrowUp) {
    hideElements()
  }

  if (event.keyCode === arrowDown) {
    showElements()
  }
})