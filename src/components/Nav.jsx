import { useState, useRef } from "react";

import { pageLinks, iconLinks } from "../data";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  // state
  const [showLinks, setShowLinks] = useState(false);

  // useRef
  const navContainer = useRef(null);

  // event handling
  const leaveHandler = () => {
    // get DOM element
    const nav = navContainer.current;
    // console.log(nav);

    // 代表滑鼠離開了 <nav>
    if (nav) {
      setShowLinks(false);
    }
  };

  return (
    <nav onMouseLeave={leaveHandler} ref={navContainer}>
      {/* big screen 才會使用到 nav-center */}
      <div className="nav-center">
        {/* header 的部分 */}
        <div className="nav-header">
          <h3>Traveler</h3>
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* links 的部分 */}
        <div className={showLinks ? "nav-links show-nav-links" : "nav-links"}>
          <ul className="links">
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* icons 的部分 */}
        <div className="nav-icons">
          <ul className="icons">
            {iconLinks.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  {/* 如果有使用 target="_blank" */}
                  {/* 記得加入 rel="noreferrer"，可以確保在使用新窗口打開連結時，不會有潛在的安全風險 */}
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
