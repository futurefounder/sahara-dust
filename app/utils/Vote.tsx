import { useState, useEffect } from "react";

interface VoteProps {
  textColor: string;
  isVoted: boolean;
}

const Vote = ({ textColor, isVoted }: VoteProps) => {
  const [voteText, setVoteText] = useState(isVoted ? "Downvote" : "Upvote");

  useEffect(() => {
    setVoteText(isVoted ? "Downvote" : "Upvote");
  }, [isVoted]);

  return (
    <span className={`mt-1 text-xs text-center text-${textColor}`}>
      {voteText}
    </span>
  );
};

export default Vote;
