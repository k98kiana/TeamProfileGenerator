//Manager class will add office number to their info
// getRole() will now override to 'Manager'

const employee = require("./employee");

class Manager extends employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        //add office number to info for Manager
        this.officenumber = officenumber; 
    }

//method for office number
getOfficeNumber() {
    return this.officenumber;
}

getRole() {
    return "Manager";
}
}

module.exports = Manager;