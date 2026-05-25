/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NotificationToast {
  id: string;
  message: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface EventCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
