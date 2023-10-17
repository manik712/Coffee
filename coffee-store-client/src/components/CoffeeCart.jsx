import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCart = ({ coffee,setCoffees,coffees }) => {

  console.log(coffees);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = coffees.filter(fee =>fee._id !==_id);
              setCoffees(remaining); 
            }
          });
      }
    });
  };
  // eslint-disable-next-line no-unused-vars
  const { _id, name, quantity, supplier, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-2/4">
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full justify-between pr-4">
        <div>
          <h2 className="card-title">Name:{name}</h2>
          <p>{quantity}</p>
          <p>{category}</p>
          <p>{details}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-3">
            <button className="btn bg-fuchsia-700">view</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn bg-emerald-400">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-700 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
