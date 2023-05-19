import { MenuList } from "../data/MenuList";
import { MenuItem } from "../components/MenuItem";
import "../styles/Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">Available Pizza</div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};
