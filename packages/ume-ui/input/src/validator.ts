// 验证数字
export function isNumber(
  value: string | number,
  max = Infinity,
  min = -Infinity
) {
  return !isNaN(Number(value)) && Number(value) <= max && Number(value) >= min;
}
