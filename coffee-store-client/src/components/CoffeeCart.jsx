import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCart = ({ coffee }) => {

  const handleDelete = _id =>{
  console.log(_id);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Swal.fire(
      //   'Deleted!',
      //   'Your file has been deleted.',
      //   'success'
      // )



      console.log("delete confirm");
    }
  })








  }
  // eslint-disable-next-line no-unused-vars
  const {_id ,name, quantity, supplier, category, details, photo } = coffee;
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
            <button className="btn bg-emerald-400">Edit</button>
            <button onClick={()=>handleDelete(_id)} className="btn bg-red-700 text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
