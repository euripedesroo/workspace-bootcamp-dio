function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
        admins.push(key); 

        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Euripedes', 'Admin');
usuarios.set('Isabela', 'User');
usuarios.set('Karina', 'User');

console.log(getAdmins(usuarios));