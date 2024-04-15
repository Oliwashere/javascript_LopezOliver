document.addEventListener('DOMContentLoaded', function() {
    const studentsList = document.getElementById('students-list');
    const notesForm = document.getElementById('notes-form');
    const data = JSON.parse(localStorage.getItem('data')) || [];
  
    // Filtrar estudiantes con estado "inscrito"
    const enrolledStudents = data.filter(student => student.estado === 'inscrito');
  
    // Mostrar la lista de estudiantes inscritos
    enrolledStudents.forEach((student, index) => {
      const studentDiv = document.createElement('div');
      studentDiv.innerHTML = `<span>${student.firstName} ${student.lastName}</span> <button onclick="showNotesForm(${index})">Ingresar Notas</button>`;
      studentsList.appendChild(studentDiv);
    });
  
    // Función para mostrar el formulario de notas al seleccionar un estudiante
    window.showNotesForm = function(index) {
      selectedStudentIndex = index;
      notesForm.style.display = 'block';
    };
  
    // Función para guardar las notas y actualizar el estado y el riesgo según sea necesario
    window.saveGrades = function() {
      const theoryGrade = parseFloat(document.getElementById('theory-grade').value);
      const practicalGrade = parseFloat(document.getElementById('practical-grade').value);
      const averageGrade = (theoryGrade + practicalGrade) / 2;
  
      // Actualizar estado y riesgo según las notas ingresadas
      if (averageGrade >= 60) {
        data[selectedStudentIndex].estado = 'aprobado';
        data[selectedStudentIndex].riesgo = 'bajo';
      } else {
        data[selectedStudentIndex].estado = 'reprobado';
        data[selectedStudentIndex].riesgo = 'medio';
      }
  
      // Guardar datos actualizados
      localStorage.setItem('data', JSON.stringify(data));
  
      // Ocultar el formulario de notas
      notesForm.style.display = 'none';
  
      // Recargar la página para actualizar la lista de estudiantes
      window.location.reload();
    };
  });