import * as tastyTradeService from './tasty-trade-service.js'

export const loginController = async (req, res) => {
	try {
		const { login, password } = req.body

		if (!login || !password) {
			return res.status(400).json({ error: 'Request body is missing login or password!' })
		}

		const loginResp = await tastyTradeService.login(login, password)
		res.status(200).json({ message: loginResp })
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
}
export const getCustomerInfoController = async (req, res) => {
	try {
		const sessionToken = req.headers.authorization
		if (!sessionToken) {
			return res.status(401).json({ error: 'Session Token required.' })
		}
		const customerInfo = await tastyTradeService.getCustomerInfo(sessionToken)
		res.status(200).json({ message: customerInfo })
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
}
export const getCustomerAccountsController = async (req, res) => {
	try {
		const sessionToken = req.headers.authorization
		if (!sessionToken) {
			return res.status(401).json({ error: 'Session Token required.' })
		}
		const accounts = await tastyTradeService.getCustomerAccounts(sessionToken)
		res.status(200).json({ message: accounts })
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
}
export const getCustomerAccountDetailController = async (req, res) => {
	try {
		const sessionToken = req.headers.authorization
		const { accountId } = req.params
		if (!sessionToken || !accountId) {
			return res.status(401).json({ error: 'Session Token and AccountId required.' })
		}
		const accountDetail = await tastyTradeService.getCustomerAccountDetail(sessionToken, accountId)
		res.status(200).json({ message: accountDetail })
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
}
export const getCustomerAccountPositionsController = async (req, res) => {
	try {
		const sessionToken = req.headers.authorization
		const { accountId } = req.params
		if (!sessionToken || !accountId) {
			return res.status(401).json({ error: 'Session Token and AccountId required.' })
		}
		const accountPositions = await tastyTradeService.getCustomerAccountPositions(sessionToken, accountId)
		res.status(200).json({ message: accountPositions })
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
}
export const getCustomerAccountBalancesController = async (req, res) => {
	try {
		const sessionToken = req.headers.authorization
		const { accountId } = req.params
		if (!sessionToken || !accountId) {
			return res.status(401).json({ error: 'Session Token and AccountId required.' })
		}
		const accountBalances = await tastyTradeService.getCustomerAccountBalances(sessionToken, accountId)
		res.status(200).json({ message: accountBalances })
	} catch (e) {
		res.status(500).json({ message: e.message })
	}
}
