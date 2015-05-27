// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class STS {
      constructor(options?: any);
      assumeRole(params: AssumeRoleRequest, callback: (err: MalformedPolicyDocumentException|PackedPolicyTooLargeException|any, data: AssumeRoleResponse|any) => void): void;
      assumeRoleWithSAML(params: AssumeRoleWithSAMLRequest, callback: (err: MalformedPolicyDocumentException|PackedPolicyTooLargeException|IDPRejectedClaimException|InvalidIdentityTokenException|ExpiredTokenException|any, data: AssumeRoleWithSAMLResponse|any) => void): void;
      assumeRoleWithWebIdentity(params: AssumeRoleWithWebIdentityRequest, callback: (err: MalformedPolicyDocumentException|PackedPolicyTooLargeException|IDPRejectedClaimException|IDPCommunicationErrorException|InvalidIdentityTokenException|ExpiredTokenException|any, data: AssumeRoleWithWebIdentityResponse|any) => void): void;
      decodeAuthorizationMessage(params: DecodeAuthorizationMessageRequest, callback: (err: InvalidAuthorizationMessageException|any, data: DecodeAuthorizationMessageResponse|any) => void): void;
      getFederationToken(params: GetFederationTokenRequest, callback: (err: MalformedPolicyDocumentException|PackedPolicyTooLargeException|any, data: GetFederationTokenResponse|any) => void): void;
      getSessionToken(params: GetSessionTokenRequest, callback: (err: any, data: GetSessionTokenResponse|any) => void): void;
    }

    export interface AssumeRoleRequest {
      RoleArn: arnType;
      RoleSessionName: userNameType;
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
      DurationSeconds?: durationSecondsType;
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
      RoleSessionName: userNameType;
      WebIdentityToken: clientTokenType;
      ProviderId?: urlType;
      Policy?: sessionPolicyDocumentType;
      DurationSeconds?: durationSecondsType;
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


    export type Audience = string;

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


    export type Issuer = string;

    export interface MalformedPolicyDocumentException {
      message?: malformedPolicyDocumentMessage;
    }


    export type NameQualifier = string;

    export interface PackedPolicyTooLargeException {
      message?: packedPolicyTooLargeMessage;
    }


    export type SAMLAssertionType = string;

    export type Subject = string;

    export type SubjectType = string;

    export type accessKeyIdType = string; // pattern: "[\w]*"

    export type accessKeySecretType = string;

    export type arnType = string;

    export type assumedRoleIdType = string; // pattern: "[\w+=,.@:-]*"

    export type clientTokenType = string;

    export type dateType = number;

    export type decodedMessageType = string;

    export type durationSecondsType = number;

    export type encodedMessageType = string;

    export type expiredIdentityTokenMessage = string;

    export type externalIdType = string; // pattern: "[\w+=,.@:\/-]*"

    export type federatedIdType = string; // pattern: "[\w+=,.@\:-]*"

    export type idpCommunicationErrorMessage = string;

    export type idpRejectedClaimMessage = string;

    export type invalidAuthorizationMessage = string;

    export type invalidIdentityTokenMessage = string;

    export type malformedPolicyDocumentMessage = string;

    export type nonNegativeIntegerType = number;

    export type packedPolicyTooLargeMessage = string;

    export type roleDurationSecondsType = number;

    export type serialNumberType = string; // pattern: "[\w+=/:,.@-]*"

    export type sessionPolicyDocumentType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"

    export type tokenCodeType = string; // pattern: "[\d]*"

    export type tokenType = string;

    export type urlType = string;

    export type userNameType = string; // pattern: "[\w+=,.@-]*"

    export type webIdentitySubjectType = string;

}
