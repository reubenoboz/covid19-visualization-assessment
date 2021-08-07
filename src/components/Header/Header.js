import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/covid19_logo.png";
import NigeriaLogo from '../../assets/img/flag-map-of-nigeria-logo.png'
import { handleFilter } from "../../Redux/actions/GeneralAction";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch()
  const filterTerm = useSelector(state => state.GeneralReducer.filterTerm)

  const handleChange = (e) => {
    dispatch(handleFilter(e.target.value))
  }

  return (
    <div className="header">
      <div className="logo">
        <NavLink to='/'>
        <img className="header_logo" src={NigeriaLogo} alt="Covid 19 Logo" />
        </NavLink>
      </div>
      <div className="container">
        <div className="header_heading">
          <img className="header_logo" src={Logo} alt="Covid 19 Logo" />
          <span >Tracker</span>
        </div>
        <div className="header_description">
          Get accurate data on covid 19 cases across Nigeria
        </div>
        <form onSubmit={e => e.preventDefault()} className="search">
          <button className='search_btn' type="submit"><i className="fa fa-search"></i></button>
          <input onChange={handleChange} value={filterTerm} className="search_input" type="search" placeholder="Search for a state" />
        </form>
      </div>
    </div>
  );
};

export default Header;
