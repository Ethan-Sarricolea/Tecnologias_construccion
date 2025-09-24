/**
 * 
 */

import { MedalProvider } from "../domain/MedalProvider";

export class MedalService {
    constructor(private provider: MedalProvider){}

    showTop(n:number, tittle="Paris 2024"){
        console.log(`\n=== ${tittle} ===`);
        console.table(this.provider.top(n))
        
    }
}