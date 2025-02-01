import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ menuItem }) => {
    return (
        <div class="menu_item">
        <div class="row">
          <div class="col-4">
            <img src={menuItem.imageName} class="menu_img" alt={menuItem.alt}/>
          </div>
          <div class="col-8">
            <div class="container">
              <div class="row">
                <h3>{menuItem.title}</h3>
                <h4>{menuItem.description}</h4>
              </div>
              <div class="row">
                <div class="col">
                  <h5>{menuItem.price}</h5>
                </div>
                <div class="col">
                  <button class="add_button">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MenuItem;
