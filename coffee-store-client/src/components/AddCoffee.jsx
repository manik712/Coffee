import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      category,
      details,
      photo, 
    };
    console.log(newCoffee);

    fetch("http://localhost:8000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
           
          Swal.fire('User added successfully')
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h3 className="text-3xl font-extrabold text-center">Add New Coffee</h3>
      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
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
                name="photo"
                type="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
