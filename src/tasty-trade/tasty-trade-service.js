import axios from 'axios'
// const baseUrl = 'https://api.tastytrade.com' // Prod URL
const baseUrl = 'https://api.cert.tastyworks.com' // Sandbox URL, would usually have these in .env

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
}

export const login = async (login, password, rememberMe = true) => {
	try {
		const body = {
			login: login,
			password,
			'remember-me': rememberMe,
		}
		const response = await axios.post(`${baseUrl}/sessions`, body, headers)
		return response.data
	} catch (error) {
		throw error
	}
}

export const getCustomerInfo = async (sessionToken) => {
	try {
		const response = await axios.get(`${baseUrl}/customers/me`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: sessionToken,
			},
		})
		return response.data
	} catch (error) {
		console.log('ERROR: ', error)
		throw error
	}
}

export const getCustomerAccounts = async (sessionToken) => {
	try {
		const response = await axios.get(`${baseUrl}/customers/me/accounts`, {
			headers: {
				...headers,
				Authorization: sessionToken,
			},
		})
		return response.data
	} catch (error) {
		console.log('ERROR: ', error)
		throw error
	}
}

export const getCustomerAccountDetail = async (sessionToken, accountId) => {
	try {
		const response = await axios.get(`${baseUrl}/customers/me/accounts/${accountId}`, {
			headers: {
				...headers,
				Authorization: sessionToken,
			},
		})
		return response.data
	} catch (error) {
		console.log('ERROR: ', error)
		throw error
	}
}

export const getCustomerAccountPositions = async (sessionToken, accountId) => {
	try {
		const response = await axios.get(`${baseUrl}/accounts/${accountId}/positions`, {
			headers: {
				...headers,
				Authorization: sessionToken,
			},
		})
		return response.data
	} catch (error) {
		console.log('ERROR: ', error)
		throw error
	}
}

export const getCustomerAccountBalances = async (sessionToken, accountId) => {
	try {
		const response = await axios.get(`${baseUrl}/accounts/${accountId}/balances`, {
			headers: {
				...headers,
				Authorization: sessionToken,
			},
		})
		return response.data
	} catch (error) {
		console.log('ERROR: ', error)
		throw error
	}
}
