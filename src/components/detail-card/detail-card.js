import "./styles.css";
import person from "../src/Assets/person.png";

export default function Detail_Card() {
  return (
    <div className="card-container">
      <div className="img-card"></div>
      <div className="info-card">
        <p className="name-card">Jenny</p>
        <p className="freind-card">Friends</p>
        <p className="descript-card">Jenny is a personal assistant in paris</p>
      </div>
      <hr></hr>
      <div className="detail-card">
        <div style={{ display: "inline-block", float: "left" }}>
          <img className="img-logo" src={person} alt="person" />
          <p style={{ display: "inline-block" }}>32 Friends</p>
        </div>
        <div style={{ display: "inline-block", float: "right" }}>
          <p>Joined in 2013</p>
        </div>
      </div>
    </div>
  );
}
