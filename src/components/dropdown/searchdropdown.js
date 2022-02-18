import "./searchdropdown.css";

export default function SearchDropdown(props) {
  return (
    <div className="searchdropdown">
      <hr></hr>
      <ul>
        {props.results.map((item, i) => (
          <li key={i}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
