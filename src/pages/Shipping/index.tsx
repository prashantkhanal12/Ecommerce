import React from 'react';
import { MOMO } from 'assets/image';
import { BorderBottom, Button, Card, Heading, Title } from 'components';
import { Footer, Navbar } from 'containers';
import { cartData, shippingOrderData } from './shippingData';
import { AiOutlineClockCircle } from 'react-icons/ai';

const Shipping: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container bg-white-color">
        <div className="row">
          <div className="col-md-4 my-5">
            <Heading title="Choose Shipping Address" />
            <div className="my-4">
              <Card variant="outline">
                <div className="flex-btn my-3 px-2">
                  <Title title="Shipping title" />
                  <h6 className="text-primary">EDIT</h6>
                </div>
                <div className="px-2">
                  <p>John Doe</p>
                  <p>doe_john43@gmail.com</p>
                  <p>9843747373</p>
                  <p>
                    125 Dunlop Street Singapore 209444, 66 Buffalo Road
                    Singapore 219807
                  </p>
                </div>
              </Card>
            </div>
            <div className="my-4">
              <Card>
                <div className="flex-btn my-3 px-2">
                  <Title title="Shipping title" />
                  <h6 className="text-primary">EDIT</h6>
                </div>
                <div className="px-2">
                  <p>John Doe</p>
                  <p>doe_john43@gmail.com</p>
                  <p>9843747373</p>
                  <p>
                    125 Dunlop Street Singapore 209444, 66 Buffalo Road
                    Singapore 219807
                  </p>
                </div>
              </Card>
              <Button variant="outline" type="submit">
                Add new address
              </Button>
            </div>
          </div>
          <div className="col-md-4 my-5">
            <Heading title="Additional Details" />
            <div className="my-4">
              <label htmlFor="" className="fs-16 fw-400">
                Note
              </label>
              <div className="textarea-border mt-2">
                <textarea
                  name=""
                  id=""
                  cols={40}
                  rows={4}
                  className="shadow-none bg-transparent outline-0 border-0 "
                />
              </div>
            </div>
            <div className="flex-btn my-3">
              <div className="">
                <h6 className="fw-500 fs-16">Do you need cutlery?</h6>
                <p className="fs-14">
                  Consider using your own cutlery to reduce plastic use
                </p>
              </div>
              <div className="">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
              </div>
            </div>

            <Button type="submit" variant="primary">
              <span className="fw-500 fs-16 text-center px-5">
                Complete Checkout
              </span>
            </Button>
          </div>
          <div className="col-md-4 my-5">
            <div className="bg-dark-white-color py-4 px-3">
              <Heading title="Order Summary" />
              {shippingOrderData?.map((e) => (
                <div key={e?.id}>
                  <div className="flex my-4">
                    <img src={MOMO} alt="momo" className="w-25 me-4 " />
                    <div className="flex-grow-1">
                      <Title title={e?.title} />
                      <div className="flex-btn mt-4 ">
                        <p>
                          QTY: <span className="fw-500">{e?.qty}</span>
                        </p>
                        <p className="fw-500">{e?.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <select name="" id="" className="w-100 p-2">
                      <option value="">Customizations</option>
                      <option value="">None</option>
                    </select>
                  </div>
                </div>
              ))}
              <div className="py-5" />
              <BorderBottom />

              <div className="py-5">
                <div className="flex-btn bg-primary-color p-3 ">
                  <div className="flex">
                    <AiOutlineClockCircle color="#FFFFFF" size={25} />
                    <h6 className="color-white mt-2 ms-2 fw-500">
                      Preparation Time
                    </h6>
                  </div>
                  <h6 className="color-white fs-14 mt-2">29 mins appox</h6>
                </div>

                {cartData.map((e) => (
                  <div className="flex-btn my-4" key={e?.id}>
                    <h6 className="fw-400 fs-16">{e?.title} </h6>
                    <h6 className="fw-500">Rs. {e?.price} </h6>
                  </div>
                ))}
                <BorderBottom />
                <div className="flex-btn mt-3">
                  <h6>Total</h6>
                  <h6 className="fs-24 fw-700">Rs 1080</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(Shipping);
