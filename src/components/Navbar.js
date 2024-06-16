import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaMapMarkerAlt, FaHeart, FaUser, FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { useAuth } from '../pages/AuthContext';
import './Navbar.css';
import logo from './Robo Factory.png';

const Navbar = () => {
  const { user } = useAuth();
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const locationRef = useRef(null);
  const categoriesRef = useRef(null);

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };

  const toggleCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsLocationDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (locationRef.current && !locationRef.current.contains(event.target)) {
      setIsLocationDropdownOpen(false);
    }
    if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
      setIsCategoriesDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const cities = ["Chennai", "Bangalore", "Hyderabad", "Mumbai"];
  const categories = [
    { name: "Electronics", path: "/shop/electronics" },
    { name: "Radios", path: "/shop/radios" },
    { name: "Motor and Gearboxes", path: "/shop/motor-and-gearboxes" },
    { name: "Battery", path: "/shop/battery" },
    { name: "Charger and Accessories", path: "/shop/charger-accessories" },
    { name: "RoboKits", path: "/shop/robokits" },
    { name: "Tools", path: "/shop/tools" },
    { name: "Merchandise", path: "/shop/merchandise" },
    { name: "Wires, Cables and Connections", path: "/shop/wires-cables-connections" },
    { name: "Mechanical", path: "/shop/mechanical" }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Company Logo" />
            <span><b>ROBOFACTORY</b></span>
          </Link>
          <div className="navbar-location" ref={locationRef} onClick={toggleLocationDropdown}>
            <FaMapMarkerAlt />
            <span>{selectedCity ? selectedCity : "Select your address"}</span>
            {isLocationDropdownOpen && (
              <ul className="city-dropdown">
                {cities.map(city => (
                  <li key={city} onClick={() => handleCitySelect(city)}>{city}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-center">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-right">
          {user && (
            <div className="navbar-user">
              <span>Hello, {user.displayName}</span>
            </div>
          )}
          <div className="navbar-categories-dropdown" ref={categoriesRef} onClick={toggleCategoriesDropdown}>
            <span>Categories</span>
            {isCategoriesDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
            {isCategoriesDropdownOpen && (
              <ul className="categories-dropdown">
                {categories.map(category => (
                  <li key={category.name}>
                    <Link to={category.path}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link to='/customerdashboard' className='navbar-link'><FaUser /></Link>
          <Link to="/wishlist" className="navbar-link">
            <FaHeart />
          </Link>
          <Link to="/cart" className="navbar-link">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
          {!user && (
            <Link to="/login" className="navbar-link">Login</Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
