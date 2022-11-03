import { Room } from "./room"
import { User } from "./user"

export class Message {
    readonly _id?:string
    userID?:User[]
    roomID?:Room[]
    friendID?:User[]
    date?: Date
    content?:string
    
    
}
