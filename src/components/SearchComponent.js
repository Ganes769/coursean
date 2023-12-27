import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Search.css";
function SearchComponent({ data }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredResults = data.filter((item) =>
      item.course_name.toLowerCase().includes(term.toLowerCase())
    );

    console.log(filteredResults);

    setFilteredData(filteredResults);
  };

  return (
    <div className="search-box rel flex">
      <input
        type="text"
        className="qry s15 fontb"
        placeholder="....search"
        value={searchTerm}
        onChange={handleSearch}
      />

      <Link>
        <button className="go cfff s15 fontb">Search</button>
      </Link>
      {!searchTerm
        ? null
        : filteredData.map((item) => (
            <ul>
              <li>{item.course_name}</li>
              <li>{item.price}</li>
            </ul>
          ))}
    </div>
  );
}
export default SearchComponent;
