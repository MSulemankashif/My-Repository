let students = [
    {
        name: "Ali",
        marks: [75, 82, 68, 91, 77]
    },
    {
        name: "Asad",
        marks: [45, 52, 39, 61, 48]
    },
    {
        name: "Suleman",
        marks:  [88, 79, 92, 85, 90]
    }
]


for(student of students){

    console.log(student.name);
    let total = 0
    for(let mark of student.marks){
        total += mark
    }
    console.log("Total Marks:", total);

    let percentage = 0;
    percentage = total / 500 *100
    console.log(percentage.toFixed(1));
    
    let grade = null;
    if(percentage >= 85){
        grade = "A+";
        console.log("Grade:",grade);
    }else if(percentage >= 65) {
        grade = "B";
        console.log("Grade:",grade);
    } else if(percentage >= 40){
        grade = "C";
        console.log("Grade:",grade);
    }  
}