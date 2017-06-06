const personForm = document.querySelector('#personForm')
const talkingForm = document.querySelector('#talkingForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const name = f.personName.value
  const favoriteColor = f.favoriteColor.value
  const age = f.age.value

  const colorDiv = `
    <div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
  `

  const nameLi = document.createElement("LI")
  nameLi.innerHTML = "Name: " + name
//   nameLi.appendChild(document.createTextNode("Name: " + name));

  const colorDivLi = document.createElement("LI")
  colorDivLi.innerHTML = "Favorite Color: " + colorDiv
//   colorDivLi.appendChild(document.createTextNode("Favorite Color: " + colorDiv));

  const ageLi = document.createElement("LI")
  ageLi.innerHTML = "Age: " + age
//   ageLi.appendChild(document.createTextNode("Age: " + age))

  details.appendChild(nameLi)
  details.appendChild(colorDivLi)
  details.appendChild(ageLi)
  //li = document.createElement("li");
//   details.innerHTML = `
//     <ul>
//       <li>Name: ${name}</li>
//       <li>Favorite Color: ${colorDiv}</li>
//       <li>Age: ${age}</li>
//     </ul>
//   `

  const pClass = f.personClass.value
  const combo = name + " " + pClass
  document.querySelector('h1').textContent = combo


  
  // details.innerHTML = `<em>${name}</em>`

//   const em = document.createElement('em')
//   em.textContent = name
//   details.appendChild(em)


  
}



function handleTalk(ev) {
    console.log('hi')
    ev.preventDefault()
    const g = ev.target
    const enteredWords=g.blogEntry
    const oldWords = document.getElementById("p1").innerHTML
    const combo = oldWords + enteredWords.value
    document.getElementById("p1").innerHTML = combo
    if (enteredWords.value.length > 10){
        document.getElementById("p1").style.fontFamily = 'Comic Sans MS'
    } else {
        document.getElementById("p1").style.fontFamily = 'times'
    }
}

personForm.addEventListener('submit', handleSubmit)

talkingForm.addEventListener('submit', handleTalk)