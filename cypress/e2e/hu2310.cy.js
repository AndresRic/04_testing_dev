describe('HU 2310 - Campos Beneficiario Acreedor', () => {
	beforeEach(() => {
		cy.intercept('GET', 'https://ipv4.icanhazip.com/').as(
			'ipv4.icanhazip.com'
		);
		cy.intercept('POST', 'https://www.google-analytics.com/j/collect**').as(
			'collect'
		);
		cy.intercept(
			'POST',
			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/quotation/dashboard-quote'
		).as('dashboard-quote');
		cy.intercept(
			'POST',
			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/quotation/dashboard/count'
		).as('count');

		cy.visit('https://d1oowu29hl47c5.cloudfront.net/dashboard', {
			onBeforeLoad(windows) {
				windows.sessionStorage.setItem(
					'id_token',
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJjNmEwYmNhYy1kYTkwLTRkODMtOTE2OC1lOTVmNWVlYjZjODYiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMDhhODMzMzktOTBlNy00OWJmLTkwNzUtOTU3Y2NkNTYxYmYxL3YyLjAiLCJpYXQiOjE2NzQ5OTQ4NDksIm5iZiI6MTY3NDk5NDg0OSwiZXhwIjoxNjc0OTk4NzQ5LCJlbWFpbCI6IkFuZHJlcy5NdW5vejAxQE91dHNvdXJjaW5nLmxpYmVydHlzZWd1cm9zLmNvbSIsIm5hbWUiOiJNdcOxb3osIEFuZHLDqXMiLCJub25jZSI6IjY3ODkxMCIsIm9pZCI6ImVjOWNiYWQ0LWNlNmUtNDMxOS05ZDk3LWY0MzNlMzE2NmUzYiIsInByZWZlcnJlZF91c2VybmFtZSI6IkFuZHJlcy5NdW5vejAxQE91dHNvdXJjaW5nLmxpYmVydHlzZWd1cm9zLmNvbSIsInJoIjoiMC5BUU1BT1RPb0NPZVF2MG1RZFpWOHpWWWI4YXk4b01hUTJvTk5rV2pwWDE3cmJJWURBRTQuIiwic3ViIjoiMndOeWNVaHRvZHdHU0hNMHcwNm5SWW9xQVRlNUtULTY5NUU4SDE0aU5JMCIsInRpZCI6IjA4YTgzMzM5LTkwZTctNDliZi05MDc1LTk1N2NjZDU2MWJmMSIsInV0aSI6ImMtY3V2SVQ5LUVLaHNuaVR1clVXQVEiLCJ2ZXIiOiIyLjAiLCJlbXBsb3llZWlkIjoibjE2MjI1NDIifQ.pTH3di764wnvgS_RYTff38_Goac4nfFqtb-KIfIMKF0a10Ldbi-LalgQpKw4tkOw1fVk3hbw8bhujMODIp1ZRJFO58SRSzDNcBufo1iROtLj4q4bZ8vROdg6zCRv4qE4tuFIYVv_FGNznzyOgicEz0R7hRWOP1QqClG9zvxsN4belHvTzsbPxxwh0SM0WAU4zabCIEyYQPV4RF160A_ASEN046qrSJdETUtL2i-lEGj2eWGEdrgN4zv6IrLWcnow2DJC8Zo7ZqZBiYvcG2zB9URg4bILQNqQpRvg6X2xx2GOhUUOznZhXqgj-xmDkD_WIUIY6GIe1VTh49P6GLKiRQ'
				);
			},
		});

		cy.wait([
			'@ipv4.icanhazip.com',
			'@collect',
			'@dashboard-quote',
			'@count',
		]);
	});

	it('Campo: Tipo de identificación', () => {
		cy.intercept(
			'POST',
			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/general/branch-offices'
		).as('branch-offices');

		cy.intercept(
			'POST',
			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/quotation/new'
		).as('new');

		/* ==== Generated with Cypress Studio ==== */
		cy.get('.button--primary').click();
		cy.wait('@branch-offices');
		cy.contains('Selecciona una sucursal *').next().click();
		cy.get('li[data-option-index="0"]').click();
		cy.get('#id').clear('1');
		cy.get('#id').type('1103642367');
		cy.get('#placa').clear('P');
		cy.get('#placa').type('PCM-1234');
		cy.get('.items-center > .button--primary').click();
		cy.wait('@new');
		cy.get(
			'.libertyModal__container--content--actions > .button--primary'
		).click({ timeout: 60000 });
		cy.get('#documento > .h-13').click();
		cy.get('.justify-center > .w-774 > .bg-white > :nth-child(1)').click();
		cy.get('input[type=checkbox]').check();
		cy.get(
			':nth-child(3) > .bg-white > .container > .w-full > .button--primary'
		).click();
		cy.contains('Selecciona un celular de contacto').parent().click();
		cy.contains('Agregar número celular').parent().click();
		cy.get('label')
			.contains('Selecciona un celular de contacto')
			.next()
			.children()
			.eq(0)
			.wait(2000)
			.type('098098098');

		cy.get(':nth-child(4) > .mt-auto > .relative > .w-84').clear('c');
		cy.get(':nth-child(4) > .mt-auto > .relative > .w-84').type(
			'cliente@gmail.com'
		);
		cy.get('#Province').type('salinas');
		cy.get('.hover\\:bg-lightTeal > .w-full').click();
		cy.get('.w-full > .font-roboto').click();
		cy.get('.flex-wrap > .font-roboto').click();
		cy.get(
			'.libertyModal__container--content--actions > .button--primary'
		).click();
		cy.get('.cursor-pointer > img[alt=Edit]').click();
		cy.get('.pb-6 > :nth-child(2) > .mt-auto > .relative > .w-84').clear(
			'09'
		);
		cy.get('.pb-6 > :nth-child(2) > .mt-auto > .relative > .w-84').type(
			'098098098'
		);
		cy.get(
			':nth-child(2) > :nth-child(2) > .mt-auto > .relative > .w-84'
		).clear('c');
		cy.get(
			':nth-child(2) > :nth-child(2) > .mt-auto > .relative > .w-84'
		).type('cliente@gmail.com');
		cy.get(
			'.pb-5 > .mt-auto > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
		).clear('CA');
		cy.get(
			'.pb-5 > .mt-auto > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
		).type('CALLE 13');
		cy.get('#addressType > .h-13').click();
		cy.get('#box-addressType').click();
		cy.get(
			'.ModalForm__container--content--actions > .button--primary'
		).click();
		cy.get('input[type=checkbox]').check();
		cy.get('.cursor-pointer > .flex > .w-4').click();
		cy.get('.h-13 > .text-mediumTeal').click();
		cy.get('#box-identificationNumber').click();
		cy.get('.mt-auto > .relative > .w-84').clear('1');
		cy.get('.mt-auto > .relative > .w-84').type('1790093808001');
		cy.get(
			'.ModalForm__container--content--description > :nth-child(3) > .button--primary'
		).click();

		cy.get(':nth-child(3) > .mt-auto > .relative > .w-84').click();
		cy.get('.ModalForm__container--content--description').click();
		cy.get('.break-all').should('be.visible');
		cy.get('.break-all').should(
			'have.text',
			'Este campo no puede quedar vacío'
		);

		/* ==== End Cypress Studio ==== */
	});
});
