import "./App.css";

function App() {
  let flag = true;
  let my_Data = [
    {
      productName: "My Car",
      description: "This is my car",
      imgUrl:
        "https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=2000",
    },
    {
      productName: "My Car 2",
      description: "This is my car",
      imgUrl:
        "https://media.istockphoto.com/vectors/modern-abstract-suv-red-car-parking-isolated-vector-id1166422340?k=20&m=1166422340&s=612x612&w=0&h=KkQWvVjjCtYC3ihwapNH-uK49MXoNu-dRy5rqKBnHF0=",
    },
    {
      productName: "My Car 3",
      description: "This is my car",
      imgUrl:
        "https://cdn3.vectorstock.com/i/1000x1000/97/72/red-sports-car-vector-899772.jpg",
    },
  ];

  return (
    <div className="App">
      
      { flag ?
      
      my_Data.map((item, index) => {
        return (
          <div className="card">
            <img src={item.imgUrl} height="200px" />
            <h1>{item.productName}</h1>
            <p>{item.description}</p>
          </div>
        );
      })

      : 

      <div>
        <h1>Sorry! No Data Found</h1>
      </div>
      
      
      }
    </div>
  );
}

export default App;
