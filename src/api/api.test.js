import { initializeTimes, updateTimes } from "../components/main/Main";

jest.mock("../api/api", () => ({
  fetchAPI: jest.fn(() => ["5:00 PM", "6:00 PM", "7:00 PM"]),
}));

describe("initializeTimes", () => {
  it("should initialize times based on fetchAPI", () => {
    const result = initializeTimes;

    expect(result).toEqual([
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
      "8:00 PM",
      "9:00 PM",
    ]);
  });
});

describe("updateTimes", () => {
  it("should return weekend times when the selected date is a weekend", () => {
    const state = [];
    const action = { type: "updateTimes", date: new Date("2023-10-01") }; // Sunday (weekend)
    const result = updateTimes(state, action);

    expect(result).toEqual(["5:00 PM", "6:00 PM", "7:00 PM"]);
  });

  it("should return weekday times when the selected date is a weekday", () => {
    const state = [];
    const action = { type: "updateTimes", date: new Date("2023-10-02") }; // Monday (weekday)
    const result = updateTimes(state, action);

    expect(result).toEqual(["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"]);
  });

  it("should return custom times when provided in the action", () => {
    const state = [];
    const action = {
      type: "updateTimes",
      date: new Date("2023-10-02"),
      times: ["6:00 PM", "7:00 PM"],
    };
    const result = updateTimes(state, action);

    expect(result).toEqual(["6:00 PM", "7:00 PM"]);
  });
});
