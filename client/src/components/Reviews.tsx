import React, { useState, useEffect } from 'react';
import { HiStar } from 'react-icons/hi';

interface Review {
  rating: number;
  feedback: string;
  userName: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Fetch reviews data from backend or use hardcoded data
    const fetchedReviews: Review[] = [
      { rating: 5, feedback: "TaskSyncer is amazing! It helped me organize my tasks efficiently.", userName: "Alice" },
      { rating: 4.5, feedback: "TaskSyncer has been a great tool for managing my tasks. Highly recommend!", userName: "Bob" },
      { rating: 5, feedback: "Excellent task management app! Easy to use and intuitive interface.", userName: "Charlie" },
      { rating: 5, feedback: "TaskSyncer exceeded my expectations! The best task management app I've used.", userName: "David" },
      { rating: 4, feedback: "TaskSyncer has helped me stay organized, but there's room for improvement.", userName: "Eva" },
      { rating: 4.5, feedback: "Great app for managing tasks. User-friendly interface.", userName: "Frank" },
    ];

    setReviews(fetchedReviews);
  }, []);

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className='text-4xl mb-4 font-bold'>REVIEWS</h2>
        <h2 className="text-2xl italic font-extrabold text-gray-900 mb-6">Don't just take our word for it</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-lg bg-white shadow-lg p-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  {Array.from({ length: Math.min(Math.max(1, review.rating), 5) }).map((_, i) => (
                    <HiStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="italic text-gray-900 mt-4">{review.feedback}</p>
              <p className="text-gray-600 mt-2">{review.userName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
