import { useLocation } from "react-router-dom";
import BookingLayout from "./components/BookingLayout";
import successImage from "assets/images/checkIcon.png";
import dayjs from "dayjs";
import { fPhoneNumber } from "utils/formatNumber";

const Reserved = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <BookingLayout no={4} type="done" name="Reserver">
      <div>
        <img className="w-[148px] mx-auto" src={successImage} alt="SUCCESS" />
        <div className="mt-4 text-primary text-8 font-semibold text-center sm:flex sm:justify-center sm:gap-1">
          <div> Successfully </div>
          <div>reserved your table!</div>
        </div>
        <div className="text-center flex items-center gap-2 justify-center mt-4">
          <p className="text-primary font-normal">Reservation ID</p>
          <span className="text-base text-primary font-medium text-red">EAT5363</span>
        </div>
        <div className="mt-4">
          <div className="flex">
            <div className="w-[50%]">
              <span className="grow text-secondary text-md font-normal">First name</span>
              <p className="text-primary font-medium text-base">{location.state?.firstName}</p>
            </div>
            <div className="ml-auto w-[calc(50%-16px)]">
              <span className="grow text-secondary text-md font-normal">Last name</span>
              <p className="text-primary font-medium text-base">{location.state?.lastName}</p>
            </div>
          </div>
          <div className="flex mt-4">
            {location.state?.email && (
              <div className="w-[50%]">
                <span className="grow text-secondary text-md font-normal">Email</span>
                <p className="text-primary font-medium text-base overflow-hidden text-ellipsis">
                  {location.state?.email}
                </p>
              </div>
            )}
            <div className="ml-auto w-[calc(50%-16px)]">
              <span className="grow text-secondary text-md font-normal">Phone number</span>
              <p className="text-primary font-medium text-base">
                {fPhoneNumber(location.state?.phoneNumber)}
              </p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-[50%]">
              <span className="grow text-secondary text-md font-normal">Date</span>
              <p className="ml-auto text-primary font-medium text-base">{`${location.state?.date.date} ${dayjs().year()}`}</p>
            </div>
            <div className="ml-auto w-[calc(50%-16px)]">
              <span className="grow text-secondary text-md font-normal">Time</span>
              <p className="ml-auto text-primary font-medium text-base">{location.state?.time}</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-[50%]">
              <span className="grow text-secondary text-md font-normal">Number of Guests</span>
              <p className="w-full ml-auto text-primary font-medium text-base">
                {location.state?.numberOfGuests}
              </p>
            </div>
            {location.state?.noteOrRequest && (
              <div className="ml-auto w-[calc(50%-16px)]">
                <span className="grow text-secondary text-md font-normal">Note or request</span>
                <p className="ml-auto text-primary font-medium text-base">
                  {location.state?.noteOrRequest}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </BookingLayout>
  );
};

export default Reserved;
