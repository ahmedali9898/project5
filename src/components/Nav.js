import { Menu } from "antd";
import { FaUsers } from "react-icons/fa";
import useStore from "../store/customizeTheme";
function Nav() {
  const SidebarColor = useStore((state) => state.SidebarColor);

  return (
    <div>
      <Menu
        style={{
          backgroundColor: SidebarColor,
        }}
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "4",
            icon: <FaUsers />,
            label: "Home",
          },
          {
            key: "1",
            icon: <FaUsers />,
            label: "store1",
          },
          {
            key: "2",
            icon: <FaUsers />,
            label: "store2",
          },
          {
            key: "3",
            icon: <FaUsers />,
            label: "store3",
          },
        ]}
      />
    </div>
  );
}

export default Nav;

