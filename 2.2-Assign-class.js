var Student = /** @class */ (function () {
    function Student(stuname, roll) {
        this._name = stuname;
        this._rollno = roll;
    }
    Student.prototype.details = function () {
        return " Name of the student is " + this._name + " and roll number is " + this._rollno + " ";
    };
    return Student;
}());
;
var printdet = new Student(" Abhi ", 65);
console.log(printdet.details());
