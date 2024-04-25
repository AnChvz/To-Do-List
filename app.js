function addTask(){
    //Traer el valor del input por su id 
    const taskInput= document.getElementById('newTask').value;
    console.log(taskInput)

    //Validar que el elemento no este vacío
    if(taskInput===''){
        alert('Inserte una tarea');
        return;//Para Deterner la funcion y no agregar tareas vacias
    }

      // Clonar la plantilla de la tarjeta
      const template = document.getElementById('taskTemplate');
      const clone = template.content.cloneNode(true);

    /* //Crear el elemento en la lista
    const taskListElement = document.createElement('li');
    taskListElement.textContent=taskInput + ''; */

     // Llenar la tarjeta con el valor del input
     const cardText = clone.querySelector('.card-text');
     cardText.textContent = taskInput;

    //Crear el boton de Eliminar Tarea
    const btnDelete = clone.querySelector('.btn-danger');
   btnDelete.addEventListener('click',function(){
    this.closest('.card').remove(); // Remueve el elemento .card más cercano
   })
   /*  //Agregar el btnDelete al taskListElement
    //btnDelete es un hijo del elemento tasklistElement
    taskListElement.appendChild(btnDelete); */

    //Agregar la tarea a la lista 
    //taskListElement es un hijo del elemento listTask
    document.getElementById('listTask').appendChild(clone);

    //Limpar el valor del input cuando agregamos una nueva tarea 
    document.getElementById('newTask').value='';
    
    }