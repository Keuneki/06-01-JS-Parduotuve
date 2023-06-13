import React from 'react';

class ContactPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="shops-wrapper">
            <h1 className="shops-section-title">Find Us</h1>
            <div className="shops-list">
              <div className="shop-item">
                <h2 className="shop-title">Parduotuve 1</h2>
                <ul className="shop-address-list">
                  <li>Phone: <a href="tel:+37045431321">+37045431321</a></li>
                  <li>Email: <a href="mailto:info@parduotuve.lt">info@parduotuve.lt</a></li>
                  <li>Address: <a href="#" target="_blank">Vilniaus g. 20, Vilnius</a></li>
                </ul>
              </div>
              <div className="shop-item">
                <h2 className="shop-title">Parduotuve 2</h2>
                <ul className="shop-address-list">
                  <li>Phone: <a href="tel:+37045431321">+37045431321</a></li>
                  <li>Email: <a href="mailto:info@parduotuve.lt">info@parduotuve.lt</a></li>
                  <li>Address: <a href="#" target="_blank">Vilniaus g. 20, Vilnius</a></li>
                </ul>
              </div>
              <div className="shop-item">
                <h2 className="shop-title">Parduotuve 3</h2>
                <ul className="shop-address-list">
                  <li>Phone: <a href="tel:+37045431321">+37045431321</a></li>
                  <li>Email: <a href="mailto:info@parduotuve.lt">info@parduotuve.lt</a></li>
                  <li>Address: <a href="#" target="_blank">Vilniaus g. 20, Vilnius</a></li>
                </ul>
              </div>
              <div className="shop-item">
                <h2 className="shop-title">Parduotuve 4</h2>
                <ul className="shop-address-list">
                  <li>Phone: <a href="tel:+37045431321">+37045431321</a></li>
                  <li>Email: <a href="mailto:info@parduotuve.lt">info@parduotuve.lt</a></li>
                  <li>Address: <a href="#" target="_blank">Vilniaus g. 20, Vilnius</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18343.57087900314!2d23.95217678894304!3d54.921413391696255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e718f6251ea27b%3A0x30ae10233e1119a3!2sDainavos%20sen.%2C%20Kaunas%2C%20Kaunas%20City%20Municipality!5e0!3m2!1sen!2slt!4v1680257621120!5m2!1sen!2slt"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
