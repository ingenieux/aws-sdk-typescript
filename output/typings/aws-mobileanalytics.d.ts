// Type definitions for aws-sdk - Amazon Mobile Analytics
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2014-06-05
    * endpointPrefix: mobileanalytics
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: rest-json
    *
    * Amazon Mobile Analytics is a service for collecting, visualizing, and
 understanding app usage data at scale.
    *
    */
  export class MobileAnalytics extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * The PutEvents operation records one or more events. You can have up to 1,500
unique custom events per app, any combination of up to 40 attributes and metrics
per custom event, and any number of attribute or metric values.
     *
     * @error BadRequestException An exception object returned when a request fails.  
     */
    putEvents(params: MobileAnalytics.PutEventsInput, callback?: (err: MobileAnalytics.BadRequestException | any, data: any) => void): Request<any, MobileAnalytics.BadRequestException | any>;

  }

  export module MobileAnalytics {

    export type Double = number;

    export type EventListDefinition = Event[];

    export type ISO8601Timestamp = string;

    export type Long = number;

    export type MapOfStringToNumber = { [key: string]: Double };

    export type MapOfStringToString = { [key: string]: String0to1000Chars };

    export type String = string;

    export type String0to1000Chars = string;

    export type String10Chars = string;

    export type String50Chars = string;

    export interface BadRequestException {
      /** A text description associated with the BadRequestException object. **/
      message?: String;
    }
    export interface Event {
      /** A name signifying an event that occurred in your app. This is used for grouping
and aggregating like events together for reporting purposes. **/
      eventType: String50Chars;
      /** The time the event occurred in ISO 8601 standard date time format. For example,
2014-06-30T19:07:47.885Z **/
      timestamp: ISO8601Timestamp;
      /** The session the event occured within. **/
      session?: Session;
      /** The version of the event. **/
      version?: String10Chars;
      /** A collection of key-value pairs that give additional context to the event. The
key-value pairs are specified by the developer.

This collection can be empty or the attribute object can be omitted. **/
      attributes?: MapOfStringToString;
      /** A collection of key-value pairs that gives additional, measurable context to the
event. The key-value pairs are specified by the developer.

This collection can be empty or the attribute object can be omitted. **/
      metrics?: MapOfStringToNumber;
    }
    export interface PutEventsInput {
      /** An array of Event JSON objects **/
      events: EventListDefinition;
      /** The client context including the client ID, app title, app version and package
name. **/
      clientContext: String;
      /** The encoding used for the client context. **/
      clientContextEncoding?: String;
    }
    export interface Session {
      /** A unique identifier for the session **/
      id?: String50Chars;
      /** The duration of the session. **/
      duration?: Long;
      /** The time the event started in ISO 8601 standard date time format. For example,
2014-06-30T19:07:47.885Z **/
      startTimestamp?: ISO8601Timestamp;
      /** The time the event terminated in ISO 8601 standard date time format. For
example, 2014-06-30T19:07:47.885Z **/
      stopTimestamp?: ISO8601Timestamp;
    }
  }
}
