// PUT YOUR CODE HERE
const squareTimeLine = gsap.timeline();




squareTimeLine
.from('.red ', {x: '-100%', y: '-100%', duration: 1, delay: 1})
.from('.green ', {x: '100%', y: '-100%', duration: 1})
.from('.blue ', {x: '100%', y: '100%', duration: 1})
.from('.yellow ', {x: '-100%', y: '100%', duration: 1})
.to('.red', { left: "calc(100% - 200px", duration: 1})
.to('.green', { top: "calc(100% - 200px", duration: 1}, '<')
.to('.blue', { right: "calc(100% - 200px", duration: 1}, '<')
.to('.yellow', { bottom: "calc(100% - 200px", duration: 1}, '<')
.to('.box', {borderRadius: "50%", duration: 1}, '<')
.to('.red ', {x: '100%', duration: 1}, '<')
.to('.green ', {x: '100%', duration: 1}, '<')
.to('.blue ', {x: '-100%', duration: 1}, '<')
.to('.yellow ', {x: '-100%', duration: 1}, '<')


  squareTimeLine.play()

  c