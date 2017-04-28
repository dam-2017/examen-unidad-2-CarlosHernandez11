import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
    private _username:string;
    constructor(username:string){
        this._username = username;
    }

    get username(){
        return this._username;
    }
    set username(username:string){
        this._username = username;
    }

}