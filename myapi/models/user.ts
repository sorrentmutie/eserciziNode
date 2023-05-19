import { MyFile } from "./file";

export interface User {
    id: number,
    name: string,
    surname: string,
    files: MyFile[] | undefined
}