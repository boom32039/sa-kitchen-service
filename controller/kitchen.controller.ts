import KitchenService from "../service/kitchen.service"

import { Request,Response } from "express"

const KitchenController = {
    async createOrder(req:Request,res:Response,next:any){
        const payload  = req.body
        try {
            const result = await KitchenService.createOrder(payload)
            return res.status(200).send({
                status:"success",
                data:result
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async finishOrder(req:Request,res:Response,next:any){
        const payload  = req.body
        try {
            const result = await KitchenService.deleteOrder(payload)
            return res.status(200).send({
                status:"success",
                data:result
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async updateOrder(req:Request,res:Response,next:any){
        const payload  = req.body
        try {
            const result = await KitchenService.updateOrder(payload)
            return res.status(200).send({
                status:"success",
                data:result
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    // async getOrder(req:Request,res:Response,next:any){
    //     try{
    //         const {id} = req.params
    //         const Order = await KitchenService.getOrder(Number(id))
    //         return res.status(200).send({
    //             status:"success",
    //             data:Order
    //         })
    //     }catch(error){
    //         return res.status(500).send({
    //             status:"error",
    //             message:"Internal Server Error"
    //         })
    //     }
    // },

    async getAllOrder(req:Request,res:Response,next:any){
        try {
            const all_Order = await KitchenService.getAllOrder()
            return res.status(200).send({
                status:"success",
                data: all_Order
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    // async updateOrder(req:Request,res:Response,next:any){
    //     try {
    //         let {id} = req.params
    //         const payload = req.body
    //         const result = await KitchenService.updateOrder(Number(id),payload)
    //         return res.status(200).send({
    //             status:"success",
    //             message:`Update Order id: ${id} successfully`
    //         })
    //     } catch (error) {
    //         return res.status(500).send({
    //             status:"error",
    //             message:"Internal Server Error"
    //         })
    //     }
    // },

    // async deleteOrder(req:Request,res:Response,next:any){
    //     try{
    //         const {id} = req.params
    //         const Order = await KitchenService.getOrder(Number(id))
    //         if(!Order){
    //             return res.status(404).send({
    //                 message:"Order not found"
    //             })
    //         }
    //         const result = await KitchenService.deleteOrder(Number(id))
    //         return res.status(200).send({
    //             status:"success",
    //             message:`Delete id ${id} successfully`
    //         })
    //     }catch(error){
    //         return res.status(500).send({
    //             status:"error",
    //             message:"Internal Server Error"
    //         })
    //     }
    // },

    // async getOrderByCheckInId(req:Request,res:Response,next:any){
    //     try{
    //         const {id_checkin} = req.params
    //         const orders = await KitchenService.getAllOrder({id_checkin:id_checkin})
    //         return res.status(200).send({
    //             status:"success",
    //             data:orders
    //         })
    //     }catch(error){
    //         return res.status(500).send({
    //             status:"error",
    //             message:"Internal Server Error"
    //         })
    //     }
    // }
}

export default KitchenController