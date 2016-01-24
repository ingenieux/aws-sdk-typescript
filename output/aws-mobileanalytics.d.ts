// Type definitions for aws-sdk - Amazon Mobile Analytics
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-06-05
     * endpointPrefix: mobileanalytics
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class MobileAnalytics extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      putEvents(params: MobileAnalytics.PutEventsInput, callback?: (err: MobileAnalytics.BadRequestException|any, data: any) => void): Request;

    }

    export module MobileAnalytics {
        export type Double = number;
        export type EventListDefinition = Event[];
        export type ISO8601Timestamp = string;
        export type Long = number;
        export type MapOfStringToNumber = {[key:string]: Double};    // max: 50
        export type MapOfStringToString = {[key:string]: String0to1000Chars};    // max: 50
        export type String = string;
        export type String0to1000Chars = string;    // max: 1000
        export type String10Chars = string;    // max: 10, min: 1
        export type String50Chars = string;    // max: 50, min: 1

        export interface BadRequestException {
            message?: String;
        }
        export interface Event {
            eventType: String50Chars;
            timestamp: ISO8601Timestamp;
            session?: Session;
            version?: String10Chars;
            attributes?: MapOfStringToString;
            metrics?: MapOfStringToNumber;
        }
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

    }
}
