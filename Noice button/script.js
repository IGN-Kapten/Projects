let btn = document.getElementById("btn")
let svg = document.getElementById("svg")

btn.addEventListener('click', clicked)

let effect;

function clicked() {
  svg.classList.add('up')

  setTimeout(() => {
    btn.classList.add('active-1')
    setTimeout(() => {
      btn.classList.add('active-2')
      setTimeout(() => {
        btn.classList.add('active-3')
        setTimeout(() => {
          btn.classList.add('active-4')
        }, 75)
      }, 50)
    }, 25)
  }, 0)

  let timer = setTimeout(() => {
    svg.classList.remove('up')
    setTimeout(() => {
      btn.classList.remove('active-4')
      setTimeout(() => {
        btn.classList.remove('active-3')
        setTimeout(() => {
          btn.classList.remove('active-2')
          setTimeout(() => {
            btn.classList.remove('active-1')
          }, 85)
        }, 65)
      }, 45)
    }, 15)
  }, 500)
}
