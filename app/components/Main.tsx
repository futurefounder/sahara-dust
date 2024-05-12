"use client";
import { useState } from "react";
import ContentCard from "./ContentCard";
import { initialCardData } from "./card-data";

export default function Main() {
  const [cardData, setCardData] = useState(initialCardData);

  const handleUpvote = (id: number) => {
    setCardData((prevCardData) => {
      const updatedCardData = prevCardData.map((card) => {
        if (card.id === id) {
          return { ...card, voteCount: card.voteCount + 1 };
        }
        return card;
      });
      return updatedCardData;
    });
  };

  const sortedCardData = Array.from(cardData).sort(
    (a, b) => b.voteCount - a.voteCount
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 main">
      {sortedCardData.map((card, index) => (
        <ContentCard
          key={card.id}
          card={card}
          voteCount={card.voteCount}
          onUpvote={() => handleUpvote(card.id)}
        />
      ))}
    </div>
  );
}
