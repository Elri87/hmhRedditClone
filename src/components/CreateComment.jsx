"use client";

import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function({ post, user, subredditId }) {
  return (
    <form>
      <div>
        <p>Comment as user.username</p>
        <textarea placeholder="Comment here" value={""}></textarea>
      </div>
      <div>
        <p>error</p>
        <button type="submit">Comment</button>
      </div>
    </form>
  );
}
