// Type definitions for aws-sdk - AWS IoT Data Plane
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-05-28
    * endpointPrefix: data.iot
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: rest-json
    *
    * AWS IoT AWS IoT-Data enables secure, bi-directional communication between
 Internet-connected things (such as sensors, actuators, embedded devices, or
 smart appliances) and the AWS cloud. It implements a broker for applications and
 things to publish messages over HTTP (Publish) and retrieve, update, and delete
 thing shadows. A thing shadow is a persistent representation of your things and
 their state in the AWS cloud.
    *
    */
  export class IotData extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Deletes the thing shadow for the specified thing.

For more information, see DeleteThingShadow
[http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html] 
in the AWS IoT Developer Guide.
     *
     * @error ResourceNotFoundException   
     * @error InvalidRequestException   
     * @error ThrottlingException   
     * @error UnauthorizedException   
     * @error ServiceUnavailableException   
     * @error InternalFailureException   
     * @error MethodNotAllowedException   
     * @error UnsupportedDocumentEncodingException   
     */
    deleteThingShadow(params: IotData.DeleteThingShadowRequest, callback?: (err: IotData.ResourceNotFoundException | IotData.InvalidRequestException | IotData.ThrottlingException | IotData.UnauthorizedException | IotData.ServiceUnavailableException | IotData.InternalFailureException | IotData.MethodNotAllowedException | IotData.UnsupportedDocumentEncodingException | any, data: IotData.DeleteThingShadowResponse | any) => void): Request<IotData.DeleteThingShadowResponse | any, IotData.ResourceNotFoundException | IotData.InvalidRequestException | IotData.ThrottlingException | IotData.UnauthorizedException | IotData.ServiceUnavailableException | IotData.InternalFailureException | IotData.MethodNotAllowedException | IotData.UnsupportedDocumentEncodingException | any>;
    /**
     * Gets the thing shadow for the specified thing.

For more information, see GetThingShadow
[http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html] 
in the AWS IoT Developer Guide.
     *
     * @error InvalidRequestException   
     * @error ResourceNotFoundException   
     * @error ThrottlingException   
     * @error UnauthorizedException   
     * @error ServiceUnavailableException   
     * @error InternalFailureException   
     * @error MethodNotAllowedException   
     * @error UnsupportedDocumentEncodingException   
     */
    getThingShadow(params: IotData.GetThingShadowRequest, callback?: (err: IotData.InvalidRequestException | IotData.ResourceNotFoundException | IotData.ThrottlingException | IotData.UnauthorizedException | IotData.ServiceUnavailableException | IotData.InternalFailureException | IotData.MethodNotAllowedException | IotData.UnsupportedDocumentEncodingException | any, data: IotData.GetThingShadowResponse | any) => void): Request<IotData.GetThingShadowResponse | any, IotData.InvalidRequestException | IotData.ResourceNotFoundException | IotData.ThrottlingException | IotData.UnauthorizedException | IotData.ServiceUnavailableException | IotData.InternalFailureException | IotData.MethodNotAllowedException | IotData.UnsupportedDocumentEncodingException | any>;
    /**
     * Publishes state information.

For more information, see HTTP Protocol
[http://docs.aws.amazon.com/iot/latest/developerguide/protocols.html#http] in
the AWS IoT Developer Guide.
     *
     * @error InternalFailureException   
     * @error InvalidRequestException   
     * @error UnauthorizedException   
     * @error MethodNotAllowedException   
     */
    publish(params: IotData.PublishRequest, callback?: (err: IotData.InternalFailureException | IotData.InvalidRequestException | IotData.UnauthorizedException | IotData.MethodNotAllowedException | any, data: any) => void): Request<any, IotData.InternalFailureException | IotData.InvalidRequestException | IotData.UnauthorizedException | IotData.MethodNotAllowedException | any>;
    /**
     * Updates the thing shadow for the specified thing.

For more information, see UpdateThingShadow
[http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html] 
in the AWS IoT Developer Guide.
     *
     * @error ConflictException   
     * @error RequestEntityTooLargeException   
     * @error InvalidRequestException   
     * @error ThrottlingException   
     * @error UnauthorizedException   
     * @error ServiceUnavailableException   
     * @error InternalFailureException   
     * @error MethodNotAllowedException   
     * @error UnsupportedDocumentEncodingException   
     */
    updateThingShadow(params: IotData.UpdateThingShadowRequest, callback?: (err: IotData.ConflictException | IotData.RequestEntityTooLargeException | IotData.InvalidRequestException | IotData.ThrottlingException | IotData.UnauthorizedException | IotData.ServiceUnavailableException | IotData.InternalFailureException | IotData.MethodNotAllowedException | IotData.UnsupportedDocumentEncodingException | any, data: IotData.UpdateThingShadowResponse | any) => void): Request<IotData.UpdateThingShadowResponse | any, IotData.ConflictException | IotData.RequestEntityTooLargeException | IotData.InvalidRequestException | IotData.ThrottlingException | IotData.UnauthorizedException | IotData.ServiceUnavailableException | IotData.InternalFailureException | IotData.MethodNotAllowedException | IotData.UnsupportedDocumentEncodingException | any>;

  }

  export module IotData {

    export type ErrorMessage = string;

    export type JsonDocument = any;

    export type Payload = any;

    export type Qos = number;

    export type ThingName = string;

    export type Topic = string;

    export type errorMessage = string;

    export interface ConflictException {
      /** The message for the exception. **/
      message?: ErrorMessage;
    }
    export interface DeleteThingShadowRequest {
      /** The name of the thing. **/
      thingName: ThingName;
    }
    export interface DeleteThingShadowResponse {
      /** The state information, in JSON format. **/
      payload: JsonDocument;
    }
    export interface GetThingShadowRequest {
      /** The name of the thing. **/
      thingName: ThingName;
    }
    export interface GetThingShadowResponse {
      /** The state information, in JSON format. **/
      payload?: JsonDocument;
    }
    export interface InternalFailureException {
      /** The message for the exception. **/
      message?: errorMessage;
    }
    export interface InvalidRequestException {
      /** The message for the exception. **/
      message?: errorMessage;
    }
    export interface MethodNotAllowedException {
      /** The message for the exception. **/
      message?: ErrorMessage;
    }
    export interface PublishRequest {
      /** The name of the MQTT topic. **/
      topic: Topic;
      /** The Quality of Service (QoS) level. **/
      qos?: Qos;
      /** The state information, in JSON format. **/
      payload?: Payload;
    }
    export interface RequestEntityTooLargeException {
      /** The message for the exception. **/
      message?: ErrorMessage;
    }
    export interface ResourceNotFoundException {
      /** The message for the exception. **/
      message?: errorMessage;
    }
    export interface ServiceUnavailableException {
      /** The message for the exception. **/
      message?: errorMessage;
    }
    export interface ThrottlingException {
      /** The message for the exception. **/
      message?: errorMessage;
    }
    export interface UnauthorizedException {
      /** The message for the exception. **/
      message?: errorMessage;
    }
    export interface UnsupportedDocumentEncodingException {
      /** The message for the exception. **/
      message?: errorMessage;
    }
    export interface UpdateThingShadowRequest {
      /** The name of the thing. **/
      thingName: ThingName;
      /** The state information, in JSON format. **/
      payload: JsonDocument;
    }
    export interface UpdateThingShadowResponse {
      /** The state information, in JSON format. **/
      payload?: JsonDocument;
    }
  }
}
