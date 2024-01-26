import { useContext } from "react";
import { BasketContext } from "../context/context";
import { Link } from "react-router-dom";

const BasketList = () => {
  //! context aboneliği
  const { basket, handleDeleteProduct, deleteToBasket, addToBasket} =
    useContext(BasketContext);

  const total = basket.reduce((total, item) => total + Number(item.amount) * Number(item.price),0);

  return (
    <div className="flex items-center flex-col gap-6">
      <div className="flex flex-col my-5">
        {basket.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-[900px] h-[100px] border rounded p-3 my-1 shadow"
          >
            <img className="w-28 h-24 rounded" src={item.image} />
            <span>{item.name}</span>
            <span>{item.number}</span>
            <div className="flex flex-col items-center gap-1">
              <span>Amount: {item.amount} </span>
              <div className="flex gap-1">
                <button
                  onClick={() => deleteToBasket(item)}
                  className="bg-red-400 text-white px-4 rounded-full font-bold text-lg"
                >
                  -
                </button>
                <button
                  onClick={() => addToBasket(item)}
                  className="bg-yellow-400 text-white px-4 rounded-full font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <span>Price: ${item.price * item.amount}</span>
            <div>
              <button
                onClick={() => handleDeleteProduct(item.id)}
                className="bg-red-700 text-white px-4 rounded-full font-bold text-lg"
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 className="font-bold text-4xl">Sepet toplamı: ${total}</h1>
      </div>

      <div className="flex gap-5">
        <Link className="bg-gray-100 p-2 text-orange-500 font-bold rounded shadow-xl transform transition-transform hover:scale-110" to={'/'}>Continue Shopping</Link>
        <Link className="bg-orange-500 p-2 text-white font-bold rounded shadow-xl transform transition-transform hover:scale-110">Confirm Order</Link>
      </div>
    </div>
  );
};

export default BasketList;
