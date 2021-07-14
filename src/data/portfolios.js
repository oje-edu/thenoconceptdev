import parallax from '../img/portImages/parallax.jpeg'
import sass from '../img/portImages/sass.jpeg'
import moviedb from '../img/portImages/moviedb.png'
import horizon from '../img/portImages/horizon.webp'
import openshift from '../img/portImages/lab.webp'
import goldenImage from '../img/portImages/win10-2.webp'
import ipxe from '../img/portImages/ipxe.webp'

const portfolios = [
  {
    id: 1,
    category: 'API',
    image: moviedb,
    link1: 'https://github.com/oje-edu/seriously-1-react-moviedb',
    link2: 'https://hot.oje.is/',
    title: 'Filme und Serien.',
    text: 'Filme und Serien von der tmdb holen'
  },
  {
    id: 2,
    category: 'Virtualisierung',
    image: horizon,
    link1: '#',
    link2: '#',
    title: 'VMWare - Horizon',
    text: 'VOLLES! Programm (nicht mehr aktiv)'
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
  },
  {
    id: 5,
    category: 'Virtualisierung',
    image: openshift,
    link1: '#',
    link2: '#',
    title: 'RedHat - OpenShift',
    text: 'Linux Power auf allen Hypervisoren (nicht mehr aktiv)'
  },
  {
    id: 6,
    category: 'Pille Palle',
    image: goldenImage,
    link1: '#',
    link2: '#',
    title: 'Golden Image(s)',
    text: 'Windows 10 Enterprise - Das Image wird mittel iPXE vom NAS (softlinked zum MDT) gebootet und installiert (Custom Mode). Natürlich gibts auch den MDT über WDS (Normal Mode) und MS DHCP... aber ich hab ned soviel Zeit!'
  },
  {
    id: 7,
    category: 'Netzwerk',
    image: ipxe,
    link1: 'https://ipxe.org/ ',
    link2: 'https://netboot.xyz/',
    title: 'iPXE NetBoot',
    text: 'PXE go HOME!... bootet & installiert so ziemlich alles (in schnell), und von jedem Medium was man mag (auch von pastebin.com? kla!!!)'
  }
]

export default portfolios
