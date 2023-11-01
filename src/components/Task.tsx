import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { TaskHook } from "../hooks/TaskHook";

export default (props: { icon: IconType; hook?: TaskHook }) => {
  const Icon = props.icon;

  const [color, setColor] = useState("#7bb35d");
  const [time, setTime] = useState(5 * 60 * 1000);
  const hook = props.hook || new TaskHook(setTime, setColor, time);

  useEffect(hook.useEffect.bind(hook));
  return (
    <div>
      <div>
        <Icon fontSize={48} color={color} onClick={() => setColor("red")} />
      </div>
      <div
        style={{
          fontFamily: "DigitalDreamBold",
          fontSize: 18,
          color,
        }}
      >
        {new Date(time).toJSON().slice(11, 19)}
      </div>
    </div>
  );
};
