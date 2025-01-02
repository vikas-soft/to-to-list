const task = document.getElementById('input');
const items = document.getElementById('list-items');

function add(){
    if(task.value === ''){
        alert('Please enter a task');
}else{
    const li = document.createElement('li');
    li.innerHTML = task.value;
    items.appendChild(li);
    task.value = '';
    let span = document.createElement('span');
    span.innerHTML = '\u00D7';
    li.appendChild(span);
}
  task.value = '';
savedata();
}

items.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedata();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem('data', items.innerHTML);
}
function getdata(){
    items.innerHTML = localStorage.getItem('data');
}
getdata();




