
describe('Автотесты на форму логина', function () {
    
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should("be.visible"); //проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); //крестик виден
        })

    it('Востановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
        cy.get('#forgotEmailButton').click(); //нажали забыл пароль
        cy.get('#forgotForm > .header').should("be.visible"); //проверка что текст виден
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // текст совпадает
        })

   it('Ввод неправильного пароля', function () {
        cy.visit('https://login.qa.studio/'); //посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
        cy.get('#pass').type('iLoveqastudio5'); //ввели неправильный пароль
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should("be.visible"); //проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); //крестик виден
        })
   
   it('Ввод неправильного логина', function () {
        cy.visit('https://login.qa.studio/'); //посетили сайт
        cy.get('#mail').type('german@dolnikov5.ru'); //ввели неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели правильный пароль
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should("be.visible"); //проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); //крестик виден
        })

   it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); //посетили сайт
        cy.get('#mail').type('germandolnikov.ru'); //ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввели правильный пароль
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should("be.visible"); //проверка что текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает
        })

   it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин со строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); //ввели правильный пароль
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should("be.visible"); //проверка что текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); //крестик виден
        })
})