import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { validateBudgetExists, validateBudgetId, validateBudgetInput } from "../middleware/budget";
import { ExpensesController } from "../controllers/ExpenseController";
import { validateExpenseId, validateExpenseInput } from "../middleware/Expense";

const router = Router()
 
router.param('budgetId', validateBudgetId)
router.param('budgetId', validateBudgetExists)
router.param('expenseId', validateExpenseId)

router.get('/', BudgetController.getAll)

router.post('/', validateBudgetInput, BudgetController.create)

router.get('/:budgetId', BudgetController.getById)

router.put('/:budgetId', validateBudgetInput, BudgetController.updateById)

router.delete('/:budgetId', BudgetController.deleteById)


/**Routes de Expense */
router.post('/:budgetId/expenses', validateExpenseInput, ExpensesController.create)
router.get('/:budgetId/expenses/:expenseId', ExpensesController.getById)
router.put('/:budgetId/expenses/:expenseId', ExpensesController.updateById)
router.delete('/:budgetId/expenses/:expenseId', ExpensesController.deleteById)

export default router