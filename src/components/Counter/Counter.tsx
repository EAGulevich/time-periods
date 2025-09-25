import React from 'react'
import type { FC } from 'react';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styled from 'styled-components';

interface CounterProps {
  value: number;
}

const Counter: FC<CounterProps> = ({ value }) => {
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
          // ease: 'power2.inOut',
          // snap: { innerText: 1 },
          onUpdate: function () {
            const newValue = Math.round(this.targets()[0].innerText);
            numberRef.current!.textContent = newValue.toString();
            setDisplayValue(newValue);
          },
        });
      }
    },
    { dependencies: [value] },
  );

  return <StyledCounter ref={numberRef}>{displayValue}</StyledCounter>;
};

const StyledCounter = styled.div`
  font-size: 56px;
  font-weight: bold;
  color: #42567a;
`;

export default Counter;
