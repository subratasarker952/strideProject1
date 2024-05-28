import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const { id, title, price, description, img } = loadedProduct;
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const img = form.img.value;
    if (!title || !price || !description || !img) {
      toast("Please Provide Product Information");
      return;
    }
    const product = {
      id,
      title,
      price,
      description,
      img,
    };

    fetch(`http://localhost:3000/products/${loadedProduct?.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((json) => {
        alert("Product Updated");
        e.reset();
      });
  };
  return (
    <div>
      <div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
            {/* id */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Id</span>
              </label>
              <input
                type="number"
                name="id"
                defaultValue={id}
                placeholder="Product id"
                className="input input-bordered"
                required
              />
            </div>
            {/* title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Product title"
                className="input input-bordered"
                required
              />
            </div>
            {/* price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Product Price"
                className="input input-bordered"
                required
              />
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Product Description"
                className="input input-bordered"
                required
              />
            </div>
            {/* img */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                name="img"
                defaultValue={img}
                placeholder="Product Image Url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;