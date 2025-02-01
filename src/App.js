import './App.css';
import MenuItem from './components/MenuItem';
import MenuTitle from './components/MenuTitle';
import latte from './images/latte.png'
import chai from './images/chai.png'
import matcha from './images/matcha.png'
import cocoa from './images/cocoa.png'
import logo from './images/addkited_logo.png'

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'ICED LATTE',
    description: 'Brewed espresso combined with cold milk and ice.',
    alt: 'Image of an Iced Latte',
    imageName: latte,
    price: '$4.00',
  },
  {
    id: 2,
    title: 'ICED CHAI',
    description: 'Spiced black tea combined with milk and ice.',
    alt: 'Image of an Iced Chai',
    imageName: chai,
    price: '$3.50',
  },
  {
    id: 3,
    title: 'ICED MATCHA',
    description: 'Matcha powder combined with milk and ice.',
    alt: 'Image of an Iced Matcha',
    imageName: matcha,
    price: '$4.30',
  },
  {
    id: 4,
    title: 'HOT CHOCOLATE',
    description: 'Melted chocolate and hot milk with a cayenne twist.',
    alt: 'Image of Hot Chocolate',
    imageName: cocoa,
    price: '$2.50',
  }
];


function App() {
  return (
    <div class="container">
      <MenuTitle logo={logo}/> 
      <div className="menu">
        {menuItems.map(item => (
          <MenuItem key={item.id} menuItem={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
