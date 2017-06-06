const personForm = document.querySelector('#personForm')
const talkingForm = document.querySelector('#talkingForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const name = f.personName.value
  const pClass = f.personClass.value
  const combo = name + " " + pClass
  document.querySelector('h1').textContent = combo
  
  // details.innerHTML = `<em>${name}</em>`

  const em = document.createElement('em')
  em.textContent = name
  details.appendChild(em)

  
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
        document.getElementById("pi").style.fontSize
    }
}

personForm.addEventListener('submit', handleSubmit)

talkingForm.addEventListener('submit', handleTalk)