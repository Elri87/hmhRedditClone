import styles from "./page.module.css";
import Header from "@/components/Header.jsx";
import CreatePostShortCut from "@/components/CreatePostShortCut.jsx";
import PostedItem from "@/components/PostedItem.jsx";
//import CreateNewPost from "@/components/CreateNewPost.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <CreatePostShortCut />
      <PostedItem />
    </div>
  );
}
