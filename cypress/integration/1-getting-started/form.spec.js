describe('Form clicker', () => {

    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://serwer1419259.home.pl/tester/index.php/site/form/52')
    })


    it('fill form as outlander', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get("[id=id_1_1]").type("John")
        cy.get("[id=id_1_2]").type("Kennedy")
        cy.get('[type="radio"][id=id_1_3_2]').check()
        cy.get('[type="checkbox"][id=id_1_69_73]').check()
        cy.get('[type="checkbox"][id=id_1_71_75]').check()
        cy.get('[type="radio"][id=id_1_5_8]').check()

        const filePath = 'diplom.png';
        cy.get('[type="file"][id=id_1_43').attachFile(filePath)

        cy.get("[id=id_1_6]").type("1234")
        cy.get('[type="radio"][id=id_1_7_10]').check()
        cy.get('[type="radio"][id=id_1_10_12]').check()
        cy.get('[type="radio"][id=id_1_11_14]').check()

        cy.get("[id=id_2_12]").type("Brylantowa")
        cy.get("[id=id_2_13]").type("99")
        cy.get("[id=id_2_14]").type("1")
        cy.get("[id=id_2_15]").type("Wrocław")
        cy.get("[id=id_2_16]").type("52-214")

        cy.get("[id=id_2_17]").type("Wrocław")
        cy.get("[id=id_2_18]").type("Wrocław")
        cy.get("[id=id_2_19]").type("Dolnośląskie")
        cy.get("[id=id_2_20]").type("Polska")

        cy.get("[id=id_2_21]").type("magziel@gmail.com")
        cy.get("[id=id_2_68]").type("070072072")

        cy.get('[type="checkbox"][id=id_2_22_15]').check()
        cy.get('[type="radio"][id=id_2_27_23]').check()
        cy.get('[type="radio"][id=id_2_28_31]').check()

        cy.get("[id=id_2_30]").type("To jest tekst wykonywanego zawodu")

        cy.get('[type="radio"][id=id_3_32_32]').check()
        cy.get('[type="radio"][id=id_3_33_36]').check()
        cy.get('[type="radio"][id=id_3_34_37]').check()
        cy.get('[type="radio"][id=id_3_36_40]').check()
        cy.get('[type="radio"][id=id_3_37_43]').check()
        cy.get('[type="radio"][id=id_3_38_45]').check()
        cy.get('[type="radio"][id=id_3_39_48]').check()

        cy.get("[type=submit]").click()
    })
})


