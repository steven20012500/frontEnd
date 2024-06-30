export class User {
    constructor( _id='', cedula= '',  password= '') {
        this._id = '';
        this.cedula = cedula;
        this.password = password;
      }
      _id: string;
      cedula: string;
      password: string;
}
