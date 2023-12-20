import { LiaAngleUpSolid } from "react-icons/lia";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaCommentAlt } from "react-icons/lia";
import { LiaEllipsisHSolid } from "react-icons/lia";

export default function ButtonsPost() {
  return (
    <div className="buttons-postedItem">
      <LiaAngleUpSolid />
      <p>Vote</p>
      <LiaAngleDownSolid />
      <LiaCommentAlt />
      <p>1 Comment</p>
      <LiaEllipsisHSolid />
    </div>
  );
}
