import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const Reviews = ({ truck }) => {
  return (
    <div>
      <h2 className="text-text-dark text-2xl font-semibold">Reviews</h2>
      <div className="flex flex-col gap-5">
        {truck.reviews.map((review) => (
          <div className="bg-bg-light flex flex-col gap-4 rounded-2xl p-4">
            <div className="flex flex-row gap-5">
              <p className="text-primary-light flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-semibold">
                {review.reviewer_name[0]}
              </p>

              <div className="flex flex-col">
                <p className="text-text-dark">{review.reviewer_name}</p>
                <div className="flex">
                  {Array.from({ length: review.reviewer_rating }, (_, i) => (
                    <StarRateRoundedIcon key={i} className="text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-text-medium">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
