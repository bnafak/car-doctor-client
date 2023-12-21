/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./../providers/AuthProviders";
import { useContext } from "react";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    // const email = user?.email;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;

    const order = {
      customerName: name,
      email,
      date,
      //service: _id,
      price
    };
    console.log(order);
  };

  return (
    <div>
      <h2 className="text-center text-3xl">Book serviece :{title} </h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-11 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date" name="date"
              className="input input-bordered"
              required
            />
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
              defaultValue= {price}
              name="price"
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
