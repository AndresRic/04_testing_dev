describe('HU 2310 - Campos Beneficiario Acreedor', () => {
	beforeEach(() => {
		const urlAuth =
			'https://login.microsoftonline.com/LibertyMutual.onmicrosoft.com/oauth2/v2.0/authorize?client_id=c6a0bcac-da90-4d83-9168-e95f5eeb6c86&response_type=code&redirect_uri=https://auto-dev.libertyseguros.ec&scope=user.read+openid+profile+email&response_mode=query&state=12345&nonce=678910';

		cy.visit(urlAuth, {
			headers: {
				'user-agent': 'test-agent',
			},
		});

		// cy.visit('https://d1oowu29hl47c5.cloudfront.net/dashboard', {
		// 	onBeforeLoad(windows) {
		// 		windows.sessionStorage.setItem(
		// 			'id_token',
		// 			'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJjNmEwYmNhYy1kYTkwLTRkODMtOTE2OC1lOTVmNWVlYjZjODYiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMDhhODMzMzktOTBlNy00OWJmLTkwNzUtOTU3Y2NkNTYxYmYxL3YyLjAiLCJpYXQiOjE2NzUzMzQwODUsIm5iZiI6MTY3NTMzNDA4NSwiZXhwIjoxNjc1MzM3OTg1LCJlbWFpbCI6IkFuZHJlcy5NdW5vejAxQE91dHNvdXJjaW5nLmxpYmVydHlzZWd1cm9zLmNvbSIsIm5hbWUiOiJNdcOxb3osIEFuZHLDqXMiLCJub25jZSI6IjY3ODkxMCIsIm9pZCI6ImVjOWNiYWQ0LWNlNmUtNDMxOS05ZDk3LWY0MzNlMzE2NmUzYiIsInByZWZlcnJlZF91c2VybmFtZSI6IkFuZHJlcy5NdW5vejAxQE91dHNvdXJjaW5nLmxpYmVydHlzZWd1cm9zLmNvbSIsInJoIjoiMC5BUU1BT1RPb0NPZVF2MG1RZFpWOHpWWWI4YXk4b01hUTJvTk5rV2pwWDE3cmJJWURBRTQuIiwic3ViIjoiMndOeWNVaHRvZHdHU0hNMHcwNm5SWW9xQVRlNUtULTY5NUU4SDE0aU5JMCIsInRpZCI6IjA4YTgzMzM5LTkwZTctNDliZi05MDc1LTk1N2NjZDU2MWJmMSIsInV0aSI6ImI5c0FVbm8wZUVTdUJaUklDRWRDQUEiLCJ2ZXIiOiIyLjAiLCJlbXBsb3llZWlkIjoibjE2MjI1NDIifQ.GBwq-9hbEvdnnCs5m27TfVrDUozk-gb1DK7vGL7X0YT4d709jLgGYsrgVes8zC5Bjf7eiIUcRkt8BdOcF8UC5dgwu2ShduUqQxkV3nYcZG9uaiCbwqMSf-R839Nnq3VNG55QfjEHA2Eq5QwAzmJNf7Lb6rovjL7Ixi2XIfW1BhymYra9k-32v2LNHMhP57ekq7gZdeVSXZIME5Srr-dKu777MDBEUVW1Wukx-p4rwq6aZN2acm6ZqfgNqKf08ITlcb1qRyuxYYW9Y0WgZ0PmjS8rd3iDEMCnHQD0yWpLPVgJDUxEXXdDozIuNpBrKO6teqdPyVJr7C2e5JU-UE38jQ'
		// 		);
		// 	},
		// });
	});
});
