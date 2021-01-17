
// const wrapper = document.querySelector(".wrapper")

// const addWelcome = () => {
//   const inner = document.createElement("div")
//   const h1 = document.createElement("h1")

//   h1.innerText = "Hello"
//   h1.className = "SexyTitle" 
//   inner.append(h1)
//   wrapper.append(inner)
// }

// setTimeout(addWelcome, 2000)


const wrapper = document.querySelector(".wrapper")

const addWelcome = () => {

  const inner = `
    <div class="hello>
      <h1 class="sexyTitle>Hello</h1>
    </div>
  `

  wrapper.innerHTML = inner
}

setTimeout(addWelcome, 2000)