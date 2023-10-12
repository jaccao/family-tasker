export enum TaskStatus {
  NOT_AVAILABLE,
  AVAILABLE,
  STARTED,
  COLLECTABLE,
  WARNING,
  COLLECTED,
  NOT_COLLECTED,
}

export const taskStatusProps: { [key in TaskStatus]: { color: string } } = {
  [TaskStatus.NOT_AVAILABLE]: { color: "#333333" },
  [TaskStatus.AVAILABLE]: { color: "#61dafb" },
  [TaskStatus.STARTED]: { color: "" },
  [TaskStatus.COLLECTABLE]: { color: "" },
  [TaskStatus.WARNING]: { color: "" },
  [TaskStatus.COLLECTED]: { color: "" },
  [TaskStatus.NOT_COLLECTED]: { color: "" },
};
