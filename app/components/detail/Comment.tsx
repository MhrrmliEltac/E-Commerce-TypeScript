"use client";

import { RxAvatar } from "react-icons/rx";
import Heading from "../general/Heading";
import { Rating } from "@mui/material";

const Comment = ({ prd }: { prd: any }) => {
  const productReview = prd;

  return (
    <div>
      <Heading text="Rəylər" />
      {productReview &&
        productReview.map((review: any) => {
          return (
            <div
              className="border w-full p-2 rounded-lg mb-2 flex flex-col"
              key={review.id}
            >
              <div>
                <div className="flex items-center gap-1">
                  <RxAvatar size={45} />
                  <div>
                    <p className="text-lg">{review.user?.name}</p>
                    <Rating
                      name="read-only"
                      value={review.rating}
                      size="small"
                      readOnly
                    />
                  </div>
                </div>
                <div>{review.comment}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Comment;
