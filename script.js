
const button = document.querySelector('.sort-btn');

const courses = [{
name: 'Python Course',
price: 11.50,
},{
    name: 'C course',
    price: 9.50,
},{
    name: 'Complete Webdevelopment',
    price: 15.50,
},{
    name: 'Ethical Hacking',
    price: 18.50,
}]
// console.log(courses);
function generateList(){
    const ul = document.querySelector('.list-group');
    ul.innerHTML = "";
    courses.forEach(course =>{
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        const name = document.createTextNode(course.name);
        li.appendChild(name);
        const span = document.createElement('span');
        span.classList.add('float-right');
        const price = document.createTextNode('$ '+course.price);
        span.appendChild(price);
        li.appendChild(span);
        ul.appendChild(li);
    
    })
}

generateList()

button.addEventListener('click',()=>{
    courses.sort((a,b) => a.price - b.price);
    generateList()
})