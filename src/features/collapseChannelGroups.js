const arrowUp = 38;
const arrowDown = 40;

window.addEventListener('keydown', event => {
  if (event.keyCode === arrowUp) {
    console.group()
    // [class*=\'channels-\']
    document.querySelectorAll('[class*=\'iconDefault-\']').forEach(channelGroup => {
      console.group()
      console.log("Current element:")
      console.log(channelGroup)
      console.log("Current parent:")
      console.log(channelGroup.parentElement)
      console.groupEnd()
      channelGroup.parentElement.click()
    })
    console.groupEnd()
  }
  
  if (event.keyCode === arrowDown) {
    console.group()
    document.querySelectorAll('[class*=\'closed-\']').forEach(channelGroup => {
      console.group()
      console.log("Current element:")
      console.log(channelGroup)
      console.log("Current parent:")
      console.log(channelGroup.parentElement)
      console.groupEnd()
      channelGroup.parentElement.click()
    })
    console.groupEnd()
  }
})