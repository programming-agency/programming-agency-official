import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li
            key={i}
            className={`${item.has_dropdown ? "has-dropdown" : ''} ${
              item.mega_menus ? "has-megamenu" : ''
            }`}
          >
            <Link href={item.link}>{item.title}</Link>
            {item.sub_menus && (
              <ul className="submenu">
                {item.sub_menus.map((sub_item, sub_i) => (
                  <li key={sub_i}>
                    <Link href={sub_item.link}>{sub_item.title}</Link>
                  </li>
                ))}
              </ul>
            )}

            {item.mega_menus && (
              <ul className="mega-menu">
                {item.mega_menus.map((mega_item, mega_i) => (
                  <li key={mega_i}>
                    <Link className="" href={mega_item.link}>
                      {mega_item.title}
                    </Link>
                    <ul>
                      {mega_item.layout.map((m_item, m_i) => (
                        <li key={m_i}>
                          <Link href={m_item.link}>{m_item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
