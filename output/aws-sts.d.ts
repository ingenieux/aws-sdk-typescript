// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {

    export class STS extends Service {
      constructor(options?: any);
      assumeRole(params: STSAssumeRoleRequest, callback?: (err: STSMalformedPolicyDocumentException|STSPackedPolicyTooLargeException|any, data: STSAssumeRoleResponse|any) => void): Request;
      assumeRoleWithSAML(params: STSAssumeRoleWithSAMLRequest, callback?: (err: STSMalformedPolicyDocumentException|STSPackedPolicyTooLargeException|STSIDPRejectedClaimException|STSInvalidIdentityTokenException|STSExpiredTokenException|any, data: STSAssumeRoleWithSAMLResponse|any) => void): Request;
      assumeRoleWithWebIdentity(params: STSAssumeRoleWithWebIdentityRequest, callback?: (err: STSMalformedPolicyDocumentException|STSPackedPolicyTooLargeException|STSIDPRejectedClaimException|STSIDPCommunicationErrorException|STSInvalidIdentityTokenException|STSExpiredTokenException|any, data: STSAssumeRoleWithWebIdentityResponse|any) => void): Request;
      decodeAuthorizationMessage(params: STSDecodeAuthorizationMessageRequest, callback?: (err: STSInvalidAuthorizationMessageException|any, data: STSDecodeAuthorizationMessageResponse|any) => void): Request;
      getFederationToken(params: STSGetFederationTokenRequest, callback?: (err: STSMalformedPolicyDocumentException|STSPackedPolicyTooLargeException|any, data: STSGetFederationTokenResponse|any) => void): Request;
      getSessionToken(params: STSGetSessionTokenRequest, callback?: (err: any, data: STSGetSessionTokenResponse|any) => void): Request;
    }

    export interface STSAssumeRoleRequest {
        RoleArn: STSarnType;
        RoleSessionName: STSroleSessionNameType;
        Policy?: STSsessionPolicyDocumentType;
        DurationSeconds?: STSroleDurationSecondsType;
        ExternalId?: STSexternalIdType;
        SerialNumber?: STSserialNumberType;
        TokenCode?: STStokenCodeType;
    }

    export interface STSAssumeRoleResponse {
        Credentials?: STSCredentials;
        AssumedRoleUser?: STSAssumedRoleUser;
        PackedPolicySize?: STSnonNegativeIntegerType;
    }

    export interface STSAssumeRoleWithSAMLRequest {
        RoleArn: STSarnType;
        PrincipalArn: STSarnType;
        SAMLAssertion: STSSAMLAssertionType;
        Policy?: STSsessionPolicyDocumentType;
        DurationSeconds?: STSroleDurationSecondsType;
    }

    export interface STSAssumeRoleWithSAMLResponse {
        Credentials?: STSCredentials;
        AssumedRoleUser?: STSAssumedRoleUser;
        PackedPolicySize?: STSnonNegativeIntegerType;
        Subject?: STSSubject;
        SubjectType?: STSSubjectType;
        Issuer?: STSIssuer;
        Audience?: STSAudience;
        NameQualifier?: STSNameQualifier;
    }

    export interface STSAssumeRoleWithWebIdentityRequest {
        RoleArn: STSarnType;
        RoleSessionName: STSroleSessionNameType;
        WebIdentityToken: STSclientTokenType;
        ProviderId?: STSurlType;
        Policy?: STSsessionPolicyDocumentType;
        DurationSeconds?: STSroleDurationSecondsType;
    }

    export interface STSAssumeRoleWithWebIdentityResponse {
        Credentials?: STSCredentials;
        SubjectFromWebIdentityToken?: STSwebIdentitySubjectType;
        AssumedRoleUser?: STSAssumedRoleUser;
        PackedPolicySize?: STSnonNegativeIntegerType;
        Provider?: STSIssuer;
        Audience?: STSAudience;
    }

    export interface STSAssumedRoleUser {
        AssumedRoleId: STSassumedRoleIdType;
        Arn: STSarnType;
    }

    export type STSAudience = string;
    export interface STSCredentials {
        AccessKeyId: STSaccessKeyIdType;
        SecretAccessKey: STSaccessKeySecretType;
        SessionToken: STStokenType;
        Expiration: STSdateType;
    }

    export interface STSDecodeAuthorizationMessageRequest {
        EncodedMessage: STSencodedMessageType;
    }

    export interface STSDecodeAuthorizationMessageResponse {
        DecodedMessage?: STSdecodedMessageType;
    }

    export interface STSExpiredTokenException {
        message?: STSexpiredIdentityTokenMessage;
    }

    export interface STSFederatedUser {
        FederatedUserId: STSfederatedIdType;
        Arn: STSarnType;
    }

    export interface STSGetFederationTokenRequest {
        Name: STSuserNameType;
        Policy?: STSsessionPolicyDocumentType;
        DurationSeconds?: STSdurationSecondsType;
    }

    export interface STSGetFederationTokenResponse {
        Credentials?: STSCredentials;
        FederatedUser?: STSFederatedUser;
        PackedPolicySize?: STSnonNegativeIntegerType;
    }

    export interface STSGetSessionTokenRequest {
        DurationSeconds?: STSdurationSecondsType;
        SerialNumber?: STSserialNumberType;
        TokenCode?: STStokenCodeType;
    }

    export interface STSGetSessionTokenResponse {
        Credentials?: STSCredentials;
    }

    export interface STSIDPCommunicationErrorException {
        message?: STSidpCommunicationErrorMessage;
    }

    export interface STSIDPRejectedClaimException {
        message?: STSidpRejectedClaimMessage;
    }

    export interface STSInvalidAuthorizationMessageException {
        message?: STSinvalidAuthorizationMessage;
    }

    export interface STSInvalidIdentityTokenException {
        message?: STSinvalidIdentityTokenMessage;
    }

    export type STSIssuer = string;
    export interface STSMalformedPolicyDocumentException {
        message?: STSmalformedPolicyDocumentMessage;
    }

    export type STSNameQualifier = string;
    export interface STSPackedPolicyTooLargeException {
        message?: STSpackedPolicyTooLargeMessage;
    }

    export type STSSAMLAssertionType = string;
    export type STSSubject = string;
    export type STSSubjectType = string;
    export type STSaccessKeyIdType = string; // pattern: "[\w]*"
    export type STSaccessKeySecretType = string;
    export type STSarnType = string;
    export type STSassumedRoleIdType = string; // pattern: "[\w+=,.@:-]*"
    export type STSclientTokenType = string;
    export type STSdateType = number;
    export type STSdecodedMessageType = string;
    export type STSdurationSecondsType = number;
    export type STSencodedMessageType = string;
    export type STSexpiredIdentityTokenMessage = string;
    export type STSexternalIdType = string; // pattern: "[\w+=,.@:\/-]*"
    export type STSfederatedIdType = string; // pattern: "[\w+=,.@\:-]*"
    export type STSidpCommunicationErrorMessage = string;
    export type STSidpRejectedClaimMessage = string;
    export type STSinvalidAuthorizationMessage = string;
    export type STSinvalidIdentityTokenMessage = string;
    export type STSmalformedPolicyDocumentMessage = string;
    export type STSnonNegativeIntegerType = number;
    export type STSpackedPolicyTooLargeMessage = string;
    export type STSroleDurationSecondsType = number;
    export type STSroleSessionNameType = string; // pattern: "[\w+=,.@-]*"
    export type STSserialNumberType = string; // pattern: "[\w+=/:,.@-]*"
    export type STSsessionPolicyDocumentType = string; // pattern: "[\u0009\u000A\u000D\u0020-\u00FF]+"
    export type STStokenCodeType = string; // pattern: "[\d]*"
    export type STStokenType = string;
    export type STSurlType = string;
    export type STSuserNameType = string; // pattern: "[\w+=,.@-]*"
    export type STSwebIdentitySubjectType = string;
}
