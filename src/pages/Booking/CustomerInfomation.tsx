import { useForm } from "react-hook-form";
import BookingLayout from "./components/BookingLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { RHFNumberFormat, RHFTextAreaField, RHFTextField } from "components/Form";
import { REGEX_EMAIL } from "configs/auth";
import { routerLinks } from "routes";

type FormInputs = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  noteOrRequest: string;
};

const CustomerInfomation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormInputs>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      firstName: location.state?.["firstName"] || "",
      lastName: location.state?.["lastName"] || "",
      phoneNumber: location.state?.["phoneNumber"] || "",
      email: location.state?.["email"] || "",
      noteOrRequest: location.state?.["noteOrRequest"] || "",
    },
  });

  const onSubmit = async (data: FormInputs) => {
    const newData = {
      ...data,
      ...location.state,
    };
    navigate(routerLinks("reviewSummary"), {
      state: newData,
    });
  };

  const handleBack = () => {
    navigate(routerLinks("bookATable"), {
      state: location.state,
    });
  };

  return (
    <BookingLayout
      key={2}
      no={2}
      type="process"
      name="Customer Infomation"
      isSubmingting={isSubmitting}
      onBack={handleBack}
      onSubmit={handleSubmit(onSubmit)}
    >
      <form>
        <div className="grid grid-cols-12 gap-y-5">
          <div className="col-span-12">
            <RHFTextField
              control={control}
              name="firstName"
              label="First Name"
              placeholder="First Name"
              moreclass="h-14 text-base !bg-field"
              rules={{
                required: "This is a required field!",
              }}
            />
          </div>
          <div className="col-span-12">
            <RHFTextField
              control={control}
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              moreclass="h-14 text-base !bg-field"
              rules={{
                required: "This is a required field!",
              }}
            />
          </div>
          <div className="col-span-12">
            <RHFNumberFormat
              control={control}
              format={"(###) ### ####"}
              name="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
              className="h-14 text-base !bg-field"
              rules={{
                required: "This is a required field!",
              }}
            />
          </div>
          <div className="col-span-12">
            <RHFTextField
              control={control}
              name={"email"}
              label="Email"
              placeholder="Email"
              labelRequired={false}
              moreclass="h-14 text-base !bg-field"
              rules={{
                pattern: {
                  value: REGEX_EMAIL,
                  message: "Please enter a valid email address!",
                },
              }}
            />
          </div>
          <div className="col-span-12">
            <RHFTextAreaField
              control={control}
              name="noteOrRequest"
              labelRequired={false}
              label="Note or Request"
              placeholder="Note or Request"
              className="!text-base !bg-field"
              rows={4}
            />
          </div>
        </div>
      </form>
    </BookingLayout>
  );
};

export default CustomerInfomation;
