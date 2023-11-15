// connect to rabbitmq
import amqplib, { Channel, Connection } from 'amqplib'
import KitchenService from "../service/kitchen.service"
let channel!: Channel, connection: Connection

export async function connectQueue()  {
    try {
        const amqpServer = 'amqp://localhost:5672'
        connection = await amqplib.connect(amqpServer)
        channel = await connection.createChannel()
    
        // consume all the orders that are not acknowledged
        await channel.consume('kitchen', async (data) => {
          console.log(data?.content.toString())
          const payload = data?.content.toString() || '';
          const payloadJson = JSON.parse(payload)
          const result = await KitchenService.createOrder(payloadJson)
          console.log(result)
          channel.ack(data!);
        })
    } catch (error) {
        console.log(error)
    }
}
export default channel
