import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Searchp.css";
import { useCoursesContext } from "../context/courses_context";
import { useEffect } from "react";
import courses from "../utils/data";

const SearchComponent = ({ data }) => {
  const { fetchSingleCourse } = useCoursesContext();
  console.log(fetchSingleCourse);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const dataset = [...new Set(courses.map((item) => item.category))];
  const navigate = useNavigate();
  // const dataset = ["website", "python", "marketing", "mobile"];
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Call function to get autocomplete suggestions based on input value
    const autocompleteOptions = getAutocompleteOptions(value);
    setOptions(autocompleteOptions);
    setSearchTerm(value);

    const filteredResults = data.filter((item) =>
      item.course_name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  const generateNGrams = (word, n) => {
    const nGrams = [];
    for (let i = 0; i < word.length - n + 1; i++) {
      nGrams.push(word.slice(i, i + n));
    }
    return nGrams;
  };

  const buildIndex = (words, n) => {
    const index = {};
    words.forEach((word) => {
      const nGrams = generateNGrams(word.toLowerCase(), n);
      nGrams.forEach((nGram) => {
        if (!index[nGram]) {
          index[nGram] = [];
        }
        index[nGram].push(word);
      });
    });
    return index;
  };

  const getAutocompleteOptions = (input) => {
    const index = buildIndex(dataset, 3); // Generate 3-gram index
    const inputNGrams = generateNGrams(input.toLowerCase(), 3); // Get 3-grams from input
    const possibleMatches = inputNGrams.reduce((acc, nGram) => {
      return acc.concat(index[nGram] || []);
    }, []);

    // Deduplicate and return unique suggestions
    return Array.from(new Set(possibleMatches));
  };

  return (
    <div className="search-box rel flex" searchTerm={searchTerm}>
      <input
        type="text"
        className="qry s15 fontb"
        placeholder="....search"
        value={inputValue}
        onChange={handleInputChange}
      />

      <Link>
        <button className="go cfff s15 fontb">Search</button>
      </Link>
      {!searchTerm ? null : (
        <>
          {filteredData.map((item) => (
            //design this block for course details
            <Link to={`/courses/${item.id}`}>
              <p>{item.description}</p>
            </Link>
          ))}
          {options.map((option, index) => (
            //Design this block for category list
            <NavLink to={`/category/${option}`}>
              <li key={index}>{option}</li>{" "}
            </NavLink>
          ))}
        </>
      )}
    </div>
  );
};

export default SearchComponent;
