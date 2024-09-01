import BookingLayout from "./components/BookingLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { routerLinks } from "routes";
import dayjs from "dayjs";
import { fPhoneNumber } from "utils/formatNumber";

const ReviewSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(routerLinks("customerInfomation"), {
      state: location.state,
    });
  };

  const handleContinue = () => {
    navigate(routerLinks("reservation"), {
      state: location.state,
    });
  };

  return (
    <BookingLayout
      no={3}
      type="confirm"
      name="Review Summary"
      isSubmingting={false}
      onBack={handleBack}
      onSubmit={handleContinue}
    >
      <div className="pt-6 border-t border-tertiary">
        <div className="mb-6">
          <div className="flex items-center">
            <span className="grow text-secondary text-md font-normal">First name</span>
            <p className="ml-auto text-primary font-medium text-base max-w-[60%]">
              {location.state?.firstName}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <span className="grow text-secondary text-md font-normal">Last name</span>
            <p className="ml-auto text-primary font-medium text-base max-w-[60%]">
              {location.state?.lastName}
            </p>
          </div>
          {location.state?.email && (
            <div className="flex items-center mt-4">
              <span className="grow text-secondary text-md font-normal">Email</span>
              <p className="ml-auto text-primary font-medium text-base max-w-[60%]">
                {location.state?.email}
              </p>
            </div>
          )}
          <div className="flex items-center mt-4">
            <span className="grow text-secondary text-md font-normal">Phone number</span>
            <p className="ml-auto text-primary font-medium text-base max-w-[60%]">
              {fPhoneNumber(location.state?.phoneNumber)}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <span className="grow text-secondary text-md font-normal">Booking date</span>
            <div className="flex items-center gap-2 max-w-[60%]">
              <p className="ml-auto text-primary font-medium text-base">
                {dayjs().format("DD MMM YYYY | hh:mm A")}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-tertiary">
          <div className="flex items-center">
            <span className="grow text-secondary text-md font-normal">Booking for</span>
            <div className="flex items-center gap-2 flex items-center gap-2">
              <p className="ml-auto text-primary font-medium text-base">{`${location.state?.date.date} ${dayjs().year()}`}</p>
              <div className="w-[1px] h-[16px] bg-[#1D2433]"></div>
              <p className="ml-auto text-primary font-medium text-base">{location.state?.time}</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="grow text-secondary text-md font-normal">Number of Guests</span>
            <div className="flex items-center gap-2">
              <p className="ml-auto text-primary font-medium text-base max-w-[60%]">
                {location.state?.numberOfGuests}
              </p>
            </div>
          </div>
          {location.state?.noteOrRequest && (
            <div className="flex mt-4">
              <span className="grow text-secondary text-md font-normal">Note or request</span>
              <p className="ml-auto text-primary font-medium text-base max-w-[60%]">
                {location.state?.noteOrRequest}
              </p>
            </div>
          )}
        </div>
      </div>
    </BookingLayout>
  );
};

export default ReviewSummary;
