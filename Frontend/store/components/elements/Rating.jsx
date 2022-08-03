import React, {useState, useEffect} from 'react';


const Rating = (review) => {
        
    const [rating, setRating] = useState(0);

    return (
        <span className="ps-rating">
        <i className={review.review >= 1 ?"fa fa-star star1":'fa fa-star-o'}></i>
        <i className={review.review >= 2 ?"fa fa-star star1":'fa fa-star-o'}></i>
        <i className={review.review >= 3 ?"fa fa-star star1":'fa fa-star-o star1'}></i>
        <i className={review.review >= 4 ?"fa fa-star star1":'fa fa-star-o star1'}></i>
        <i className={review.review >= 5 ?"fa fa-star star1":'fa fa-star-o star1'}></i>
    </span>
);
}
 

export default Rating;