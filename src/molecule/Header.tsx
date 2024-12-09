import Typography from "../atoms/Typography";

const Header: React.FC<{
  title: string;
  subTitle: string;
  [key: string]: unknown;
}> = ({ title, subTitle, ...rem }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <Typography
        weight="weight-700"
        size="fs-x-lg"
        color="denim"
        variant="h1"
        {...rem}
      >
        {title}
      </Typography>
      <Typography
        weight="weight-400"
        size="fs-md"
        color="grey"
        variant="h4"
        {...rem}
      >
        {subTitle}
      </Typography>
    </div>
  );
};

export default Header;
