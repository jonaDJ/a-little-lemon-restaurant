import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns an array of initial times", () => {
  expect(initializeTimes).toEqual([
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
  ]);
});

test('updateTimes returns the same state if action type is not "updateTimes"', () => {
  const initialState = ["initialState"];
  const action = { type: "someOtherAction" };
  const nextState = updateTimes(initialState, action);
  expect(nextState).toBe(initialState);
});

test("updateTimes returns weekendTimes for Saturday (dayOfWeek 6)", () => {
  const initialState = ["initialState"];
  const action = { type: "updateTimes", date: "2023-10-07" };
  const nextState = updateTimes(initialState, action);
  expect(nextState).toEqual(["5:00 PM", "6:00 PM", "7:00 PM"]);
});

test("updateTimes returns weekdayTimes for Tuesday (dayOfWeek 2)", () => {
  const initialState = ["initialState"];
  const action = { type: "updateTimes", date: "2023-10-10" };
  const nextState = updateTimes(initialState, action);
  expect(nextState).toEqual(["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"]);
});
