const wrapper = document.querySelector(".wrapper")

const friends = ["dalf", "bigHead", "smurf", "black"]

// const ul = document.createElement("ul")
// friends.forEach(friend => ul.append(`<li>${friends}</li>`))

// wrapper.append = ul;

const list = `
  <h1>i love them</h1> 
  <ul>
    ${friends.map(guys=>`<li>${guys}</li>`).join("")}
  </ul>
`
wrapper.innerHTML = list