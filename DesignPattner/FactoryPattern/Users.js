class AdminUser{
    constructor(){
        this.role='admin';
        this.permissions=['read','write','delete'];
    }
}

class GuestUser{
    constructor(){
        this.role='guest';
        this.permissions=['read'];
    }
}

class UserFactory{
    static createUser(type){
        switch(type){
            case "admin":
                return new AdminUser();
            case "guest":
                return new GuestUser();
            default:
                throw new Error("Invalid user type");
        }
    }
}

const admin=UserFactory.createUser('admin');
// console.log(admin.role,admin.permissions);