import { Link, To, useLocation } from "react-router-dom";
import Button from "../atoms/Button";
import { useForm } from "../context/form_context";

const BottomNavigator: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { pathname } = useLocation();
  const { step, handleSetStep } = useForm();
  return (
    <div className="flex pointer justify-between items-center bg-white p-x-[24px] p-y-[20px] ">
      {!pathname.includes("info") && (
        <Link
          to={-1 as To}
          className="fs-16 grey :hover:purple decoration-none"
          onClick={() => {
            handleSetStep(step - 1);
          }}
        >
          Go Back
        </Link>
      )}
      {pathname.includes("info") && <div></div>}
      <Button variant="btn-dark" onClick={onClick}>
        Next Step
      </Button>
    </div>
  );
};

export default BottomNavigator;
