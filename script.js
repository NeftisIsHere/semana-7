const students=[];

const tableBody=document.querySelector("#students_table tbody");

document.getElementById("student_form").addEventListener("submit",function(e){
    e.preventDefault();
    
    const name=document.getElementById("name").value.trim();
    const last_name=document.getElementById("last_name").value.trim();
    const date=document.getElementById("date").value.trim();
    const grade=document.getElementById("grade").value.trim();

    if(!name || !last_name || !date || isNaN(grade)){
        alert("Error, datos incorrectos")
        return
    };

    // Guardar datos en el array

    const student = {name, last_name, date, grade};
    students.push(student);
    add_students_row(student);
    this.reset(); 
});

function add_students_row(student) {
    const row = document.createElement("tr");
    
    row.innerHTML = 
    `<td>${student.name}</td>
    <td> ${student.last_name}</td>
    <td> ${student.date}</td>
    <td> ${student.grade}</td>`; 
    
    tableBody.appendChild(row);
};
