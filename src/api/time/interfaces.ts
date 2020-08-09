export interface ApiResponse {
  /**
   * Status of the API query. Either OK or FAILED.
   */
  status: string;
  /**
   * Error message. Empty if no error.
   */
  message: string;
  /**
   * Country code of the time zone.
   */
  countryCode: string;
  /**
   * Country name of the time zone.
   */
  countryName: string;
  /**
   * Region / State name of the time zone.
   */
  regionName?: string;
  /**
   * City / Place name of the time zone.
   */
  cityName?: string;
  /**
   * The time zone name.
   */
  zoneName: string;
  /**
   * Abbreviation of the time zone.
   */
  abbreviation: string;
  /**
   * The time offset in seconds based on UTC time.
   */
  gmtOffset: number;
  /**
   * Daylight Saving Time (DST) is used. Either 0 (No) or 1 (Yes).
   */
  dst: 1 | 0;
  /**
   * The Unix time in UTC when current time zone start.
   */
  zoneStart: number;
  /**
   * The Unix time in UTC when current time zone end.
   */
  zoneEnd: number;
  /**
   * Current local time in Unix time. Minus the value with gmtOffset to get UTC time.
   */
  timestamp: number;
  /**
   * Formatted timestamp in Y-m-d h:i:s format. E.g.: 2020-08-08 08:20:31
   */
  formatted: string;
  /**
   * The total page of result when exceed 25 records.
   */
  totalPage?: number;
  /**
   * Current page when navigating.
   */
  currentPage?: number;
}
