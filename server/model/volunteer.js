const db = require("../config/db");
class VOLUNTEER {
    constructor(
        vName,vAddress,vPhone,vSkill
    ){
        this.vName = vName;
        this.vAddress=vAddress;
        this.vPhone = vPhone;
        this.vSkill = vSkill;
    }
    static getVolunteers(){
     let query = `select * from volunteer`;
     return db.execute(query)
    }
}
module.exports = VOLUNTEER;