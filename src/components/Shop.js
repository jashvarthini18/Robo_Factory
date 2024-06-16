import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import Battery from './battery.jpg';
import Motors from './motors.jpg';
import Electronics from './electronics.jpg';

const categories = [
  { name: 'Electronics', path: '/shop/electronics', image: Electronics },
  { name: 'Radios', path: '/shop/radios', image: Battery },
  { name: 'Motor and Gearboxes', path: '/shop/motor-and-gearboxes', image: Motors },
  { name: 'Battery', path: '/shop/battery', image: Battery },
  { name: 'Charger and Accessories', path: '/shop/charger-and-accessories', image: Battery },
  { name: 'RoboKits', path: '/shop/robokits', image: Battery },
  { name: 'Tools', path: '/shop/tools', image: Battery },
  { name: 'Merchandise', path: '/shop/merchandise', image: Battery },
  { name: 'Wires, Cables and Connections', path: '/shop/wires-cables-connections', image: Battery },
  { name: 'Mechanical', path: '/shop/mechanical', image: Battery },
];

const Shop = () => {
  return (
    <div className="shop">
      <h1>SHOP BY CATEGORIES</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <Link to={category.path} key={index} className="category-card">
            <div
              className="card-content"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <h2>{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
