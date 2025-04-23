export const API_URL =
  "https://gateway-fortune-vault-dev.up.railway.app/v1/api";

export const data = [
  {
    title: "API Check status transaction",
    description: "API check status transaction",
    note: ``,
    method: "POST",
    url: `${API_URL}/transaction/code`,
    parameter: [
      {
        name: "code",
        type: "string",
        required: true,
        description: "Mã code của transaction",
        example: "AGF6YT",
      },
      {
        name: "providerKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do Hapi Money cung cấp.",
        example: "abc123",
      },
    ],
    exampleRequest: `curl --location 'http://localhost:8001/v1/api/transaction/code' \
--header 'Signature: 6975hh4lBTx2Wk75hzhxqh6bum2j8mr/c+RqIFPkL5m7jEL7iY/l8ay7EVeIgsIb+2q866IXkKvMPEWJ5PXOJEwKIXHpmNl1Mzl54/lUPU+G8sKUQzxuj4zfiIrJ1IUozkSEnvj8jeGBkDsOnvXVJSRwdZtm62p135wEgJERlNLPSpzl0XO44Qt4kg==' \
--header 'Content-Type: application/json' \
--data '{
    "code":"adsad",
    "providerKey":"abc123"
}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "object",
        description: "Dữ liệu transaction",
        example: "",
      },
      {
        parameter: "data.status",
        type: "string",
        description: "Trạng thái transaction",
        example: "success: Thành công, failed: Thất bại",
      },
      {
        parameter: "data.user_id",
        type: "string",
        description: "Mã user",
        example: "",
      },
      {
        parameter: "data.code",
        type: "string",
        description: "Mã code",
        example: "",
      },
      {
        parameter: "...",
        type: "...",
        description: "...",
        example: "...",
      },
    ],
    exampleResponse: `{
    "code": 200,
    "message": "Success",
    "data": {
        "details": {
            "takeInterest": [
                {
                    "amountInterest": 4.303832120902132E+48,
                    "currency": "usd"
                },
                {
                    "amountInterest": 9.65723736499178E+49,
                    "currency": "ton"
                },
                {
                    "amountInterest": 3.507113928171562E+49,
                    "currency": "usdt"
                }
            ]
        },
        "amount": 0,
        "rate_usd": 0,
        "id": "007017e2-c5fe-4a50-b804-1290fa7c26b8",
        "user_id": "01c06926-a397-433b-821f-a1afb1f90320",
        "date_created": "2025-04-07T04:00:01.371567Z",
        "date_updated": "0001-01-01T00:00:00Z",
        "transaction_type": "take-interest",
        "platform": "tbk,p2p",
        "icon": "icon-take-interest",
        "code": "89ed64e1b119ac70d835",
        "status": "success",
        "description": "",
        "currency": ""
    },
    "success": true
}`,
  },
  {
    title: "API Lấy thông tin số dư",
    description: "API lấy thông tin số dư tài khoản",
    note: ``,
    method: "POST",
    url: `${API_URL}/user/info-wallet`,
    parameter: [
      {
        name: "providerKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "userID",
        type: "string",
        required: true,
        description: "Mã user",
        example: "157",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/user/info-wallet' \
--header 'Signature: MTc0NDk0MTU5NXwiYWJjMTIzInxmMkRzcmd5aWhNY0JxSnJaWmhJQ3JZU3c0QUdvTllxWkRFWmE4VWNoa0EvVjMwMm92bW5CUVlUdWs1aTFoVm1USGJna0lkTkt3WVpPYXRMcnRBT2RCdz09' \
--header 'Content-Type: application/json' \
--data '{
    "providerKey":"abc123",
    "platform":"tbk",
    "userID": 157
}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "object",
        description: "Dữ liệu danh sách quà tặng đã tạo riêng cho Client",
        example: "",
      },
      {
        parameter: "data.wallets",
        type: "array",
        description: "Danh sách ví",
        example: "",
      },
      {
        parameter: "wallets.balance",
        type: "string",
        description: "Số dư",
        example: "",
      },
      {
        parameter: "wallets.amount_interest",
        type: "string",
        description: "Số dư lãi chưa chốt",
        example: "",
      },
      {
        parameter: "wallets.currency",
        type: "string",
        description: "Loại tiền",
        example: "",
      },
      {
        parameter: "wallets.time_deposit",
        type: "string",
        description: "Thời gian tạo ví",
        example: "",
      },
      {
        parameter: "...",
        type: "...",
        description: "...",
        example: "...",
      },
    ],
    exampleResponse: `{
    "code": 200,
    "message": "Success",
    "data": {
        "wallets": [
            {
                "is_new": false,
                "id": "431fe035-4cec-4f3c-afe9-ed831c1d3910",
                "user_id": "01c06926-a397-433b-821f-a1afb1f90320",
                "date_created": "0001-01-01T00:00:00Z",
                "date_updated": "0001-01-01T00:00:00Z",
                "balance": "415.7633333333333",
                "provider_key": "",
                "amount_interest": "14.223333333333334",
                "time_deposit": "1742551937",
                "last_time_update": "1744345588",
                "currency": "usd"
            },
            {
                "is_new": false,
                "id": "4534133e-7141-49b1-9056-4a8287c43d68",
                "user_id": "01c06926-a397-433b-821f-a1afb1f90320",
                "date_created": "0001-01-01T00:00:00Z",
                "date_updated": "0001-01-01T00:00:00Z",
                "balance": "322.96720508888893",
                "provider_key": "",
                "amount_interest": "58194.65587577828",
                "time_deposit": "1741591420",
                "last_time_update": "1745297896",
                "currency": "ton"
            },
            {
                "is_new": false,
                "id": "6591b401-aff6-44db-94cc-1edb473dd597",
                "user_id": "01c06926-a397-433b-821f-a1afb1f90320",
                "date_created": "0001-01-01T00:00:00Z",
                "date_updated": "0001-01-01T00:00:00Z",
                "balance": "421.45276937500006",
                "provider_key": "",
                "amount_interest": "1.2813501249999961",
                "time_deposit": "1742352965",
                "last_time_update": "1744345588",
                "currency": "usdt"
            }
        ]
    },
    "success": true
}`,
  },
  {
    title: "API Lấy thông số tính lãi",
    description: "Lấy thông số tính lãi",
    note: "",
    method: "POST",
    url: `${API_URL}/setting/interest`,
    parameter: [
      {
        name: "providerKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do Hapi Money cung cấp.",
        example: "abc123",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/setting/interest' \
--header 'Signature: MTc0NDk0MTU5NXwiYWJjMTIzInxmMkRzcmd5aWhNY0JxSnJaWmhJQ3JZU3c0QUdvTllxWkRFWmE4VWNoa0EvVjMwMm92bW5CUVlUdWs1aTFoVm1USGJna0lkTkt3WVpPYXRMcnRBT2RCdz09' \
--header 'Content-Type: application/json' \
--data '{
    "providerKey":"abc123"
}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "object",
        description: "Dữ liệu danh sách quà tặng đã tạo riêng cho Client",
        example: "",
      },
      {
        parameter: "data.lockTimeDefault",
        type: "object",
        description: "Thông số tính lãi mặc định",
        example: "",
      },
      {
        parameter: "lockTimeDefault.percentDefault",
        type: "float",
        description: "Phần trăm lãi mặc định",
        example: "",
      },
      {
        parameter: "lockTimeDefault.percentPrincipal",
        type: "float",
        description: "Phần trăm tiền gốc để tính lãi",
        example: "",
      },
      {
        parameter: "lockTimeDefault.lockTimeDefault",
        type: "float",
        description: "Thời gian tính lãi mặc định",
        example: "",
      },
      {
        parameter: "lockTimeDefault.percentForAdminDefault",
        type: "float",
        description: "Phần trăm lãi cho admin mặc định",
        example: "",
      },
      {
        parameter: "data.percents",
        type: "array",
        description: "Setting lãi linh hoạt",
        example: "",
      },
      {
        parameter: "percents.seconds",
        type: "int",
        description: "Thời gian tính lãi linh hoạt kể từ khi tạo ví",
        example: "",
      },
      {
        parameter: "percents.settings",
        type: "array",
        description: "Setting lãi linh hoạt",
        example: "",
      },
      {
        parameter: "settings.percentPrincipal",
        type: "int",
        description: "Phần trăm tiền gốc để tính lãi",
        example: "",
      },
      {
        parameter: "settings.lockTime",
        type: "int",
        description: "Thời gian tính lãi linh hoạt",
        example: "",
      },
      {
        parameter: "settings.percentInterest",
        type: "float",
        description: "Phần trăm lãi",
        example: "",
      },
      {
        parameter: "settings.percentForAdmin",
        type: "float",
        description: "Phần trăm lãi cho admin",
        example: "",
      },
      {
        parameter: "data.depositLockTime",
        type: "int",
        description: "Thời gian khoá khi mỗi lần deposit",
        example: "",
      },
      {
        parameter: "data.urgentWithdrawalFeePercent",
        type: "int",
        description: "Phần trăm phí rút tiền khẩn cấp",
        example: "",
      },
      {
        parameter: "data.freeWithdrawalsCount",
        type: "int",
        description: "Số lần rút tiền miễn phí",
        example: "",
      },
      {
        parameter: "data.freeWithdrawalLimit",
        type: "int",
        description: "Số tiền rút tiền miễn phí",
        example: "",
      },
      {
        parameter: "data.currencyMergeEnabled",
        type: "boolean",
        description: "Cho phép gộp tiền",
        example: "",
      },
      {
        parameter: "data.feeSetting",
        type: "array",
        description: "Setting phí",
        example: "",
      },
      {
        parameter: "feeSetting.transactionType",
        type: "object",
        description: "Loại giao dịch",
        example: "",
      },
      {
        parameter: "feeSetting.feeFixed",
        type: "int",
        description: "Phí cố định",
        example: "",
      },
      {
        parameter: "feeSetting.feePercent",
        type: "int",
        description: "Phí phần trăm",
        example: "",
      },
      {
        parameter: "feeSetting.feeIn",
        type: "boolean",
        description: "Phí có thể tích hợp vào tiền gốc",
        example: "",
      },
      {
        parameter: "data.isAutoTakeProfit",
        type: "boolean",
        description: "Tự động chốt lãi",
        example: "",
      },
      {
        parameter: "data.profitTakingCycle",
        type: "int",
        description: "Cycle chốt lãi",
        example: "",
      },
      {
        parameter: "data.cronjob",
        type: "string",
        description: "Cronjob",
        example: "",
      },
      {
        parameter: "data.deposit",
        type: "object",
        description: "Setting deposit",
        example: "",
      },
      {
        parameter: "deposit.currencySupportDeposit",
        type: "array",
        description: "Loại tiền được sử dụng trong giao dịch deposit",
        example: "",
      },
      {
        parameter: "deposit.minDeposit",
        type: "int",
        description: "Số tiền deposit tối thiểu",
        example: "",
      },
      {
        parameter: "data.withdrawn",
        type: "object",
        description: "Setting withdrawn",
        example: "",
      },
      {
        parameter: "withdrawn.currencySupportInput",
        type: "array",
        description: "Loại tiền được sử dụng trong giao dịch input",
        example:
          "Nếu currencyMergeEnabled = true thì sẽ có 1 loại tiền, còn currencyMergeEnabled = false thì sẽ có nhiều loại tiền",
      },
      {
        parameter: "withdrawn.currencySupportOutput",
        type: "array",
        description: "Loại tiền được sử dụng trong giao dịch output",
        example: "Có hiệu lực nếu currencyMergeEnabled = true",
      },
      {
        parameter: "withdrawn.minWithdrawn",
        type: "int",
        description: "Số tiền rút tối thiểu",
        example: "",
      },
      {
        parameter: "withdrawn.maxWithdrawn",
        type: "int",
        description: "Số tiền rút tối đa",
        example: "",
      },
      {
        parameter: "data.platform",
        type: "string",
        description: "Những platform được sử dụng setting",
        example: "",
      },
    ],
    exampleResponse: `{
    "code": 200,
    "message": "Success",
    "data": {
        "id": 1,
        "lockTimeDefault": {
            "percentDefault": 10,
            "percentPrincipal": 100,
            "lockTimeDefault": 600,
            "percentForAdminDefault": 0
        },
        "percents": [
            {
                "seconds": 300,
                "settings": [
                    {
                        "percentPrincipal": 20,
                        "lockTime": 300,
                        "percentInterest": 8,
                        "percentForAdmin": 0
                    }
                ]
            }
        ],
        "depositLockTime": 3600,
        "urgentWithdrawalFeePercent": 10,
        "freeWithdrawalsCount": 5,
        "freeWithdrawalLimit": 200,
        "currencyMergeEnabled": false,
        "feeSetting": [
            {
                "transactionType": {
                    "id": 6,
                    "status": "published",
                    "name": "Withdrawn",
                    "slug": "withdrawn",
                    "description": ""
                },
                "feeFixed": 1,
                "feePercent": 10,
                "feeIn": true
            },
            {
                "transactionType": {
                    "id": 5,
                    "status": "published",
                    "name": "Deposit",
                    "slug": "deposit",
                    "description": ""
                },
                "feeFixed": 0,
                "feePercent": 10,
                "feeIn": true
            }
        ],
        "isAutoTakeProfit": false,
        "profitTakingCycle": 300,
        "cronjob": "0 */4 * * *",
        "deposit": {
            "currencySupportDeposit": [
                {
                    "id": 3,
                    "status": "",
                    "name": "USDT",
                    "slug": "usdt",
                    "is_crypto_token": false,
                    "address": "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
                    "network": 1,
                    "wallet_integrations_currencies": 0,
                    "wallet_integrations_input_withdrawn": 0,
                    "wallet_integrations_output_withdrawn": 0,
                    "full_name": "USDT",
                    "icon": "7631e669-54a2-43c3-bc23-a3deaead9cc5"
                },
                {
                    "id": 6,
                    "status": "",
                    "name": "TON",
                    "slug": "ton",
                    "is_crypto_token": false,
                    "address": "Ton",
                    "network": 1,
                    "wallet_integrations_currencies": 0,
                    "wallet_integrations_input_withdrawn": 0,
                    "wallet_integrations_output_withdrawn": 0,
                    "full_name": "TON",
                    "icon": "a2ce0a61-230b-41ee-a8f7-acb9e20b634e"
                }
            ],
            "minDeposit": 1
        },
        "withdrawn": {
            "currencySupportInput": [
                {
                    "id": 3,
                    "status": "",
                    "name": "USDT",
                    "slug": "usdt",
                    "is_crypto_token": false,
                    "address": "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
                    "network": 1,
                    "wallet_integrations_currencies": 0,
                    "wallet_integrations_input_withdrawn": 0,
                    "wallet_integrations_output_withdrawn": 0,
                    "full_name": "USDT",
                    "icon": "7631e669-54a2-43c3-bc23-a3deaead9cc5"
                },
                {
                    "id": 6,
                    "status": "",
                    "name": "TON",
                    "slug": "ton",
                    "is_crypto_token": false,
                    "address": "Ton",
                    "network": 1,
                    "wallet_integrations_currencies": 0,
                    "wallet_integrations_input_withdrawn": 0,
                    "wallet_integrations_output_withdrawn": 0,
                    "full_name": "TON",
                    "icon": "a2ce0a61-230b-41ee-a8f7-acb9e20b634e"
                }
            ],
            "currencySupportOutput": [
                {
                    "id": 3,
                    "status": "",
                    "name": "USDT",
                    "slug": "usdt",
                    "is_crypto_token": false,
                    "address": "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
                    "network": 1,
                    "wallet_integrations_currencies": 0,
                    "wallet_integrations_input_withdrawn": 0,
                    "wallet_integrations_output_withdrawn": 0,
                    "full_name": "USDT",
                    "icon": "7631e669-54a2-43c3-bc23-a3deaead9cc5"
                }
            ],
            "minWithdrawn": 1,
            "maxWithdrawn": 10000
        },
        "platform": "tbk,p2p"
    },
    "success": true
} `,
  },
  {
    title: "API lấy phí giao dịch",
    description: "Lấy phí giao dịch",
    note: "",
    method: "POST",
    url: `${API_URL}/fee/get-fee`,
    parameter: [
      {
        name: "providerKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do Hapi Money cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "transactionType",
        type: "string",
        required: true,
        description: `Loại giao dịch`,
        example: "deposit",
      },
      {
        name: "amount",
        type: "int",
        required: true,
        description: "Số tiền giao dịch",
        example: "8",
      },
      {
        name: "currency",
        type: "string",
        required: true,
        description: "Loại tiền",
        example: "usdt",
      },
      {
        name: "rateUsd",
        type: "int",
        required: true,
        description: "Tỷ giá",
        example: "1",
      },
      {
        name: "userID",
        type: "int",
        required: true,
        description: "ID người dùng",
        example: "1",
      },
      {
        name: "rateCurrency",
        type: "object",
        required: true,
        description: "Tỷ giá",
        example: "",
      },
      {
        name: "rateCurrency.currency",
        type: "string",
        required: true,
        description: "Loại tiền",
        example: "usdt",
      },
      {
        name: "rateCurrency.currency.USD",
        type: "float",
        required: true,
        description: "Tỷ giá",
        example: "1",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/fee/get-fee' \
--header 'Signature: 6975hh4lBTx2Wk75hzhxqh6bum2j8mr/c+RqIFPkL5m7jEL7iY/l8ay7EVeIgsIb+2q866IXkKvMPEWJ5PXOJEwKIXHpmNl1Mzl54/lUPU+G8sKUQzxuj4zfiIrJ1IUozkSEnvj8jeGBkDsOnvXVJSRwdZtm62p135wEgJERlNLPSpzl0XO44Qt4kg==' \
--header 'Content-Type: application/json' \
--data '{
		"userID":          "01c06926-a397-433b-821f-a1afb1f90320",
		"currency":        "ton",
		"Amount":          6.5,
		"RateUsd":         2.3,
		"ProviderKey":     "123456abc",
		"TransactionType": "withdrawn",
		"Platform":        "web",
		"RateCurrency":{
			"TON": {
				"USD": 2.3
			},
			"USDT": {
				"USD": 1
			},
			"USD": {
				"USD": 1
			}
        }
	}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "object",
        description: "Phí giao dịch",
        example: "",
      },
      {
        parameter: "data.totalFeeUrgentWithdraw",
        type: "string",
        description: "Phí giao dịch rút tiền khẩn cấp",
        example: "5",
      },
      {
        parameter: "data.totalFeeWithdraw",
        type: "string",
        description: "Phí giao dịch rút tiền",
        example: "5",
      },
      {
        parameter: "data.totalFeeDeposit",
        type: "string",
        description: "Phí giao dịch deposit",
        example: "5",
      },
      {
        parameter: "data.currency",
        type: "string",
        description: "Loại tiền",
        example: "usdt",
      },
    ],
    exampleResponse: `{
    "code": 200,
    "message": "Success",
    "data": {
        "totalFeeUrgentWithdraw": 1.3347760253888463,
        "totalFeeWithdraw": 0,
        "totalFeeDeposit": 0,
        "currency": "USD"
    },
    "success": true
}`,
  },
  {
    title: "API Nạp tiền",
    description: "Nạp tiền",
    note: "",
    method: "POST",
    url: `${API_URL}/deposit`,
    parameter: [
      {
        name: "providerKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "userID",
        type: "string",
        required: true,
        description: "Mã người dùng",
        example: "8",
      },
      {
        name: "amount",
        type: "int",
        required: true,
        description: "Số tiền nạp",
        example: "10",
      },
      {
        name: "currency",
        type: "string",
        required: true,
        description: "Loại tiền",
        example: "usdt",
      },
      {
        name: "rateUsd",
        type: "int",
        required: true,
        description: "Tỷ giá",
        example: "1",
      },
      {
        name: "rateCurrency",
        type: "object",
        required: true,
        description: "Tỷ giá các loại tiền",
        example: "",
      },
      {
        name: "rateCurrency.currency",
        type: "string",
        required: true,
        description: "Loại tiền",
        example: "usdt",
      },
      {
        name: "rateCurrency.currency.USD",
        type: "float",
        required: true,
        description: "Tỷ giá",
        example: "1",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/deposit' \
--header 'Signature: 6975hh4lBTx2Wk75hzhxqh6bum2j8mr/c+RqIFPkL5m7jEL7iY/l8ay7EVeIgsIb+2q866IXkKvMPEWJ5PXOJEwKIXHpmNl1Mzl54/lUPU+G8sKUQzxuj4zfiIrJ1IUozkSEnvj8jeGBkDsOnvXVJSRwdZtm62p135wEgJERlNLPSpzl0XO44Qt4kg==' \
--header 'Content-Type: application/json' \
--data '{
		"userID":          "01c06926-a397-433b-821f-a1afb1f90320",
		"Currency":        "ton",
		"Amount":          2,
		"RateUsd":         3.2,
		"transactionType": "deposit",
		"ProviderKey":     "123456abc",
		"Platform":        "web",
		"TransactionCode": "DFFAAaAAAAaAAAAAAAAAAAAA",
		"RateCurrency":{
			"TON": {
				"USD": 2.3
			},
			"USDT": {
				"USD": 1
			},
			"USD": {
				"USD": 1
			}
		}
	}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "array object",
        description: "Dữ liệu wallet sau khi nạp",
        example: "",
      },
      {
        parameter: "data.id",
        type: "string",
        description: "Mã wallet",
        example: "",
      },
      {
        parameter: "data.balance",
        type: "string",
        description: "Số dư wallet",
        example: "533",
      },
      {
        parameter: "data.currency",
        type: "string",
        description: "Loại tiền",
        example: "usdt",
      },
      {
        parameter: "...",
        type: "...",
        description: "...",
        example: "...",
      },
    ],
    exampleResponse: `{
  "code": 200,
  "message": "Success",
  "success": true,
  "data": {
    "is_new": false,
    "id": "4534133e-7141-49b1-9056-4a8287c43d68",
    "user_id": "01c06926-a397-433b-821f-a1afb1f90320",
    "date_created": "0001-01-01T00:00:00Z",
    "date_updated": "0001-01-01T00:00:00Z",
    "balance": "324.76720508888894",
    "provider_key": "123456abc",
    "amount_interest": "63630.409248894335",
    "time_deposit": "1741591420",
    "last_time_update": "1745398880",
    "currency": "ton"
  }
}`,
  },
  {
    title: "API Rút tiền",
    description: "Rút tiền",
    note: "",
    method: "POST",
    url: `${API_URL}/withdrawn`,
    parameter: [
      {
        name: "providerKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "userID",
        type: "string",
        required: true,
        description: "Mã người dùng",
        example: "8",
      },
      {
        name: "amount",
        type: "int",
        required: true,
        description: "Số tiền nạp",
        example: "10",
      },
      {
        name: "currency",
        type: "string",
        required: true,
        description: "Loại tiền",
        example: "usdt",
      },
      {
        name: "rateUsd",
        type: "int",
        required: true,
        description: "Tỷ giá",
        example: "1",
      },
      {
        name: "rateCurrency",
        type: "object",
        required: true,
        description: "Tỷ giá các loại tiền",
        example: "",
      },
      {
        name: "rateCurrency.currency",
        type: "string",
        required: true,
        description: "Loại tiền",
        example: "usdt",
      },
      {
        name: "rateCurrency.currency.USD",
        type: "float",
        required: true,
        description: "Tỷ giá",
        example: "1",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/deposit' \
--header 'Signature: 6975hh4lBTx2Wk75hzhxqh6bum2j8mr/c+RqIFPkL5m7jEL7iY/l8ay7EVeIgsIb+2q866IXkKvMPEWJ5PXOJEwKIXHpmNl1Mzl54/lUPU+G8sKUQzxuj4zfiIrJ1IUozkSEnvj8jeGBkDsOnvXVJSRwdZtm62p135wEgJERlNLPSpzl0XO44Qt4kg==' \
--header 'Content-Type: application/json' \
--data '{
		"userID":          "01c06926-a397-433b-821f-a1afb1f90320",
		"Currency":        "ton",
		"Amount":          2,
		"RateUsd":         3.2,
		"transactionType": "deposit",
		"ProviderKey":     "123456abc",
		"Platform":        "web",
		"TransactionCode": "DFFAAaAAAAaAAAAAAAAAAAAA",
		"WebhookUrl":      "http://localhost:8001/trade/webhook",
		"RateCurrency":{
			"TON": {
				"USD": 2.3
			},
			"USDT": {
				"USD": 1
			},
			"USD": {
				"USD": 1
			}
		}
	}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "array object",
        description: "Dữ liệu wallet sau khi nạp",
        example: "",
      },
      {
        parameter: "data.id",
        type: "string",
        description: "Mã wallet",
        example: "",
      },
      {
        parameter: "data.balance",
        type: "string",
        description: "Số dư wallet",
        example: "533",
      },
      {
        parameter: "data.currency",
        type: "string",
        description: "Loại tiền",
        example: "usdt",
      },
      {
        parameter: "...",
        type: "...",
        description: "...",
        example: "...",
      },
    ],
    exampleResponse: `{
  "code": 200,
  "message": "Success",
  "success": true,
  "data": {
    "is_new": false,
    "id": "4534133e-7141-49b1-9056-4a8287c43d68",
    "user_id": "01c06926-a397-433b-821f-a1afb1f90320",
    "date_created": "0001-01-01T00:00:00Z",
    "date_updated": "0001-01-01T00:00:00Z",
    "balance": "324.76720508888894",
    "provider_key": "123456abc",
    "amount_interest": "63630.409248894335",
    "time_deposit": "1741591420",
    "last_time_update": "1745398880",
    "currency": "ton"
  }
}`,
  },
  {
    title: "API Chốt lãi",
    description: `Chốt lãi`,
    note: `
    <b>Lưu ý: Chỉ có hiệu lực khi setting lãi suất isAutoTakeProfit = false</b>
`,
    listAddress: `
<b>Danh sách ID địa chỉ giao hàng: https://docs.google.com/spreadsheets/d/12igQQadaj8htobG90_ShBEtvdiWvYHBP/edit?gid=2023355786#gid=2023355786</b>
    `,
    method: "POST",
    url: `${API_URL}/interest/claim`,
    parameter: [
      {
        name: "providerKey",
        type: "string",
        required: true,
        description:
          "Là key xác thực id Client sử dụng API, do URBox cung cấp.",
        example: "abc123",
      },
      {
        name: "platform",
        type: "string",
        required: true,
        description: "Là key xác thực mã Client sử dụng API",
        example: "tbk",
      },
      {
        name: "userID",
        type: "string",
        required: true,
        description: "Mã người dùng",
        example: "",
      },
      {
        name: "transactionCode",
        type: "string",
        required: true,
        description:
          "Mã giao dịch do Client sinh. Sử dụng để tra cứu log & đối soát.",
        example: "",
      },
      {
        name: "rateCurrency",
        type: "object",
        required: true,
        description: "Tỷ giá các loại tiền",
        example: "",
      },
      {
        name: "rateCurrency.currency",
        type: "string",
        required: true,
        description: "Loại tiền",
        example: "usdt",
      },
      {
        name: "rateCurrency.currency.USD",
        type: "float",
        required: true,
        description: "Tỷ giá",
        example: "1",
      },
    ],
    exampleRequest: `curl --location '${API_URL}/interest/claim' \
--header 'Signature: RGp8rlFXZa/4riyDh8Z6Pybc/rHztgM2kVuJxrRh1DHgoLeuoGq3J9IAQaVk296/Ti/a3VKs9iGlYUZY0ijXTS4LpGfPXD2YVlfvx/Gq6I4xB8E4EpI+y6ts8kg5GQy/DKyylbLjXK00DnAENv2pDnl7IoW1oTjgpBtuo0DX7eliaZmGLTrABBke8g==' \
--header 'Content-Type: application/json' \
--data '{
		"userID":          "01c06926-a397-433b-821f-a1afb1f90320",
		"providerKey":     "123456abc",
		"platform":        "web",
		"transactionCode": "5haaaadsahasdasd",
		"rateCurrency": {
			"TON": {
				"USD": 2.3
			},
			"USDT": {
				"USD": 1
			},
			"USD": {
				"USD": 1
			}
		}
	}'`,
    responseInfo: [
      {
        parameter: "success",
        type: "boolean",
        description: "Trạng thái request",
        example: "true: Thành công, false: Lỗi",
      },
      {
        parameter: "data",
        type: "array object",
        description: "Dữ liệu chi tiết chốt lãi suất",
        example: "",
      },
      {
        parameter: "data.amountInterest",
        type: "float",
        description: "Số tiền lãi",
        example: "1000000",
      },
      {
        parameter: "data.currency",
        type: "string",
        description: "Loại tiền",
        example: "usdt",
      },
    ],
    exampleResponse: `{
    "code": 200,
    "message": "Success",
    "data":[
            {
                "currency": "usd",
                "amountInterest": 73212.75356722221
            },
            {
                "currency": "ton",
                "amountInterest": 63782.46539263641
            },
            {
                "currency": "usdt",
                "amountInterest": 74196.42582964449
            }
        ],
    "success": true
}`,
  },
];
