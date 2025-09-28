import React, { useEffect } from 'react';
import type { FC } from 'react';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ANIMATION_DURATION_S } from '../../constants';

type AnimatedNumberProps = {
  /** Число, которое при изменении будет анимировано */
  value: number;
  /** Длительность анимации в секундах */
  duration?: number;
  /** Задержка перед стартом анимации в секундах */
  delay?: number;
} & React.HTMLAttributes<HTMLSpanElement>;

/** Компонент для отображения анимированного числа */
const AnimatedNumber: FC<AnimatedNumberProps> = ({
  value,
  delay = 0,
  duration = ANIMATION_DURATION_S,
  ...props
}) => {
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (numberRef.current) {
      numberRef.current.textContent = value.toString();
      setDisplayValue(value);
    }
  }, []);

  useGSAP(
    () => {
      if (!numberRef.current) {
        return;
      }

      gsap.killTweensOf(numberRef.current);

      gsap.to(numberRef.current, {
        delay,
        duration,
        innerText: value,
        onUpdate: function () {
          const newValue = Math.round(this.targets()[0].innerText);
          if (numberRef.current) {
            numberRef.current.textContent = newValue.toString();
          }
        },
        onComplete: () => {
          setDisplayValue(value);
        },
      });

      return () => gsap.killTweensOf(numberRef.current);
    },
    { dependencies: [value, duration, delay] }
  );

  return (
    <span ref={numberRef} {...props}>
      {displayValue}
    </span>
  );
};

export default React.memo(AnimatedNumber);
