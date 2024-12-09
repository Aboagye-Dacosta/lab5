import Container from "../atoms/Container";
import { useForm } from "../context/form_context";
import Header from "../molecule/Header";
import TextField from "../molecule/TextField";

const PersonalInfoForm: React.FC = () => {
  const { handleSetUserInfo, userInfo } = useForm();
  return (
    <Container>
      <Header
        title="Personal info"
        subTitle="Please provide your name, email address, and phone number."
      />
      <form className="flex flex-col gap-[16px] w-full">
        <TextField
          label="Name"
          fieldName="name"
          placeholder="e.g Stephen King"
          initialValue={userInfo.name}
          type="text"
          errorMessage={userInfo.errors?.name}
          onChange={(value) => handleSetUserInfo({ name: value as string })}
        />
        <TextField
          label="Email Address"
          fieldName="email"
          placeholder="e.g Stephenking@lorem.com"
          type="email"
          initialValue={userInfo.email}
          errorMessage={userInfo.errors?.email}
          onChange={(value) => handleSetUserInfo({ email: value as string })}
        />
        <TextField
          label="Email Address"
          fieldName="email"
          placeholder="e.g +233 54544443232"
          type="number"
          initialValue={userInfo.phone}
          errorMessage={userInfo.errors?.phone}
          onChange={(value) => handleSetUserInfo({ phone: value as string })}
        />
      </form>
    </Container>
  );
};

export default PersonalInfoForm;
