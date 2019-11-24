class User{
    name;
    role;
    static checkPermission(action,role,who,overWhom){


    }
}
//роли в объекте чтобы значения брать
const ROLE = Object.freeze({

    ADMIN: "ADMIN",
    MODERATOR: "MODERATOR",
    USER: "USER",

});

//действия в объекте чтобы значения брать.
//Что-то вроде enum в C# и C++
const ACTION = Object.freeze({

    CREATE: "CREATE",
    READ: "READ",
    UPDATE: "UPDATE",
    DELETE: "DELETE",

});


//словарь ключ : значение
// ключ - действие (ACTION): значение - список ролей, которые это действие могут выполнять
const permissionMap = new Map([
    [ACTION.CREATE,
    new Map([
        ROLE.ADMIN, [ROLE.ADMIN, ROLE.USER, ROLE.MODERATOR],
        ROLE.MODERATOR, [ROLE.USER]
    ])],
    [ACTION.READ,
    new Map([
        ROLE.ADMIN, [ROLE.ADMIN, ROLE.USER, ROLE.MODERATOR],
        ROLE.MODERATOR, [ROLE.USER, ROLE.MODERATOR],
        ROLE.USER, [ROLE.USER, ROLE.MODERATOR]
    ])],
    [ACTION.UPDATE,
    new Map([
        ROLE.ADMIN, [ROLE.ADMIN, ROLE.USER, ROLE.MODERATOR],
        ROLE.MODERATOR, [ROLE.MODERATOR]
    ])],
    [ACTION.DELETE,
    new Map([
        ROLE.ADMIN, [ROLE.ADMIN, ROLE.USER, ROLE.MODERATOR]
    ])],

]);


/*
permissionMap.set(
    ACTION.CREATE,
    new Map([
        ROLE.ADMIN,[ROLE.ADMIN,ROLE.USER,ROLE.MODERATOR],
        ROLE.MODERATOR,[ROLE.USER],
    ])
);

permissionMap.set(
    ACTION.READ,
    new Map([
        ROLE.ADMIN,[ROLE.ADMIN,ROLE.USER,ROLE.MODERATOR],
        ROLE.MODERATOR,[ROLE.USER,ROLE.MODERATOR],
        ROLE.USER,[ROLE.USER,ROLE.MODERATOR]
    ])
);

permissionMap.set(
    ACTION.UPDATE,
    new Map([
        ROLE.ADMIN,[ROLE.ADMIN,ROLE.USER,ROLE.MODERATOR],
        ROLE.MODERATOR,[ROLE.MODERATOR],

    ])
);

permissionMap.set(
    ACTION.DELETE,
    new Map([
        ROLE.ADMIN,[ROLE.ADMIN,ROLE.USER,ROLE.MODERATOR],
    ])
);
*/


function checkPermission(action, role) {

    if (permissionMap.has(action)) {

        return permissionMap.get(action).includes(role);

    }
    return false;

}

console.log(checkPermission(ACTION.CREATE, ROLE.ADMIN));
console.log(checkPermission(ACTION.DELETE, ROLE.USER));
console.log(checkPermission(ACTION.UPDATE, ROLE.MODERATOR));
    

