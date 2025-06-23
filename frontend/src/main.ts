import './style.css'
import { PictureOfTheDay } from './components/PictureOfTheDay.js'
import type { POTDProps } from './components/PictureOfTheDay.js'


let props: POTDProps
props  = {
  date: Date.now()
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${PictureOfTheDay(props)}
  </div>`
