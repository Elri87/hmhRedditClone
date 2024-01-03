import { LiaCommentAlt } from "react-icons/lia";
import { LiaEllipsisHSolid } from "react-icons/lia";

export default function PostHomeButtons() {
  return (
    <div className="buttons-postedItem">
      <LiaCommentAlt />
      <p>1 Comment</p>
      <p>Share</p>
      <p>Save</p>
      <LiaEllipsisHSolid />
    </div>
  );
}
