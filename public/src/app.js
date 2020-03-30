
loadEvents();

// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
}

// submit data function
function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

// add tasks
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = task;
  ul.appendChild(li);
}
