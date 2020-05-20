import exercise from "@/store/modules/exercise";

describe("exercise.js", () => {
  describe("mutations", () => {
    it("UPDATE_REP", () => {
      const state = {
        exerciseTest: [
          { repsAndKg: [{ rep: 0, kg: 0 }] },
          { repsAndKg: [{ rep: 0, kg: 0 }] },
          { repsAndKg: [{ rep: 0, kg: 0 }] },
        ],
      };

      const payload = { value: 14, i: 0, index: 0 };

      exercise.mutations.UPDATE_REP(state, payload);

      expect(state.exerciseTest[0].repsAndKg[0].rep).toBe(14);
      expect(typeof state.exerciseTest[0].repsAndKg[0].rep).toBe("number");
    });
    it("UPDATE_REP number thing", () => {
      const state = {
        exerciseTest: [
          { repsAndKg: [{ rep: 0, kg: 0 }] },
          { repsAndKg: [{ rep: 0, kg: 0 }] },
          { repsAndKg: [{ rep: 0, kg: 0 }] },
        ],
      };

      const payload = { value: 67, i: 0, index: 0 };

      exercise.mutations.UPDATE_REP(state, payload);

      expect(typeof state.exerciseTest[0].repsAndKg[0].rep).toBe("number");
    });
  });
});
