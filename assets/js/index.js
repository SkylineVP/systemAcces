const ROLE =Object.freeze({
    ADMIN:"ADMIN",
    MODERATOR:"MODERATOR",
    USER:"USER",

});
const ACTTION = Object.freeze({
    CREATE:["ADMIN","USER"],
    DELETE:["ADMIN"],
    READ:["ADMIN","USER","MODERATOR"],
    UPDATE:["MODERATOR"],

});
function chekPremission(action,role) {
    let flag= false;
     action.forEach(function (value) {
        if(value==role) flag=true

    });
   return flag;
}
console.log(chekPremission(ACTTION.CREATE,ROLE.ADMIN));
console.log(chekPremission(ACTTION.DELETE,ROLE.USER));
console.log(chekPremission(ACTTION.UPDATE,ROLE.MODERATOR));
    

