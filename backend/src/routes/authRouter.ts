import { Router } from "express";
import { body, param } from "express-validator";

import { handleInputError } from "../middleware/validation";
import { AuthController } from "../controllers/AuthController";
import { limiter } from "../config/limiter";

const router = Router()
router.use(limiter)

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

router.post('/login',
    body('email')
        .isEmail().withMessage('E-mail no válido'),
    body('password')
        .notEmpty().withMessage('El password no puede ir vacio'),
    handleInputError,
    AuthController.login
)

router.post('/forgot-password',
    body('email')
    .isEmail().withMessage('E-mail no válido'),
    handleInputError,
    AuthController.forgotPassword
)


router.post('/validate-token',
     body('token')
        .notEmpty().withMessage('El token no puede ir vacio'),
    handleInputError,
    AuthController.validateToken
)

router.post('/reset-password/:token',
    param('token')
        .notEmpty()
        .isNumeric()
        .isLength({ min: 6, max:6 })
        .withMessage('Token no válido'),

    body('password')
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres'),

    handleInputError,
    AuthController.resetPasswordWithToken
)

router.get('/user',
    AuthController.user
)

export default router