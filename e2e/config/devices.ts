const formatDevicesToRegexp = (devices: DeviceTag[]): RegExp =>
  new RegExp(devices.join('|').replaceAll('[', '\\[').replaceAll(']', '\\]'));

export const ALL_DEVICES_TAG = '[All]' as const;
export const DESKTOP_DEVICES_TAG = '[Desktop]' as const;
export const TABLET_DEVICES_TAG = '[Tablet]' as const;
export const MOBILE_DEVICES_TAG = '[Mobile]' as const;

export const CHROME_DEVICE_TAG = '[Chrome]' as const;
export const CHROME_DEVICE_NAME = 'Chrome' as const;
export const CHROME_DEVICE_GREP = formatDevicesToRegexp([CHROME_DEVICE_TAG, DESKTOP_DEVICES_TAG, ALL_DEVICES_TAG]);

export const FIREFOX_DEVICE_TAG = '[Firefox]' as const;
export const FIREFOX_DEVICE_NAME = 'Firefox' as const;
export const FIREFOX_DEVICE_GREP = formatDevicesToRegexp([FIREFOX_DEVICE_TAG, DESKTOP_DEVICES_TAG, ALL_DEVICES_TAG]);

export const SAFARI_DEVICE_TAG = '[Safari]' as const;
export const SAFARI_DEVICE_NAME = 'Safari' as const;
export const SAFARI_DEVICE_GREP = formatDevicesToRegexp([SAFARI_DEVICE_TAG, DESKTOP_DEVICES_TAG, ALL_DEVICES_TAG]);

export const EDGE_DEVICE_TAG = '[Edge]' as const;
export const EDGE_DEVICE_NAME = 'Edge' as const;
export const EDGE_DEVICE_GREP = formatDevicesToRegexp([EDGE_DEVICE_TAG, DESKTOP_DEVICES_TAG, ALL_DEVICES_TAG]);

export const IOS_TABLET_DEVICE_TAG = '[iPad Pro 11]' as const;
export const IOS_TABLET_DEVICE_NAME = 'iPad Pro 11' as const;
export const IOS_TABLET_DEVICE_GREP = formatDevicesToRegexp([
  IOS_TABLET_DEVICE_TAG,
  TABLET_DEVICES_TAG,
  ALL_DEVICES_TAG,
]);

export const IOS_MOBILE_DEVICE_TAG = '[iPhone 13 Pro]' as const;
export const IOS_MOBILE_DEVICE_NAME = 'iPhone 13 Pro' as const;
export const IOS_MOBILE_DEVICE_GREP = formatDevicesToRegexp([
  IOS_MOBILE_DEVICE_TAG,
  MOBILE_DEVICES_TAG,
  ALL_DEVICES_TAG,
]);

export const ANDROID_TABLET_DEVICE_TAG = '[Samsung Galaxy Tab 10]' as const;
export const ANDROID_TABLET_DEVICE_NAME = 'Samsung Galaxy Tab 10' as const;
export const ANDROID_TABLET_DEVICE_GREP = formatDevicesToRegexp([
  ANDROID_TABLET_DEVICE_TAG,
  TABLET_DEVICES_TAG,
  ALL_DEVICES_TAG,
]);

export const ANDROID_MOBILE_DEVICE_TAG = '[Galaxy S21]' as const;
export const ANDROID_MOBILE_DEVICE_NAME = 'Galaxy S21' as const;
export const ANDROID_MOBILE_DEVICE_GREP = formatDevicesToRegexp([
  ANDROID_MOBILE_DEVICE_TAG,
  MOBILE_DEVICES_TAG,
  ALL_DEVICES_TAG,
]);

export type Device =
  | typeof CHROME_DEVICE_NAME
  | typeof FIREFOX_DEVICE_NAME
  | typeof SAFARI_DEVICE_NAME
  | typeof EDGE_DEVICE_NAME
  | typeof IOS_TABLET_DEVICE_NAME
  | typeof IOS_MOBILE_DEVICE_NAME
  | typeof ANDROID_TABLET_DEVICE_NAME
  | typeof ANDROID_MOBILE_DEVICE_NAME;

export type DeviceTag =
  | typeof ALL_DEVICES_TAG
  | typeof DESKTOP_DEVICES_TAG
  | typeof TABLET_DEVICES_TAG
  | typeof MOBILE_DEVICES_TAG
  | typeof CHROME_DEVICE_TAG
  | typeof FIREFOX_DEVICE_TAG
  | typeof SAFARI_DEVICE_TAG
  | typeof EDGE_DEVICE_TAG
  | typeof IOS_TABLET_DEVICE_TAG
  | typeof IOS_MOBILE_DEVICE_TAG
  | typeof ANDROID_TABLET_DEVICE_TAG
  | typeof ANDROID_MOBILE_DEVICE_TAG;

export const DESKTOP_DEVICES_LIST: Device[] = [
  CHROME_DEVICE_NAME,
  FIREFOX_DEVICE_NAME,
  SAFARI_DEVICE_NAME,
  EDGE_DEVICE_NAME,
];
export const TABLET_DEVICES_LIST: Device[] = [ANDROID_TABLET_DEVICE_NAME, IOS_TABLET_DEVICE_NAME];
export const MOBILE_DEVICES_LIST: Device[] = [ANDROID_MOBILE_DEVICE_NAME, IOS_MOBILE_DEVICE_NAME];
export const ALL_DEVICES_LIST: Device[] = [...DESKTOP_DEVICES_LIST, ...TABLET_DEVICES_LIST, ...MOBILE_DEVICES_LIST];
