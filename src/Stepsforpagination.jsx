
import React, { useState, useEffect } from 'react';

function Pagination() {
  const [data, setData] = useState([]); // array of data to be paginated
  const [currentPage, setCurrentPage] = useState(1); // current page number
  const [itemsPerPage, setItemsPerPage] = useState(10); // number of items per page

  // set the data to be paginated
  useEffect(() => {
    // fetch data from an API or other source
    const fetchedData = [/* data fetched from API */];
    setData(fetchedData);
  }, []);

  // calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // slice the data array to get the items for the current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // generate an array of page numbers for rendering
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // handle click on a page number
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <div>
      {/* display current page items */}
      {currentItems.map((item) => (
        <div key={item.id}>{/* display item */}</div>
      ))}

      {/* display pagination links */}
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button id={number} onClick={handleClick}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
        }