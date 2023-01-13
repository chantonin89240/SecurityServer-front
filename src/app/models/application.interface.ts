import { User } from "./user.interface"

export interface Application {
    id: number
    name: string
    url: string
    description: string
    clientSecret: string | null
    users: User[] | null
}