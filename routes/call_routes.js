import { Router } from "express";
import { Info, Stats, Deviation } from "../controllers/call_controllers.js";
const Inforoute = Router();


Inforoute.post('/info', Info);

Inforoute.get('/stats', Stats);

Inforoute.get('/deviation', Deviation);


export default Inforoute;