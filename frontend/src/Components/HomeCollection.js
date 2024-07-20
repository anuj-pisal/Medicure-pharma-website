import React from "react";
import Figure from "react-bootstrap/Figure";
const HomeCollection = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-container-info">
          <Figure className="figure2">
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h2>Easy online booking</h2>
              <p>Search for tests and packages, book a time and select address for seamless at-home lab tests.</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h2>Live tracking of phlebotomist</h2>
              <p>Stay informed with live tracking of our phlebotomist's location for seamless sample collection.</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h2>Safe collection</h2>
              <p>Our phlebotomists follow strict safety protocols to collect samples at home on time.</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h2>Sample received at lab</h2>
              <p>Your sample is bought to our laboratory for testing by our qualified experts.</p>
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              width={110}
              height={95}
              alt="171x180"
              src="https://onemg.gumlet.io/marketing/ca5e681c-6323-4a99-8735-8af722c68d7c.png"
            />
            <Figure.Caption>
            <h2>Quick reports, free follow up</h2>
              <p>Reports are sent to your email. A free doctor follow up is provided to understand the report better.</p>
            </Figure.Caption>
          </Figure>
        </div>
      </div>
    </>
  );
};

export default HomeCollection;
