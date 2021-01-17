

const styled = (aElement) => {
  const el = document.createElement(aElement)
  return args => {
    // console.log(args[0])
    const styles = args[0];
    el.style = styles;
    return el;
  }
}

const title = styled("h1")`
  background-color: red;
  border-radius: 10px;
  color: blue;
`

const subtitle = styled("span")`
  color: green;
`

title.innerText = "We just Cloned"
subtitle.innerText = "Styled Component"

document.body.append(title, subtitle)