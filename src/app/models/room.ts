import { Message } from "./message"
import { User } from "./user"

export class Room {

    readonly _id?: string
    ownersID?: User[]
    usersID?: User[]
    messagesID?: Message[]

}
