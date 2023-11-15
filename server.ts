import app from "./app"
import config from "./config/config"
import connectDB from "./model/database"
import {connectQueue}  from './message-broker/channel'
main()

async function main() {
    await connectDB()
    await connectQueue()
    app.listen(Number(config.port || 3000), config.backend_url || "localhost",()=>
        console.log(`🚀 Kitchen Service has listening on ${config.backend_url || "localhost"}:${config.port || 3000}`)
    )
}