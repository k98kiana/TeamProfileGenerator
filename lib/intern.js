//Intenr info will add on school
//also have Intern override role

const employee = require("./employee");

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        //add new properties
        this.school = school;
    }

    //new method for shcool
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;