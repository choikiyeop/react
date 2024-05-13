import { useRef, useCallback, useEffect } from 'react';

/**
 * ref를 준 Element의 바깥을 클릭 했을 때 onClickOutside 함수 실행
 * @param onClickOutside
 * @returns ref
 */
export default function useOutsideClick(onClickOutside: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const inside = ref.current?.contains(e.target as Node);
      if (inside) return;

      onClickOutside();
    },
    [onClickOutside, ref],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return ref;
}
