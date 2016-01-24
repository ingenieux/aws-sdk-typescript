// Type definitions for aws-sdk - AWS Security Token Service
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2011-06-15
     * endpointPrefix: sts
     * serviceAbbreviation: AWS STS
     * signatureVersion: v4
     * protocol: query
     */
    export class STS extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      assumeRole(params: STS.AssumeRoleRequest, callback?: (err: STS.MalformedPolicyDocumentException|STS.PackedPolicyTooLargeException|STS.RegionDisabledException|any, data: STS.AssumeRoleResponse|any) => void): Request;
      assumeRoleWithSAML(params: STS.AssumeRoleWithSAMLRequest, callback?: (err: STS.MalformedPolicyDocumentException|STS.PackedPolicyTooLargeException|STS.IDPRejectedClaimException|STS.InvalidIdentityTokenException|STS.ExpiredTokenException|STS.RegionDisabledException|any, data: STS.AssumeRoleWithSAMLResponse|any) => void): Request;
      assumeRoleWithWebIdentity(params: STS.AssumeRoleWithWebIdentityRequest, callback?: (err: STS.MalformedPolicyDocumentException|STS.PackedPolicyTooLargeException|STS.IDPRejectedClaimException|STS.IDPCommunicationErrorException|STS.InvalidIdentityTokenException|STS.ExpiredTokenException|STS.RegionDisabledException|any, data: STS.AssumeRoleWithWebIdentityResponse|any) => void): Request;
      decodeAuthorizationMessage(params: STS.DecodeAuthorizationMessageRequest, callback?: (err: STS.InvalidAuthorizationMessageException|any, data: STS.DecodeAuthorizationMessageResponse|any) => void): Request;
      getFederationToken(params: STS.GetFederationTokenRequest, callback?: (err: STS.MalformedPolicyDocumentException|STS.PackedPolicyTooLargeException|STS.RegionDisabledException|any, data: STS.GetFederationTokenResponse|any) => void): Request;
      getSessionToken(params: STS.GetSessionTokenRequest, callback?: (err: STS.RegionDisabledException|any, data: STS.GetSessionTokenResponse|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      credentialsFrom(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      assumeRoleWithWebIdentity(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      assumeRoleWithSAML(...args: any[]): any
    }

    export module STS {
        export type Audience = string;
        export type Issuer = string;
        export type NameQualifier = string;
        export type SAMLAssertionType = string;    // max: 50000, min: 4
        export type Subject = string;
        export type SubjectType = string;
        export type accessKeyIdType = string;    // pattern: &quot;[\w]*&quot;, max: 32, min: 16
        export type accessKeySecretType = string;
        export type arnType = string;    // max: 2048, min: 20
        export type assumedRoleIdType = string;    // pattern: &quot;[\w+=,.@:-]*&quot;, max: 96, min: 2
        export type clientTokenType = string;    // max: 2048, min: 4
        export type dateType = number;
        export type decodedMessageType = string;
        export type durationSecondsType = number;    // max: 129600, min: 900
        export type encodedMessageType = string;    // max: 10240, min: 1
        export type expiredIdentityTokenMessage = string;
        export type externalIdType = string;    // pattern: &quot;[\w+=,.@:\/-]*&quot;, max: 1224, min: 2
        export type federatedIdType = string;    // pattern: &quot;[\w+=,.@\:-]*&quot;, max: 96, min: 2
        export type idpCommunicationErrorMessage = string;
        export type idpRejectedClaimMessage = string;
        export type invalidAuthorizationMessage = string;
        export type invalidIdentityTokenMessage = string;
        export type malformedPolicyDocumentMessage = string;
        export type nonNegativeIntegerType = number;
        export type packedPolicyTooLargeMessage = string;
        export type regionDisabledMessage = string;
        export type roleDurationSecondsType = number;    // max: 3600, min: 900
        export type roleSessionNameType = string;    // pattern: &quot;[\w+=,.@-]*&quot;, max: 64, min: 2
        export type serialNumberType = string;    // pattern: &quot;[\w+=/:,.@-]*&quot;, max: 256, min: 9
        export type sessionPolicyDocumentType = string;    // pattern: &quot;[\u0009\u000A\u000D\u0020-\u00FF]+&quot;, max: 2048, min: 1
        export type tokenCodeType = string;    // pattern: &quot;[\d]*&quot;, max: 6, min: 6
        export type tokenType = string;
        export type urlType = string;    // max: 2048, min: 4
        export type userNameType = string;    // pattern: &quot;[\w+=,.@-]*&quot;, max: 32, min: 2
        export type webIdentitySubjectType = string;    // max: 255, min: 6

        export interface AssumeRoleRequest {
            RoleArn: arnType;
            RoleSessionName: roleSessionNameType;
            Policy?: sessionPolicyDocumentType;
            DurationSeconds?: roleDurationSecondsType;
            ExternalId?: externalIdType;
            SerialNumber?: serialNumberType;
            TokenCode?: tokenCodeType;
        }
        export interface AssumeRoleResponse {
            Credentials?: Credentials;
            AssumedRoleUser?: AssumedRoleUser;
            PackedPolicySize?: nonNegativeIntegerType;
        }
        export interface AssumeRoleWithSAMLRequest {
            RoleArn: arnType;
            PrincipalArn: arnType;
            SAMLAssertion: SAMLAssertionType;
            Policy?: sessionPolicyDocumentType;
            DurationSeconds?: roleDurationSecondsType;
        }
        export interface AssumeRoleWithSAMLResponse {
            Credentials?: Credentials;
            AssumedRoleUser?: AssumedRoleUser;
            PackedPolicySize?: nonNegativeIntegerType;
            Subject?: Subject;
            SubjectType?: SubjectType;
            Issuer?: Issuer;
            Audience?: Audience;
            NameQualifier?: NameQualifier;
        }
        export interface AssumeRoleWithWebIdentityRequest {
            RoleArn: arnType;
            RoleSessionName: roleSessionNameType;
            WebIdentityToken: clientTokenType;
            ProviderId?: urlType;
            Policy?: sessionPolicyDocumentType;
            DurationSeconds?: roleDurationSecondsType;
        }
        export interface AssumeRoleWithWebIdentityResponse {
            Credentials?: Credentials;
            SubjectFromWebIdentityToken?: webIdentitySubjectType;
            AssumedRoleUser?: AssumedRoleUser;
            PackedPolicySize?: nonNegativeIntegerType;
            Provider?: Issuer;
            Audience?: Audience;
        }
        export interface AssumedRoleUser {
            AssumedRoleId: assumedRoleIdType;
            Arn: arnType;
        }
        export interface Credentials {
            AccessKeyId: accessKeyIdType;
            SecretAccessKey: accessKeySecretType;
            SessionToken: tokenType;
            Expiration: dateType;
        }
        export interface DecodeAuthorizationMessageRequest {
            EncodedMessage: encodedMessageType;
        }
        export interface DecodeAuthorizationMessageResponse {
            DecodedMessage?: decodedMessageType;
        }
        export interface ExpiredTokenException {
            message?: expiredIdentityTokenMessage;
        }
        export interface FederatedUser {
            FederatedUserId: federatedIdType;
            Arn: arnType;
        }
        export interface GetFederationTokenRequest {
            Name: userNameType;
            Policy?: sessionPolicyDocumentType;
            DurationSeconds?: durationSecondsType;
        }
        export interface GetFederationTokenResponse {
            Credentials?: Credentials;
            FederatedUser?: FederatedUser;
            PackedPolicySize?: nonNegativeIntegerType;
        }
        export interface GetSessionTokenRequest {
            DurationSeconds?: durationSecondsType;
            SerialNumber?: serialNumberType;
            TokenCode?: tokenCodeType;
        }
        export interface GetSessionTokenResponse {
            Credentials?: Credentials;
        }
        export interface IDPCommunicationErrorException {
            message?: idpCommunicationErrorMessage;
        }
        export interface IDPRejectedClaimException {
            message?: idpRejectedClaimMessage;
        }
        export interface InvalidAuthorizationMessageException {
            message?: invalidAuthorizationMessage;
        }
        export interface InvalidIdentityTokenException {
            message?: invalidIdentityTokenMessage;
        }
        export interface MalformedPolicyDocumentException {
            message?: malformedPolicyDocumentMessage;
        }
        export interface PackedPolicyTooLargeException {
            message?: packedPolicyTooLargeMessage;
        }
        export interface RegionDisabledException {
            message?: regionDisabledMessage;
        }

    }
}
