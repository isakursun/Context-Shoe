import { createContext, useState } from "react";
import { toast } from "react-toastify";


//!conntexti oluşturdum
export const BasketContext = createContext();

//! provider oluşturma
export const BasketProvider = ({ children }) => {
    //! sepet verisini tutan state
  const [basket, setBasket] = useState([]);

  //! numara bilgisini tutan state
  const [selectedNumber,setSelectedNumber] = useState(null)

  //! adet bilgisini tutan state
  const [amount, setAmount] = useState(1);



  //! sepete ürün ekleme fonksiyonu
  const addToBasket = (product) => {
    if(product.amount===5){
        toast.warning("The quantity of items cannot exceed the available stock. There are 5 units in stock.",{autoClose:2000})
        return;
    }
    console.log(product)
    //! numara seçilmemişse
    if(!product.number){
        toast.warning("Please choose a shoe size.",{autoClose:2000})
        return;
    }

    //! sepete eklediğm ürün sepette var mı kontrolü
    const foundItem = basket.find((item) => item.id === product.id);

    if (foundItem) {
      //! sepetin kopyasını alma
      const copyBasketArray = [...basket];
      //! onceki amount değerine sahip elemanın indek numarasını bulma
      const index = copyBasketArray.findIndex(
        (item) => item.id === foundItem.id
      );
      foundItem.amount++;
      copyBasketArray.slice(index, 1, foundItem);
      setBasket(copyBasketArray);
    } else {
      setBasket([...basket, product]);
    }
  };

  //! sepetten ürün eksiltme ve kadlırma
  const deleteToBasket = (product) => {
    if (product.amount > 1) {
      //! yine kopya aldık
      const copyBasketArray = [...basket];
      //! index bulma
      const index = copyBasketArray.findIndex((item) => item.id === product.id);
      //! 1 tane ürün eksiltme
      product.amount--;
      //! ürünleri değiştirme
      copyBasketArray.slice(index, 1, product);
      //! state i güncelleme
      setBasket(copyBasketArray);
    } else {
      const deletedNewArray = basket.filter((item) => item.id !== product.id);
      setBasket(deletedNewArray);
    }
  };

  //! sepetten ürünü tamamen silme
  const handleDeleteProduct = (id) => {
    const deletedNewArray = basket.filter((item) => item.id !== id);
    setBasket(deletedNewArray);
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, handleDeleteProduct, deleteToBasket,addToBasket,selectedNumber,setSelectedNumber,amount,setAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
