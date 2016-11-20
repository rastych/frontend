/**
 * Created by rastych on 11/20/16.
 */
var students = ["Илья", "Greg", "Алина"];

for (i = 0; i < students.length; i++) {
    for (j = 0; j < students[i].length; j++) {
        // document.write(students[i].charAt(j) , '=' , students[i].charCodeAt(j) + '<br/>');
        if (students[i].charCodeAt(j) < 1040 || students[i].charCodeAt(j)>1103) {
            document.write('Символ ' + students[i].charAt(j) + ' слова ' + students[i] + ' - не кириллица<br />');
        }
        else {
            document.write("Символ " + students[i].charAt(j) + ' слова ' + students[i] + ' - кириллица <br />');
        }
    }
}