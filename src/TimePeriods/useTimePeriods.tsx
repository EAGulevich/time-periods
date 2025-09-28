import { useEffect, useRef, useState } from 'react';
import { DATA } from '../TEST_DATA';
import gsap from 'gsap';
import { ANIMATION_DURATION_MS, ANIMATION_DURATION_S } from '../constants';

export const useTimePeriods = () => {
  const [currentPoint, setCurrentPoint] = useState<number>(1);

  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [isCardsVisible, setIsCardsVisible] = useState(false);

  const currentCards =
    DATA.points.find(p => p.number === currentPoint)?.data || [];
  const maxYear = Math.max(...currentCards.map(p => p.year));
  const minYear = Math.min(...currentCards.map(p => p.year));

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: ANIMATION_DURATION_S }
    );
  }, [isCardsVisible]);

  const onTogglePoint = (current: number) => {
    gsap.to(cardsRef.current, {
      opacity: 0,
      duration: ANIMATION_DURATION_S,
      onComplete: () => {
        setIsCardsVisible(!isCardsVisible);
      },
    });
    setTimeout(() => {
      setCurrentPoint(current);
    }, ANIMATION_DURATION_MS);
  };

  return {
    minYear,
    maxYear,
    currentPoint,
    currentCards: currentCards.sort((a, b) => a.year - b.year),
    onTogglePoint,
    cardsRef,
  };
};
