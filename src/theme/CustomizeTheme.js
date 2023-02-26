import {Button, Space} from "antd";
import { BsSun, BsMoon } from "react-icons/bs";
import useStore from "../store/customizeTheme";

function CustomizeTheme() {
  const SetTheme = useStore((state) => state.settheme);
  const SetHeadercolor = useStore((state) => state.SetHeadercolor);
  const SetBorderColor = useStore((state) => state.SetBorderColor);
  return (

      <div className="flex justify-center animate__heartBeat ">
        <Space>
          <Button
            type="default"
            size="large"
            icon={<BsSun />}
            onClick={() => {
              SetTheme(true);
              SetBorderColor("#f0f0f0");
              SetHeadercolor("#ffffff");
            }}
          />
          <Button
            type="default"
            size="large"
            icon={<BsMoon />}
            onClick={() => {
              SetTheme(false);
              SetBorderColor("#303030");
              SetHeadercolor("#141414");
            }}
          />
        </Space>
      </div>
  );
}
export default CustomizeTheme;


