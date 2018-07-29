const arrowUp = 38
const arrowDown = 40

const hideElements = () => {
  scrollChannelsToTop()

  const elements = document.querySelectorAll("[class*='iconDefault-']")
  if (elements.length) {
    elements.forEach(channelGroup => channelGroup.parentElement.click())
    setTimeout(hideElements, 10)
  }
}

const showElements = () => {
  scrollChannelsToTop()

  const elements = document.querySelectorAll("[class*='closed-']")
  if (elements.length) {
    Array.from(elements)
      .reverse()
      .forEach(channelGroup => channelGroup.parentElement.click())
    setTimeout(showElements, 10)
  }
}

const scrollChannelsToTop = () => {
  const channels = document.querySelector("[class*='channels-'] [class*='scroller-']")
  const distanceToTop = channels.scrollTop
  channels.scrollBy(0, -distanceToTop)
}

window.addEventListener('keydown', event => {
  if (event.keyCode === arrowUp) {
    hideElements()
  }

  if (event.keyCode === arrowDown) {
    showElements()
  }
})