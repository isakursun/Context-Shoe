import React, { useEffect, useState } from "react";
import ShoeCard from "../components/ShoeCard";
import axios from "axios";

const Feed = () => {
  //! çektiğim veriyi tuttuğum state
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/shoes")
    .then((res)=> setShoes(res.data))
  }, []);


  return (
    <div className="card-container">
      <div className="card-wrapper">
        {shoes.map((item) => (
          <ShoeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
