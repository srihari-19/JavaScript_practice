student = [
    { id: 1, name: "sam" },
    { id: 2, name: 'nova' },
    { id: 3, name: 'john' },
    { id: 4, name: 'lila' },
    { id: 5, name: 'meena' },
];

schoolA_ID = [1, 3, 5];
schoolB_ID = [2, 4];

// For nested loop 
function printName(Ids) {
    result = [];
    // first need to iterate the school function
    let schoolIteration = 0;
    while (schoolIteration < Ids.length) {
        const studentsIds = Ids[schoolIteration]
        // console.log(studentsIds)
        // once first run the while loop the nested loop will start iterat

        for (let studentIterator = 0; studentIterator < student.length; studentIterator++) {
            //  for nested loop to get the student array loop
            const studentsMatch = student[studentIterator]
            // console.log(studentsMatch)
            if (studentsIds === studentsMatch.id) {
                // console.log(studentsMatch.name)
                result.push(studentsMatch.name)
                
            }
        }
        schoolIteration++
    }
    return result;
}

const studentNameOutput = printName(schoolA_ID);
console.log(studentNameOutput)