import { Outcome } from "./outcome";

export interface Rule {
    move: string;
    rolls: { [id: string]: string; };
    outcome: Outcome;
}