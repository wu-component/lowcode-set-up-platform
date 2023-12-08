export const getID = (): string => `随机数：${Math.random()}`;

export default function (): number {
  console.log("hello，this is shared!");
  return 1
}

