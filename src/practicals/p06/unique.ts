export function getUniqueNumbers(arr1: number[], arr2: number[]) {
  // Write your code below
  const difference_arr1 = arr1.filter(x => !arr2.includes(x));
  const difference_arr2 = arr2.filter(x => !arr1.includes(x));
  const combine = [...difference_arr1,...difference_arr2]
  return combine
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];