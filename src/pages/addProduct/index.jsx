import { useState } from "react"
import Layoutv1 from "../auth/v1";
import { addProduct } from "../services/product";
import FormProduct from "../formAddEditProduct/FormProduct";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imgTitle, setImgTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  const saveData = async (e) => {
    try {
      e.preventDefault();
      const data = {
        name,
        price,
        image_title: imgTitle,
        image: imgUrl,
        description: desc,
      };
      console.log(data);
      const res = await addProduct(data);
      console.log(res);
      alert(res.data);
      setDesc("");
      setImgTitle("");
      setImgUrl("");
      setName("");
      setPrice(0);

      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <Layoutv1>
      <h2>Add Product</h2>
      <FormProduct
        name={name}
        price={price}
        imgTitle={imgTitle}
        imgUrl={imgUrl}
        desc={desc}
        onChangeName={(e) => setName(e.target.value)}
        onChangePrice={(e) => setPrice(e.target.value)}
        onChangeImgTitle={(e) => setImgTitle(e.target.value)}
        onChangeImageUrl={(e) => setImgUrl(e.target.value)}
        onChangeDesc={(e) => setDesc(e.target.value)}
      />
      <button className="btn btn-success" onClick={(e) => saveData(e)}>
        Save
      </button>
    </Layoutv1>
  );
};
export default AddProduct;