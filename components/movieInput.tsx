// components/movieInput.tsx

import React, { useState } from "react";

function MovieInput() {
  const [inputValue, setInputValue] = useState("");
  const [movieName, setMovieName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setMovieName(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <label htmlFor="movieInput" className="mb-2 text-lg font-semibold">
        Browse Movies
      </label>
      <input
        id="movieInput"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="mb-4 p-2 border border-gray-300 rounded text-black"
      />
      {movieName && (
        <div className="mt-4 text-xl">
          You entered: <span className="font-bold">{movieName}</span>
        </div>
      )}
    </div>
  );
}

export default MovieInput;
