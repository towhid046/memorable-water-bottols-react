import { toast } from "react-toastify";

const AddBottol = () => {
  const handleAddBottolForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photoUrl.value;
    const title = form.title.value;
    const price = form.price.value;
    const bottol = { photoUrl, title, price };

    fetch("http://localhost:5000/bottols", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bottol),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Bottol added Success");
          form.reset();
        }
      });
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl text-center py-5 font-semibold uppercase">
        Add a new bottol
      </h2>
      <div className="max-w-lg mx-auto ">
        <form onSubmit={handleAddBottolForm} className="mt-5">
          <div>
            <label className="label">
              <strong className="label-text">Photo URL</strong>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter your photo url"
              className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
              required
            />
          </div>
          <div>
            <label className="label">
              <strong className="label-text">Bottol Title</strong>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter bottol Title"
              className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
              required
            />
          </div>
          <div>
            <label className="label">
              <strong className="label-text">Price</strong>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Bottol Price"
              className="focus:outline-none w-full input rounded-none outline-none bg-[#f3f3f3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn w-full rounded-none hover:bg-black text-white bg-[#403f3f]">
              Add This Bottol
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBottol;
