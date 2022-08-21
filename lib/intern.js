//intern info will add on school
//also have intern override role

const employee = require("./employee");

class intern extends employee {
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
        return "intern";
    }
}

module.exports = intern;