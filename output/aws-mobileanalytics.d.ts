// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class MobileAnalytics {
      constructor(options?: any);
      putEvents(params: PutEventsInput, callback: (err: BadRequestException|any, data: any) => void): void;
    }

    export interface BadRequestException {
      message?: String;
    }


    export type Double = number;

    export interface Event {
      eventType: String50Chars;
      timestamp: ISO8601Timestamp;
      session?: Session;
      version?: String10Chars;
      attributes?: MapOfStringToString;
      metrics?: MapOfStringToNumber;
    }


    export type EventListDefinition = Array<Event>;

    export type ISO8601Timestamp = string;

    export type Long = number;

    export type MapOfStringToNumber = any; // not really - it was 'map' instead - must fix this one

    export type MapOfStringToString = any; // not really - it was 'map' instead - must fix this one

    export interface PutEventsInput {
      events: EventListDefinition;
      clientContext: String;
      clientContextEncoding?: String;
    }


    export interface Session {
      id?: String50Chars;
      duration?: Long;
      startTimestamp?: ISO8601Timestamp;
      stopTimestamp?: ISO8601Timestamp;
    }


    export type String = string;

    export type String0to1000Chars = string;

    export type String10Chars = string;

    export type String50Chars = string;

}
