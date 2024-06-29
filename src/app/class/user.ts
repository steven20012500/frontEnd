export class User {
    constructor( cedula= '',  password= '') {
        this.cedula = cedula;
        this.password = password;
      }
      cedula: string;
      password: string;
}
