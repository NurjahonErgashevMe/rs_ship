export default function getYearFromIX() {
  let arr = [];
  for (let i = 1900; i <= new Date().getFullYear() + 1; i++) {
    arr.push({ label: i, value: i });
  }
  return arr;
}
