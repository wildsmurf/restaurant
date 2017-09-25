import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Menulist = ({allmenus}) => (
  <div>
    {allmenus.map( p =>
      <li key={p.id}>
        <Link to={`/menus/${p.id}`}>{p.item}</Link>
      </li>
    )}
  </div>
)
export default Menulist;
