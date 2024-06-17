let btnSort = document.querySelectorAll('button')[0]
let btnAdd = document.querySelectorAll('button')[1]
let input = document.querySelector('input')
let list = document.querySelector('ul')

let inputs = [input]

function addList() {
    btnAdd.addEventListener('click', ()=>{
        for(let input of inputs){
            list.innerHTML += `<li><input type="checkbox">${input.value}</li>`
        }
        input.value = '';
    })
}

addList()

list.addEventListener('change', function(event){
    if(event.target.type === 'checkbox'){
        if(event.target.checked){
            event.target.parentNode.classList.add('checked');
        } else {
            event.target.parentNode.classList.remove('checked');
        }
    }
});

list.addEventListener('click', function(event){
    if(event.target.tagName !== 'INPUT'){
        event.target.remove();
    }
});

btnSort.addEventListener('click', () => {
    let liElements = [...document.querySelectorAll('li')];
    let liTexts = liElements.map(li => li.textContent.trim());

    liTexts.sort();

    list.innerHTML = liTexts.map(text => `<li><input type="checkbox">${text}</li>`).join('');
});