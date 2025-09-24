import { Paris2024Provider } from "./infra/Paris2024Provider";
import { MedalProvider } from "./domain/MedalProvider";
import { MedalService } from "./app/MedalService";

const provider = new Paris2024Provider();
const service = new MedalService(provider);

service.showTop(3);