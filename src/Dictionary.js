import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }
  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

    let pexelsApiKey =
      "jV2bxIQmGEJROCN56YKCYwlKaGX4NpAIVC9RlOEJeneBk0qErETafWeH";

    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { ["Authorization"]: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested words: sunset, sunrise, book, etc...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
