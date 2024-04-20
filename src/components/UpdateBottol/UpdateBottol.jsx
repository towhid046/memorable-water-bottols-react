import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateBottol = () => {
  const bottol = useLoaderData();
  const navigate = useNavigate();

  const updateHandleBottol = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photoUrl.value;
    const title = form.title.value;
    const price = form.price.value;
    const updatedBottol = { photoUrl, title, price };

    fetch(`http://localhost:5000/update-bottol/${bottol._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedBottol),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Bottol is Updated");
          navigate("/");
        }
      });
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl text-center py-5 font-semibold uppercase">
        Update Bottol: {bottol?.title}
      </h2>
      <div className="max-w-lg mx-auto ">
        <form onSubmit={updateHandleBottol} className="mt-5">
          <div>
            <label className="label">
              <strong className="label-text">Photo URL</strong>
            </label>
            <input
              defaultValue={bottol?.img}
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
              defaultValue={bottol?.title}
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
              defaultValue={bottol?.price}
              placeholder="Bottol Price"
              className="focus:outline-none w-full input rounded-none outline-none bg-[#f3f3f3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn w-full rounded-none hover:bg-black text-white bg-[#403f3f]">
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateBottol;
