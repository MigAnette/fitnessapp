import routine from "@/store/modules/routine";

describe("routine.js", () => {
  describe("mutations", () => {
    it("SET_MARK_CHECKED", () => {
      const state = { markChecked: false };

      const payload = true;

      routine.mutations.SET_MARK_CHECKED(state, payload);

      expect(state.markChecked).toBe(true);
    });
  });
});
