import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {_id, name, quantity, supplier, category, details,taste, photo} = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateNewCoffee = {
      name,
      quantity,
      supplier,
      category,
      details,
      photo, 
    };
    console.log(updateNewCoffee);

    fetch(`http://localhost:8000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateNewCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount){
           
          Swal.fire('User Update successfully')
        }
      });
  };





  return (
    <div className="bg-[#F4F3F0] p-24">
      <h3 className="text-3xl font-extrabold text-center">Update New Coffee</h3>
      <form onSubmit={handleUpdateCoffee}>
        {/* form row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                defaultValue={name}
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                defaultValue={quantity}
                type="text"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={supplier}
                name="supplier"
                type="text"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
               defaultValue={taste}
                name="taste"
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={category}
                name="category"
                type="text"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
               defaultValue={details}
                name="details"
                type="text"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={photo}
                name="photo"
                type="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
