const info = {
	quoteNumber: 341,
	vehiculo: {
		placa: 'QUU-0035',
		usoVehiculo: 1, //1 = particular, 2= comercial,
	},
	asegurado: {
		TipoIdentificacionDes: 'Cédula',
		Identificacion: '1103642367',
		PrimerNombre: 'FABIAN',
		SegundoNombre: 'RICARDO',
		PrimerApellido: 'ESPINOZA',
		SegundoApellido: 'MASACHE',
		EstadoCivilCod: 'CASADO',
		Genero: 'M',
		FechaNacimiento: '1981-04-28T00:00:00',
		Nacionalidad: 'ECUATORIANA',
		celular: '0980980980',
		email: 'EMAIL_ASEGURADO@GMAIL.COM',
		direccion: 'CHOSITA EN EL MAR',
		provinciaCanton: 'SALINAS',
		tipoDireccion: 'CORRESPONDENCIA',
	},
	tomador: {
		TipoIdentificacionDes: 'Cédula',
		Identificacion: '1103642367',
		PrimerNombre: 'FABIAN',
		SegundoNombre: 'RICARDO',
		PrimerApellido: 'ESPINOZA',
		SegundoApellido: 'MASACHE',
		EstadoCivilCod: 'CASADO',
		Genero: 'M',
		FechaNacimiento: '1981-04-28T00:00:00',
		Nacionalidad: 'ECUATORIANA',
		celular: '0980980980',
		email: 'EMAIL_ASEGURADO@GMAIL.COM',
		direccion: 'CHOSITA EN EL MAR',
		provinciaCanton: 'SALINAS',
		tipoDireccion: 'CORRESPONDENCIA',
	},
	beneficiarioAcreedor: {
		tipoIdentificacion: 'RUC',
		identificacion: '1790093808001',
		razonSocial: 'AYTÉ',
		usoDelVehiculo: 1, //1 = particular, 2= comercial,
		tipoTelefono: 'OFICINA',
		telefono: '012312312',
		email: 'EMAIL_BENEFICIARIO_ACREEDOR@GMAIL.COM',
		direccion: 'CALLE 13',
		provincia: 'SALINAS',
	},
	id_token:
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJjNmEwYmNhYy1kYTkwLTRkODMtOTE2OC1lOTVmNWVlYjZjODYiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMDhhODMzMzktOTBlNy00OWJmLTkwNzUtOTU3Y2NkNTYxYmYxL3YyLjAiLCJpYXQiOjE2NzU2ODcyNTAsIm5iZiI6MTY3NTY4NzI1MCwiZXhwIjoxNjc1NjkxMTUwLCJlbWFpbCI6IkFuZHJlcy5NdW5vejAxQE91dHNvdXJjaW5nLmxpYmVydHlzZWd1cm9zLmNvbSIsIm5hbWUiOiJNdcOxb3osIEFuZHLDqXMiLCJub25jZSI6IjY3ODkxMCIsIm9pZCI6ImVjOWNiYWQ0LWNlNmUtNDMxOS05ZDk3LWY0MzNlMzE2NmUzYiIsInByZWZlcnJlZF91c2VybmFtZSI6IkFuZHJlcy5NdW5vejAxQE91dHNvdXJjaW5nLmxpYmVydHlzZWd1cm9zLmNvbSIsInJoIjoiMC5BUU1BT1RPb0NPZVF2MG1RZFpWOHpWWWI4YXk4b01hUTJvTk5rV2pwWDE3cmJJWURBRTQuIiwic3ViIjoiMndOeWNVaHRvZHdHU0hNMHcwNm5SWW9xQVRlNUtULTY5NUU4SDE0aU5JMCIsInRpZCI6IjA4YTgzMzM5LTkwZTctNDliZi05MDc1LTk1N2NjZDU2MWJmMSIsInV0aSI6InR1aEw0NjdEaDBpRWp0UVBGSW5jQUEiLCJ2ZXIiOiIyLjAiLCJlbXBsb3llZWlkIjoibjE2MjI1NDIifQ.ClHQY3_vetuY8hSfSdJOA5xy6ghWCd1zD2B5OiYP3KfomOvH_XZb47MFuZtp7TCvW5GFzom6-JtIrE2J8mR7Cly-uTsgeP3THqeYpa2vct4lUAuewSYrS1VcRv3vB4IBD4c3IKgz_4H26lQj1uCE-PXK3EExtZIs5OM2pSVMHjTlvbCCVBmVr3i1NKwMX4Y9P3_UEk37VfHqMOOeJJVwLkxWMJQgGeJb9v7-Y2hRDpxi2RGyYtdcc2nsIHS_uoMu7niNbpwHUNGWxQGYzpa1107pI65Tenc_RUj4kFPZNZUsx84RKnME6BHa0vcWN6eLGH9htnAUjUA8c6hsCiKAhQ',
};

// describe('Testing HU 2310 - Campos Beneficiario Acreedor - from new quotation', () => {
// 	//This beforeEach is to get screen 'Información adicional - Asigna un rol - Beneficiario acreedor'
// 	beforeEach(() => {
// 		cy.intercept('GET', 'https://ipv4.icanhazip.com/').as(
// 			'ipv4.icanhazip.com'
// 		);
// 		cy.intercept('POST', 'https://www.google-analytics.com/j/collect**').as(
// 			'collect'
// 		);
// 		cy.intercept(
// 			'POST',
// 			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/quotation/dashboard-quote'
// 		).as('dashboard-quote');
// 		cy.intercept(
// 			'POST',
// 			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/quotation/dashboard/count'
// 		).as('count');

// 		cy.visit('https://d1oowu29hl47c5.cloudfront.net/dashboard', {
// 			onBeforeLoad(windows) {
// 				windows.sessionStorage.setItem('id_token', info.id_token);
// 			},
// 		});

// 		cy.wait([
// 			'@ipv4.icanhazip.com',
// 			'@collect',
// 			'@dashboard-quote',
// 			'@count',
// 		]);

// 		cy.intercept(
// 			'POST',
// 			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/general/branch-offices'
// 		).as('branch-offices');

// 		cy.intercept(
// 			'POST',
// 			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/quotation/new'
// 		).as('new');

// 		/* ==== Generated with Cypress Studio ==== */
// 		cy.get('.button--primary').click();
// 		cy.wait('@branch-offices');
// 		cy.contains('Selecciona una sucursal *').next().click();
// 		cy.get('li[data-option-index="0"]').click();
// 		cy.get('#id').type(info.asegurado.Identificacion);
// 		cy.get('#placa').type(info.vehiculo.placa);
// 		cy.get('.items-center > .button--primary').click();
// 		cy.get('button[type=button]').contains('Sí, confirmar').click(); //confirmation modal button
// 		cy.wait('@new');
// 		cy.get(
// 			'.libertyModal__container--content--actions > .button--primary'
// 		).click({ timeout: 60000 });
// 		cy.get('#documento > .h-13').click();
// 		cy.get(
// 			`.justify-center > .w-774 > .bg-white > :nth-child(${info.vehiculo.usoVehiculo})`
// 		).click();
// 		cy.get('input[type=checkbox]').check();
// 		cy.get(
// 			':nth-child(3) > .bg-white > .container > .w-full > .button--primary'
// 		).click();
// 		cy.contains('Selecciona un celular de contacto').parent().click();
// 		cy.contains('Agregar número celular').parent().click();
// 		cy.get('label')
// 			.contains('Selecciona un celular de contacto')
// 			.next()
// 			.children()
// 			.eq(0)
// 			.wait(2000)
// 			.type(info.asegurado.celular);

// 		cy.get(':nth-child(4) > .mt-auto > .relative > .w-84').clear('c');
// 		cy.get(':nth-child(4) > .mt-auto > .relative > .w-84').type(
// 			info.asegurado.email
// 		);
// 		cy.get('#Province').type(info.asegurado.provinciaCanton);
// 		cy.get('.hover\\:bg-lightTeal > .w-full').click();
// 		cy.get('.w-full > .font-roboto').click();

// 		// cy.get('.flex-wrap > .font-roboto').click();
// 		// cy.get(
// 		// 	'.libertyModal__container--content--actions > .button--primary'
// 		// ).click();
// 		// cy.get('.cursor-pointer > img[alt=Edit]').click();
// 		// cy.get('.pb-6 > :nth-child(2) > .mt-auto > .relative > .w-84').clear(
// 		// 	'09'
// 		// );
// 		// cy.get('.pb-6 > :nth-child(2) > .mt-auto > .relative > .w-84').type(
// 		// 	'098098098'
// 		// );
// 		// cy.get(
// 		// 	':nth-child(2) > :nth-child(2) > .mt-auto > .relative > .w-84'
// 		// ).clear('c');
// 		// cy.get(
// 		// 	':nth-child(2) > :nth-child(2) > .mt-auto > .relative > .w-84'
// 		// ).type('cliente@gmail.com');
// 		// cy.get(
// 		// 	'.pb-5 > .mt-auto > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
// 		// ).clear('CA');
// 		// cy.get(
// 		// 	'.pb-5 > .mt-auto > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
// 		// ).type('CALLE 13');
// 		// cy.get('#addressType > .h-13').click();
// 		// cy.get('#box-addressType').click();
// 		// cy.get(
// 		// 	'.ModalForm__container--content--actions > .button--primary'
// 		// ).click();
// 		// cy.get('input[type=checkbox]').check();
// 		// cy.get('.cursor-pointer > .flex > .w-4').click();
// 		// cy.get('.h-13 > .text-mediumTeal').click();
// 		// cy.get('#box-identificationNumber').click();
// 		// cy.get('.mt-auto > .relative > .w-84').clear('1');
// 		// cy.get('.mt-auto > .relative > .w-84').type('1790093808001');
// 		// cy.get(
// 		// 	'.ModalForm__container--content--description > :nth-child(3) > .button--primary'
// 		// ).click();

// 		// cy.get(':nth-child(3) > .mt-auto > .relative > .w-84').click();
// 		// cy.get('.ModalForm__container--content--description').click();
// 		// cy.get('.break-all').should('be.visible');
// 		// cy.get('.break-all').should(
// 		// 	'have.text',
// 		// 	'Este campo no puede quedar vacío'
// 		// );

// 		/* ==== End Cypress Studio ==== */
// 	}); ///////////////end of beforeEach

// 	it('Campo: Tipo de identificación', () => {});
// });

describe('Testing HU 2310 - Campos Beneficiario Acreedor - from resume a quotation', () => {
	//This beforeEach is to get screen 'Información adicional - Asigna un rol - Beneficiario acreedor'
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
				windows.sessionStorage.setItem('id_token', info.id_token);
			},
		});

		cy.wait([
			'@ipv4.icanhazip.com',
			'@collect',
			'@dashboard-quote',
			'@count',
		]);

		cy.intercept(
			'GET',
			`https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/quotation/${info.quoteNumber}/resume`
		).as('resume');

		cy.intercept(
			'GET',
			`https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/quotation/${info.quoteNumber}/coverage`
		).as('coverage');

		cy.intercept(
			'POST',
			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/general/branch-offices'
		).as('branch-offices');

		cy.intercept(
			'POST',
			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/emission/new-emission'
		).as('new-emission');
		cy.intercept(
			'PUT',
			'https://d05pyp3zy1.execute-api.us-east-1.amazonaws.com/dev/v1/emission/update-emission'
		).as('update-emission');

		/* ==== Generated with Cypress Studio ==== */
		cy.get('tbody > tr > :nth-child(2)')
			.contains(info.quoteNumber)
			.parent()
			.find('button')
			.contains('Retomar')
			.click();
		cy.wait(['@resume', '@coverage', '@branch-offices']);
		cy.url().should(
			'include',
			'https://d1oowu29hl47c5.cloudfront.net/poliza'
		);
		cy.contains('FULL').click();
		cy.get('button').contains('Iniciar emisión').click();
		cy.get('.button--primary').contains('Sí, confirmar').click();
		cy.wait('@new-emission');
		cy.url().should(
			'include',
			'https://d1oowu29hl47c5.cloudfront.net/poliza/emision'
		);
		cy.get('.cursor-pointer > img[alt=Edit]').click();
		cy.get('input[name=phoneNumber')
			.click()
			.clear()
			.type(info.asegurado.celular);
		cy.get('input[placeholder="Confirma número celular *"]').type(
			info.asegurado.celular
		);

		cy.get('input[name="email"]')
			.click()
			.clear()
			.type(info.asegurado.email);
		cy.get(
			':nth-child(2) > :nth-child(2) > .mt-auto > .relative > .w-84'
		).type(info.asegurado.email);
		cy.get('input[name="address"]')
			.click()
			.clear()
			.type(info.asegurado.direccion);
		cy.get('button[name="addressType"]')
			.contains('Tipo de dirección')
			.click();
		cy.get('#box-addressType').contains('Correspondencia').click();
		cy.get('.ModalForm__container--content .button--primary')
			.contains('Guardar')
			.click();
		cy.wait('@update-emission');

		// cy.get(
		// 	'.ModalForm__container--content--description > :nth-child(3) > .button--primary'
		// ).click();

		// cy.get(':nth-child(3) > .mt-auto > .relative > .w-84').click();
		// cy.get('.ModalForm__container--content--description').click();
		// cy.get('.break-all').should('be.visible');
		// cy.get('.break-all').should(
		// 	'have.text',
		// 	'Este campo no puede quedar vacío'
		// );

		/* ==== End Cypress Studio ==== */
	}); ///////////////end of beforeEach

	it('Campo: Tipo de identificación', () => {});
});
