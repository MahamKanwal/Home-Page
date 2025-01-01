// // import 'bootstrap/dist/css/bootstrap.min.css';
// function Post() {
//   const [post,setPost] = useState([]);
//   //  let [data, setData] = useState([]);
//     // const numbers = [1,2,3,4,5,2,4];
//    // let login = true; 

//    // useEffect(() => {
//     //  fetch('https://dummyjson.com/icon/abc123/150') 
//    //   fetch('https://jsonplaceholder.typicode.com/posts')
//    //     .then((response) => response.json())
//    //     .then((json) => setData(json))
//    //     .then(console.log)
//    // }, []);

//    return (
//       <>
//   {/* <ul>
//     numbers.map((num,i)=>{
//     return<li key={i}>{num}</li>;
//     })
// </ul>  */}

//       {/* {login == true ? "logged in" : "logged out"} */}

//       </>
//    );
// }

// export default Post;


import React,{ useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import ourImage from "../assets/laptop.jpeg"; 

function Post() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row justify-content-center">
        {data.map((product) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4" key={product.id}>
            <Card className="h-100 shadow-sm custom-card">
              <Card.Img
                variant="top"
                src={product.images && product.images.length > 0 ? product.images[0] : ourImage}
                alt={product.title}
                onError={(e) => {
                  e.target.src = ourImage;
                }}
              />
              <Card.Body>
                <Card.Title className="text-dark">{product.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${product.price} <br />
                  {product.description}
                </Card.Text>
                <Button variant="outline-primary" href={`/product/${product.id}`}>
                  View Product
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;