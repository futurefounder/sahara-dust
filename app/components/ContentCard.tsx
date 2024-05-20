import { useState, useEffect } from "react";

interface Card {
  id: number;
  date: string;
  headline: string;
  description: string;
  readMoreLink: string;
  tag: string;
  voteCount: number;
}

export default function ContentCard({
  card,
  onUpvote,
  onUnvote,
  isVoted,
}: {
  card: Card;
  onUpvote: () => void;
  onUnvote: () => void;
  isVoted: boolean;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVoteCount = async () => {
      try {
        const res = await fetch(`/api/vote/getVoteCount?id=${card.id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch vote count");
        }
        const data = await res.json();
        card.voteCount = data.vote_count; // Update the vote count directly in the card object
      } catch (error) {
        console.error("Error fetching vote count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVoteCount();
  }, [card.id]);

  return (
    <div className="max-w-2xl px-12 py-8 mt-16 bg-white rounded-lg shadow-md dark:bg-zinc-950">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {card.date}
        </span>
        <div className="flex items-center">
          <div className="flex items-center">
            {loading ? (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 text-gray-200 me-3 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#fcd34d"
                />
              </svg>
            ) : (
              <span className="mr-2">{card.voteCount}</span>
            )}
          </div>
          {isVoted ? (
            <button
              className="px-1 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-600"
              onClick={onUnvote}
            >
              ▼
            </button>
          ) : (
            <button
              className="px-1 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform rounded cursor-pointer bg-amber-700 hover:bg-amber-700"
              onClick={onUpvote}
            >
              ▲
            </button>
          )}
        </div>
      </div>
      <div className="mt-2">
        <a
          href={card.readMoreLink}
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >
          {card.headline}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {card.description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <a
          href={card.readMoreLink}
          target="_blank"
          className="text-abmber-700 dark:text-amber-500 hover:underline"
        >
          Read more
        </a>
        {/* <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
          {card.tag}
        </a> */}
      </div>
    </div>
  );
}
