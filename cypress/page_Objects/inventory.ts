class InventoryPage {
    private readonly shoppingCart = 'a[data-test="shopping-cart-link"]';
    public readonly basketItemIndicator = 'span[data-test="shopping-cart-badge"]';
    public readonly sortSelection = 'select[data-test="product-sort-container"]';
    public readonly inventoryItem = 'div[data-test="inventory-item"]';
    public readonly inventoryItemName = 'div[data-test="inventory-item-name"]';
    public readonly inventoryItemDesc = 'div[data-test="inventory-item-desc"]';
    public readonly inventoryItemPrice = 'div[data-test="inventory-item-price"]';

    public readonly sortingOptions = {
        alphaAsc: 'az',
        alphaDesc: 'za',
        priceAsc: 'lohi',
        priceDesc: 'hilo',
    }

    public readonly inventoryPictures = [
        'img[data-test="inventory-item-sauce-labs-backpack-img"]',
        'img[data-test="inventory-item-sauce-labs-bike-light-img"]',
        'img[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]',
        'img[data-test="inventory-item-sauce-labs-fleece-jacket-img"]',
        'img[data-test="inventory-item-sauce-labs-onesie-img"]',
        'img[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]'
    ]

    public addToCart() {
        cy.get('button').contains('Add to cart').click();
    }
}

export default new InventoryPage();