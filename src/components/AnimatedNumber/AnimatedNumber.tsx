import React from 'react';
import type { FC } from 'react';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type AnimatedNumberProps = {
  /** Число, которое при изменении будет анимировано */
  value: number;
};

/** Компонент для отображения анимированного числа */
const AnimatedNumber: FC<AnimatedNumberProps> = ({ value, ...props }) => {
  const numberRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(value);

  useGSAP(
    () => {
      if (numberRef.current) {
        // Устанавливаем начальное значение, если пустое
        if (!numberRef.current.textContent) {
          numberRef.current.textContent = value.toString();
          setDisplayValue(value);
        }

        // Останавливаем предыдущие анимации
        gsap.killTweensOf(numberRef.current);

        // Анимация числа
        gsap.to(numberRef.current, {
          duration: 1,
          innerText: value,
          onUpdate: function () {
            const newValue = Math.round(this.targets()[0].innerText);
            numberRef.current!.textContent = newValue.toString();
            setDisplayValue(newValue);
          },
        });
      }
    },
    { dependencies: [value] }
  );

  return (
    <div ref={numberRef} {...props}>
      {displayValue}
    </div>
  );
};

export default AnimatedNumber;
