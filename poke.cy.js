
describe('Автотест на покупку нового фото для своего тренера', function () {
    
    it('Покупка нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/'); //посетили сайт
        cy.get(':nth-child(1) > .auth__input').type('techcomr@yandex.ru'); //ввели почту
        cy.get('#password').type('Nik20052004'); //ввели пароль
        cy.get('.auth__button').click(); //нажали войти
        cy.get('.header__btns > [href="/shop"]').click(); // нажали кноку магазин
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Dima Romanov');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
        })
})