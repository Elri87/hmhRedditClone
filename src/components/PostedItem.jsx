import PostedItemButtons from "./PostedItemButtons.jsx";

export default function PostedItem() {
  return (
    <div className="postedItem-container">
      <p>Posted by u/trunks 1 month ago</p>
      <h4>Reviews</h4>
      <p>Post goes here....</p>

      <PostedItemButtons />
    </div>
  );
}
