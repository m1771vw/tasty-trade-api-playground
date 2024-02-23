# Setup

Clone the repo and run `npm install`

Can run `npm run start` to run the server locally.

# Sandbox

You have to go here: https://developer.tastytrade.com/sandbox/

Register for sandbox user

## Login Flow

You have to first login with the `POST tasty-trade/login` endpoint. This uses the `POST /session` from Tasty Trade.
This will provide a session token and this session token must be used for all subsequent calls. Provide this token in headers, Authorization: {token}. Do not have Bearer prefixing the token.

## Create Customer and Account

In order to get dummy data from the sandbox, once you sign up on the Sandbox, you can create a customer and an account for that customer.
Do so here (same site as above): https://developer.tastytrade.com/sandbox/

## Retrieving Account Number

In order to get an account number, you have to get it from the `GET tasty-trade/accounts` endpoint. Provide the session token in headers, Authorization: {token}. Do not have Bearer prefixing the token.

## Retrieving Positions / Balance

To retrieve that accounts position / balances, use the `GET /tasty-trade/accounts/:accountId/positions` or `GET /tasty-trade/accounts/:accountId/balances` endpoint. Provide the session token in headers, Authorization: {token}. Do not have Bearer prefixing the token.

## Examples

### Login:

```
{
    "message": {
        "data": {
            "user": {
                "email": "<email here>",
                "username": "<username here>",
                "external-id": "U0b433..."
            },
            "remember-token": "8cGY...",
            "session-token": "Yeq..."
        },
        "context": "/sessions"
    }
}
```

### Accounts

```
{
    "message": {
        "data": {
            "items": [
                {
                    "account": {
                        "account-number": "5WV78106",
                        "opened-at": "2024-02-23T03:43:34.376+00:00",
                        "nickname": "Individual",
                        "account-type-name": "Individual",
                        "day-trader-status": false,
                        "is-closed": false,
                        "is-firm-error": false,
                        "is-firm-proprietary": false,
                        "is-futures-approved": false,
                        "is-test-drive": false,
                        "margin-or-cash": "Cash",
                        "is-foreign": false,
                        "investment-objective": "SPECULATION",
                        "suitable-options-level": "Covered And Cash Secured",
                        "created-at": "2024-02-23T03:43:34.377+00:00"
                    },
                    "authority-level": "owner"
                },
                ...
```

### Positions

( at this time didn't have any positions )

```
{
    "message": {
        "data": {
            "items": []
        },
        "context": "/accounts/5WV78106/positions"
    }
}
```

### Balances

```
{
    "message": {
        "data": {
            "account-number": "5WV78106",
            "cash-balance": "100000.0",
            "long-equity-value": "0.0",
            "short-equity-value": "0.0",
            "long-derivative-value": "0.0",
            "short-derivative-value": "0.0",
            "long-futures-value": "0.0",
            "short-futures-value": "0.0",
            "long-futures-derivative-value": "0.0",
            "short-futures-derivative-value": "0.0",
            "long-margineable-value": "0.0",
            "short-margineable-value": "0.0",
            "margin-equity": "100000.0",
            "equity-buying-power": "200000.0",
            "derivative-buying-power": "100000.0",
            "day-trading-buying-power": "0.0",
            "futures-margin-requirement": "0.0",
            "available-trading-funds": "0.0",
            "maintenance-requirement": "0.0",
            "maintenance-call-value": "0.0",
            "reg-t-call-value": "0.0",
            "day-trading-call-value": "0.0",
            "day-equity-call-value": "0.0",
            "net-liquidating-value": "100000.0",
            "cash-available-to-withdraw": "0.0",
            "day-trade-excess": "0.0",
            "pending-cash": "0.0",
            "pending-cash-effect": "None",
            "long-cryptocurrency-value": "0.0",
            "short-cryptocurrency-value": "0.0",
            "cryptocurrency-margin-requirement": "0.0",
            "unsettled-cryptocurrency-fiat-amount": "0.0",
            "unsettled-cryptocurrency-fiat-effect": "None",
            "closed-loop-available-balance": "0.0",
            "equity-offering-margin-requirement": "0.0",
            "long-bond-value": "0.0",
            "bond-margin-requirement": "0.0",
            "used-derivative-buying-power": "0.0",
            "special-memorandum-account-value": "0.0",
            "special-memorandum-account-apex-adjustment": "0.0",
            "total-settle-balance": "0.0",
            "snapshot-date": "2024-02-23",
            "reg-t-margin-requirement": "0.0",
            "futures-overnight-margin-requirement": "0.0",
            "futures-intraday-margin-requirement": "0.0",
            "maintenance-excess": "100000.0",
            "pending-margin-interest": "0.0",
            "effective-cryptocurrency-buying-power": "0.0",
            "updated-at": "2024-02-23T03:43:36.540+00:00"
        },
        "context": "/accounts/5WV78106/balances"
    }
}
```
