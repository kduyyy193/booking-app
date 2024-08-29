import { useState } from "react";
import { useForm } from "react-hook-form";
import { RHFTextField } from "components/Form";
import { useNavigate } from "react-router-dom";
import { Button, App, Alert } from "antd";
import { REGEX_EMAIL } from "configs/auth";
import Page from "components/Page";
import classNames from "classnames";
import ArrowIcon from "assets/icons/ArrowIcon";
import cn from "utils/cn";

type FormInputs = {
  email: string;
  password: string;
};

const STEPS = [
  {
    id: "bookATable",
  },
  {
    id: "cusstomerInfomation",
  },
  {
    id: "reviewSummary",
  },
];

const Booking = () => {
  const navigate = useNavigate();

  const { message } = App.useApp();

  const [currentStep, setCurrentStep] = useState<string[]>([STEPS[0].id]);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormInputs>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormInputs) => {
    if (data.email === "admin@gmail.com" && data.password === "admin123") {
      navigate("/auth/two-factor-login");
    } else {
      message.error("Incorrect email or password!");
    }
  };

  const handleContinue = () => {
    navigate("../");
  };

  const handleBack = () => {
    navigate("../");
  };

  return (
    <Page title="EatRight - Booking">
      <div className="w-full mx-4">
        <div className="mt-12">
          <div className="w-full">
            <div className="flex items-center none-print cursor-pointer flex-1">
              <div className="flex mr-2" onClick={handleBack}>
                <ArrowIcon />
                <div className="text-3.5 leading-4.25 font-semibold text-primary ml-1 flex-1">
                  Book a table
                </div>
              </div>
              <div className="flex items-center ml-auto">
                {STEPS.map((step, idx) => {
                  return (
                    <div key={idx} className="relative flex items-center ml-3">
                      <div
                        className={cn(
                          "w-3 h-3 rounded-full",
                          currentStep.includes(step.id) && " bg-primary",
                          !currentStep.includes(step.id) && " bg-tertiary"
                        )}
                      ></div>
                      {idx < 2 && (
                        <div
                          className="w-6 h-1 absolute z-[-1] left-1.5"
                          style={{
                            background: " linear-gradient(270deg, #FFF2F0 27.08%, #FF3B42 100%)",
                          }}
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0">
          <Button>Continue</Button>
        </div>
      </div>
    </Page>
  );
};

export default Booking;
