import orderModel from "../model/order.model"
import channel from '../message-broker/channel'
import db from "../model/database"
import config  from "../config/config"

const KitchenService = {
    async createOrder(payload:any){
        try{
            await orderModel.create({
                orderId : payload.orderId,
                menuName : payload.menu_name,
                amount : payload.amount,
                createdAt : new Date(),
                updatedAt : new Date()
            })
        }catch(error){
            console.log(error)
            throw(error)
        }
    },



    async getOrder(id:number){
        try{
           
        }catch(error){
            console.log(error)
            throw(error)
        }
    },

    async getAllOrder(){
        try{
            return orderModel.find()
        }catch(Error){
            throw(Error)
        }
    },

    async deleteOrder(payload:any){
        try {
            await orderModel.deleteOne({
               orderId : payload.orderId
            })
        } catch (error) {
            console.log(error)
            throw(error)
        }
    },

    async updateOrder(payload:any){
        try {
            await orderModel.updateOne({
               orderId : payload.orderId
            },{
                userId : payload.userId
            })
        } catch (error) {
            console.log(error)
            throw(error)
        }
    },
}
    // async deleteOrder(id:number){
        
    //     }catch (error){
    //         console.log(error)
    //         throw(error)
    //     }
    // },


export default KitchenService