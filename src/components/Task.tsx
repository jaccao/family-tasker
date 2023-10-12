import { useEffect, useState } from "react";
import { IconType } from "react-icons";

export default (props:{
  icon: IconType,
}) => {
  const [color, setColor] = useState("#61dafb");
  const [time, setTime] = useState(5 * 60 * 1000);
  const Icon = props.icon;
  useEffect(() => {
    setTimeout(() => time && setTime(time - 1000), 1000);
  }, [time]);
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
