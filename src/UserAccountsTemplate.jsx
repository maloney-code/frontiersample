import React, { useEffect, useState } from "react";
import { formatDate, formatMoney, formatPhone } from "./Util";

function UserAccountsTemplate() {
  // retrieves user accounts with a parameter for sort order
  const getUserAccounts = (sortOrder) => {
    const uri =
      "https://frontiercodingtests.azurewebsites.net/api/accounts/getall";

    if (!sortOrder) sortOrder = "AccountStatusId";

    return fetch(uri)
      .then(async (res) => {
        let result = (await res.json()) || [];
        result.sort((first, second) => {
          if (first[sortOrder] < second[sortOrder]) return -1;
          if (first[sortOrder] === second[sortOrder]) return 0;
          if (first[sortOrder] > second[sortOrder]) return 1;
        });
        return result;
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    getUserAccounts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section id="wrapper">
        <header>
          <div className="title-container">
            <h1>Coding Test</h1>
          </div>
        </header>
        <main className="content" id="home-content">
          <div className="content-title-container">
            <h2>Accounts</h2>
          </div>
          <section id="account-grid">
            <section className="account-column" id="active-account-column">
              <div
                className="account-container-title"
                id="active-account-container-title"
              >
                <h3>Active</h3>
              </div>
              {items
                .filter((n) => {
                  return n.AccountStatusId === 0;
                })
                .map((item) => {
                  return (
                    <div className="account-container active-account">
                      <ul className="account-data-list">
                        <li>
                          <label>Name:</label>
                          {item.LastName}, {item.FirstName}
                        </li>
                        <li>
                          <label>Email:</label>
                          {item.Email}
                        </li>
                        <li>
                          <label>Phone Number:</label>{" "}
                          {formatPhone(item.PhoneNumber)}
                        </li>
                        <li>
                          <label>Amount Due:</label>
                          {formatMoney(item.AmountDue)}
                        </li>
                        {item.PaymentDueDate && (
                          <li>
                            <label>Due Date:</label>
                            {formatDate(item.PaymentDueDate)}
                          </li>
                        )}
                      </ul>
                    </div>
                  );
                })}
              
            </section>
            <section className="account-column" id="overdue-account-column">
              <div
                className="account-container-title"
                id="overdue-account-container-title"
              >
                <h3>Overdue</h3>
              </div>
              {items
                .filter((n) => {
                  return n.AccountStatusId === 2;
                })
                .map((item) => {
                  return (
                    <div className="account-container overdue-account">
                      <ul className="account-data-list">
                        <li>
                          <label>Name:</label>
                          {item.LastName}, {item.FirstName}
                        </li>
                        <li>
                          <label>Email:</label>
                          {item.Email}
                        </li>
                        <li>
                          <label>Phone Number:</label>{" "}
                          {formatPhone(item.PhoneNumber)}
                        </li>
                        <li>
                          <label>Amount Due:</label>
                          {formatMoney(item.AmountDue)}
                        </li>
                        {item.PaymentDueDate && (
                          <li>
                            <label>Due Date:</label>
                            {formatDate(item.PaymentDueDate)}
                          </li>
                        )}
                      </ul>
                    </div>
                  );
                })}
              )
            </section>
            <section className="account-column" id="inactive-account-column">
              <div
                className="account-container-title"
                id="inactive-account-container-title"
              >
                <h3>Inactive</h3>
              </div>
              {items
                .filter((n) => {
                  return n.AccountStatusId === 1;
                })
                .map((item) => {
                  return (
                    <div className="account-container inactive-account">
                      <ul className="account-data-list">
                        <li>
                          <label>Name:</label>
                          {item.LastName}, {item.FirstName}
                        </li>
                        <li>
                          <label>Email:</label>
                          {item.Email}
                        </li>
                        <li>
                          <label>Phone Number:</label>{" "}
                          {formatPhone(item.PhoneNumber)}
                        </li>
                        <li>
                          <label>Amount Due:</label>
                          {formatMoney(item.AmountDue)}
                        </li>
                        {item.PaymentDueDate && (
                          <li>
                            <label>Due Date:</label>
                            {formatDate(item.PaymentDueDate)}
                          </li>
                        )}
                      </ul>
                    </div>
                  );
                })}
              )
            </section>
          </section>
        </main>
        <footer>
          <p className="copy">&copy;{new Date().getFullYear()}</p>
        </footer>
      </section>
    );
  }
}
export default UserAccountsTemplate;
