import React from 'react';

const Card = ({mov}) => {
  return (
    <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500`+mov.poster_path        }
        alt=""
        className="w-full h-full "
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
        <p className="mt-2 text-center">اسم الفبلم : {mov.original_title}</p>
        <p className="mt-2 text-center">تاريخ الأصدار : {mov.release_date}</p>
        <p className="mt-2 text-center">عدد المقيمين : {mov.vote_count}</p>
        <p className="mt-2 text-center"> التقييم : {mov.vote_average}</p>
      </div>
    </div>
  );
};

export default Card;
