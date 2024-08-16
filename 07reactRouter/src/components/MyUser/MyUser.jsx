import React from "react";
import { useParams } from "react-router-dom";

function MyUser() {
  const { userid } = useParams();

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>MyUser: {userid}</div>
  );
}

export default MyUser;
