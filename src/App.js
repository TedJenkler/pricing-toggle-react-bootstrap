import { useState } from "react";
import Toggler from "./Components/Toggler";

function App() {
  const [car, setCar] = useState(10);

  const handleToggle = () => {
    if(car == 10 ){
    return setCar(1)
    }else {
      return setCar(10)
    }
  }

  return (
        <div className='container'>
      <div className='row'>
        <div className='col header'>
          <h1 className="h1-price">Our Pricing</h1>
        </div>
      </div>
      <div className='row'>
        <div className="col toggler-part">
          <h2 className="h2-price">Annually</h2>
          <Toggler onChange={handleToggle} />
          <h2 className="h2-price">Monthly</h2>
        </div>  
      </div>
      <div className="row">
        <div className="col card">
          <h2 className="h2-price">Basic</h2>
          <p className="price"><span className="dollarsign">$</span>{car > 9 ? car * 19 + 9.99 : (car * 19) + 0.99 }</p>
          <p className="h2-price p-price">500 GB Storage</p>
          <p className="h2-price p-price-middle">2 Users Allowed</p>
          <p className="h2-price p-price">Send up to 3 GB</p>
          <button className="price-btn">Learn More</button>
        </div>
      </div>
      <div className="row">
        <div className="col card card-mid">
          <h2 className="h2-mid-price">Professional</h2>
          <p className="price"><span className="dollarsign">$</span>{car > 9 ? car * 24 + 9.99 : (car * 24) + 0.99 }</p>
          <p className="h2-mid-price p-price-mid">1 TB Storage</p>
          <p className="h2-mid-price p-price-mid-middle">5 Users Allowed</p>
          <p className="h2-mid-price p-price-mid">Send up to 10 GB</p>
          <button className="price-btn-mid">Learn More</button>
        </div>
      </div>
      <div className="row">
        <div className="col card">
          <h2 className="h2-price">Master</h2>
          <p className="price"><span className="dollarsign">$</span>{car > 9 ? car * 39 + 9.99 : (car * 39) + 0.99 }</p>
          <p className="h2-price p-price">2 TB Storage</p>
          <p className="h2-price p-price-middle">10 Users Allowed</p>
          <p className="h2-price p-price">Send up to 20 GB</p>
          <button className="price-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
