import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  borderRadius: 4,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
}

export const viewPresets = {
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.grey,
  } as ViewStyle,
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: 11,
    color: color.palette.white,
  } as TextStyle,
  secondary: {
    ...BASE_TEXT,
    fontSize: 11,
    color: color.palette.white,
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
}

export type ButtonPresetNames = keyof typeof viewPresets
