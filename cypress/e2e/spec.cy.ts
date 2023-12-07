describe('Character List Test', () => {
    it('successfully loads and shows character list, then navigates to character item', () => {
        // Посещаем главную страницу
        cy.visit('http://localhost:5000/');

        // Проверяем наличие списка персонажей
        cy.get("[data-automation-id='character-list']", { timeout: 12000 }).should('exist');

        // Кликаем на первую карточку персонажа
        cy.get("[data-automation-id='character-card']").first().click();

        // Проверяем, что открылась страница с деталями персонажа
        cy.get("[data-automation-id='character-item']", { timeout: 12000 }).should('exist');
    });
});

// TODO - write a test for editing a item.mame and check that then new was changed on the item page and on the main page
