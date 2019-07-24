import React, { useState, useContext } from "react";

const LinkActiveContext = React.createContext();
const OpenContext = React.createContext();

function Menu({ children }) {
  const [open, setOpen] = useState(false);
  const [linkActive, setLinkActive] = useState("");
  const openValue = {
    open,
    setOpen
  };
  const linkActiveValue = {
    linkActive,
    setLinkActive
  };
  return (
    <OpenContext.Provider value={openValue}>
      <LinkActiveContext.Provider value={linkActiveValue}>
        {children}
      </LinkActiveContext.Provider>
    </OpenContext.Provider>
  );
}

function Button({ children }) {
  const { open, setOpen } = useContext(OpenContext);
  const handleClick = e => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
}

function List({ children }) {
  const { open } = useContext(OpenContext);
  const { linkActive } = useContext(LinkActiveContext);
  return (
    open && (
      <ul>
        {React.Children.map(children, child => {
          const { linkTo } = child.props;
          const isActive = linkTo === linkActive;
          return <child.type {...child.props} isActive={isActive} />;
        })}
      </ul>
    )
  );
}

function Item({ children, onClick, linkTo, isActive = false }) {
  const { setLinkActive } = useContext(LinkActiveContext);
  const handleClick = e => {
    e.preventDefault();
    if (onClick) onClick();
    setLinkActive(linkTo);
  };
  return (
    <li>
      {isActive ? (
        <span>{children}</span>
      ) : (
        <a href="#" onClick={handleClick}>
          {children}
        </a>
      )}
    </li>
  );
}

Menu.Button = Button;
Menu.List = List;
Menu.Item = Item;

export default Menu;
