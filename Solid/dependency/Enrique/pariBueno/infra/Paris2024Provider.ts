import { MedalProvider } from "../domain/MedalProvider";
import { MedalTable } from "../domain/MedalTable";

export class Paris2024Provider implements MedalProvider {
    top(n: number): MedalTable[] {
        const data: MedalTable[] = [
            {rank: 1, country: "usa", gold:40, silver: 44, bronce: 42},
            {rank: 2, country: "chn", gold:25, silver: 27, bronce: 30},
            {rank: 3, country: "jpn", gold:26, silver: 23, bronce: 24},
            {rank: 4, country: "aus", gold:18, silver: 16, bronce: 18}
        ];
        return data.slice(0, n);
    }
}