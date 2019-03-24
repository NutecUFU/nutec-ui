import { createGlobalStyle, keyframes } from 'styled-components'

const transitionClassName = 'slide'
const duration = 200

const slideOut = keyframes`
0% { }
25% { opacity: .5; }
75% { opacity: .5; transform: translateX(-200%); }
100% { opacity: .5; transform: translateX(-200%); }
`
const slideIn = keyframes`
0%, 25% { opacity: .5; transform: translateX(200%); }
75% { opacity: .5; }
100% { opacity: 1; transform: translateX(0); }
`

const slide = {};

slide.style = createGlobalStyle`
.${transitionClassName}-exit-active {
  animation: ${slideOut} ${duration}ms both ease;
}
.${transitionClassName}-enter-active {
  animation: ${slideIn} ${duration}ms both ease;
}
`

slide.transition = { transition: transitionClassName, duration }

export default slide
