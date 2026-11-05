import { Request, Response } from "express";
import Budget from "../models/Budget";

export class BudgetController {

    static getAll = async( req:Request, res:Response) =>{
        try {
            const budgets = await Budget.findAll({
                order:[
                    ['createdAt', 'DESC']
                ]
                 //TODO: Filtrar por el usuario autenticado
            })
            res.json(budgets)
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Hubo un error'})
        }
    }

    static create = async(req:Request, res:Response) =>{
        try {
            const budget = new Budget(req.body)
            await budget.save()
            res.status(201).json('Presupuesto Creado Correctamente')
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'Hubo un error'})
        }
    }

    static getById = async(req:Request, res:Response) =>{
        const {id} = req.params
        // TODO:  Verificamos que id sea un string y no un array
        if (typeof id !== 'string') {
            return res.status(400).json({error:'ID no válido' })
        }

        const budget = await Budget.findByPk(id)
        if (!budget) {
            const error = new Error('Presupuesto no encontrado')
            return res.status(404).json({error:error.message})
        }

        res.json(budget)
    }

    static updateById = async(req:Request, res:Response) =>{
        res.send('desde update api/budgets/:id')
    }

    static deleteById = async(req:Request, res:Response) =>{
        res.send('desde delete api/budgets/:id')
    }
} 