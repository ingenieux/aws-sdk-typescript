// Type definitions for aws-sdk - AWS Certificate Manager
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-12-08
     * endpointPrefix: acm
     * serviceAbbreviation: ACM
     * signatureVersion: v4
     * protocol: json
     */
    export class ACM extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      deleteCertificate(params: ACM.DeleteCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.ResourceInUseException|ACM.InvalidArnException|any, data: any) => void): Request;
      describeCertificate(params: ACM.DescribeCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.InvalidArnException|any, data: ACM.DescribeCertificateResponse|any) => void): Request;
      getCertificate(params: ACM.GetCertificateRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.RequestInProgressException|ACM.InvalidArnException|any, data: ACM.GetCertificateResponse|any) => void): Request;
      listCertificates(params: ACM.ListCertificatesRequest, callback?: (err: any, data: ACM.ListCertificatesResponse|any) => void): Request;
      requestCertificate(params: ACM.RequestCertificateRequest, callback?: (err: ACM.LimitExceededException|ACM.InvalidDomainValidationOptionsException|any, data: ACM.RequestCertificateResponse|any) => void): Request;
      resendValidationEmail(params: ACM.ResendValidationEmailRequest, callback?: (err: ACM.ResourceNotFoundException|ACM.InvalidStateException|ACM.InvalidArnException|ACM.InvalidDomainValidationOptionsException|any, data: any) => void): Request;

    }

    export module ACM {
        export type Arn = string;    // pattern: &quot;arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]+:[\w+=,.@-]+(/[\w+=/,.@-]+)*&quot;, max: 2048, min: 20
        export type CertificateBody = string;    // pattern: &quot;-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9/+]{64}\u000D?\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?&quot;, max: 524288, min: 1
        export type CertificateChain = string;    // pattern: &quot;(-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9/+]{64}\u000D?\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}\u000D?\u000A)*-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9/+]{64}\u000D?\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?&quot;, max: 2097152, min: 1
        export type CertificateStatus = string;
        export type CertificateStatuses = CertificateStatus[];
        export type CertificateSummaryList = CertificateSummary[];
        export type DomainList = DomainNameString[];    // max: 1000, min: 1
        export type DomainNameString = string;    // pattern: &quot;^(\*\.)?(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$&quot;, max: 253, min: 1
        export type DomainValidationList = DomainValidation[];    // max: 1000, min: 1
        export type DomainValidationOptionList = DomainValidationOption[];    // max: 1000, min: 1
        export type IdempotencyToken = string;    // pattern: &quot;\w+&quot;, max: 32, min: 1
        export type InUseList = String[];
        export type KeyAlgorithm = string;
        export type MaxItems = number;    // max: 1000, min: 1
        export type NextToken = string;    // pattern: &quot;[\u0009\u000A\u000D\u0020-\u00FF]*&quot;, max: 320, min: 1
        export type RevocationReason = string;
        export type String = string;
        export type TStamp = number;
        export type ValidationEmailList = String[];

        export interface CertificateDetail {
            CertificateArn?: Arn;
            DomainName?: DomainNameString;
            SubjectAlternativeNames?: DomainList;
            DomainValidationOptions?: DomainValidationList;
            Serial?: String;
            Subject?: String;
            Issuer?: String;
            CreatedAt?: TStamp;
            IssuedAt?: TStamp;
            Status?: CertificateStatus;
            RevokedAt?: TStamp;
            RevocationReason?: RevocationReason;
            NotBefore?: TStamp;
            NotAfter?: TStamp;
            KeyAlgorithm?: KeyAlgorithm;
            SignatureAlgorithm?: String;
            InUseBy?: InUseList;
        }
        export interface CertificateSummary {
            CertificateArn?: Arn;
            DomainName?: DomainNameString;
        }
        export interface DeleteCertificateRequest {
            CertificateArn: Arn;
        }
        export interface DescribeCertificateRequest {
            CertificateArn: Arn;
        }
        export interface DescribeCertificateResponse {
            Certificate?: CertificateDetail;
        }
        export interface DomainValidation {
            DomainName: DomainNameString;
            ValidationEmails?: ValidationEmailList;
            ValidationDomain?: DomainNameString;
        }
        export interface DomainValidationOption {
            DomainName: DomainNameString;
            ValidationDomain: DomainNameString;
        }
        export interface GetCertificateRequest {
            CertificateArn: Arn;
        }
        export interface GetCertificateResponse {
            Certificate?: CertificateBody;
            CertificateChain?: CertificateChain;
        }
        export interface InvalidArnException {
            message?: String;
        }
        export interface InvalidDomainValidationOptionsException {
            message?: String;
        }
        export interface InvalidStateException {
            message?: String;
        }
        export interface LimitExceededException {
            message?: String;
        }
        export interface ListCertificatesRequest {
            CertificateStatuses?: CertificateStatuses;
            NextToken?: NextToken;
            MaxItems?: MaxItems;
        }
        export interface ListCertificatesResponse {
            NextToken?: NextToken;
            CertificateSummaryList?: CertificateSummaryList;
        }
        export interface RequestCertificateRequest {
            DomainName: DomainNameString;
            SubjectAlternativeNames?: DomainList;
            IdempotencyToken?: IdempotencyToken;
            DomainValidationOptions?: DomainValidationOptionList;
        }
        export interface RequestCertificateResponse {
            CertificateArn?: Arn;
        }
        export interface RequestInProgressException {
            message?: String;
        }
        export interface ResendValidationEmailRequest {
            CertificateArn: Arn;
            Domain: DomainNameString;
            ValidationDomain: DomainNameString;
        }
        export interface ResourceInUseException {
            message?: String;
        }
        export interface ResourceNotFoundException {
            message?: String;
        }

    }
}
