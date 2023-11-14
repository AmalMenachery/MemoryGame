export const shuffleCards = (array: Card[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const generateCards = (cardsList: Card[], columns: number = 2) => {
  const shuffledCardData = shuffleCards(cardsList);
  // Take the first (columns * 2) cards to create a random array of cards
  const randomCards = shuffledCardData.slice(0, columns * 2);
  // Duplicate the randomCards
  const initialCards = shuffleCards([...randomCards, ...randomCards]);
  return initialCards.map((value, index) => {
    return {
      id: index,
      visible: false,
      ...value,
    };
  });
};

export const isVisibleCardsEven = (cards: Card[]) => {
  return (
    cards.reduce((count, card) => (card.visible ? count + 1 : count), 0) % 2 ===
    0
  );
};
