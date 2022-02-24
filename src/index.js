module.exports = function check(str, bracketsConfig) {
  let brakets = bracketsConfig.map(cur => cur.join(''));
  while (true) {
    let input = str;
    for (let i = 0; i < brakets.length; i++) {
      str = str.replace(brakets[i], '');
    }
    if (input == str) break;
  }
  return !Boolean(str);
}
