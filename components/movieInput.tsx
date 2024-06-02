import React from "react";

function movieInput() {
  return (
    <div className="relative flex flex-col items-center mt-4">
      <label htmlFor="browseMovies" className="text-white text-xl mb-2">
        Browse our movies
      </label>
      <input
        type="text"
        id="browseMovies"
        name="browseMovies"
        placeholder="Search for a movie..."
        className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-500"
      />
    </div>
  );
}

export default movieInput;
