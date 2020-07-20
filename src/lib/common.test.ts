import "./common";

describe("Array.prototype.", () => {
  describe("uniq()", () => {
    it("중복을 제거한다", () => {
      const actual = [1, 2, 1].uniq();
      expect(actual).toStrictEqual([1, 2]);
    });
  });
});

describe("String.prototype.", () => {
  describe("lpad()", () => {
    it("지정한 길이만큼 왼쪽엔 문자를 추가한다", () => {
      expect("123".lpad(5, "x")).toEqual("xx123");
      expect("123".lpad(5)).toEqual("00123");
    });
  });
});
