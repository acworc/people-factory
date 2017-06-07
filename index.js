const PeopleFactory = {
  init: function(formSelector) {
    const f = document.querySelector(formSelector)
    f.addEventListener('submit', this.handleSubmit.bind(this))
  },

  renderColor: function(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '100px'
    colorDiv.style.height = '50px'

    return colorDiv
  },

  renderListItem: function(fieldName, value) {
    const li = document.createElement('li')
    const dt = document.createElement('dt')
    const dd = document.createElement('dd')
    dt.textContent = fieldName
    dd.innerHTML = value
    li.appendChild(dt)
    li.appendChild(dd)
    return li
  },

  renderList: function(personData) {
    const list = document.createElement('dl')

    // Loop over ['name', 'favoriteColor', 'age']
    Object.keys(personData).map((fieldName) => {
      const li = this.renderListItem(fieldName, personData[fieldName])
      list.appendChild(li)
    })

    return list
  },

  handleSubmit: function(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')

    const person = {
      name: f.personName.value,
      favoriteColor: this.renderColor(f.favoriteColor.value).outerHTML,
      age: f.age.value,
    }

    details.appendChild(this.renderList(person))
  },
    handleTalk: function(ev) {
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

}

PeopleFactory.init('form#personForm')