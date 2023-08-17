import { pageLinks, iconLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <div className="section-center footer-center">
        {/* links 的部分 */}
        <ul className="footer-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href}>{text}</a>
              </li>
            );
          })}
        </ul>
        {/* icons 的部分 */}
        <ul className="footer-icons">
          {iconLinks.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
        {/* copyright 的部分 */}
        <p className="copyright">
          copyright &copy; Traveler company
          {/* 可以動態拿到當前的年份 */}
          <span>{new Date().getFullYear()}</span> all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
