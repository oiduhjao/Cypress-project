import { LoginPage, InventoryPage } from '../page_Objects/index';

describe('Positive scenarios', () => {

    beforeEach(() => {
      cy.clearAllBrowserData();
      cy.visit(Cypress.env('baseUrl'));
      cy.fixture('credentials').then((creds) => {
        LoginPage.login(
          creds.users.standard.username,
          creds.users.standard.password
        );
      });
      cy.url().should('include', '/inventory');
    });

    it('Open item', () => {
      cy.get(InventoryPage.inventoryItem).first().within(() => {
        cy.get(InventoryPage.inventoryItemName).click();
      });
      cy.url().should('include', '/inventory-item');
    });
  
    it('Add 1 item to basket', () => {
        cy.get(InventoryPage.inventoryItem).first().within(() => {
          InventoryPage.addToCart();
        });
        cy.get(InventoryPage.basketItemIndicator).should('be.visible');
        cy.get(InventoryPage.basketItemIndicator).should('contain', '1');
    });
    

    it('Add multiple item to basket', () => {
      for(let i = 0; i < 2; i++){
        cy.get(InventoryPage.inventoryItem).eq(i).within(() => {
          InventoryPage.addToCart();
        });
        cy.get(InventoryPage.basketItemIndicator).should('be.visible');
        cy.get(InventoryPage.basketItemIndicator).should('contain', i+1);   
      }
    });

    it('Add all items to basket', () => {
      cy.get(InventoryPage.inventoryItem).its('length').then((count) => {
        for(let i = 0; i < count; i++){
          cy.get(InventoryPage.inventoryItem).eq(i).within(() => {
            InventoryPage.addToCart();
          });
        };
        cy.get(InventoryPage.basketItemIndicator).should('be.visible');
        cy.get(InventoryPage.basketItemIndicator).should('contain', count);
      })
    });

    it('Add item to basket from item description', () => {
      cy.get(InventoryPage.inventoryItem).first().within(() => {
        cy.get(InventoryPage.inventoryItemName).click();
      });
      cy.url().should('include', '/inventory-item');
      InventoryPage.addToCart();
      cy.get(InventoryPage.basketItemIndicator).should('be.visible');
      cy.get(InventoryPage.basketItemIndicator).should('contain', '1');
    });

    it('Filter items by A-Z alphabetical order', () => {
      cy.get(InventoryPage.sortSelection).select(InventoryPage.sortingOptions.alphaAsc);
      cy.get(InventoryPage.inventoryItem).its('length').then((count) => {
        for(let i = 0; i < count; i++){
          cy.get(InventoryPage.inventoryItem).eq(i).within(() => {
            cy.fixture('inventory').then((items) => {
              cy.get(InventoryPage.inventoryItemName).should('contain', items.data[i].name);
              cy.get(InventoryPage.inventoryItemDesc).should('contain', items.data[i].description);
              cy.get(InventoryPage.inventoryItemPrice).should('contain', items.data[i].price);
              cy.get(InventoryPage.inventoryPictures[i]).should('be.visible');
            })
          });
        };
      });
    });

});
  //TBD
  // describe('Negative scenarios', () => {
  
  //   before(() => {
  //       cy.clearAllBrowserData();
  //   })
  
  //   beforeEach(() => {
  //       cy.visit(Cypress.env('baseUrl'));
  //   });
  // });