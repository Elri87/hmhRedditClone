import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";

export default function Votes() {
  return (
    <>
      <div className="votes-container">
        <button>
          <TiArrowUpThick />
        </button>
        <p>3</p>
        <button>
          <TiArrowDownThick />
        </button>
      </div>
    </>
  );
}
