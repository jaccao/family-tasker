export enum TaskStatus {
  UNAVAILABLE,
  AVAILABLE,
  STARTED,
  COLLECTABLE,
  WARNING,
  COLLECTED,
  NOT_COLLECTED,
}

export const taskStatusProps: { [key in TaskStatus]: { colors: string[] } } = {
  [TaskStatus.UNAVAILABLE]: { colors: ["#666"] },
  [TaskStatus.AVAILABLE]: { colors: ["#d4af37"] },
  [TaskStatus.STARTED]: { colors: ["#7bb35d"] },
  [TaskStatus.COLLECTABLE]: { colors: ["#d4af37", "#7bb35d"] },
  [TaskStatus.WARNING]: { colors: ["#d4af37", "#d3212d"] },
  [TaskStatus.COLLECTED]: { colors: ["#c9d3d9"] },
  [TaskStatus.NOT_COLLECTED]: { colors: ["#d3212d"] },
};
