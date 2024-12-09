import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="w-full flex-1 lg:max-w-[940px] lg:p-x-[16px] lg:p-y-[16px] lg:bg-white radius-[8px]">
      <div className="flex w-ful sm:p-y-[50px] gap-[24px] flex-1 flex-col lg:flex-row items-center lg:items-start justify-start bg-image-default h-full flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
