import img1 from "../assets/images/cardsImage/img1.jpg";
import img2 from "../assets/images/cardsImage/img2.jpg";
import img3 from "../assets/images/cardsImage/img3.jpg";

export default function Cards() {
  const myData = [
    {
      img: img1,
      id: 1,
      name: "Shavan Singh",
      age: 20,
    },
    {
      img: img2,
      id: 2,
      name: "Raj Singh",
      age: 22,
    },
    {
      img: img3,
      id: 3,
      name: "Rohit Singh",
      age: 21,
    },
  ];

 return (
  <div className="container mt-5" id="card">
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {myData.map((item) => (
        <div
          key={item.id}
          className="card shadow-sm"
          style={{ width: "300px" }}
        >
          <img
            src={item.img}
            className="card-img-top"
            alt={item.name}
            style={{ height: "250px", objectFit: "cover" }}
          />

          <div className="card-body text-center">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Age: {item.age}</p>
            <button className="btn btn-primary">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
