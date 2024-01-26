import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { BasketContext } from "../context/context";

//! ayakkabı numaraları dizisi
const number = [40,41,42,43,44,45];

const ShoeDetail = () => {
  //! context yapısına abone olma
  const { addToBasket,selectedNumber,setSelectedNumber,amount,setAmount } = useContext(BasketContext);

  //! parametredeki id yi aldım
  const { shoeId } = useParams();
  //! ayakkabı state i
  const [shoe, setShoe] = useState(null);
  
  
  //! butona tıklanma state i
  const [isClicked, setIsClicked] = useState(false);

  //! veri çekme isteği
  useEffect(() => {
    axios
      .get(`http://localhost:3030/shoes/${shoeId}`)
      .then((res) => setShoe(res.data));
  }, []);

    //! sipariş adedi azaltma
    const decreaseAmount = (number) => {
      if (number === 1) {
        toast.error(
          "The quantity of items to be added to the cart cannot be less than 1.",
          { autoClose: 2000 }
        );
        return;
      }
      setAmount(number - 1);
    };
  
    //! adet artırma
    const increaseAmount = (number) => {
      if (number === shoe.quantity) {
        toast.warning(
          "The quantity of items cannot exceed the available stock. There are 5 units in stock.",
          { autoClose: 2000 }
        );
        return;
      }
      setAmount(number + 1);
    };
  

  if (!shoe) return;

  return (
    <div className="detail-container">
      {/* resim kısmı */}
      <div className="detail-img shadow-2xl">
        <img src={shoe.image} />
      </div>
      {/* detaylar */}
      <div className="detail-content">
        <h4 className="font-bold">{shoe.name}</h4>
        <p className="text-gray-400">{shoe.description}</p>
        <div className="flex justify-between mt-2">
          <p className="font-bold text-xl">${shoe.price}</p>
          <div>
          {number.map((item,i)=> <button onClick={()=> {setSelectedNumber(item),setIsClicked(true)}} className={"bg-orange-300 text-white me-2 p-1 rounded"} key={i}>{item}</button>)}
          </div>
        </div>
        <div className="flex justify-between my-6">
          <div className="flex align-center gap-6 rounded bg-gray-300 text-orange-600 font-bold p-2">
            <button onClick={() => decreaseAmount(amount)}>-</button>
            <span className="text-black">{amount}</span>
            <button onClick={() => increaseAmount(amount)}>+</button>
          </div>
          <button
            onClick={() => addToBasket({ ...shoe, amount: amount ,number:selectedNumber})}
            className="flex items-center bg-orange-600 p-2 rounded gap-3 text-white transform transition-transform hover:scale-110"
          >
            <FaShoppingCart />
            <span>Add to Basket</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
