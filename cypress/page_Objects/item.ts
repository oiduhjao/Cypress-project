class ItemPage {

    public readonly itemImage = 'div[class="inventory_details_img_container"]';
    public readonly itemName = 'div[data-test="inventory-item-name"]';
    public readonly itemDescription = 'div[data-test="inventory-item-desc"]';
    public readonly itemPrice = 'div[data-test="inventory-item-price"]';
    public readonly addToCartButton = 'button[data-test="add-to-cart"]';

}

export default new ItemPage();