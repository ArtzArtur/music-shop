import { useSelector } from "react-redux";

import SearchItem from "./SearchItem";

function SearchResults() {
  const results = useSelector((state) => state.search.data);
  const loading = useSelector((state) => state.search.loading);
  const error = useSelector((state) => state.search.error);
  const noResults = useSelector((state) => state.search.noResults);
  return (
    <div>
      <div className="results">
        {loading ? (
          <div className="loader">
            <div className="lds-default">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : null}
        {noResults ? <p className="no_result">{noResults}</p> : null}
        {results.length > 0
          ? results.map((result) => (
              <SearchItem result={result}   key={result.collectionId}/>
            ))
          : null}
        {error ? (
          <div>
            <p>{error.message}</p>
            <p>{error.name}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SearchResults;
