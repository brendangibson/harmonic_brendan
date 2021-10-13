import I18nStrings from "./en_US";

// Very simple I18n implementation for all the text strings
// TODO: Use a service

export const t = (key: keyof typeof I18nStrings): string => {
  return I18nStrings[key];
};
