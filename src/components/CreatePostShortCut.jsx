import Link from "next/link.js";

export default function CreatePostShortCut() {
  return (
    <div className="createPostShortCut">
      <p>👤</p>
      <Link href={"/posts"} className="createPostShortCut-button">
        Create Post
      </Link>
    </div>
  );
}
