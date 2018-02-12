import { Resource } from "angular4-hal";
import { Player } from "./player";

export class Team extends Resource {
    name: string;
    players: Player[];
}
