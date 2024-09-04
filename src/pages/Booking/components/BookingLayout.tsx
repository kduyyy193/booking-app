import ArrowIcon from "assets/icons/ArrowIcon";
import Button from "components/Button";
import Page from "components/Page";
import { useCallback } from "react";
import cn from "utils/cn";

export const BOOKING_STEPS = [
  {
    no: 1,
    id: "bookATable",
    text: "Book a Table",
    type: "process",
  },
  {
    no: 2,
    id: "customerInfomation",
    text: "Customer Infomation",
    type: "process",
  },
  {
    no: 3,
    id: "reviewSummary",
    text: "Review Summary",
    type: "confirm",
  },
  {
    no: 4,
    id: "reserved",
    text: "reserved",
    type: "done",
  },
];

interface IProps {
  no: number;
  name: string;
  type: "process" | "confirm" | "done";
  isSubmingting?: boolean;
  onBack?: () => void;
  onSubmit?: () => void;
  children: JSX.Element;
}

const BookingLayout = ({ no, name, type, isSubmingting, children, onSubmit, onBack }: IProps) => {
  const getTextByStep = useCallback(() => {
    if (type === "done") return "My Reservation";
    if (type === "confirm") return "Confirm reservation";
    return "Continue";
  }, [type]);

  return (
    <Page title="EatRight - Booking">
      <div className="px-4 bg-[#fafafa] min-h-screen">
        <div className="pt-12">
          <div className="flex items-center none-print cursor-pointer flex-1">
            {(type === "process" || type === "confirm") && (
              <>
                <div className="flex items-center mr-2" onClick={onBack}>
                  <div className={cn("p-1 bg-white rounded-full")}>
                    <ArrowIcon />
                  </div>
                  <div className="text-lg font-semibold text-primary ml-1 flex-1">{name}</div>
                </div>
                <div className="flex items-center ml-auto">
                  {BOOKING_STEPS.map((step, idx) => {
                    if (step.type === "done") return null;
                    return (
                      <div key={idx} className="relative flex items-center ml-3">
                        <div
                          className={cn(
                            "w-3 h-3 rounded-full",
                            no >= step.no && "bg-primary",
                            no < step.no && "bg-tertiary"
                          )}
                        ></div>
                        {idx < 2 && (
                          <div
                            className={"w-6 h-1 absolute z-0 left-1.5"}
                            style={{
                              background:
                                step.no > no
                                  ? "#FFF2F0"
                                  : step.no < no
                                    ? "#FF3B42"
                                    : "linear-gradient(270deg, #FFF2F0 27.08%, #FF3B42 100%)",
                            }}
                          ></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="mt-6 pb-24">
            {children}
            <div className="fixed bottom-0 left-0">
              <div className="w-screen bg-white h-24 shadow-[0px_-4px_8px_0px_#0000000A] px-4">
                <Button
                  onClick={onSubmit}
                  type="submit"
                  className="mt-3 py-3 rounded-3 w-full font-semibold text-lg"
                >
                  {isSubmingting ? "Loading..." : getTextByStep()}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default BookingLayout;
