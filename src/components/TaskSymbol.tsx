import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { TaskStatus, taskStatusProps } from "../model/TaskStatus";

export interface IProps {
  icon: IconType;
  status: TaskStatus;
}

export interface IState {
  color: string;
  time: number;
  tick: number;
}

export class Effect {
  public static tick(state: IState, setState: Dispatch<SetStateAction<IState>>, props: IProps) {
    const statusProps = taskStatusProps[props.status];
    const colors = statusProps.colors;
    const colorIndex = state.tick % colors.length;
    state.color = colors[colorIndex];
    state.tick++;
    if (statusProps.countdown) {
      state.time = state.time && state.time - 1000;
    }
    setTimeout(() => setState({ ...state }), 1000);
  }
}

export default (props: IProps) => {
  const Icon = props.icon;

  const [state, setState] = useState<IState>({
    color: 'red',
    time: 5 * 60 * 1000,
    tick: 0,
  });

  useEffect(() => Effect.tick(state, setState, props), [state.tick]);

  return (
    <div>
      <div>
        <Icon fontSize={48} color={state.color} onClick={() => { }} />
      </div>
      <div
        style={{
          fontFamily: "DigitalDreamBold",
          fontSize: 18,
          color: state.color,
        }}
      >
        {new Date(state.time).toJSON().slice(11, 19)}
      </div>
    </div>
  );
};
