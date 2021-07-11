import parallax from '../img/portImages/parallax.jpeg'
import sass from '../img/portImages/sass.jpeg'
// import css2 from '../img/portImages/ms.png'
// import react1 from '../img/portImages/react_styled.png'
// import img2 from '../img/portImages/maya-4.jpg'
// import img3 from '../img/portImages/maya-3.jpg'

const portfolios = [
  {
    id: 1,
    category: 'CSS3',
    // image: css1,
    link1: '#',
    link2: '#',
    title: 'Mobile first',
    text: 'Folgt.'
  },
  {
    id: 2,
    category: 'HTML5',
    // image: img3,
    link1: '#',
    link2: '#',
    title: 'Boilerplate',
    text: 'Folgt'
  },
  {
    id: 3,
    category: 'Animation',
    image: parallax,
    link1: 'https://github.com/oje-edu/seriously-7-js-shadowdog/',
    link2: 'https://shadowdog.oje.is/gameAnimations.html',
    title: 'JS - Spiel Animationen',
    text: 'Sprites, Parallax und NPC'
  },
  {
    id: 4,
    category: 'SASS',
    image: sass,
    link1: 'https://github.com/oje-edu/seriously-8-sass-boilerplate',
    link2: 'https://sass.oje.is/',
    title: 'SASS Boilerplate',
    text: 'So ziemlich der neueste Shit was SASS angeht.. (2021)'
  }
]

export default portfolios
