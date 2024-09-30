// Selección de elementos del DOM
const tareaForm = document.getElementById('nueva-tarea-form');
const tareasContainer = document.getElementById('tareas-container');
const categorias = document.querySelectorAll('.categoria');

// Función para agregar una nueva tarea
tareaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tarea = {
    nombre: tareaForm.elements['nombre'].value,
    fechaVencimiento: tareaForm.elements['fecha'].value,
    descripcion: tareaForm.elements['descripcion'].value,
  };
  agregarTarea(tarea);
  tareaForm.reset();
});

// Función para agregar una tarea a la lista
function agregarTarea(tarea) {
  const tareaHTML = `
    <div class="tarea">
      <h3>${tarea.nombre}</h3>
      <p>${tarea.descripcion}</p>
      <span>${tarea.fechaVencimiento}</span>
      <i class="fas fa-edit" aria-hidden="true"></i>
      <i class="fas fa-check" aria-hidden="true"></i>
      <i class="fas fa-trash" aria-hidden="true"></i>
    </div>
  `;
  const categoria = getCategoria(tarea);
  categoria.querySelector('.tareas-lista').innerHTML += tareaHTML;
}

// Función para obtener la categoría correspondiente a una tarea
function getCategoria(tarea) {
  if (tarea.fechaVencimiento < new Date()) {
    return document.getElementById('completadas');
  } else if (tarea.descripcion.includes('en proceso')) {
    return document.getElementById('en-proceso');
  } else {
    return document.getElementById('pendientes');
  }
}

// Funcionalidades para drag & drop
categorias.forEach((categoria) => {
  categoria.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  categoria.addEventListener('drop', (e) => {
    e.preventDefault();
    const tarea = e.dataTransfer.getData('text');
    const tareaElement = document.querySelector(`.tarea[data-tarea="${tarea}"]`);
    categoria.querySelector('.tareas-lista').appendChild(tareaElement);
  });
});

// Funcionalidades para editar, completar y eliminar tareas
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-edit')) {
    // Editar tarea
  } else if (e.target.classList.contains('fa-check')) {
    // Completar tarea
  } else if (e.target.classList.contains('fa-trash')) {
    // Eliminar tarea
  }
});