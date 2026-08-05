import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import campaignRoutes from "./routes/campaignRoutes.js";

const app = express();


app.use(cors());

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/campaigns", campaignRoutes);



app.get("/", (req,res)=>{

    res.send("CreatorBridge API Running...");

});


export default app;