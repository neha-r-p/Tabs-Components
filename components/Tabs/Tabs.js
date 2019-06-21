
class TabLink {
  constructor(tabLink) {
    // Assign this.element to the passed in DOM element
    this.tabLink = tabLink;
    
    // Get the custom data attribute on the Link
    this.data = this.tabLink.dataset.tab;
    // console.log(this.data);
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
   console.log(this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.tabLink.addEventListener('click', () => this.select());

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(tabLink => tabLink.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.tabLink.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.itemElement.select();
  }
}

class TabItem {
  constructor(tabItem) {
    // Assign this.element to the passed in element
    this.tabItem = tabItem;
    // console.log(this.tabItem);
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(tabItem => tabItem.classList.remove('tabs-item-selected'));
    // Add a class named "tabs-item-selected" to this element
    this.tabItem.classList.add('tabs-item-selected');

    //this.tabItem;
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let links = document.querySelectorAll('.tabs-link').forEach(tabLink => new TabLink(tabLink));