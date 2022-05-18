import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Button(props) {
  return (
    <>
      <button className='button-search' onClick={props.handleSearch}>
        <FiSearch size={25} color='#fff' />
      </button>
    </>
  );
}
