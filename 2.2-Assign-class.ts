class Student{
    private _name : string;
    private _rollno : number;

    constructor(stuname: string, roll:number){
        this._name = stuname;
        this._rollno = roll;
    }
    
    details(){
        return ` Name of the student is ${this._name} and roll number is ${this._rollno} `;
    }
};

var printdet = new Student(" Abhi ", 65);
console.log(printdet.details());