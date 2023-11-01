import { Dispatch, SetStateAction } from "react";

export class TaskHook {
  constructor(
    private readonly setTime: Dispatch<SetStateAction<number>>,
    private readonly setColor: Dispatch<SetStateAction<string>>,
    private time: number
  ) {}

  public useEffect() {
    setTimeout(() => this.time && this.setTime(this.time - 1000), 1000);
  }
}
