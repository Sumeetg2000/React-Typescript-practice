import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../styles/Card.scss";

export default function Card() {
  const hoveredUser = useSelector((state: RootState) => state.card.cardData);

  return (
    <>
      {hoveredUser && (
        <div className="card">
          <img
            className="avatar"
            src={hoveredUser.avatar}
            alt="avatar"
          />
          <p className="userName">
            {hoveredUser.first_name} {hoveredUser.last_name}
            <sup
              className={
                hoveredUser.id === 1
                  ? "status active"
                  : "status inactive"
              }
            >
              .
            </sup>
          </p>
          <p className="userEmail">{hoveredUser.email}</p>
          <p className="userPlan">Your plan: Standard</p>
          <div className="userStatus">
            {hoveredUser.id === 1 ? "active user" : "inactive user"}
          </div>
          <div className="usedPlan">
            <p>Plan Uses</p>
            <div className="gridLine"></div>
          </div>
          <div className="UserReviewsAndClicks">
            <div className="userReview">
              <p className="number">2,450</p>
              <p className="text">clicks reviewed</p>
            </div>
            <div className="divLine"></div>
            <div className="clicks">
              <p className="number">2,450</p>
              <p className="text">Monthly clicks</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
