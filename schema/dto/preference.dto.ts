import { DateFormat, Default, Language, TimeZone } from '../enums/preference.enum';

export type CreatePreferenceDTO = {
  language: Language,
  timeZone: TimeZone,
  dateFormat: DateFormat,
  default: Default
};

// export type EditPreferenceDTO = Partial<{
//   language: Language,
//   timeZone: TimeZone,
//   dateFormat: DateFormat,
//   default: Default
// }>;

export type EditPreferenceDTO = Partial<{
  language: string,
  timeZone: string,
  dateFormat: string,
  default: string,
}>;
