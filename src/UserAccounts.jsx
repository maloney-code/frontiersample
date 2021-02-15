import React, { useEffect, useState } from "react";
import {formatDate, formatMoney, formatPhone} from "./Util";

function UserAccounts() {
  // retrieves user accounts with a parameter for sort order
  const getUserAccounts = (sortOrder) => {
    const uri =
      "https://frontiercodingtests.azurewebsites.net/api/accounts/getall";

    if(!sortOrder)
        sortOrder = "AccountStatusId";

    return fetch(uri)
      .then(async (res) => {
          let result = await res.json() || [];
          result.sort((first, second) => {              
            if ( first[sortOrder] < second[sortOrder])
                return -1;
            if ( first[sortOrder] === second[sortOrder]) 
                return 0;
            if ( first[sortOrder] > second[sortOrder])
                return 1;
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
      <div className="">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
          {items.map((item) => (
            <div class="col">
              <div class="card m-3">
                <h5 class="card-header">
                  {item.LastName}, {item.FirstName}
                </h5>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <strong className="pr-2"> Email:</strong>
                      {item.Email}
                    </li>
                    <li class="list-group-item">
                      <strong className="pr-2">Phone:</strong>
                      {formatPhone(item.PhoneNumber)}
                    </li>
                    <li class="list-group-item">
                      <strong className="pr-2">Amount Due:</strong>$
                      {formatMoney(item.AmountDue)}
                    </li>
                    {item.PaymentDueDate && (
                      <li class="list-group-item">
                        <strong className="pr-2">Payment Due Date: </strong>
                        {formatDate(item.PaymentDueDate)}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default UserAccounts;
