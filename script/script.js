let btnSort = document.querySelectorAll('button')[0]
let btnAdd = document.querySelectorAll('button')[1]
let input = document.querySelector('input')
let list = document.querySelector('ul')

let inputs = [input]

btnAdd.addEventListener('click', ()=>{
    for(let input of inputs){
        list.innerHTML += `
                        
                        <li><input type="checkbox">${input.value}</li>
                            `
    }
    input.value = ''
    let checkbox1 = document.querySelectorAll('[type]')
    
    for(let checkbox of checkbox1){
        checkbox.addEventListener('click', function(event){
            if(event.target.tagName == 'LI'){
                event.target.classList.toggle('checked')
            }
        })

    }
})
// list.addEventListener('click', function(event){
//     if(event.target.tagName == 'LI'){
//         event.target.classList.toggle('checked')
//     }
// })

let sorted = inputs.sort()

btnSort.addEventListener('click', sorted)

console.log(sorted);
