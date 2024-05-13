"use client";
import { useState } from "react";
import ContentCard from "./ContentCard";
import { initialCardData } from "./card-data";

interface Card {
  id: number;
  date: string;
  headline: string;
  description: string;
  readMoreLink: string;
  tag: string;
  voteCount: number;
}

export default function Main() {
  const [cardData, setCardData] = useState<Card[]>(initialCardData);
  const [votedCards, setVotedCards] = useState<number[]>([]);

  const handleUpvote = (id: number) => {
    setCardData((prevCardData) => {
      const updatedCardData = prevCardData.map((card) => {
        if (card.id === id) {
          const isVoted = votedCards.includes(id);
          const newVoteCount = isVoted
            ? card.voteCount - 1
            : card.voteCount + 1;
          return { ...card, voteCount: newVoteCount };
        }
        return card;
      });
      return updatedCardData;
    });
    setVotedCards((prevVotedCards) => {
      if (prevVotedCards.includes(id)) {
        return prevVotedCards.filter((cardId) => cardId !== id);
      } else {
        return [...prevVotedCards, id];
      }
    });
  };

  const handleUnvote = (id: number) => {
    setCardData((prevCardData) => {
      const updatedCardData = prevCardData.map((card) => {
        if (card.id === id) {
          return { ...card, voteCount: card.voteCount - 1 };
        }
        return card;
      });
      return updatedCardData;
    });
    setVotedCards((prevVotedCards) =>
      prevVotedCards.filter((cardId) => cardId !== id)
    );
  };

  const sortedCardData = [...cardData].sort(
    (a, b) => b.voteCount - a.voteCount
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 main">
      {sortedCardData.map((card) => (
        <ContentCard
          key={card.id}
          card={card}
          onUpvote={() => handleUpvote(card.id)}
          onUnvote={() => handleUnvote(card.id)}
          isVoted={votedCards.includes(card.id)}
        />
      ))}
    </div>
  );
}
