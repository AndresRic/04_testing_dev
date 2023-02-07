const info = {
	quoteNumber: 354,
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
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJjNmEwYmNhYy1kYTkwLTRkODMtOTE2OC1lOTVmNWVlYjZjODYiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMDhhODMzMzktOTBlNy00OWJmLTkwNzUtOTU3Y2NkNTYxYmYxL3YyLjAiLCJpYXQiOjE2NzU3MzI2MjEsIm5iZiI6MTY3NTczMjYyMSwiZXhwIjoxNjc1NzM2NTIxLCJlbWFpbCI6IkFuZHJlcy5NdW5vejAxQE91dHNvdXJjaW5nLmxpYmVydHlzZWd1cm9zLmNvbSIsIm5hbWUiOiJNdcOxb3osIEFuZHLDqXMiLCJub25jZSI6IjY3ODkxMCIsIm9pZCI6ImVjOWNiYWQ0LWNlNmUtNDMxOS05ZDk3LWY0MzNlMzE2NmUzYiIsInByZWZlcnJlZF91c2VybmFtZSI6IkFuZHJlcy5NdW5vejAxQE91dHNvdXJjaW5nLmxpYmVydHlzZWd1cm9zLmNvbSIsInJoIjoiMC5BUU1BT1RPb0NPZVF2MG1RZFpWOHpWWWI4YXk4b01hUTJvTk5rV2pwWDE3cmJJWURBRTQuIiwic3ViIjoiMndOeWNVaHRvZHdHU0hNMHcwNm5SWW9xQVRlNUtULTY5NUU4SDE0aU5JMCIsInRpZCI6IjA4YTgzMzM5LTkwZTctNDliZi05MDc1LTk1N2NjZDU2MWJmMSIsInV0aSI6IjlqX3BIQ0UxekUtWU5YcDlFNDAtQVEiLCJ2ZXIiOiIyLjAiLCJlbXBsb3llZWlkIjoibjE2MjI1NDIifQ.cNyW3PX4_IEXIJKa3h_eFpOeec09ueYUhoLx3_R4Lu1E3rexhlksImm15yKes5bOXvvVU6w3imtBQhRtTPwsu4oAN4ldkkGt3DUE1IxMIXr4uFI8mvK4bz4n-0kOxvqNUTuRCbJ67MwxrlyRVbJH2RghgaAQxw2D9LOYnm4ugdWR7JcRhtLz0g3yt4v9Fb4w5RURhIGpV8VW0bPWUjvcPTblh66sYxEz5H2Q7chb9zeKC2P04m6HmAvioabbztQVCUd00V7xN2V2dgNkOuoQQQFfTlUd9QT9IgJcZqaYGsqdDl3vYyQBbVv8ikuWk3jzZACuY8AZU7GjK7C5KsqNHA',
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
		cy.contains('¿Tiene crédito vehicular?')
			.parent()
			.find('input[type="checkbox"]')
			.check();
		cy.contains('Rol necesario para emitir la póliza').should('be.visible');
		cy.contains('Debe seleccionarse un Beneficiario Acreedor').should(
			'be.visible'
		);
		cy.contains('Agregar persona').should('be.visible');
		cy.get(
			'img[src="/static/media/plus.c53387e2b062556ee2afe8c284b7ba8e.svg"]'
		).click();
	}); ///////////////end of beforeEach

	it.only('Tests field Tipo de identificación', () => {
		cy.log('Test of error message'); //test of error message
		cy.get('button[name = "identificationType"]').as('idTypeField');

		//propiedades del campo en estado predeterminado
		cy.log('Test of propierties of field on default state');
		cy.get('@idTypeField')
			.should('not.have.class', 'btn-dropdown-error')
			.and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
			.and('have.css', 'font-family', 'Roboto-Light')
			.and('have.css', 'font-size', '16px')
			.and('have.css', 'color', 'rgb(112, 112, 112)')
			.and('have.css', 'font-weight', '100')
			.and('have.css', 'border', '1px solid rgb(145, 145, 145)');

		//////////////// Pruebas de campo en error de 'campo vacío'/////////////
		//click dentro y fuera del campo (sin seleccionar una opción)
		cy.log('Test of propierties of field on empty state');
		cy.get('@idTypeField').click();
		cy.get('ul > button[id=box-identificationNumber]')
			.as('rucOption')
			.should('have.text', 'RUC');
		cy.get('span').contains('Datos Personales').click();

		//propiedades del contenador del campo
		cy.log('Test of propierties of field container');
		cy.get('#identificationNumber')
			.find('img')
			.should('have.attr', 'alt', 'error')
			.and('be.visible');

		//propiedades del campo en estado de error 'campo vacío'
		cy.log('Test of propierties of field on empty error');
		cy.get('@idTypeField')
			.should('have.class', 'btn-dropdown-error')
			.and('have.css', 'background-color', 'rgb(250, 241, 241)')
			.and('have.css', 'font-family', 'Roboto-Light')
			.and('have.css', 'font-size', '16px')
			.and('have.css', 'color', 'rgb(112, 112, 112)')
			.and('have.css', 'font-weight', '100')
			.and('have.css', 'border', '1px solid rgb(233, 34, 67)');

		//propiedades del mensaje de error
		cy.log('Test of propierties of error message of empty error');
		cy.get('#identificationNumber')
			.contains('Es necesario realizar una selección')
			.as('errorMsg');
		cy.get('@errorMsg')
			.should('be.visible')
			.should('have.class', 'text-lmRed')
			.and('have.css', 'font-family', 'Roboto-Regular')
			.and('have.css', 'font-size', '12px')
			.and('have.css', 'color', 'rgb(211, 47, 47)')
			.and('have.css', 'font-weight', '400');

		//propiedades del campo seleccionando una opción
		cy.log('Test of propierties of field with option selected');
		cy.get('@idTypeField').click();
		cy.get('@rucOption').click();
		cy.get('@idTypeField')
			.should('not.have.class', 'btn-dropdown-error')
			.and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
			.and('have.css', 'font-family', 'Roboto-Light')
			.and('have.css', 'font-size', '16px')
			.and('have.css', 'color', 'rgb(112, 112, 112)')
			.and('have.css', 'font-weight', '100')
			.and('have.css', 'border', '1px solid rgb(145, 145, 145)')
			.and('have.attr', 'title', 'RUC')
			.and('have.attr', 'value', 'R');

		cy.get('@idTypeField')
			.find('span')
			.contains('RUC')
			.should('have.text', 'RUC')
			.and('have.css', 'color', 'rgb(52, 55, 65)')
			.and('have.css', 'font-family', 'Roboto-Regular')
			.and('have.css', 'font-size', '16px')
			.and('have.css', 'font-weight', '100');
	});

	it('Tests field Identificación', () => {
		cy.get('button[name = "identificationType"]').as('idTypeField');
		cy.get('@idTypeField').click();
		cy.get('@idTypeField').blur();

		cy.get('ul > button[id=box-identificationNumber]')
			.should('have.text', 'RUC')
			.as('rucOption');

		cy.get('@rucOption').click();
	});

	it('Tests Button Validar', () => {
		cy.get('button[name = "identificationType"]').as('idTypeField');
		cy.get('@idTypeField').click();
		cy.get('@idTypeField').blur();

		cy.get('ul > button[id=box-identificationNumber]')
			.should('have.text', 'RUC')
			.as('rucOption');

		cy.get('@rucOption').click();
	});

	it('Tests Button Cancelar', () => {
		cy.get('button[name = "identificationType"]').as('idTypeField');
		cy.get('@idTypeField').click();
		cy.get('@idTypeField').blur();

		cy.get('ul > button[id=box-identificationNumber]')
			.should('have.text', 'RUC')
			.as('rucOption');

		cy.get('@rucOption').click();
	});

	it('Tests Button Guardar', () => {
		cy.get('button[name = "identificationType"]').as('idTypeField');
		cy.get('@idTypeField').click();
		cy.get('@idTypeField').blur();

		cy.get('ul > button[id=box-identificationNumber]')
			.should('have.text', 'RUC')
			.as('rucOption');

		cy.get('@rucOption').click();
	});
});
