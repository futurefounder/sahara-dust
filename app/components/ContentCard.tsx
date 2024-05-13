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
  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-zinc-950 ">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {card.date}
        </span>
        <div className="flex items-center">
          <span className="mr-2">{card.voteCount}</span>
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
        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
          {card.tag}
        </a>
      </div>
    </div>
  );
}
