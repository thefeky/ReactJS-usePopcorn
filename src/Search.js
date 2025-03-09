import { useEffect, useRef } from "react";

export default function Search({ query, setQuery, onCloseMovie }) {
  const inputEl = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) return;
        if (e.code === "Enter") {
          inputEl.current.focus();
          setQuery("");
          onCloseMovie();
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery, onCloseMovie]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
