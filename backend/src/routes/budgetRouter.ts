import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { handleInputError } from "../middleware/validation";
import { body, param } from "express-validator";

const router = Router()

router.get('/', BudgetController.getAll)

router.post('/', 
    body('name')
        .trim()
        .notEmpty().withMessage('El nombre del presupuesto no puede ir vacio'),
    body('amount')
        .notEmpty().withMessage('La cantidad del presupuesto no puede ir vacio')
        .isNumeric().withMessage('Cantidad no válida')
        .custom(value => value > 0).withMessage('El presupuesto debe ser mayor a 0'),
    handleInputError,
    BudgetController.create)

router.get('/:id', 
    param('id').isInt().withMessage('ID no válido')
    .custom(value => value > 0).withMessage('ID no válido'),
    handleInputError,
    BudgetController.getById)

router.put('/:id', 
    param('id').isInt().withMessage('ID no válido')
    .custom(value => value > 0).withMessage('ID no válido'),
    body('name')
        .trim()
        .notEmpty().withMessage('El nombre del presupuesto no puede ir vacio'),
    body('amount')
        .notEmpty().withMessage('La cantidad del presupuesto no puede ir vacio')
        .isNumeric().withMessage('Cantidad no válida')
        .custom(value => value > 0).withMessage('El presupuesto debe ser mayor a 0'),
    handleInputError,
    BudgetController.updateById)

router.delete('/:id', 
    param('id').isInt().withMessage('ID no válido')
    .custom(value => value > 0).withMessage('ID no válido'),
    handleInputError,
    BudgetController.deleteById)
export default router