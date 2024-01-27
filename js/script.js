const myButton = document.querySelector('#myButton')
const nameInput = document.querySelector('#nameInput')
const list = document.querySelector('#list')

myButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.classList.add('item')
    newItem.textContent = nameInput.value
    list.appendChild(newItem)

    nameInput.value = ''

    const delBtn = document.createElement('button')
    delBtn.textContent = 'Удалить'
    newItem.appendChild(delBtn)

    delBtn.addEventListener('click', () => {
        list.removeChild(newItem)
    })
})