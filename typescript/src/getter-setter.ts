interface User {
    _name: string;
    name: string;
    lastName: string;
    getFullName(): string;
}

const user: User = {
    _name: "Bohdan",
    lastName: "Liamzin",
    getFullName(){
        return `${this._name} ${this.lastName}`;
    },
    get name(){
        return this._name;
    },
    set name(value: string){
        if(typeof value === "string"){
            this._name = value;
            this._name;
        }
    }
}