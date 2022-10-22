import { User } from './user';
export class ResponseAPIUser {

    public data!: User[]

    constructor(data: User[]) {

        this.data = data

    }
}
