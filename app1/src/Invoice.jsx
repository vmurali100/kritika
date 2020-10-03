import React, { Component } from "react";

export default class Invoice extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Invoice</h1>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div id="logo">+ Add Your Logo</div>
                </div>
                <div className="col invovce-details">
                  <h1 className="invoiceText">INVOICE</h1>
                  <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6 ">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">#</div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Invoice No"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-9">
                      <div className="form-group">
                        <label></label>
                        <textarea
                          className="form-control resize"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Who is this Invoice From"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label>Bill To</label>

                          <textarea
                            className="form-control resize"
                            rows="2"
                            placeholder="Who is this Invoice To"
                          ></textarea>
                        </div>
                        <div className="col">
                          <label>Ship To</label>

                          <textarea
                            className="form-control resize"
                            rows="2"
                            placeholder="Optional"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group row">
                    <div className="col-3"></div>
                    <label className="col-sm-3">Date</label>
                    <div className="col-sm-6">
                      <input
                        type="date"
                        className="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-3"></div>
                    <label className="col-sm-3">Payment Terms</label>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-3"></div>
                    <label className="col-sm-3">Due Date</label>
                    <div className="col-sm-6">
                      <input
                        type="date"
                        className="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <br />
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-group">
                            <input type="email" className="form-control" />
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <input type="email" className="form-control" />
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <input type="email" className="form-control" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn btn-primary" type="button">
                    + Line Item
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Notes</label>
                  <textarea
                    className="form-control resize"
                    rows="2"
                    placeholder="Notes: Any relavenet Information Not already Covered"
                  ></textarea>
                  <br />
                  <label>Terms</label>
                  <textarea
                    className="form-control resize"
                    rows="2"
                    placeholder="Terms: Any relavenet Information Not already Covered"
                  ></textarea>
                </div>
                <div className="col subArea">
                  <div className="row">
                    <div className="col">Sub Total</div>
                    <div className="col">$0.00</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <span className="spantext">Tax</span>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="row discount">
                        <div className="col">
                          <a href="#">+ Discount</a>
                        </div>
                        <div className="col">
                          <a href="#">+ Shipping</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <br />
                    <div className="col">Total</div>
                    <div className="col">$0.00</div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <span className="spantext">Amount Paid</span>
                    </div>
                    <div className="col">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">Balance Due</div>
                    <div className="col">$0.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
