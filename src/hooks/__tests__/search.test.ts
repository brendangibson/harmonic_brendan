import { Results } from "../../types/search";
import { combine, intersect } from "../search";

describe("search", () => {
  describe("combine()", () => {
    it("combines two empty lists", () => {
      const a: Results = [];
      const b: Results = [];
      expect(combine(a, b)).toEqual([]);
    });

    it("combines with one empty list", () => {
      const a: Results = [
        { id: 32312, name: "google.com", description: "yes", highlights: [] },
      ];
      const b: Results = [];
      expect(combine(a, b)).toEqual(a);
    });

    it("combines two lists", () => {
      const a: Results = [
        { id: 32312, name: "google.com", description: "yes", highlights: [] },
      ];
      const b: Results = [
        {
          id: 21421,
          name: "microsoft.com",
          description: "yes",
          highlights: [],
        },
      ];
      expect(combine(a, b)).toEqual([...a, ...b]);
    });

    it("combines two lists with duplicates", () => {
      const a: Results = [
        { id: 32312, name: "google.com", description: "yes", highlights: [] },
      ];
      const b: Results = [
        { id: 32312, name: "google.com", description: "yes", highlights: [] },
      ];

      expect(combine(a, b)).toEqual(a);
    });
  });

  describe("intersect()", () => {
    it("intersects two empty lists", () => {
      const a: Results = [];
      const b: Results = [];
      expect(intersect(a, b)).toEqual([]);
    });

    it("intersects with one empty list", () => {
      const a: Results = [
        { id: 32312, name: "google.com", description: "yes", highlights: [] },
      ];
      const b: Results = [];
      expect(intersect(a, b)).toEqual([]);
    });

    it("intersects two lists", () => {
      const a: Results = [
        { id: 32312, name: "google.com", description: "yes", highlights: [] },
      ];
      const b: Results = [
        {
          id: 21421,
          name: "microsoft.com",
          description: "yes",
          highlights: [],
        },
      ];
      expect(intersect(a, b)).toEqual([]);
    });

    it("intersects two lists with duplicates", () => {
      const a: Results = [
        { id: 32312, name: "google.com", description: "yes", highlights: [] },
      ];
      const b: Results = [
        { id: 32312, name: "google.com", description: "yes", highlights: [] },
      ];

      expect(intersect(a, b)).toEqual(a);
    });
  });
});
