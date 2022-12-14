import { Message } from "./message"
import { Room } from "./room"

export class User {

    readonly _id?: string
    username!: string
    firstName!: string
    lastName!: string
    avatar!: string
    email?: string
    password?: string
    roomsID?: Room[]
    sentMessagesID?: Message[]
    receivedMessagesID?: Message[]
    isLoggedIn?: boolean
    token!: string
    country?: string
    city?: string
    street?: string
    zipCode?: string
    phoneNumber?: string
    dialCode?: string
    skills?: string[]
    role?: string
    friendsID?: User[]

}







