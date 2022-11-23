import { Claim } from "./claim.interface"

export interface Application {
    id: number
    name: string
    url: string
    claim: Claim
}