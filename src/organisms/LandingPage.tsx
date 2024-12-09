import { Link } from "react-router-dom";
import Container from "../atoms/Container";
import Header from "../molecule/Header";
import { routes } from "../routes";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-[500px]  relative w-full">
      <div className="absolute top-50 left-50 -translate-50">
        <Container>
          <Header
            title="Register of Lorem Gaming"
            subTitle="Bored of sci and ons. Want to have a trill you would not forget. Then you are at the right place"
            style={{
              lineHeight: "24px",
              textAlign: "center",
            }}
          />
          <Link
            to={routes.signup}
            className="w-full bg-purple p-y-[16px] p-x-[24px] radius-[8px] white decoration-none text-center"
          >
            Lets sign you up #
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
