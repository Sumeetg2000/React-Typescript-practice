import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CHANGE_PAGE } from "../redux/reducers/apiSlice";
import { AppDispatch, RootState } from "../redux/store";
import "../styles/Paginate.scss";

export default function Paginate() {
  const pageNo = useSelector((state: RootState) => state.api.page);
  const dispatch:AppDispatch = useDispatch();
  return (
    <div className="pagination">
      <button
        className={pageNo === 1 ? "active pageNo" : "pageNo"}
        onClick={() => dispatch(CHANGE_PAGE())}
      >
        1
      </button>
      <button
        className={pageNo === 1 ? "pageNo" : "pageNo active"}
        onClick={() => dispatch(CHANGE_PAGE())}
      >
        2
      </button>
    </div>
  );
}
