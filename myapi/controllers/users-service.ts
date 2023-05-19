import { MyFile } from "../models/file";
import { User } from "../models/user";
export class UsersService {
   private users: User[] =  [ 
      { id: 1, name: "Mario", surname: "Rossi",
         files: [
           { id: 123, name: "prova.pdf", dimension: 34135631241},
           { id: 124, name: "prova2.pdf", dimension: 12},
           { id: 125, name: "prova3.pdf", dimension: 457264562354265},
         ]} ,
      { id: 2, name: "Luigi", surname: "Bianchi",
         files: []} 
   ];
   constructor() {
    console.log('Sono nel costruttore di UserService');
   }
   getUsers(): User[] {
      return this.users;
   }
   getUser(id: number): User | undefined {
      const user = this.users.find(u => u.id === id);
      return user;
   }

   getFiles(userId: number): MyFile[] | undefined {
      const user = this.getUser(userId);
      if(user) {
         return user.files;
      } else {
         return undefined;
      }
   }

   getFile(userId: number, fileId: number): MyFile | undefined {
      const user = this.getUser(userId);
      if(user) {
         const files = user.files;
         if(files) {
           const myfile = files.find(f => f.id === fileId);
           if(myfile) {
            return myfile;
           } else {
            return undefined;
           }
         } else {
            return undefined;
         }
      } else {
         return undefined;
      }
   }

}