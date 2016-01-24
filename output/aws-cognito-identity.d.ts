// Type definitions for aws-sdk - Amazon Cognito Identity
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2014-06-30
     * endpointPrefix: cognito-identity
     * serviceAbbreviation: 
     * signatureVersion: v4
     * protocol: json
     */
    export class CognitoIdentity extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      createIdentityPool(params: CognitoIdentity.CreateIdentityPoolInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|CognitoIdentity.LimitExceededException|any, data: CognitoIdentity.IdentityPool|any) => void): Request;
      deleteIdentities(params: CognitoIdentity.DeleteIdentitiesInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: CognitoIdentity.DeleteIdentitiesResponse|any) => void): Request;
      deleteIdentityPool(params: CognitoIdentity.DeleteIdentityPoolInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: any) => void): Request;
      describeIdentity(params: CognitoIdentity.DescribeIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: CognitoIdentity.IdentityDescription|any) => void): Request;
      describeIdentityPool(params: CognitoIdentity.DescribeIdentityPoolInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: CognitoIdentity.IdentityPool|any) => void): Request;
      getCredentialsForIdentity(params: CognitoIdentity.GetCredentialsForIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InvalidIdentityPoolConfigurationException|CognitoIdentity.InternalErrorException|CognitoIdentity.ExternalServiceException|any, data: CognitoIdentity.GetCredentialsForIdentityResponse|any) => void): Request;
      getId(params: CognitoIdentity.GetIdInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|CognitoIdentity.LimitExceededException|CognitoIdentity.ExternalServiceException|any, data: CognitoIdentity.GetIdResponse|any) => void): Request;
      getIdentityPoolRoles(params: CognitoIdentity.GetIdentityPoolRolesInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: CognitoIdentity.GetIdentityPoolRolesResponse|any) => void): Request;
      getOpenIdToken(params: CognitoIdentity.GetOpenIdTokenInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|CognitoIdentity.ExternalServiceException|any, data: CognitoIdentity.GetOpenIdTokenResponse|any) => void): Request;
      getOpenIdTokenForDeveloperIdentity(params: CognitoIdentity.GetOpenIdTokenForDeveloperIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|CognitoIdentity.DeveloperUserAlreadyRegisteredException|any, data: CognitoIdentity.GetOpenIdTokenForDeveloperIdentityResponse|any) => void): Request;
      listIdentities(params: CognitoIdentity.ListIdentitiesInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: CognitoIdentity.ListIdentitiesResponse|any) => void): Request;
      listIdentityPools(params: CognitoIdentity.ListIdentityPoolsInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: CognitoIdentity.ListIdentityPoolsResponse|any) => void): Request;
      lookupDeveloperIdentity(params: CognitoIdentity.LookupDeveloperIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: CognitoIdentity.LookupDeveloperIdentityResponse|any) => void): Request;
      mergeDeveloperIdentities(params: CognitoIdentity.MergeDeveloperIdentitiesInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: CognitoIdentity.MergeDeveloperIdentitiesResponse|any) => void): Request;
      setIdentityPoolRoles(params: CognitoIdentity.SetIdentityPoolRolesInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|CognitoIdentity.ConcurrentModificationException|any, data: any) => void): Request;
      unlinkDeveloperIdentity(params: CognitoIdentity.UnlinkDeveloperIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|any, data: any) => void): Request;
      unlinkIdentity(params: CognitoIdentity.UnlinkIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|CognitoIdentity.ExternalServiceException|any, data: any) => void): Request;
      updateIdentityPool(params: CognitoIdentity.IdentityPool, callback?: (err: CognitoIdentity.InvalidParameterException|CognitoIdentity.ResourceNotFoundException|CognitoIdentity.NotAuthorizedException|CognitoIdentity.ResourceConflictException|CognitoIdentity.TooManyRequestsException|CognitoIdentity.InternalErrorException|CognitoIdentity.ConcurrentModificationException|any, data: CognitoIdentity.IdentityPool|any) => void): Request;

      // Found on JS Sources - Sorry for the inconvenience :)
      getOpenIdToken(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      getId(...args: any[]): any
      // Found on JS Sources - Sorry for the inconvenience :)
      getCredentialsForIdentity(...args: any[]): any
    }

    export module CognitoIdentity {
        export type ARNString = string;    // max: 2048, min: 20
        export type AccessKeyString = string;
        export type AccountId = string;    // pattern: &quot;\d+&quot;, max: 15, min: 1
        export type DateType = number;
        export type DeveloperProviderName = string;    // pattern: &quot;[\w._-]+&quot;, max: 128, min: 1
        export type DeveloperUserIdentifier = string;    // pattern: &quot;[\w.@_-]+&quot;, max: 1024, min: 1
        export type DeveloperUserIdentifierList = DeveloperUserIdentifier[];
        export type ErrorCode = string;
        export type HideDisabled = boolean;
        export type IdentitiesList = IdentityDescription[];
        export type IdentityId = string;    // pattern: &quot;[\w-]+:[0-9a-f-]+&quot;, max: 55, min: 1
        export type IdentityIdList = IdentityId[];    // max: 60, min: 1
        export type IdentityPoolId = string;    // pattern: &quot;[\w-]+:[0-9a-f-]+&quot;, max: 55, min: 1
        export type IdentityPoolName = string;    // pattern: &quot;[\w ]+&quot;, max: 128, min: 1
        export type IdentityPoolUnauthenticated = boolean;
        export type IdentityPoolsList = IdentityPoolShortDescription[];
        export type IdentityProviderId = string;    // pattern: &quot;[\w.;_-]+&quot;, max: 128, min: 1
        export type IdentityProviderName = string;    // pattern: &quot;[\w._/-]+&quot;, max: 128, min: 1
        export type IdentityProviderToken = string;    // pattern: &quot;[\S]+&quot;, max: 2048, min: 1
        export type IdentityProviders = {[key:string]: IdentityProviderId};    // max: 10
        export type LoginsList = IdentityProviderName[];
        export type LoginsMap = {[key:string]: IdentityProviderToken};    // max: 10
        export type OIDCProviderList = ARNString[];
        export type OIDCToken = string;
        export type PaginationKey = string;    // pattern: &quot;[\S]+&quot;, min: 1
        export type QueryLimit = number;    // max: 60, min: 1
        export type RoleType = string;    // pattern: &quot;(un)?authenticated&quot;
        export type RolesMap = {[key:string]: ARNString};    // max: 2
        export type SecretKeyString = string;
        export type SessionTokenString = string;
        export type String = string;
        export type TokenDuration = number;    // max: 86400, min: 1
        export type UnprocessedIdentityIdList = UnprocessedIdentityId[];    // max: 60

        export interface ConcurrentModificationException {
            message?: String;
        }
        export interface CreateIdentityPoolInput {
            IdentityPoolName: IdentityPoolName;
            AllowUnauthenticatedIdentities: IdentityPoolUnauthenticated;
            SupportedLoginProviders?: IdentityProviders;
            DeveloperProviderName?: DeveloperProviderName;
            OpenIdConnectProviderARNs?: OIDCProviderList;
        }
        export interface Credentials {
            AccessKeyId?: AccessKeyString;
            SecretKey?: SecretKeyString;
            SessionToken?: SessionTokenString;
            Expiration?: DateType;
        }
        export interface DeleteIdentitiesInput {
            IdentityIdsToDelete: IdentityIdList;
        }
        export interface DeleteIdentitiesResponse {
            UnprocessedIdentityIds?: UnprocessedIdentityIdList;
        }
        export interface DeleteIdentityPoolInput {
            IdentityPoolId: IdentityPoolId;
        }
        export interface DescribeIdentityInput {
            IdentityId: IdentityId;
        }
        export interface DescribeIdentityPoolInput {
            IdentityPoolId: IdentityPoolId;
        }
        export interface DeveloperUserAlreadyRegisteredException {
            message?: String;
        }
        export interface ExternalServiceException {
            message?: String;
        }
        export interface GetCredentialsForIdentityInput {
            IdentityId: IdentityId;
            Logins?: LoginsMap;
        }
        export interface GetCredentialsForIdentityResponse {
            IdentityId?: IdentityId;
            Credentials?: Credentials;
        }
        export interface GetIdInput {
            AccountId?: AccountId;
            IdentityPoolId: IdentityPoolId;
            Logins?: LoginsMap;
        }
        export interface GetIdResponse {
            IdentityId?: IdentityId;
        }
        export interface GetIdentityPoolRolesInput {
            IdentityPoolId: IdentityPoolId;
        }
        export interface GetIdentityPoolRolesResponse {
            IdentityPoolId?: IdentityPoolId;
            Roles?: RolesMap;
        }
        export interface GetOpenIdTokenForDeveloperIdentityInput {
            IdentityPoolId: IdentityPoolId;
            IdentityId?: IdentityId;
            Logins: LoginsMap;
            TokenDuration?: TokenDuration;
        }
        export interface GetOpenIdTokenForDeveloperIdentityResponse {
            IdentityId?: IdentityId;
            Token?: OIDCToken;
        }
        export interface GetOpenIdTokenInput {
            IdentityId: IdentityId;
            Logins?: LoginsMap;
        }
        export interface GetOpenIdTokenResponse {
            IdentityId?: IdentityId;
            Token?: OIDCToken;
        }
        export interface IdentityDescription {
            IdentityId?: IdentityId;
            Logins?: LoginsList;
            CreationDate?: DateType;
            LastModifiedDate?: DateType;
        }
        export interface IdentityPool {
            IdentityPoolId: IdentityPoolId;
            IdentityPoolName: IdentityPoolName;
            AllowUnauthenticatedIdentities: IdentityPoolUnauthenticated;
            SupportedLoginProviders?: IdentityProviders;
            DeveloperProviderName?: DeveloperProviderName;
            OpenIdConnectProviderARNs?: OIDCProviderList;
        }
        export interface IdentityPoolShortDescription {
            IdentityPoolId?: IdentityPoolId;
            IdentityPoolName?: IdentityPoolName;
        }
        export interface InternalErrorException {
            message?: String;
        }
        export interface InvalidIdentityPoolConfigurationException {
            message?: String;
        }
        export interface InvalidParameterException {
            message?: String;
        }
        export interface LimitExceededException {
            message?: String;
        }
        export interface ListIdentitiesInput {
            IdentityPoolId: IdentityPoolId;
            MaxResults: QueryLimit;
            NextToken?: PaginationKey;
            HideDisabled?: HideDisabled;
        }
        export interface ListIdentitiesResponse {
            IdentityPoolId?: IdentityPoolId;
            Identities?: IdentitiesList;
            NextToken?: PaginationKey;
        }
        export interface ListIdentityPoolsInput {
            MaxResults: QueryLimit;
            NextToken?: PaginationKey;
        }
        export interface ListIdentityPoolsResponse {
            IdentityPools?: IdentityPoolsList;
            NextToken?: PaginationKey;
        }
        export interface LookupDeveloperIdentityInput {
            IdentityPoolId: IdentityPoolId;
            IdentityId?: IdentityId;
            DeveloperUserIdentifier?: DeveloperUserIdentifier;
            MaxResults?: QueryLimit;
            NextToken?: PaginationKey;
        }
        export interface LookupDeveloperIdentityResponse {
            IdentityId?: IdentityId;
            DeveloperUserIdentifierList?: DeveloperUserIdentifierList;
            NextToken?: PaginationKey;
        }
        export interface MergeDeveloperIdentitiesInput {
            SourceUserIdentifier: DeveloperUserIdentifier;
            DestinationUserIdentifier: DeveloperUserIdentifier;
            DeveloperProviderName: DeveloperProviderName;
            IdentityPoolId: IdentityPoolId;
        }
        export interface MergeDeveloperIdentitiesResponse {
            IdentityId?: IdentityId;
        }
        export interface NotAuthorizedException {
            message?: String;
        }
        export interface ResourceConflictException {
            message?: String;
        }
        export interface ResourceNotFoundException {
            message?: String;
        }
        export interface SetIdentityPoolRolesInput {
            IdentityPoolId: IdentityPoolId;
            Roles: RolesMap;
        }
        export interface TooManyRequestsException {
            message?: String;
        }
        export interface UnlinkDeveloperIdentityInput {
            IdentityId: IdentityId;
            IdentityPoolId: IdentityPoolId;
            DeveloperProviderName: DeveloperProviderName;
            DeveloperUserIdentifier: DeveloperUserIdentifier;
        }
        export interface UnlinkIdentityInput {
            IdentityId: IdentityId;
            Logins: LoginsMap;
            LoginsToRemove: LoginsList;
        }
        export interface UnprocessedIdentityId {
            IdentityId?: IdentityId;
            ErrorCode?: ErrorCode;
        }

    }
}
