import { User } from "../models/user";
export class UsersService {
   constructor() {
    console.log('Sono nel costruttore di UserService');
   }
   getUsers(): User[] {
      return [ 
        { id: 1, name: "Mario", surname: "Rossi"} ,
        { id: 2, name: "Luigi", surname: "Bianchi"} 
    ];
   }
}