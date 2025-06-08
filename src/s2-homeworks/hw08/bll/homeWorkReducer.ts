import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
      const sortedArray = [...state].sort((a, b) => {
        return action.payload === "up"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      return sortedArray; // need to fix
    }
    case "check": {
      const sortedArray = [...state].filter(
        (item) => item.age > action.payload
      );
      return sortedArray; // need to fix
    }
    default:
      return state;
  }
};
