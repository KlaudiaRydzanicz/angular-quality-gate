describe("Test adding object", () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/add');
  });


  it('should add object', () => {
    cy.get('#name').type('Krakow');
    cy.get('#longitude').type('21.0122');
    cy.get('#latitude').type('13.23456');
    cy.get('#country').type('Poland');
    cy.get('#description').type('test');
    cy.get('#color').select('#FF5733');
    cy.get('#update').click();
    cy.get('#success').contains('You add new sight!');
    cy.wait(3000);

  });


  it('should test coordinates', () => {

    cy.get('#name').type('Krakow');
    cy.get('#longitude').type('21.0122');
    cy.get('#latitude').type('13.23456456');
    cy.get('#country').type('Poland');
    cy.get('#description').type('test');
    cy.get('#color').select('#FF5733');
    cy.contains('The coordinates format is incorrect');
  })


  it('should test description', () => {

    cy.get('#name').type('Krakow');
    cy.get('#longitude').type('21.0122');
    cy.get('#latitude').type('13.234');
    cy.get('#country').type('Poland');
    cy.get('#description').type('KR'.repeat(150));
    cy.get('#color').select('#FF5733');
    cy.contains('text is too long');
  })
});

