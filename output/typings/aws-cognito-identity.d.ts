// Type definitions for aws-sdk - Amazon Cognito Identity
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2014-06-30
    * endpointPrefix: cognito-identity
    * serviceAbbreviation: 
    * signatureVersion: v4
    * protocol: json
    *
    * Amazon Cognito Amazon Cognito is a web service that delivers scoped temporary
 credentials to mobile devices and other untrusted environments. Amazon Cognito
 uniquely identifies a device and supplies the user with a consistent identity
 over the lifetime of an application.
 
 Using Amazon Cognito, you can enable authentication with one or more third-party
 identity providers (Facebook, Google, or Login with Amazon), and you can also
 choose to support unauthenticated access from your app. Cognito delivers a
 unique identifier for each user and acts as an OpenID token provider trusted by
 AWS Security Token Service (STS) to access temporary, limited-privilege AWS
 credentials.
 
 To provide end-user credentials, first make an unsigned call to GetId. If the
 end user is authenticated with one of the supported identity providers, set the 
 Logins map with the identity provider token. GetId returns a unique identifier
 for the user.
 
 Next, make an unsigned call to GetCredentialsForIdentity. This call expects the
 same Logins map as the GetId call, as well as the IdentityID originally returned
 by GetId. Assuming your identity pool has been configured via the 
 SetIdentityPoolRoles operation, GetCredentialsForIdentity will return AWS
 credentials for your use. If your pool has not been configured with 
 SetIdentityPoolRoles, or if you want to follow legacy flow, make an unsigned
 call to GetOpenIdToken, which returns the OpenID token necessary to call STS and
 retrieve AWS credentials. This call expects the same Logins map as the GetId 
 call, as well as the IdentityID originally returned by GetId. The token returned
 by GetOpenIdToken can be passed to the STS operation AssumeRoleWithWebIdentity
 [http://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html] 
 to retrieve AWS credentials.
 
 If you want to use Amazon Cognito in an Android, iOS, or Unity application, you
 will probably want to make API calls via the AWS Mobile SDK. To learn more, see
 the AWS Mobile SDK Developer Guide
 [http://docs.aws.amazon.com/mobile/index.html].
    *
    */
  export class CognitoIdentity extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates a new identity pool. The identity pool is a store of user identity
information that is specific to your AWS account. The limit on identity pools is
60 per account. The keys for SupportedLoginProviders are as follows:  &amp;#42; 
   Facebook: graph.facebook.com
 * Google: accounts.google.com
 * Amazon: www.amazon.com
 * Twitter: api.twitter.com
 * Digits: www.digits.com

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error LimitExceededException   
     */
    createIdentityPool(params: CognitoIdentity.CreateIdentityPoolInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.LimitExceededException | any, data: CognitoIdentity.IdentityPool | any) => void): Request<CognitoIdentity.IdentityPool | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.LimitExceededException | any>;
    /**
     * Deletes identities from an identity pool. You can specify a list of 1-60
identities that you want to delete.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    deleteIdentities(params: CognitoIdentity.DeleteIdentitiesInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: CognitoIdentity.DeleteIdentitiesResponse | any) => void): Request<CognitoIdentity.DeleteIdentitiesResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Deletes a user pool. Once a pool is deleted, users will not be able to
authenticate with the pool.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    deleteIdentityPool(params: CognitoIdentity.DeleteIdentityPoolInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: any) => void): Request<any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Returns metadata related to the given identity, including when the identity was
created and any associated linked logins.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    describeIdentity(params: CognitoIdentity.DescribeIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: CognitoIdentity.IdentityDescription | any) => void): Request<CognitoIdentity.IdentityDescription | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Gets details about a particular identity pool, including the pool name, ID
description, creation date, and current number of users.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    describeIdentityPool(params: CognitoIdentity.DescribeIdentityPoolInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: CognitoIdentity.IdentityPool | any) => void): Request<CognitoIdentity.IdentityPool | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Returns credentials for the provided identity ID. Any provided logins will be
validated against supported login providers. If the token is for
cognito-identity.amazonaws.com, it will be passed through to AWS Security Token
Service with the appropriate role for the token.

This is a public API. You do not need any credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InvalidIdentityPoolConfigurationException   
     * @error InternalErrorException   
     * @error ExternalServiceException   
     */
    getCredentialsForIdentity(params: CognitoIdentity.GetCredentialsForIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InvalidIdentityPoolConfigurationException | CognitoIdentity.InternalErrorException | CognitoIdentity.ExternalServiceException | any, data: CognitoIdentity.GetCredentialsForIdentityResponse | any) => void): Request<CognitoIdentity.GetCredentialsForIdentityResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InvalidIdentityPoolConfigurationException | CognitoIdentity.InternalErrorException | CognitoIdentity.ExternalServiceException | any>;
    /**
     * Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an
implicit linked account.

This is a public API. You do not need any credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error LimitExceededException   
     * @error ExternalServiceException   
     */
    getId(params: CognitoIdentity.GetIdInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.LimitExceededException | CognitoIdentity.ExternalServiceException | any, data: CognitoIdentity.GetIdResponse | any) => void): Request<CognitoIdentity.GetIdResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.LimitExceededException | CognitoIdentity.ExternalServiceException | any>;
    /**
     * Gets the roles for an identity pool.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    getIdentityPoolRoles(params: CognitoIdentity.GetIdentityPoolRolesInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: CognitoIdentity.GetIdentityPoolRolesResponse | any) => void): Request<CognitoIdentity.GetIdentityPoolRolesResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Gets an OpenID token, using a known Cognito ID. This known Cognito ID is
returned by GetId. You can optionally add additional logins for the identity.
Supplying multiple logins creates an implicit link.

The OpenId token is valid for 15 minutes.

This is a public API. You do not need any credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error ExternalServiceException   
     */
    getOpenIdToken(params: CognitoIdentity.GetOpenIdTokenInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.ExternalServiceException | any, data: CognitoIdentity.GetOpenIdTokenResponse | any) => void): Request<CognitoIdentity.GetOpenIdTokenResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.ExternalServiceException | any>;
    /**
     * Registers (or retrieves) a Cognito IdentityId and an OpenID Connect token for a
user authenticated by your backend authentication process. Supplying multiple
logins will create an implicit linked account. You can only specify one
developer provider as part of the Logins map, which is linked to the identity
pool. The developer provider is the &quot;domain&quot; by which Cognito will refer to your
users.

You can use GetOpenIdTokenForDeveloperIdentity to create a new identity and to
link new logins (that is, user credentials issued by a public provider or
developer provider) to an existing identity. When you want to create a new
identity, the IdentityId should be null. When you want to associate a new login
with an existing authenticated/unauthenticated identity, you can do so by
providing the existing IdentityId. This API will create the identity in the
specified IdentityPoolId.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error DeveloperUserAlreadyRegisteredException   
     */
    getOpenIdTokenForDeveloperIdentity(params: CognitoIdentity.GetOpenIdTokenForDeveloperIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.DeveloperUserAlreadyRegisteredException | any, data: CognitoIdentity.GetOpenIdTokenForDeveloperIdentityResponse | any) => void): Request<CognitoIdentity.GetOpenIdTokenForDeveloperIdentityResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.DeveloperUserAlreadyRegisteredException | any>;
    /**
     * Lists the identities in a pool.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    listIdentities(params: CognitoIdentity.ListIdentitiesInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: CognitoIdentity.ListIdentitiesResponse | any) => void): Request<CognitoIdentity.ListIdentitiesResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Lists all of the Cognito identity pools registered for your account.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    listIdentityPools(params: CognitoIdentity.ListIdentityPoolsInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: CognitoIdentity.ListIdentityPoolsResponse | any) => void): Request<CognitoIdentity.ListIdentityPoolsResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list
of DeveloperUserIdentifiers associated with an IdentityId for an existing
identity. Either IdentityID or DeveloperUserIdentifier must not be null. If you
supply only one of these values, the other value will be searched in the
database and returned as a part of the response. If you supply both, 
DeveloperUserIdentifier will be matched against IdentityID. If the values are
verified against the database, the response returns both values and is the same
as the request. Otherwise a ResourceConflictException is thrown.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    lookupDeveloperIdentity(params: CognitoIdentity.LookupDeveloperIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: CognitoIdentity.LookupDeveloperIdentityResponse | any) => void): Request<CognitoIdentity.LookupDeveloperIdentityResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Merges two users having different IdentityIds, existing in the same identity
pool, and identified by the same developer provider. You can use this action to
request that discrete users be merged and identified as a single user in the
Cognito environment. Cognito associates the given source user (
SourceUserIdentifier) with the IdentityId of the DestinationUserIdentifier. Only
developer-authenticated users can be merged. If the users to be merged are
associated with the same public provider, but as two different users, an
exception will be thrown.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    mergeDeveloperIdentities(params: CognitoIdentity.MergeDeveloperIdentitiesInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: CognitoIdentity.MergeDeveloperIdentitiesResponse | any) => void): Request<CognitoIdentity.MergeDeveloperIdentitiesResponse | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Sets the roles for an identity pool. These roles are used when making calls to 
GetCredentialsForIdentity action.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error ConcurrentModificationException   
     */
    setIdentityPoolRoles(params: CognitoIdentity.SetIdentityPoolRolesInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.ConcurrentModificationException | any, data: any) => void): Request<any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.ConcurrentModificationException | any>;
    /**
     * Unlinks a DeveloperUserIdentifier from an existing identity. Unlinked developer
users will be considered new identities next time they are seen. If, for a given
Cognito identity, you remove all federated identities as well as the developer
user identifier, the Cognito identity becomes inaccessible.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    unlinkDeveloperIdentity(params: CognitoIdentity.UnlinkDeveloperIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any, data: any) => void): Request<any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | any>;
    /**
     * Unlinks a federated identity from an existing account. Unlinked logins will be
considered new identities next time they are seen. Removing the last linked
login will make this identity inaccessible.

This is a public API. You do not need any credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error ExternalServiceException   
     */
    unlinkIdentity(params: CognitoIdentity.UnlinkIdentityInput, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.ExternalServiceException | any, data: any) => void): Request<any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.ExternalServiceException | any>;
    /**
     * Updates a user pool.

You must use AWS Developer credentials to call this API.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error ConcurrentModificationException   
     * @error LimitExceededException   
     */
    updateIdentityPool(params: CognitoIdentity.IdentityPool, callback?: (err: CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.ConcurrentModificationException | CognitoIdentity.LimitExceededException | any, data: CognitoIdentity.IdentityPool | any) => void): Request<CognitoIdentity.IdentityPool | any, CognitoIdentity.InvalidParameterException | CognitoIdentity.ResourceNotFoundException | CognitoIdentity.NotAuthorizedException | CognitoIdentity.ResourceConflictException | CognitoIdentity.TooManyRequestsException | CognitoIdentity.InternalErrorException | CognitoIdentity.ConcurrentModificationException | CognitoIdentity.LimitExceededException | any>;

    getOpenIdToken(...args: any[]): any
    getId(...args: any[]): any
    getCredentialsForIdentity(...args: any[]): any
  }

  export module CognitoIdentity {

    export type ARNString = string;

    export type AccessKeyString = string;

    export type AccountId = string;

    export type CognitoIdentityProviderClientId = string;

    export type CognitoIdentityProviderList = CognitoIdentityProvider[];

    export type CognitoIdentityProviderName = string;

    export type DateType = number;

    export type DeveloperProviderName = string;

    export type DeveloperUserIdentifier = string;

    export type DeveloperUserIdentifierList = DeveloperUserIdentifier[];

    export type ErrorCode = string;

    export type HideDisabled = boolean;

    export type IdentitiesList = IdentityDescription[];

    export type IdentityId = string;

    export type IdentityIdList = IdentityId[];

    export type IdentityPoolId = string;

    export type IdentityPoolName = string;

    export type IdentityPoolUnauthenticated = boolean;

    export type IdentityPoolsList = IdentityPoolShortDescription[];

    export type IdentityProviderId = string;

    export type IdentityProviderName = string;

    export type IdentityProviderToken = string;

    export type IdentityProviders = { [key: string]: IdentityProviderId };

    export type LoginsList = IdentityProviderName[];

    export type LoginsMap = { [key: string]: IdentityProviderToken };

    export type OIDCProviderList = ARNString[];

    export type OIDCToken = string;

    export type PaginationKey = string;

    export type QueryLimit = number;

    export type RoleType = string;

    export type RolesMap = { [key: string]: ARNString };

    export type SAMLProviderList = ARNString[];

    export type SecretKeyString = string;

    export type SessionTokenString = string;

    export type String = string;

    export type TokenDuration = number;

    export type UnprocessedIdentityIdList = UnprocessedIdentityId[];

    export interface CognitoIdentityProvider {
      /** The provider name for an Amazon Cognito Identity User Pool. For example, 
cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789. **/
      ProviderName?: CognitoIdentityProviderName;
      /** The client ID for the Amazon Cognito Identity User Pool. **/
      ClientId?: CognitoIdentityProviderClientId;
    }
    export interface ConcurrentModificationException {
      /** The message returned by a ConcurrentModificationException. **/
      message?: String;
    }
    export interface CreateIdentityPoolInput {
      /** A string that you provide. **/
      IdentityPoolName: IdentityPoolName;
      /** TRUE if the identity pool supports unauthenticated logins. **/
      AllowUnauthenticatedIdentities: IdentityPoolUnauthenticated;
      /** Optional key:value pairs mapping provider names to provider app IDs. **/
      SupportedLoginProviders?: IdentityProviders;
      /** The &quot;domain&quot; by which Cognito will refer to your users. This name acts as a
placeholder that allows your backend and the Cognito service to communicate
about the developer provider. For the DeveloperProviderName, you can use letters
as well as period (.), underscore (_), and dash (-).

Once you have set a developer provider name, you cannot change it. Please take
care in setting this parameter. **/
      DeveloperProviderName?: DeveloperProviderName;
      /** A list of OpendID Connect provider ARNs. **/
      OpenIdConnectProviderARNs?: OIDCProviderList;
      /** An array of Amazon Cognito Identity user pools. **/
      CognitoIdentityProviders?: CognitoIdentityProviderList;
      /** An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
pool. **/
      SamlProviderARNs?: SAMLProviderList;
    }
    export interface Credentials {
      /** The Access Key portion of the credentials. **/
      AccessKeyId?: AccessKeyString;
      /** The Secret Access Key portion of the credentials **/
      SecretKey?: SecretKeyString;
      /** The Session Token portion of the credentials **/
      SessionToken?: SessionTokenString;
      /** The date at which these credentials will expire. **/
      Expiration?: DateType;
    }
    export interface DeleteIdentitiesInput {
      /** A list of 1-60 identities that you want to delete. **/
      IdentityIdsToDelete: IdentityIdList;
    }
    export interface DeleteIdentitiesResponse {
      /** An array of UnprocessedIdentityId objects, each of which contains an ErrorCode
and IdentityId. **/
      UnprocessedIdentityIds?: UnprocessedIdentityIdList;
    }
    export interface DeleteIdentityPoolInput {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
    }
    export interface DescribeIdentityInput {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId: IdentityId;
    }
    export interface DescribeIdentityPoolInput {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
    }
    export interface DeveloperUserAlreadyRegisteredException {
      /** This developer user identifier is already registered with Cognito. **/
      message?: String;
    }
    export interface ExternalServiceException {
      /** The message returned by an ExternalServiceException **/
      message?: String;
    }
    export interface GetCredentialsForIdentityInput {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId: IdentityId;
      /** A set of optional name-value pairs that map provider names to provider tokens. **/
      Logins?: LoginsMap;
      /** The Amazon Resource Name (ARN) of the role to be assumed when multiple roles
were received in the token from the identity provider. For example, a SAML-based
identity provider. This parameter is optional for identity providers that do not
support role customization. **/
      CustomRoleArn?: ARNString;
    }
    export interface GetCredentialsForIdentityResponse {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId?: IdentityId;
      /** Credentials for the provided identity ID. **/
      Credentials?: Credentials;
    }
    export interface GetIdInput {
      /** A standard AWS account ID (9+ digits). **/
      AccountId?: AccountId;
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
      /** A set of optional name-value pairs that map provider names to provider tokens.

The available provider names for Logins are as follows:  &amp;#42; Facebook: graph.facebook.com
* Google: accounts.google.com
* Amazon: www.amazon.com
* Twitter: api.twitter.com
* Digits: www.digits.com **/
      Logins?: LoginsMap;
    }
    export interface GetIdResponse {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId?: IdentityId;
    }
    export interface GetIdentityPoolRolesInput {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
    }
    export interface GetIdentityPoolRolesResponse {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId?: IdentityPoolId;
      /** The map of roles associated with this pool. Currently only authenticated and
unauthenticated roles are supported. **/
      Roles?: RolesMap;
    }
    export interface GetOpenIdTokenForDeveloperIdentityInput {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId?: IdentityId;
      /** A set of optional name-value pairs that map provider names to provider tokens.
Each name-value pair represents a user from a public provider or developer
provider. If the user is from a developer provider, the name-value pair will
follow the syntax &quot;developer_provider_name&quot;: &quot;developer_user_identifier&quot;. The
developer provider is the &quot;domain&quot; by which Cognito will refer to your users;
you provided this domain while creating/updating the identity pool. The
developer user identifier is an identifier from your backend that uniquely
identifies a user. When you create an identity pool, you can specify the
supported logins. **/
      Logins: LoginsMap;
      /** The expiration time of the token, in seconds. You can specify a custom
expiration time for the token so that you can cache it. If you don&#x27;t provide an
expiration time, the token is valid for 15 minutes. You can exchange the token
with Amazon STS for temporary AWS credentials, which are valid for a maximum of
one hour. The maximum token duration you can set is 24 hours. You should take
care in setting the expiration time for a token, as there are significant
security implications: an attacker could use a leaked token to access your AWS
resources for the token&#x27;s duration. **/
      TokenDuration?: TokenDuration;
    }
    export interface GetOpenIdTokenForDeveloperIdentityResponse {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId?: IdentityId;
      /** An OpenID token. **/
      Token?: OIDCToken;
    }
    export interface GetOpenIdTokenInput {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId: IdentityId;
      /** A set of optional name-value pairs that map provider names to provider tokens.
When using graph.facebook.com and www.amazon.com, supply the access_token
returned from the provider&#x27;s authflow. For accounts.google.com or any other
OpenId Connect provider, always include the id_token. **/
      Logins?: LoginsMap;
    }
    export interface GetOpenIdTokenResponse {
      /** A unique identifier in the format REGION:GUID. Note that the IdentityId returned
may not match the one passed on input. **/
      IdentityId?: IdentityId;
      /** An OpenID token, valid for 15 minutes. **/
      Token?: OIDCToken;
    }
    export interface IdentityDescription {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId?: IdentityId;
      /** A set of optional name-value pairs that map provider names to provider tokens. **/
      Logins?: LoginsList;
      /** Date on which the identity was created. **/
      CreationDate?: DateType;
      /** Date on which the identity was last modified. **/
      LastModifiedDate?: DateType;
    }
    export interface IdentityPool {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
      /** A string that you provide. **/
      IdentityPoolName: IdentityPoolName;
      /** TRUE if the identity pool supports unauthenticated logins. **/
      AllowUnauthenticatedIdentities: IdentityPoolUnauthenticated;
      /** Optional key:value pairs mapping provider names to provider app IDs. **/
      SupportedLoginProviders?: IdentityProviders;
      /** The &quot;domain&quot; by which Cognito will refer to your users. **/
      DeveloperProviderName?: DeveloperProviderName;
      /** A list of OpendID Connect provider ARNs. **/
      OpenIdConnectProviderARNs?: OIDCProviderList;
      /** A list representing an Amazon Cognito Identity User Pool and its client ID. **/
      CognitoIdentityProviders?: CognitoIdentityProviderList;
      /** An array of Amazon Resource Names (ARNs) of the SAML provider for your identity
pool. **/
      SamlProviderARNs?: SAMLProviderList;
    }
    export interface IdentityPoolShortDescription {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId?: IdentityPoolId;
      /** A string that you provide. **/
      IdentityPoolName?: IdentityPoolName;
    }
    export interface InternalErrorException {
      /** The message returned by an InternalErrorException. **/
      message?: String;
    }
    export interface InvalidIdentityPoolConfigurationException {
      /** The message returned for an InvalidIdentityPoolConfigurationException **/
      message?: String;
    }
    export interface InvalidParameterException {
      /** The message returned by an InvalidParameterException. **/
      message?: String;
    }
    export interface LimitExceededException {
      /** The message returned by a LimitExceededException. **/
      message?: String;
    }
    export interface ListIdentitiesInput {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
      /** The maximum number of identities to return. **/
      MaxResults: QueryLimit;
      /** A pagination token. **/
      NextToken?: PaginationKey;
      /** An optional boolean parameter that allows you to hide disabled identities. If
omitted, the ListIdentities API will include disabled identities in the
response. **/
      HideDisabled?: HideDisabled;
    }
    export interface ListIdentitiesResponse {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId?: IdentityPoolId;
      /** An object containing a set of identities and associated mappings. **/
      Identities?: IdentitiesList;
      /** A pagination token. **/
      NextToken?: PaginationKey;
    }
    export interface ListIdentityPoolsInput {
      /** The maximum number of identities to return. **/
      MaxResults: QueryLimit;
      /** A pagination token. **/
      NextToken?: PaginationKey;
    }
    export interface ListIdentityPoolsResponse {
      /** The identity pools returned by the ListIdentityPools action. **/
      IdentityPools?: IdentityPoolsList;
      /** A pagination token. **/
      NextToken?: PaginationKey;
    }
    export interface LookupDeveloperIdentityInput {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId?: IdentityId;
      /** A unique ID used by your backend authentication process to identify a user.
Typically, a developer identity provider would issue many developer user
identifiers, in keeping with the number of users. **/
      DeveloperUserIdentifier?: DeveloperUserIdentifier;
      /** The maximum number of identities to return. **/
      MaxResults?: QueryLimit;
      /** A pagination token. The first call you make will have NextToken set to null.
After that the service will return NextToken values as needed. For example,
let&#x27;s say you make a request with MaxResults set to 10, and there are 20 matches
in the database. The service will return a pagination token as a part of the
response. This token can be used to call the API again and get results starting
from the 11th match. **/
      NextToken?: PaginationKey;
    }
    export interface LookupDeveloperIdentityResponse {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId?: IdentityId;
      /** This is the list of developer user identifiers associated with an identity ID.
Cognito supports the association of multiple developer user identifiers with an
identity ID. **/
      DeveloperUserIdentifierList?: DeveloperUserIdentifierList;
      /** A pagination token. The first call you make will have NextToken set to null.
After that the service will return NextToken values as needed. For example,
let&#x27;s say you make a request with MaxResults set to 10, and there are 20 matches
in the database. The service will return a pagination token as a part of the
response. This token can be used to call the API again and get results starting
from the 11th match. **/
      NextToken?: PaginationKey;
    }
    export interface MergeDeveloperIdentitiesInput {
      /** User identifier for the source user. The value should be a 
DeveloperUserIdentifier. **/
      SourceUserIdentifier: DeveloperUserIdentifier;
      /** User identifier for the destination user. The value should be a 
DeveloperUserIdentifier. **/
      DestinationUserIdentifier: DeveloperUserIdentifier;
      /** The &quot;domain&quot; by which Cognito will refer to your users. This is a (pseudo)
domain name that you provide while creating an identity pool. This name acts as
a placeholder that allows your backend and the Cognito service to communicate
about the developer provider. For the DeveloperProviderName, you can use letters
as well as period (.), underscore (_), and dash (-). **/
      DeveloperProviderName: DeveloperProviderName;
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
    }
    export interface MergeDeveloperIdentitiesResponse {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId?: IdentityId;
    }
    export interface NotAuthorizedException {
      /** The message returned by a NotAuthorizedException **/
      message?: String;
    }
    export interface ResourceConflictException {
      /** The message returned by a ResourceConflictException. **/
      message?: String;
    }
    export interface ResourceNotFoundException {
      /** The message returned by a ResourceNotFoundException. **/
      message?: String;
    }
    export interface SetIdentityPoolRolesInput {
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
      /** The map of roles associated with this pool. For a given role, the key will be
either &quot;authenticated&quot; or &quot;unauthenticated&quot; and the value will be the Role ARN. **/
      Roles: RolesMap;
    }
    export interface TooManyRequestsException {
      /** Message returned by a TooManyRequestsException **/
      message?: String;
    }
    export interface UnlinkDeveloperIdentityInput {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId: IdentityId;
      /** An identity pool ID in the format REGION:GUID. **/
      IdentityPoolId: IdentityPoolId;
      /** The &quot;domain&quot; by which Cognito will refer to your users. **/
      DeveloperProviderName: DeveloperProviderName;
      /** A unique ID used by your backend authentication process to identify a user. **/
      DeveloperUserIdentifier: DeveloperUserIdentifier;
    }
    export interface UnlinkIdentityInput {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId: IdentityId;
      /** A set of optional name-value pairs that map provider names to provider tokens. **/
      Logins: LoginsMap;
      /** Provider names to unlink from this identity. **/
      LoginsToRemove: LoginsList;
    }
    export interface UnprocessedIdentityId {
      /** A unique identifier in the format REGION:GUID. **/
      IdentityId?: IdentityId;
      /** The error code indicating the type of error that occurred. **/
      ErrorCode?: ErrorCode;
    }
  }
}
