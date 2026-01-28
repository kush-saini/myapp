import { useState } from "react";
import "./App.css";
const Inputs = () => {
  const [data, setData] = useState({
    itName: "",
    itQty: 0,
    itPrice: 0,
    it2Name: "",
    it2Qty: 0,
    it2Price: 0,
    it3Name: "",
    it3Qty: 0,
    it3Price: 0,
  });
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-5 align-center container">
      <form className="p-4">
        <div className="d-flex flex flex-wrap w-100 justify-content-between">
          <div className="leftDiv w-50 p-5">
            <div className="mb-3">
              <label for="name" className="form-label">
                Name of Item 1
              </label>
              <input
                onChange={handleData}
                name="itName"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label for="item1" className="form-label">
                Price of Item 1
              </label>
              <input
                onChange={handleData}
                name="itPrice"
                type="text"
                className="form-control"
                id="item1"
              />
            </div>
            <div className="mb-3">
              <label for="qtyItem1" className="form-label">
                Quantity of Item 1
              </label>
              <input
                onChange={handleData}
                name="itQty"
                type="text"
                className="form-control"
                id="qtyItem1"
              />
            </div>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name of Item 2
              </label>
              <input
                onChange={handleData}
                name="it2Name"
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label for="item2" className="form-label">
                Price of Item 2
              </label>
              <input
                onChange={handleData}
                name="it2Price"
                type="text"
                className="form-control"
                id="item2"
              />
            </div>
            <div className="mb-3">
              <label for="qtyItem2" className="form-label">
                Quantity of Item 2
              </label>
              <input
                onChange={handleData}
                name="it2Qty"
                type="text"
                className="form-control"
                id="qtyItem2"
              />
            </div>
            <div className="mb-3">
              <label for="name2" className="form-label">
                Name of Item 3
              </label>
              <input
                onChange={handleData}
                name="it3Name"
                type="text"
                className="form-control"
                id="name2"
              />
            </div>
            <div className="mb-3">
              <label for="item3" className="form-label">
                Price of Item 3
              </label>
              <input
                onChange={handleData}
                name="it3Price"
                type="text"
                className="form-control"
                id="item3"
              />
            </div>
            <div className="mb-3">
              <label for="qtyItem3" className="form-label">
                Quantity of Item 3
              </label>
              <input
                onChange={handleData}
                name="it3Qty"
                type="text"
                className="form-control"
                id="qtyItem3"
              />
            </div>
          </div>
          <div className="rightDiv w-50 p-5">
            <div className="d-flex flex-wrap justify-content-between">
              <div>Name: {"Kushagra Saini"}</div>
              <div>Date: 17-01-2026</div>
            </div>
            <div className="d-flex flex-wrap justify-content-end">
              <div>Bill no: 101</div>
            </div>
            <table class="table w-100">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{data.itName}</td>
                  <td>{data.itQty}</td>
                  <td>{data.itPrice}</td>
                  <td>{data.itPrice * data.itQty}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>{data.it2Name}</td>
                  <td>{data.it2Qty}</td>
                  <td>{data.it2Price}</td>
                  <td>{data.it2Price * data.it2Qty}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>{data.it3Name}</td>
                  <td>{data.it3Qty}</td>
                  <td>{data.it3Price}</td>
                  <td>{data.it3Price * data.it3Qty}</td>
                </tr>
              </tbody>
              <h1>
                Total is{" "}
                {data.it2Price * data.it2Qty +
                  data.itPrice * data.itQty +
                  data.it3Price * data.it3Qty}
              </h1>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Inputs;
