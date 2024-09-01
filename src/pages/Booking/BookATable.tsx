import { useMemo } from "react";
import { useForm } from "react-hook-form";
import getNext7Days from "./helpers/get7NextDays";
import getTimeSlots from "./helpers/getTimeSlots";
import RHFInputDate, { IDay } from "./components/RHFInputDate";
import RHFInputCounter from "./components/RHFInputCounter";
import RHFInputTime from "./components/RHFInputTimes";
import BookingLayout from "./components/BookingLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { routerLinks } from "routes";

type FormInputs = {
  numberOfGuests: number;
  time: string;
  date: IDay;
};

const BookATable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sevenNextDays = useMemo(() => getNext7Days("DD MMM"), []);
  const timeSlots = useMemo(getTimeSlots, []);

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormInputs>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      numberOfGuests: location.state?.numberOfGuests || 1,
      date: location.state?.date || sevenNextDays[0],
      time: location.state?.time || timeSlots[0],
    },
  });

  const onSubmit = async (data: FormInputs) => {
    console.log(data);
    navigate(routerLinks("customerInfomation"), {
      state: data,
    });
  };

  return (
    <BookingLayout
      key={1}
      no={1}
      type="process"
      name="Book a Table"
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
              className="h-14 !text-base"
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
              className="h-14 !text-base"
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
              className="h-14 !text-base"
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

export default BookATable;
