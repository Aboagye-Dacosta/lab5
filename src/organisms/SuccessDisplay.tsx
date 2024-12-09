import Container from "../atoms/Container";
import Typography from "../atoms/Typography";

const SuccessDisplay: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-[24px] p-y-[79px]">
        <img src="./assets/images/completed-indicator-icon.svg" alt="" />
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <Typography size="fs-x-lg" weight="weight-700" color="denim">
            Thank you!
          </Typography>
          <Typography
            color="grey"
            align="center"
            weight="weight-400"
            size="fs-md"
            style={{
              lineHeight: "25px",
            }}
          >
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default SuccessDisplay;
