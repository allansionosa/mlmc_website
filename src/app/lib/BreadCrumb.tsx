import { Breadcrumb } from "antd";
import Link from "next/link";
import Image from "next/image";

interface ItemsType {
  title: JSX.Element | string;
}

interface BreadcrumbsProps {
  items: ItemsType[];
  title: string | React.ReactNode;
  wImage?: boolean;
}

const BreadCrumb = ({ items, title, wImage = true }: BreadcrumbsProps) => {
  const _items: ItemsType[] = [
    {
      title: (
        <Link href="/" className="text-secondary">
          Home
        </Link>
      ),
    },
  ];

  _items.push(...items);
  return (
    <>
      {wImage && (
        <div className="bg-primary w-full h-40 md:h-64 relative">
          <Image
            src="/mlmc-building.webp"
            alt=""
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className=" bg-blue-700 bg-opacity-50 w-full h-full absolute top-0 left-0" />
          <div className=" bg-secondary w-full h-4" />
          <div className="py-5">
            <div className="container absolute top-16 left-10 sm:ml-28">
              <Breadcrumb separator=">" items={_items} />
              <h1 className="pt-1 text-2xl md:text-3xl text-main uppercase tracking-wide font-semibold text-yellow-400">
                {title}
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BreadCrumb;
