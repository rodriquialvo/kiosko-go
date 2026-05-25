import React from "react";
import { render } from "@testing-library/react-native";
import Text from "./Text";

jest.mock("@/constants/typography", () => ({
  __esModule: true,
  default: {
    fontFamily: {
      Montserrat_400: "Montserrat_400Regular",
      Montserrat_500: "Montserrat_500Medium",
      Montserrat_600: "Montserrat_600SemiBold",
      Montserrat_700: "Montserrat_700Bold",
      Montserrat_800: "Montserrat_800ExtraBold",
    },
    fontSize: {
      xl_small_10: 10,
      x_small_12: 12,
      small_14: 14,
      regular_16: 16,
      x_regular_18: 18,
      xl_regular_20: 20,
      large_24: 24,
      extraLarge_28: 28,
      extraExtraLarge_40: 40,
    },
  },
}));

describe("Text Component", () => {
  it("should render the text children correctly", () => {
    const { getByText } = render(
      <Text weight={400} size={10}>
        Sample Text
      </Text>,
    );
    expect(getByText("Sample Text")).toBeTruthy();
  });

  it("should apply the correct font family for weight 400", () => {
    const { getByText } = render(
      <Text weight={400} size={10}>
        Text with Weight 400
      </Text>,
    );
    const textElement = getByText("Text with Weight 400");
    expect(textElement.props.style[1].fontFamily).toBe("Montserrat_400Regular");
  });

  it("should apply the correct font size for size 16", () => {
    const { getByText } = render(
      <Text weight={400} size={16}>
        Text with Size 16
      </Text>,
    );
    const textElement = getByText("Text with Size 16");
    expect(textElement.props.style[1].fontSize).toBe(14.4);
  });

  it("should apply the correct line height", () => {
    const { getByText } = render(
      <Text weight={400} size={10}>
        Text with Line Height
      </Text>,
    );
    const textElement = getByText("Text with Line Height");
    expect(textElement.props.style[1].lineHeight).toBe(14);
  });

  it("should apply custom styles passed via props", () => {
    const customStyle = {
      color: "#1C1C1C",
    };
    const { getByText } = render(
      <Text weight={400} size={10} style={customStyle}>
        Text with Custom Style
      </Text>,
    );
    const textElement = getByText("Text with Custom Style");
    expect(textElement.props.style[2]).toEqual(customStyle);
  });
});
