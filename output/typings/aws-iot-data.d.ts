// Type definitions for aws-sdk - AWS IoT Data Plane
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-05-28
     * endpointPrefix: data.iot
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: rest-json
     */
    export class IotData extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      deleteThingShadow(params: IotData.DeleteThingShadowRequest, callback?: (err: IotData.ResourceNotFoundException|IotData.InvalidRequestException|IotData.ThrottlingException|IotData.UnauthorizedException|IotData.ServiceUnavailableException|IotData.InternalFailureException|IotData.MethodNotAllowedException|IotData.UnsupportedDocumentEncodingException|any, data: IotData.DeleteThingShadowResponse|any) => void): Request;
      getThingShadow(params: IotData.GetThingShadowRequest, callback?: (err: IotData.InvalidRequestException|IotData.ResourceNotFoundException|IotData.ThrottlingException|IotData.UnauthorizedException|IotData.ServiceUnavailableException|IotData.InternalFailureException|IotData.MethodNotAllowedException|IotData.UnsupportedDocumentEncodingException|any, data: IotData.GetThingShadowResponse|any) => void): Request;
      publish(params: IotData.PublishRequest, callback?: (err: IotData.InternalFailureException|IotData.InvalidRequestException|IotData.UnauthorizedException|IotData.MethodNotAllowedException|any, data: any) => void): Request;
      updateThingShadow(params: IotData.UpdateThingShadowRequest, callback?: (err: IotData.ConflictException|IotData.RequestEntityTooLargeException|IotData.InvalidRequestException|IotData.ThrottlingException|IotData.UnauthorizedException|IotData.ServiceUnavailableException|IotData.InternalFailureException|IotData.MethodNotAllowedException|IotData.UnsupportedDocumentEncodingException|any, data: IotData.UpdateThingShadowResponse|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      validateService(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      setupRequestListeners(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      validateResponseBody(...args: any[]): any
    }

    export module IotData {
        export type ErrorMessage = string;
        export type JsonDocument = any;    // type: blob
        export type Payload = any;    // type: blob
        export type Qos = number;    // max: 1
        export type ThingName = string;    // pattern: &quot;[a-zA-Z0-9_-]+&quot;, max: 128, min: 1
        export type Topic = string;
        export type errorMessage = string;

        export interface ConflictException {
            message?: ErrorMessage;
        }
        export interface DeleteThingShadowRequest {
            thingName: ThingName;
        }
        export interface DeleteThingShadowResponse {
            payload: JsonDocument;
        }
        export interface GetThingShadowRequest {
            thingName: ThingName;
        }
        export interface GetThingShadowResponse {
            payload?: JsonDocument;
        }
        export interface InternalFailureException {
            message?: errorMessage;
        }
        export interface InvalidRequestException {
            message?: errorMessage;
        }
        export interface MethodNotAllowedException {
            message?: ErrorMessage;
        }
        export interface PublishRequest {
            topic: Topic;
            qos?: Qos;
            payload?: Payload;
        }
        export interface RequestEntityTooLargeException {
            message?: ErrorMessage;
        }
        export interface ResourceNotFoundException {
            message?: errorMessage;
        }
        export interface ServiceUnavailableException {
            message?: errorMessage;
        }
        export interface ThrottlingException {
            message?: errorMessage;
        }
        export interface UnauthorizedException {
            message?: errorMessage;
        }
        export interface UnsupportedDocumentEncodingException {
            message?: errorMessage;
        }
        export interface UpdateThingShadowRequest {
            thingName: ThingName;
            payload: JsonDocument;
        }
        export interface UpdateThingShadowResponse {
            payload?: JsonDocument;
        }

    }
}
