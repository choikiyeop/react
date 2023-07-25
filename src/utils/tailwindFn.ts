
/**
 * tailwindcss를 위한 class들을 합치는 함수입니다.
 * @param classes 
 * @returns string
 */
export function mergeClasses(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}