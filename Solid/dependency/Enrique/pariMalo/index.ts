// /**
//  * 
//  */

// // Simula conexion a BD
// class Paris2024Provider {
//     top(n: number) {
//         const data = [
            // {rank: 1, country: "usa", gold:40, silver: 44, bronce: 42},
            // {rank: 2, country: "chn", gold:25, silver: 27, bronce: 30},
            // {rank: 3, country: "jpn", gold:26, silver: 23, bronce: 24},
            // {rank: 4, country: "aus", gold:18, silver: 16, bronce: 18}
//         ];
//         return data.slice(0, n);
//     }
// }

// // {rank: number, country: string, gold: number, silver: number, bronce: number}

// // Instanciar el provedor dentro de la clase MedalService, se romperia paris si Medal se rompe
// class MedalService {
//     private provider: Paris2024Provider;

//     constructor(){
//         this.provider = new Paris2024Provider()
//     }

//     showTop(n: number) : void {
//         const rows = this.provider.top(n);

//         console.log("\n ---Paris 2024---")
//         console.table(rows);
//     }
// }

// const medallero = new MedalService();
// medallero.showTop(3);