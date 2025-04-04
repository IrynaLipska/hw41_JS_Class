'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    console.log(form);

    const btn = document.querySelector(".btn");
    

    const studentList = [];

    const studentContainer = document.createElement("div");
   
    document.body.appendChild(studentContainer);

    class Student {
        constructor(name, city, course) {
            this.name = name;
            this.city = city;
            this.course = course;
        }

        render(container) {
            console.log(container);
            const studentInfo = document.createElement("div");
            studentInfo.innerHTML = `
                <p><strong>Name:</strong> ${this.name}</p>
                <p><strong>City:</strong> ${this.city}</p>
                <p><strong>Course:</strong> ${this.course}</p>
                <hr>
            `;
            container.appendChild(studentInfo);
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        
        const name = form.name.value;
        const city = form.city.value;
        const course = form.course.value;
        
        const student = new Student(name, city, course);
        studentList.push(student);
      
     
        studentContainer.innerHTML = "";
     
        studentList.forEach((student, index) => {
            const counterNum = document.createElement("div");
            counterNum.innerHTML = `<p><strong>#</strong> ${index + 1}</p>`;
            studentContainer.appendChild(counterNum);
            student.render(studentContainer);
            
        });
        form.reset(); 
        console.log(studentList);
    });

});


