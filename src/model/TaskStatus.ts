export enum TaskStatus {
  UNAVAILABLE,
  AVAILABLE,
  STARTED,
  COLLECTABLE,
  WARNING,
  COLLECTED,
  NOT_COLLECTED,
}

export const taskStatusProps: { [key in TaskStatus]: { colors: string[]; countdown:boolean } } = {
  [TaskStatus.UNAVAILABLE]: { colors: ["#666"], countdown: false },
  [TaskStatus.AVAILABLE]: { colors: ["#d4af37"], countdown: false },
  [TaskStatus.STARTED]: { colors: ["#7bb35d"], countdown: true },
  [TaskStatus.COLLECTABLE]: { colors: ["#d4af37", "#7bb35d"], countdown: true },
  [TaskStatus.WARNING]: { colors: ["#d4af37", "#d3212d"], countdown: true },
  [TaskStatus.COLLECTED]: { colors: ["#c9d3d9"], countdown: false },
  [TaskStatus.NOT_COLLECTED]: { colors: ["#d3212d"], countdown: false },
};
