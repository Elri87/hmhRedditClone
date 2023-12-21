import PostedItemButtons from "./PostedItemButtons.jsx";

export default function PostedItem() {
  return (
    <div className="postedItem-container">
      <p>Posted by...</p>
      <h4>Title..</h4>
      <p>Post goes here....</p>

      <PostedItemButtons />
    </div>
  );
}
