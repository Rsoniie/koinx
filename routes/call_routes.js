import { Router } from "express";
import { Info } from "../controllers/call_controllers.js";
const Inforoute = Router();


Inforoute.post('/info', Info);


export default Inforoute;