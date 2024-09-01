import { useMemo } from "react";
import { useForm } from "react-hook-form";
import getNext7Days from "./helpers/get7NextDays";
import getTimeSlots from "./helpers/getTimeSlots";
import RHFInputDate, { IDay } from "./components/RHFInputDate";
import RHFInputCounter from "./components/RHFInputCounter";
import RHFInputTime from "./components/RHFInputTimes";
import BookingLayout from "./components/BookingLayout";
import { useNavigate } from "react-router-dom";

type FormInputs = {
  numberOfGuests: number;
  time: string;
  date: IDay;
  // firstName: string;
  // lastName: string;
  // phoneNumber: string;
  // email: string;
  // noteOrRequest: string;
};

const Reserved = () => {
  const navigate = useNavigate();

  const sevenNextDays = useMemo(getNext7Days, []);
  const timeSlots = useMemo(getTimeSlots, []);

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormInputs>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      numberOfGuests: 1,
      date: sevenNextDays[0],
      time: timeSlots[0],
      // firstName: "",
      // lastName: "",
      // phoneNumber: "",
      // email: "",
      // noteOrRequest: ""
    },
  });

  const onSubmit = async (data: FormInputs) => {
    console.log(data);
    navigate("bookingCustomerInfomation", {
      state: data,
    });
  };

  return (
    <BookingLayout
      type="done"
      no={4}
      name="Reservation"
      isSubmingting={isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
    >
      <form>
        <div className="grid grid-cols-12 gap-y-5">
          <div className="col-span-12">
            <RHFInputCounter
              control={control}
              name="numberOfGuests"
              label="Guests"
              rules={{
                required: "This is a required field!",
              }}
              min={1}
              max={20}
              moreLabel={
                <span className="text-secondary ml-1 font-[300] opacity-50">(Max 20)</span>
              }
            />
          </div>
          <div className="col-span-12">
            <RHFInputDate
              control={control}
              days={sevenNextDays}
              name="date"
              label="Date"
              rules={{
                required: "This is a required field!",
              }}
            />
          </div>
          <div className="col-span-12">
            <RHFInputTime
              control={control}
              times={timeSlots}
              name="time"
              label="Time"
              rules={{
                required: "This is a required field!",
              }}
            />
          </div>
        </div>
      </form>
    </BookingLayout>
  );
};

export default Reserved;
