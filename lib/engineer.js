//Engineer class will include their git hub user name
// will also have Role overridden for Engineer from Employee

const employee = require("./employee");

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        //Adding new property, github
        this.github = github;
    }

    //method to get github
    getGithub() {
        return this.github;
    }

    getRole() {
        return "engineer";
    }
}

module.exports = engineer;