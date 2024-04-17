export function findShort(s: string): number {
  return Math.min(...s.split(" ").map((string) => string.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

////
export function oddOnesOut(nums: number[]) {
  let obj: any = {};

  nums.forEach((item) => {
    item in obj ? (obj[item] += 1) : (obj[item] = 1);
  });

  console.log(obj);
}

oddOnesOut([1, 2, 3, 1, 3, 3]);
