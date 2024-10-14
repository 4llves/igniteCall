import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from "./styles";
import { getWeekDays } from "@/utils/get-week-days";

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true });

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Outubro <span>2024</span>
        </CalendarTitle>

        <CalendarActions>
          <button type="button">
            <ArrowBigLeft />
          </button>

          <button type="button">
            <ArrowBigRight />
          </button>
        </CalendarActions>

        <CalendarBody>
          <thead>
            <tr>
              {shortWeekDays.map((weekDay) => (
                <th key={weekDay}>{weekDay}.</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td>
                <CalendarDay>1</CalendarDay>
              </td>
              <td>
                <CalendarDay>2</CalendarDay>
              </td>
              <td>
                <CalendarDay>3</CalendarDay>
              </td>
              <td>
                <CalendarDay>4</CalendarDay>
              </td>
              <td>
                <CalendarDay>5</CalendarDay>
              </td>
            </tr>
          </tbody>
        </CalendarBody>
      </CalendarHeader>
    </CalendarContainer>
  );
}
