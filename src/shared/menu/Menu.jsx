import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const url =
    "https://multi-step-form-server-o9a8qsu7w-dev-rakibul1.vercel.app/api/v1/user-feedback/";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(data.data);

  return (
    <div>
      <div className="offcanvas-menu flex items-center justify-end w-full">
        <div className="">
          <div className="navigation">
            <input
              type="checkbox"
              className="navigation__checkbox"
              id="nav-toggle"
            />
            <label for="nav-toggle" className="navigation__button">
              <span
                className="navigation__icon"
                aria-label="toggle navigation menu"
              ></span>
            </label>
            <div className="navigation__background"></div>

            <nav className="navigation__nav" role="navigation">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <Link to="/" className="navigation__link">
                    <span>01</span>Home
                  </Link>
                </li>
                <li className="navigation__item">
                  <Link to="/user" className="navigation__link relative">
                    <span className="user-count">
                      <span>
                        {" "}
                        {data?.data?.length ? data?.data?.length : 0}
                      </span>
                    </span>
                    <span>02</span>User
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
