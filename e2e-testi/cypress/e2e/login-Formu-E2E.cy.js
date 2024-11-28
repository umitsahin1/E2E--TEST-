describe("Login testi", () => {
  it("Yanlış email girildiğinde ekranda 1 tane doğru hata mesajı var ve buton disabled durumda", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="email-input"]').type("umit@sahincom");
    cy.get('[data-cy="errorMessage-email"]').should("have.length", 1);
    cy.get('[data-cy="errorMessage-email"]').should("be.visible");
    cy.get('[data-cy="errorMessage-email"]').should(
      "contain.text",
      "Please enter a valid email address"
    );
  });
  it("Yanlış email ve şifre girdiliğinde ekranda 2 tane hata mesajı var ve ekranda password hata mesajı görünüyor", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="email-input"]').type("umit@sahincom");
    cy.get('[data-cy="password-input"]').type("232");

    cy.get('[data-cy^="errorMessage"]').should("have.length", 2);
    cy.get('[data-cy="errorMessage-password"]').should("be.visible");
  });

  it("Email ve passwor doğru ama kurallar kabul edilmemişse buton disabled", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="email-input"]').type("umit@gmail.com");
    cy.get('[data-cy="password-input"]').type("232sada");
    cy.get('[data-cy="terms-input"]').uncheck();

    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });
});
