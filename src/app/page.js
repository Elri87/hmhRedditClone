import styles from "./page.module.css";
import Header from "@/components/Header.jsx";
import CreatePostShortCut from "@/components/CreatePostShortCut.jsx";
import PostedItem from "@/components/PostedItem.jsx";
import Posts from "@/app/(navigation)/[postId]/page.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <CreatePostShortCut />
      <PostedItem />
      <Posts />
    </div>
  );
}
