import * as falso from '@ngneat/falso';
import { randomUUID } from 'crypto';
import { addDays, format, subDays } from 'date-fns';

export enum DateFormat {
  YearMonthDay = 'yyyy-MM-dd',
  YearMonthDayWithTime = 'yyyy-MM-dd HH:mm:ss',
  MonthDayYear = 'MMM dd, yyyy',
  StartOfDay = "yyyy-MM-dd'T'00:00:00",
  EndOfDay = "yyyy-MM-dd'T'23:59:59",
  MonthDay = 'MM-dd',
  YearMonthDayShort = 'yyyy-M-d',
}

export const generate = {
  uuid: (): string => {
    return randomUUID();
  },

  shortUuid: (): string => {
    return randomUUID().replaceAll('-', '').substring(0, 10);
  },

  number: ({ min = 0, max = 100 }: { min?: number; max?: number } = {}): number => {
    return falso.randNumber({ min, max });
  },

  dateFuture: ({ addMinDays = 30, addMaxDays = 600 }: { addMinDays?: number; addMaxDays?: number } = {}): string => {
    let date = new Date();
    date = addDays(date, falso.randNumber({ min: addMinDays, max: addMaxDays }));

    return format(date, DateFormat.YearMonthDay);
  },

  datePast: ({ subMinDays = 30, subMaxDays = 600 }: { subMinDays?: number; subMaxDays?: number } = {}): string => {
    let date = new Date();
    date = subDays(date, falso.randNumber({ min: subMinDays, max: subMaxDays }));

    return format(date, DateFormat.YearMonthDay);
  },

  firstName: (): string => {
    return falso.randFirstName();
  },

  lastName: (): string => {
    return falso.randLastName();
  },

  fullName: ({ firstName, lastName }: { firstName?: string; lastName?: string } = {}): string => {
    firstName ??= generate.firstName();
    lastName ??= generate.lastName();

    return `${firstName} ${lastName}`;
  },
};
