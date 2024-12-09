import { DefaultModel } from '.';
import { DateFormat, Default, Language, TimeZone } from '../enums/preference.enum';

export interface Preference extends DefaultModel {
  language: Language,
  timeZone: TimeZone,
  dateFormat: DateFormat,
  default: Default
}