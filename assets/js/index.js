const ROLE = Object.freeze({
    ADMIN: "ADMIN",
    MODERATOR: "MODERATOR",
    USER: "USER",

});

//ACTTION?
//const ACTTION = Object.freeze({

//это очень хорошо, но как мне получить значение сомого действия, а не перечень кому оно доступно
const ACTION = Object.freeze({
    CREATE: ["ADMIN", "USER"],
    DELETE: ["ADMIN"],
    READ: ["ADMIN", "USER", "MODERATOR"],
    UPDATE: ["MODERATOR"],

});

//chek? Premission?
//function chekPremission(action,role) {
function checkPermission(action, role) {

    let flag = false;

    action.forEach(function (value) {
        //нестрогое равенство и конструкция if без тела (combo x2)
        //if(value==role) flag=true
        if (value === role) {
            return true;
        }

    });

    return flag;

}

console.log(checkPermission(ACTION.CREATE, ROLE.ADMIN));
console.log(checkPermission(ACTION.DELETE, ROLE.USER));
console.log(checkPermission(ACTION.UPDATE, ROLE.MODERATOR));
    

