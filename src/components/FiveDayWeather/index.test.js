import { checkProps } from "../../utils";

import FiveDayWeather from "./index";

describe("FiveDayWeather Component", () => {
  describe("Checking PropTypes", () => {
    it("lct - location: Should NOT throw a warning", () => {
      const expectedProps = {
        name: "hanoi",
        country: "vietnam",
      };
      const propsError = checkProps(FiveDayWeather, expectedProps);
      expect(propsError).toBeUndefined();
    });
    it("fd - forecastday: Should NOT throw a warning", () => {
      const expectedProps = [
        {
          date_epoch: "1234567",
          date: "201206",
          maxtemp_c: "20",
          mintemp_c: "12",
        },
        {
          date_epoch: "1234568",
          date: "201205",
          maxtemp_c: "18",
          mintemp_c: "10",
        },
        {
          date_epoch: "1234569",
          date: "201204",
          maxtemp_c: "21",
          mintemp_c: "20",
        },
      ];
      const propsError = checkProps(FiveDayWeather, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
