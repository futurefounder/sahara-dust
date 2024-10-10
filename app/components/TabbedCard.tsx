"use client";
import { useState, useEffect } from "react";
import ContentCard from "./ContentCard";
import { initialCardData } from "./data/card-data";

interface Card {
  id: number;
  date: string;
  headline: string;
  description: string;
  readMoreLink: string;
  tag: string;
  voteCount: number;
}

const TABS = [
  { label: "🌟 New", value: "new" },
  { label: "🔥 Trending", value: "trending" },
  { label: "📈 Top", value: "top" },
];

export default function Main() {
  const [cardData, setCardData] = useState<Card[]>([]);
  const [votedCards, setVotedCards] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [activeTab, setActiveTab] = useState<string>("new");

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      const sortedData = await Promise.all(
        initialCardData.map(async (card) => {
          const res = await fetch(`/api/vote/getVoteCount?id=${card.id}`);
          const data = await res.json();
          return { ...card, voteCount: data.vote_count };
        })
      );
      setCardData(sortCardData(sortedData, sortOrder));
    };
    fetchInitialData();
  }, [sortOrder]);

  const handleUpvote = async (id: number) => {
    const res = await fetch("/api/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to register vote");
    }

    setCardData((prevCardData) => {
      const updatedCardData = prevCardData.map((card) => {
        if (card.id === id) {
          return { ...card, voteCount: card.voteCount + 1 };
        }
        return card;
      });
      return sortCardData(updatedCardData, sortOrder);
    });

    setVotedCards((prevVotedCards) => [...prevVotedCards, id]);
  };

  const handleUnvote = async (id: number) => {
    const res = await fetch("/api/unvote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to remove vote");
    }

    setCardData((prevCardData) => {
      const updatedCardData = prevCardData.map((card) => {
        if (card.id === id) {
          return { ...card, voteCount: card.voteCount - 1 };
        }
        return card;
      });
      return sortCardData(updatedCardData, sortOrder);
    });

    setVotedCards((prevVotedCards) =>
      prevVotedCards.filter((cardId) => cardId !== id)
    );
  };

  const sortCardData = (cardData: Card[], order: "asc" | "desc") => {
    return [...cardData].sort((a, b) => {
      if (order === "asc") {
        return a.voteCount - b.voteCount;
      } else {
        return b.voteCount - a.voteCount;
      }
    });
  };

  const filterCardData = () => {
    switch (activeTab) {
      case "new":
        return cardData.filter((card) => {
          const twoWeeksAgo = new Date();
          twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
          return new Date(card.date) >= twoWeeksAgo;
        });
      case "trending":
        // Assume you have a way to get the votes in the last week
        return cardData.sort((a, b) => b.voteCount - a.voteCount);
      case "top":
        return cardData.sort((a, b) => b.voteCount - a.voteCount);
      default:
        return cardData;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 main">
      <div className="flex space-x-4">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.value ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {filterCardData().map((card) => (
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
