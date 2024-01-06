export function votesCount(votes, parentId) {
  const postVotes = votes.filter((vote) => vote.postId === postId);
  let voteCount = 0;

  for (let i = 0; i < postVotes.length; i++) {
    if (postVotes[i].isUpvote === true) {
      //as per server boolean value is required
      voteCount -= 1;
    }
  }

  return voteCount;
}
