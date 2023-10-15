const AddCoffee = () => {
  return (
   
    <div className="bg-[#F4F3F0] p-24">
      <h3 className="text-3xl font-extrabold">Add New Coffee</h3>
      <form>
       {/* form row */}
        <div className=" md:flex">
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
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
       {/* form row */}
        <div className=" md:flex">
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
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
       {/* form row */}
        <div className=" md:flex">
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
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
      </form>
    </div> 
  );
};

export default AddCoffee;
