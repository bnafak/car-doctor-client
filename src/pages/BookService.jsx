/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./../providers/AuthProviders";
import { useContext } from "react";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    // const email = user?.email;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;

    const booking = {
      customerName: name,
      email,
      //img,
      date,
      service: title,
      service_id: _id,
      price,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method : "POST",
      headers : {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl">Book services :{title} </h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-11 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="type"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block "
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>

      <form className="card-body"></form>
    </div>
  );
};

export default BookService;
