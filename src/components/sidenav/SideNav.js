import React from "react";
import "./SideNav.css";
function SideNav() {
  return (
    <div>
      <div>
        <div className="price-heading">PRICE</div>
        <span>
          <select>
            <option>Min</option>
            <option>250</option>
            <option>500</option>
            <option>1000</option>
            <option>2000</option>
          </select>
        </span>
        <span>to</span>
        <span>
          <select>
            <option>250</option>
            <option>500</option>
            <option>1000</option>
            <option>2000</option>
            <option>2500</option>
          </select>
        </span>
      </div>
      <div className="customer-ratings">
        <div className="rating-heading">CUSTOMER RATINGS</div>
        <div>
          <input type="checkbox" />
          <span style={{ marginLeft: "2px" }}>4★ & above</span>
        </div>
        <div>
          <input type="checkbox" />
          <span style={{ marginLeft: "2px" }}>3★ & above</span>
        </div>
        <div>
          <input type="checkbox" />
          <span style={{ marginLeft: "2px" }}>2★ & above</span>
        </div>
        <div>
          <input type="checkbox" />
          <span style={{ marginLeft: "2px" }}>1★ & above</span>
        </div>
      </div>
      <div>
        <div className="offers-heading">OFFERS</div>
        <div>
          <input type="checkbox" />
          <span style={{ marginLeft: "2px" }}>Buy More,Save More</span>
        </div>
        <div>
          <input type="checkbox" />
          <span style={{ marginLeft: "2px" }}>No Cost EMI</span>
        </div>
        <div>
          <input type="checkbox" />
          <span style={{ marginLeft: "2px" }}>Special Price</span>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
