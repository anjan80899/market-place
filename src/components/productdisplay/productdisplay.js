import "./productdisplay.css";

export default function ProductDisplay(props) {
  return (
    <div className="product-container">
      <div
        className="product-image"
        style={{
          backgroundImage: `url(${props.product.imgurl})`,
          backgroundSize: "40%",
          backgroundPosition: "center",
          flex: "0 0 25%",
          height: "300px",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className="product-details">
        <div className="product-info">
          <h2 className="prod-detail-header">{props.product.name}</h2>
          <ul>
            {props.product.highlights.map((item, index) => (
              <li>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-price">
          <h1 className="prod-price">
            {props.product.price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        </div>
      </div>
    </div>
  );
}
// {/* <li>
//               <p>4 GB RAM | 64 GB ROM</p>
//             </li>
//             <li>
//               <p>16.59 cm (6.53 inch) HD+ Display</p>
//             </li>
//             <li>
//               <p>13MP + 2MP | 5MP Front Camera</p>
//             </li>
//             <li>
//               <p>5000 mAh Battery</p>
//             </li>
//             <li>
//               <p>MediaTek Helio G35 Processo</p>
//             </li>
//             <li>
//               <p>
//                 1 year manufacturer warranty for device and 6 months
//                 manufacturer warranty for in-box accessories including batteries
//                 from the date of purchase
//               </p>
//             </li> */}
