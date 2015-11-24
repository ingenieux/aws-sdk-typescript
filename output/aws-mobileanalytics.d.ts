// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class MobileAnalytics {
      constructor(options?: any);
      putEvents(params: MobileAnalyticsPutEventsInput, callback: (err: MobileAnalyticsBadRequestException|any, data: any) => void): void;
    }

    export interface MobileAnalyticsBadRequestException {
        message?: MobileAnalyticsString;
    }

    export type MobileAnalyticsDouble = number;
    export interface MobileAnalyticsEvent {
        eventType: MobileAnalyticsString50Chars;
        timestamp: MobileAnalyticsISO8601Timestamp;
        session?: MobileAnalyticsSession;
        version?: MobileAnalyticsString10Chars;
        attributes?: MobileAnalyticsMapOfStringToString;
        metrics?: MobileAnalyticsMapOfStringToNumber;
    }

    export type MobileAnalyticsEventListDefinition = Array<MobileAnalyticsEvent>;
    export type MobileAnalyticsISO8601Timestamp = string;
    export type MobileAnalyticsLong = number;
    export type MobileAnalyticsMapOfStringToNumber = any; // not really - it was 'map' instead - must fix this one
    export type MobileAnalyticsMapOfStringToString = any; // not really - it was 'map' instead - must fix this one
    export interface MobileAnalyticsPutEventsInput {
        events: MobileAnalyticsEventListDefinition;
        clientContext: MobileAnalyticsString;
        clientContextEncoding?: MobileAnalyticsString;
    }

    export interface MobileAnalyticsSession {
        id?: MobileAnalyticsString50Chars;
        duration?: MobileAnalyticsLong;
        startTimestamp?: MobileAnalyticsISO8601Timestamp;
        stopTimestamp?: MobileAnalyticsISO8601Timestamp;
    }

    export type MobileAnalyticsString = string;
    export type MobileAnalyticsString0to1000Chars = string;
    export type MobileAnalyticsString10Chars = string;
    export type MobileAnalyticsString50Chars = string;
}
