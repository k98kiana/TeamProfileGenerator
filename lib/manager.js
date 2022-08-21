//manager class will add office number to their info
// getRole() will now override to 'Manager'

const employee = require("./employee");

class manager extends employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        //add office number to info for manager
        this.officenumber = officenumber; 
    }

//method for office number
getOfficeNumber() {
    return this.officenumber;
}

getRole() {
    return "manager";
}
}

module.exports = manager;