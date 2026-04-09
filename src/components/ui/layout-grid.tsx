"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactElement | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-flow-dense grid-cols-1 md:grid-cols-3 md:auto-rows-[400px] max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer fixed inset-0 h-fit max-h-[90vh] w-fit max-w-[90%] m-auto z-50 flex justify-center items-center flex-wrap flex-col overflow-hidden"
                : lastSelected?.id === card.id
                  ? "z-30 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full min-h-[250px]",
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} isSelected={selected?.id === card.id} />
          </motion.div>
        </div>
      ))}
      <AnimatePresence>
      {selected?.id && (
        <motion.div
          onClick={handleOutsideClick}
          className={cn(
            "fixed inset-0 h-full w-full left-0 top-0 bg-black opacity-0 z-40 cursor-pointer blur-sm",
            selected?.id ? "pointer-events-auto" : "pointer-events-none",
          )}
          animate={{ opacity: selected?.id ? 0.3 : 0 }}
        />
      )}
      </AnimatePresence>
    </div>
  );
};

const ImageComponent = ({
  card,
  isSelected,
}: {
  card: Card;
  isSelected?: boolean;
}) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "transition duration-200",
        // 1. GRID STATE: Only apply these if NOT selected
        !isSelected &&
          "absolute inset-0 h-full w-full object-cover object-center",

        // 2. SELECTED STATE: Only apply these if SELECTED
        isSelected &&
          "relative h-auto w-auto max-w-full max-h-[80vh] object-contain",
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent absolute inset-0 h-full w-full flex flex-col justify-end rounded-lg shadow-2xl z-60">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-x-0 bottom-0 h-1/3 md:h-1/2  bg-gradient-to-t from-black/80 to-transparent z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-8 z-70"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
