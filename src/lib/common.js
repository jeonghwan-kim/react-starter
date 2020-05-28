Array.prototype.uniq = function uniq() {
  return this.filter((x, i, a) => a.indexOf(x) === i);
};

String.prototype.lpad = function (len, char = "0") {
  let s = this.toString();
  while (s.length < len) s = char + s;
  return s;
};
