import { ButtonSize } from './sizes';

export type CustomButtonProps = {
  /** Размер кнопки:
   * sm (25px),
   * md (40px),
   * lg (50px),
   * xl (56px) */
  size: keyof typeof ButtonSize;
  /** Вид кнопки */
  variant: 'default' | 'float';
};
