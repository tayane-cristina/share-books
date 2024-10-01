import React from 'react';
import { ReviewsList } from '../../data/ReviewsList';

const Review = () => {

return(
<div className='principal-div'>
    <h2>Resenhas</h2>

    <ul>
        {ReviewsList.map((review, index) => (
            <li>
                <p><strong>{review.bookTitle}</strong></p>
                <p>{review.bookAuthor}</p>
            </li>
        ))}
    </ul>
</div>

)
}
export default Review;