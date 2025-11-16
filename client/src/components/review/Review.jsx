import React from "react";

const reviews = [
  {
    name: "Anjali Mehta",
    avatar: "/path/to/avatar1.jpg", // Replace with actual path
    stars: 5,
    feedback:
      "Dr. Sharma is incredibly knowledgeable and compassionate. The therapy plan she designed for me worked wonders.",
  },
  {
    name: "Rajesh Kumar",
    avatar: "/path/to/avatar2.jpg", // Replace with actual path
    stars: 4,
    feedback:
      "A very professional and calming experience. I feel much better after the detox package.",
  },
  {
    name: "Sunita Gupta",
    avatar: "/path/to/avatar3.jpg", // Replace with actual path
    stars: 5,
    feedback:
      "The stress relief therapy was exactly what I needed. Highly recommend Dr. Sharma and her team.",
  },
];

const PatientReviews = () => (
  <div className="min-h-screen bg-[#F5FBF7] px-10 py-12">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-[#24492F]">Patient Reviews</h1>
      <p className="mb-8 text-[#395B3C]">
        Feedback from patients who have completed their therapy.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <span className="font-semibold text-[#24492F]">
                {review.name}
              </span>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: review.stars }).map((_, starIdx) => (
                <svg
                  key={starIdx}
                  className="w-4 h-4 text-yellow-400 inline mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.99a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.99c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.99a1 1 0 00-.364-1.118L2.174 9.417c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.99z"/>
                </svg>
              ))}
              {/* Add empty stars if needed for ratings less than 5 */}
              {Array.from({ length: 5 - review.stars }).map((_, starIdx) => (
                <svg
                  key={starIdx}
                  className="w-4 h-4 text-gray-300 inline mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.99a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.99c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.99a1 1 0 00-.364-1.118L2.174 9.417c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.99z"/>
                </svg>
              ))}
            </div>
            <p className="italic text-[#395B3C]">{`"${review.feedback}"`}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PatientReviews;
