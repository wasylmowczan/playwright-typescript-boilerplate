import test from '@playwright/test';
import { format } from 'date-fns';
import { inspect } from 'util';
import winston from 'winston';
import { Device } from '../config/devices';

let logger: winston.Logger;

export const initLogger = ({ debugMode = false }: { debugMode?: boolean } = {}): void => {
  logger = winston.createLogger({
    format: winston.format.printf(
      ({ message }) => `[${format(new Date(), 'HH:mm:ss:S')}]: ${inspect(message, false, null, true)}`,
    ),
    transports: debugMode
      ? [new winston.transports.Console({ level: 'debug' })]
      : [new winston.transports.Console({ level: 'info' })],
  });
};

export const log = (content: unknown): void => {
  logger.debug(content);
};

export const info = (content: unknown): void => {
  logger.info(content);
};

export const sleep = async (ms: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Executes operation in the try-catch loop until function executes successfully timeout is reached.
 *
 * @example
 * tryFor(
 *   () => finder.elementsCss() as Promise<[]>,
 *   timeout = 30000,
 *   interval = 500
 * )
 */

export const tryFor = async <T>(operation: () => Promise<T>, timeout: number, interval: number): Promise<T> => {
  const start = performance.now();
  let error;

  while (performance.now() - start < timeout) {
    try {
      return await operation();
    } catch (err) {
      error = err;
      await sleep(interval);
    }
  }
  info(error);
  throw error;
};

export const doOnlyOnDevices = (devices: Device[]): boolean => {
  return Boolean(devices.find((device) => test.info().project.name.includes(device))?.length);
};
