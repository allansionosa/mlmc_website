import { Menu } from "antd";
import Link from "next/link";

export const items = [
  {
    label: "History",
    key: "/about",
  },
  {
    label: "Vision/Mission",
    key: "/about/Vission&Mission",
  },
  {
    label: "Company Profile",
    key: "/about/company-profile",
  },
  {
    label: "Officers and Board Directors",
    key: "/about/officers&board-directors",
  },
  {
    label: "HMO",
    key: "/about/hmo",
  },
];

interface MenuItemsProps {
  current: string;
  onClick: (e: any) => void;
}
export const MenuItems = ({ current, onClick }: MenuItemsProps) => {
  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="flex justify-center"
      >
        {items.map((item) => (
          <Menu.Item key={item.key}>
            <Link href={item.key}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
