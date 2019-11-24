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
const permissionMap = new Map();

permissionMap.set(
    ACTION.CREATE, [
        ROLE.ADMIN,
        ROLE.USER,
    ]
);

permissionMap.set(
    ACTION.READ,
    [
        ROLE.ADMIN,
        ROLE.MODERATOR,
        ROLE.USER,
    ]
);

permissionMap.set(
    ACTION.UPDATE,
    [
        ROLE.MODERATOR,
    ]
);

permissionMap.set(
    ACTION.DELETE,
    [
        ROLE.ADMIN
    ]
);


function checkPermission(action, role) {

    if (permissionMap.has(action)) {

        return permissionMap.get(action).includes(role);

    }
    return false;

}

console.log(checkPermission(ACTION.CREATE, ROLE.ADMIN));
console.log(checkPermission(ACTION.DELETE, ROLE.USER));
console.log(checkPermission(ACTION.UPDATE, ROLE.MODERATOR));
    

