import { Request, Response } from "express";

export class BudgetController {

    static getAll = async( req:Request, res:Response) =>{
        res.send('desde get all')
    }

    static create = async(req:Request, res:Response) =>{
        res.send('desde create api/budgets')
    }

    static getById = async(req:Request, res:Response) =>{
        res.send('desde getgetById api/budgets/:id')
    }

    static updateById = async(req:Request, res:Response) =>{
        res.send('desde update api/budgets/:id')
    }

    static deleteById = async(req:Request, res:Response) =>{
        res.send('desde delete api/budgets/:id')
    }
} 