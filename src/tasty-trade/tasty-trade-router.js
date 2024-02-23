import { Router } from 'express'
import {
	loginController,
	getCustomerInfoController,
	getCustomerAccountsController,
	getCustomerAccountDetailController,
	getCustomerAccountPositionsController,
	getCustomerAccountBalancesController,
} from './tasty-trade-controller.js'

const router = Router()

router.post('/login', loginController)
router.get('/me', getCustomerInfoController)
router.get('/accounts', getCustomerAccountsController)
router.get('/accounts/:accountId', getCustomerAccountDetailController)
router.get('/accounts/:accountId/positions', getCustomerAccountPositionsController)
router.get('/accounts/:accountId/balances', getCustomerAccountBalancesController)

export default router
