import { tours } from "../data";
import { FaMapMarkedAlt } from "react-icons/fa";

const Tours = () => {
  return (
    <section className="section" id="tours">
      {/* title */}
      <div className="section-title">
        <h2>
          classic <span>tours</span>
        </h2>
      </div>
      {/* center */}
      <div className="section-center tours-center">
        {tours.map((tour) => {
          const { id, image, alt, date, title, text, country, during, price } =
            tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} alt={alt} className="tour-img" />
                <p className="tour-date">{date}</p>
              </div>

              <div className="tour-info">
                <h4 className="tour-title">{title}</h4>
                <p className="tour-text">{text}</p>
                <div className="tour-footer">
                  <p className="tour-country">
                    <FaMapMarkedAlt />
                    {country}
                  </p>
                  <p>{during}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
