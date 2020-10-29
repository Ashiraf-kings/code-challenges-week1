/*This is a grading system that tells the user his/her grade according to the marks inserted*/
function grade(marks){
if (marks >=85) {
console.log("D1")
}else if (marks>=75) {
    console.log("D2")
}else if (marks>=65) {
    console.log("D3")
}else if (marks>=40) {
    console.log("D4")
}else if  (marks>=20) {
    console.log("U")
}else if (marks>=0) {
    console.log("you are advised to search for another school")
}
}
grade(70)

    