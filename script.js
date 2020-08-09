const elements = [
  'nav-1',
  'nav-2',
  'nav-3',
  'nav-4',
  'nav-5',
  'menu-bars',
  'overlay'
].map(id => document.getElementById(id))

const [menuBars, overlay] = elements.slice(5)
const animateNav = (oldDir, newDir) => {
  elements.slice(0, 5).forEach((nav, index) => {
    nav.classList.replace(
      `slide-${oldDir}-${index + 1}`,
      `slide-${newDir}-${index + 1}`
    )
  })
}

const toggleNav = () => {
  menuBars.classList.toggle('change')
  overlay.classList.toggle('overlay-active')
  if (overlay.classList.contains('overlay-active')) {
    // animate in overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
    animateNav('out', 'in')
  } else {
    // animate out
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
    animateNav('in', 'out')
  }
}

elements.slice(0, 6).forEach(el => el.addEventListener('click', toggleNav))
