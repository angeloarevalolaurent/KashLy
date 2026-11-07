import { Router } from "express";
import { body } from "express-validator";

import { handleInputError } from "../middleware/validation";
import { AuthController } from "../controllers/AuthController";

const router = Router()

router.post('/create-account',
    body('name')
        .notEmpty().withMessage('El nombre no puede ir vacio'),
    body('password')
        .isLength({min:8}).withMessage('El password es muy corto, mínimo 8 caracteres'),
    body('email')
        .isEmail().withMessage('E-mail no válido'),
    handleInputError,
    AuthController.createAccount)


router.post('/confirm-account',
    body('token')
        .notEmpty()
        .isLength({min: 6, max: 6})
        .withMessage('El token no válido'),
    handleInputError,
    AuthController.confirmAccount
)
export default router