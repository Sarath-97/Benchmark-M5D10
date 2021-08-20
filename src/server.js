import  express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors"
import moviesRouter from "./services/movies/movies.js";

const server = express()

const PORT = process.env.PORT

server.use(cors())
server.use(express.json())

/* *************ROUTES ****************** */

server.use("/movies", moviesRouter)

/* ************* */

console.table(listEndpoints(server));

server.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
})