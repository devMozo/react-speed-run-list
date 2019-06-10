describe.only('Test Whole Paths', () => {
  beforeEach(() => {
    cy.fixture('speedRunList.json').as('SRlist');
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://www.speedrun.com/api/v1/games?embed=categories',
      response: '@SRlist',
    }).as('games');
  });

  it('Happy Path', () => {
    cy.visit('/');

    cy.wait('@games');

    cy.get('.LoaderSpinner').eq(0);

    cy.get('.SpeedRunRow')
      .first()
      .within(() => {
        cy.get('.SpeedRunRow__button').click();
      });

    cy.location('pathname').should('eq', '/View/k6qqkx6g');

    cy.get('.HeaderView .HeaderView__link a').click();
  });
});
