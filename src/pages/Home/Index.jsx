import React, { useContext, useState } from 'react';
import { GlobalContex } from '../../Context/GlobalState';
import { RecipeItem } from '../../components/RecipeItem';

export const Home = () => {
  const { recipeList, loading } = useContext(GlobalContex);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = recipeList.slice(startIndex, endIndex);

  // Total pages based on the number of items
  const totalPages = Math.ceil(recipeList.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto">
      <div className="flex flex-wrap justify-center gap-10">
        {currentItems && currentItems.length > 0 ? (
          currentItems.map((item) => <RecipeItem key={item.id} item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing to show. Please search something
            </p>
          </div>
        )}
      </div>
      {/* Pagination Controls */}
      {currentItems && currentItems.length > 0 ? <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded-lg mx-2"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded-lg mx-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> : null}
    </div>
  );
};
