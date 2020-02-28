import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui pointing menu">
      <Link to="/" className="link item">
        Cip's List
      </Link>
      <Link to="/completed-item-list" className="link item">
        Completed Items
      </Link>
      
    </div>
  );
};

export default Header;
