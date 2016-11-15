// Type definitions for aws-sdk - Amazon Cognito Identity Provider
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-04-18
   * endpointPrefix: cognito-idp
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * Using the Amazon Cognito Your User Pools API, you can create a user pool to
manage directories and users. You can authenticate a user to obtain tokens
related to user identity and access policies.

This API reference provides information about user pools in Amazon Cognito Your
User Pools.

For more information, see the Amazon Cognito Documentation.
   *
   */
  export class CognitoIdentityServiceProvider extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds additional user attributes to the user pool schema.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserImportInProgressException   
     * @error InternalErrorException   
     */
    addCustomAttributes(params: CognitoIdentityServiceProvider.AddCustomAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserImportInProgressException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AddCustomAttributesResponse|any) => void): Request<CognitoIdentityServiceProvider.AddCustomAttributesResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserImportInProgressException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Confirms user registration as an admin without using a confirmation code. Works
on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error NotAuthorizedException   
     * @error TooManyFailedAttemptsException   
     * @error InvalidLambdaResponseException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminConfirmSignUp(params: CognitoIdentityServiceProvider.AdminConfirmSignUpRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyFailedAttemptsException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminConfirmSignUpResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminConfirmSignUpResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyFailedAttemptsException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Creates a new user in the specified user pool and sends a welcome message via
email or phone (SMS). This message is based on a template that you configured in
your call to CreateUserPool or UpdateUserPool. This template includes your
custom sign-up instructions and placeholders for user name and temporary
password.

Requires developer credentials.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error UserNotFoundException   
     * @error UsernameExistsException   
     * @error InvalidPasswordException   
     * @error CodeDeliveryFailureException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error InvalidLambdaResponseException   
     * @error PreconditionNotMetException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UnsupportedUserStateException   
     * @error InternalErrorException   
     */
    adminCreateUser(params: CognitoIdentityServiceProvider.AdminCreateUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UsernameExistsException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.PreconditionNotMetException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UnsupportedUserStateException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminCreateUserResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminCreateUserResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UsernameExistsException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.PreconditionNotMetException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UnsupportedUserStateException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Deletes a user as an administrator. Works on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminDeleteUser(params: CognitoIdentityServiceProvider.AdminDeleteUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: any) => void): Request<any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Deletes the user attributes in a user pool as an administrator. Works on any
user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminDeleteUserAttributes(params: CognitoIdentityServiceProvider.AdminDeleteUserAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminDeleteUserAttributesResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminDeleteUserAttributesResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Disables the specified user as an administrator. Works on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminDisableUser(params: CognitoIdentityServiceProvider.AdminDisableUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminDisableUserResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminDisableUserResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Enables the specified user as an administrator. Works on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminEnableUser(params: CognitoIdentityServiceProvider.AdminEnableUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminEnableUserResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminEnableUserResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Forgets the device, as an administrator.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidUserPoolConfigurationException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminForgetDevice(params: CognitoIdentityServiceProvider.AdminForgetDeviceRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: any) => void): Request<any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Gets the device, as an administrator.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidUserPoolConfigurationException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error NotAuthorizedException   
     */
    adminGetDevice(params: CognitoIdentityServiceProvider.AdminGetDeviceRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.NotAuthorizedException|any, data: CognitoIdentityServiceProvider.AdminGetDeviceResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminGetDeviceResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.NotAuthorizedException|any>;
    /**
     * Gets the specified user by user name in a user pool as an administrator. Works
on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminGetUser(params: CognitoIdentityServiceProvider.AdminGetUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminGetUserResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminGetUserResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Initiates the authentication flow, as an administrator.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error UnexpectedLambdaException   
     * @error InvalidUserPoolConfigurationException   
     * @error UserLambdaValidationException   
     * @error InvalidLambdaResponseException   
     * @error MFAMethodNotFoundException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     */
    adminInitiateAuth(params: CognitoIdentityServiceProvider.AdminInitiateAuthRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.MFAMethodNotFoundException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|any, data: CognitoIdentityServiceProvider.AdminInitiateAuthResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminInitiateAuthResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.MFAMethodNotFoundException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|any>;
    /**
     * Lists devices, as an administrator.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error InvalidUserPoolConfigurationException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error NotAuthorizedException   
     */
    adminListDevices(params: CognitoIdentityServiceProvider.AdminListDevicesRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.NotAuthorizedException|any, data: CognitoIdentityServiceProvider.AdminListDevicesResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminListDevicesResponse|any,CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.NotAuthorizedException|any>;
    /**
     * Resets the specified user&#x27;s password in a user pool as an administrator. Works
on any user.

When a developer calls this API, the current password is invalidated, so it must
be changed. If a user tries to sign in after the API is called, the app will get
a PasswordResetRequiredException exception back and should direct the user down
the flow to reset the password, which is the same as the forgot password flow.
In addition, if the user pool has phone verification selected and a verified
phone number exists for the user, or if email verification is selected and a
verified email exists for the user, calling this API will also result in sending
a message to the end user with the code to change their password.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error NotAuthorizedException   
     * @error InvalidLambdaResponseException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminResetUserPassword(params: CognitoIdentityServiceProvider.AdminResetUserPasswordRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminResetUserPasswordResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminResetUserPasswordResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Responds to an authentication challenge, as an administrator.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error CodeMismatchException   
     * @error ExpiredCodeException   
     * @error UnexpectedLambdaException   
     * @error InvalidPasswordException   
     * @error UserLambdaValidationException   
     * @error InvalidLambdaResponseException   
     * @error TooManyRequestsException   
     * @error InvalidUserPoolConfigurationException   
     * @error InternalErrorException   
     * @error MFAMethodNotFoundException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error AliasExistsException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     */
    adminRespondToAuthChallenge(params: CognitoIdentityServiceProvider.AdminRespondToAuthChallengeRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.MFAMethodNotFoundException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|any, data: CognitoIdentityServiceProvider.AdminRespondToAuthChallengeResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminRespondToAuthChallengeResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.MFAMethodNotFoundException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|any>;
    /**
     * Sets all the user settings for a specified user name. Works on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminSetUserSettings(params: CognitoIdentityServiceProvider.AdminSetUserSettingsRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminSetUserSettingsResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminSetUserSettingsResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Updates the device status as an administrator.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error InvalidUserPoolConfigurationException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminUpdateDeviceStatus(params: CognitoIdentityServiceProvider.AdminUpdateDeviceStatusRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminUpdateDeviceStatusResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminUpdateDeviceStatusResponse|any,CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Updates the specified user&#x27;s attributes, including developer attributes, as an
administrator. Works on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error InvalidLambdaResponseException   
     * @error AliasExistsException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminUpdateUserAttributes(params: CognitoIdentityServiceProvider.AdminUpdateUserAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminUpdateUserAttributesResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminUpdateUserAttributesResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Signs out users from all devices, as an administrator.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    adminUserGlobalSignOut(params: CognitoIdentityServiceProvider.AdminUserGlobalSignOutRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.AdminUserGlobalSignOutResponse|any) => void): Request<CognitoIdentityServiceProvider.AdminUserGlobalSignOutResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Changes the password for a specified user in a user pool.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidPasswordException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    changePassword(params: CognitoIdentityServiceProvider.ChangePasswordRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ChangePasswordResponse|any) => void): Request<CognitoIdentityServiceProvider.ChangePasswordResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Confirms tracking of the device. This API call is the call that beings device
tracking.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error InvalidPasswordException   
     * @error InvalidLambdaResponseException   
     * @error UsernameExistsException   
     * @error InvalidUserPoolConfigurationException   
     * @error TooManyRequestsException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    confirmDevice(params: CognitoIdentityServiceProvider.ConfirmDeviceRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.UsernameExistsException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ConfirmDeviceResponse|any) => void): Request<CognitoIdentityServiceProvider.ConfirmDeviceResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.UsernameExistsException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Allows a user to enter a code provided when they reset their password to update
their password.
     *
     * @error ResourceNotFoundException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error InvalidParameterException   
     * @error InvalidPasswordException   
     * @error NotAuthorizedException   
     * @error CodeMismatchException   
     * @error ExpiredCodeException   
     * @error TooManyFailedAttemptsException   
     * @error InvalidLambdaResponseException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    confirmForgotPassword(params: CognitoIdentityServiceProvider.ConfirmForgotPasswordRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.TooManyFailedAttemptsException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ConfirmForgotPasswordResponse|any) => void): Request<CognitoIdentityServiceProvider.ConfirmForgotPasswordResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.TooManyFailedAttemptsException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Confirms registration of a user and handles the existing alias from a previous
user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error NotAuthorizedException   
     * @error TooManyFailedAttemptsException   
     * @error CodeMismatchException   
     * @error ExpiredCodeException   
     * @error InvalidLambdaResponseException   
     * @error AliasExistsException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    confirmSignUp(params: CognitoIdentityServiceProvider.ConfirmSignUpRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyFailedAttemptsException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ConfirmSignUpResponse|any) => void): Request<CognitoIdentityServiceProvider.ConfirmSignUpResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyFailedAttemptsException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Creates the user import job.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error PreconditionNotMetException   
     * @error NotAuthorizedException   
     * @error LimitExceededException   
     * @error InternalErrorException   
     */
    createUserImportJob(params: CognitoIdentityServiceProvider.CreateUserImportJobRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PreconditionNotMetException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.CreateUserImportJobResponse|any) => void): Request<CognitoIdentityServiceProvider.CreateUserImportJobResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PreconditionNotMetException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Creates a new Amazon Cognito user pool and sets the password policy for the
pool.
     *
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error InvalidEmailRoleAccessPolicyException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    createUserPool(params: CognitoIdentityServiceProvider.CreateUserPoolRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.CreateUserPoolResponse|any) => void): Request<CognitoIdentityServiceProvider.CreateUserPoolResponse|any,CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Creates the user pool client.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    createUserPoolClient(params: CognitoIdentityServiceProvider.CreateUserPoolClientRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.CreateUserPoolClientResponse|any) => void): Request<CognitoIdentityServiceProvider.CreateUserPoolClientResponse|any,CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Allows a user to delete one&#x27;s self.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    deleteUser(params: CognitoIdentityServiceProvider.DeleteUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: any) => void): Request<any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Deletes the attributes for a user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    deleteUserAttributes(params: CognitoIdentityServiceProvider.DeleteUserAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.DeleteUserAttributesResponse|any) => void): Request<CognitoIdentityServiceProvider.DeleteUserAttributesResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Deletes the specified Amazon Cognito user pool.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserImportInProgressException   
     * @error InternalErrorException   
     */
    deleteUserPool(params: CognitoIdentityServiceProvider.DeleteUserPoolRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserImportInProgressException|CognitoIdentityServiceProvider.InternalErrorException|any, data: any) => void): Request<any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserImportInProgressException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Allows the developer to delete the user pool client.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    deleteUserPoolClient(params: CognitoIdentityServiceProvider.DeleteUserPoolClientRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: any) => void): Request<any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Describes the user import job.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    describeUserImportJob(params: CognitoIdentityServiceProvider.DescribeUserImportJobRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.DescribeUserImportJobResponse|any) => void): Request<CognitoIdentityServiceProvider.DescribeUserImportJobResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Returns the configuration information and metadata of the specified user pool.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    describeUserPool(params: CognitoIdentityServiceProvider.DescribeUserPoolRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.DescribeUserPoolResponse|any) => void): Request<CognitoIdentityServiceProvider.DescribeUserPoolResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Client method for returning the configuration information and metadata of the
specified user pool client.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    describeUserPoolClient(params: CognitoIdentityServiceProvider.DescribeUserPoolClientRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.DescribeUserPoolClientResponse|any) => void): Request<CognitoIdentityServiceProvider.DescribeUserPoolClientResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Forgets the specified device.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InvalidUserPoolConfigurationException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    forgetDevice(params: CognitoIdentityServiceProvider.ForgetDeviceRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: any) => void): Request<any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Retrieves the password for the specified client ID or username.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error NotAuthorizedException   
     * @error InvalidLambdaResponseException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error InvalidEmailRoleAccessPolicyException   
     * @error CodeDeliveryFailureException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    forgotPassword(params: CognitoIdentityServiceProvider.ForgotPasswordRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ForgotPasswordResponse|any) => void): Request<CognitoIdentityServiceProvider.ForgotPasswordResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Gets the header information for the .csv file to be used as input for the user
import job.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    getCSVHeader(params: CognitoIdentityServiceProvider.GetCSVHeaderRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.GetCSVHeaderResponse|any) => void): Request<CognitoIdentityServiceProvider.GetCSVHeaderResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Gets the device.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidUserPoolConfigurationException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    getDevice(params: CognitoIdentityServiceProvider.GetDeviceRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.GetDeviceResponse|any) => void): Request<CognitoIdentityServiceProvider.GetDeviceResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Gets the user attributes and metadata for a user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    getUser(params: CognitoIdentityServiceProvider.GetUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.GetUserResponse|any) => void): Request<CognitoIdentityServiceProvider.GetUserResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Gets the user attribute verification code for the specified attribute name.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error InvalidLambdaResponseException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error InvalidEmailRoleAccessPolicyException   
     * @error CodeDeliveryFailureException   
     * @error LimitExceededException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    getUserAttributeVerificationCode(params: CognitoIdentityServiceProvider.GetUserAttributeVerificationCodeRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.GetUserAttributeVerificationCodeResponse|any) => void): Request<CognitoIdentityServiceProvider.GetUserAttributeVerificationCodeResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Signs out users from all devices.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error PasswordResetRequiredException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    globalSignOut(params: CognitoIdentityServiceProvider.GlobalSignOutRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.GlobalSignOutResponse|any) => void): Request<CognitoIdentityServiceProvider.GlobalSignOutResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Initiates the authentication flow.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error UnexpectedLambdaException   
     * @error InvalidUserPoolConfigurationException   
     * @error UserLambdaValidationException   
     * @error InvalidLambdaResponseException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    initiateAuth(params: CognitoIdentityServiceProvider.InitiateAuthRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.InitiateAuthResponse|any) => void): Request<CognitoIdentityServiceProvider.InitiateAuthResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Lists the devices.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error InvalidUserPoolConfigurationException   
     * @error TooManyRequestsException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    listDevices(params: CognitoIdentityServiceProvider.ListDevicesRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ListDevicesResponse|any) => void): Request<CognitoIdentityServiceProvider.ListDevicesResponse|any,CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Lists the user import jobs.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    listUserImportJobs(params: CognitoIdentityServiceProvider.ListUserImportJobsRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ListUserImportJobsResponse|any) => void): Request<CognitoIdentityServiceProvider.ListUserImportJobsResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Lists the clients that have been created for the specified user pool.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    listUserPoolClients(params: CognitoIdentityServiceProvider.ListUserPoolClientsRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ListUserPoolClientsResponse|any) => void): Request<CognitoIdentityServiceProvider.ListUserPoolClientsResponse|any,CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Lists the user pools associated with an AWS account.
     *
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    listUserPools(params: CognitoIdentityServiceProvider.ListUserPoolsRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ListUserPoolsResponse|any) => void): Request<CognitoIdentityServiceProvider.ListUserPoolsResponse|any,CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Lists the users in the Amazon Cognito user pool.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    listUsers(params: CognitoIdentityServiceProvider.ListUsersRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ListUsersResponse|any) => void): Request<CognitoIdentityServiceProvider.ListUsersResponse|any,CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Resends the confirmation (for confirmation of registration) to a specific user
in the user pool.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error NotAuthorizedException   
     * @error InvalidLambdaResponseException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error InvalidEmailRoleAccessPolicyException   
     * @error CodeDeliveryFailureException   
     * @error UserNotFoundException   
     * @error InternalErrorException   
     */
    resendConfirmationCode(params: CognitoIdentityServiceProvider.ResendConfirmationCodeRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.ResendConfirmationCodeResponse|any) => void): Request<CognitoIdentityServiceProvider.ResendConfirmationCodeResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Responds to the authentication challenge.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error CodeMismatchException   
     * @error ExpiredCodeException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error InvalidPasswordException   
     * @error InvalidLambdaResponseException   
     * @error TooManyRequestsException   
     * @error InvalidUserPoolConfigurationException   
     * @error MFAMethodNotFoundException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error AliasExistsException   
     * @error InternalErrorException   
     */
    respondToAuthChallenge(params: CognitoIdentityServiceProvider.RespondToAuthChallengeRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.MFAMethodNotFoundException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.RespondToAuthChallengeResponse|any) => void): Request<CognitoIdentityServiceProvider.RespondToAuthChallengeResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.MFAMethodNotFoundException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Sets the user settings like multi-factor authentication (MFA). If MFA is to be
removed for a particular attribute pass the attribute with code delivery as
null. If null list is passed, all MFA options are removed.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    setUserSettings(params: CognitoIdentityServiceProvider.SetUserSettingsRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.SetUserSettingsResponse|any) => void): Request<CognitoIdentityServiceProvider.SetUserSettingsResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Registers the user in the specified user pool and creates a user name, password,
and user attributes.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error NotAuthorizedException   
     * @error InvalidPasswordException   
     * @error InvalidLambdaResponseException   
     * @error UsernameExistsException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error InvalidEmailRoleAccessPolicyException   
     * @error CodeDeliveryFailureException   
     */
    signUp(params: CognitoIdentityServiceProvider.SignUpRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.UsernameExistsException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|any, data: CognitoIdentityServiceProvider.SignUpResponse|any) => void): Request<CognitoIdentityServiceProvider.SignUpResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidPasswordException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.UsernameExistsException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|any>;
    /**
     * Starts the user import.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error PreconditionNotMetException   
     * @error NotAuthorizedException   
     */
    startUserImportJob(params: CognitoIdentityServiceProvider.StartUserImportJobRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.PreconditionNotMetException|CognitoIdentityServiceProvider.NotAuthorizedException|any, data: CognitoIdentityServiceProvider.StartUserImportJobResponse|any) => void): Request<CognitoIdentityServiceProvider.StartUserImportJobResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.PreconditionNotMetException|CognitoIdentityServiceProvider.NotAuthorizedException|any>;
    /**
     * Stops the user import job.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error PreconditionNotMetException   
     * @error NotAuthorizedException   
     */
    stopUserImportJob(params: CognitoIdentityServiceProvider.StopUserImportJobRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.PreconditionNotMetException|CognitoIdentityServiceProvider.NotAuthorizedException|any, data: CognitoIdentityServiceProvider.StopUserImportJobResponse|any) => void): Request<CognitoIdentityServiceProvider.StopUserImportJobResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.PreconditionNotMetException|CognitoIdentityServiceProvider.NotAuthorizedException|any>;
    /**
     * Updates the device status.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error NotAuthorizedException   
     * @error InvalidUserPoolConfigurationException   
     * @error TooManyRequestsException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    updateDeviceStatus(params: CognitoIdentityServiceProvider.UpdateDeviceStatusRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.UpdateDeviceStatusResponse|any) => void): Request<CognitoIdentityServiceProvider.UpdateDeviceStatusResponse|any,CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InvalidUserPoolConfigurationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Allows a user to update a specific attribute (one at a time).
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error CodeMismatchException   
     * @error ExpiredCodeException   
     * @error NotAuthorizedException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error InvalidLambdaResponseException   
     * @error TooManyRequestsException   
     * @error AliasExistsException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error InvalidEmailRoleAccessPolicyException   
     * @error CodeDeliveryFailureException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    updateUserAttributes(params: CognitoIdentityServiceProvider.UpdateUserAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.UpdateUserAttributesResponse|any) => void): Request<CognitoIdentityServiceProvider.UpdateUserAttributesResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UnexpectedLambdaException|CognitoIdentityServiceProvider.UserLambdaValidationException|CognitoIdentityServiceProvider.InvalidLambdaResponseException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.AliasExistsException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|CognitoIdentityServiceProvider.CodeDeliveryFailureException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Updates the specified user pool with the specified attributes.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error ConcurrentModificationException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error UserImportInProgressException   
     * @error InternalErrorException   
     * @error InvalidSmsRoleAccessPolicyException   
     * @error InvalidSmsRoleTrustRelationshipException   
     * @error InvalidEmailRoleAccessPolicyException   
     */
    updateUserPool(params: CognitoIdentityServiceProvider.UpdateUserPoolRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ConcurrentModificationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserImportInProgressException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|any, data: CognitoIdentityServiceProvider.UpdateUserPoolResponse|any) => void): Request<CognitoIdentityServiceProvider.UpdateUserPoolResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.ConcurrentModificationException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.UserImportInProgressException|CognitoIdentityServiceProvider.InternalErrorException|CognitoIdentityServiceProvider.InvalidSmsRoleAccessPolicyException|CognitoIdentityServiceProvider.InvalidSmsRoleTrustRelationshipException|CognitoIdentityServiceProvider.InvalidEmailRoleAccessPolicyException|any>;
    /**
     * Allows the developer to update the specified user pool client and password
policy.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error NotAuthorizedException   
     * @error InternalErrorException   
     */
    updateUserPoolClient(params: CognitoIdentityServiceProvider.UpdateUserPoolClientRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.UpdateUserPoolClientResponse|any) => void): Request<CognitoIdentityServiceProvider.UpdateUserPoolClientResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.InternalErrorException|any>;
    /**
     * Verifies the specified user attributes in the user pool.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error CodeMismatchException   
     * @error ExpiredCodeException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error PasswordResetRequiredException   
     * @error UserNotFoundException   
     * @error UserNotConfirmedException   
     * @error InternalErrorException   
     */
    verifyUserAttribute(params: CognitoIdentityServiceProvider.VerifyUserAttributeRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any, data: CognitoIdentityServiceProvider.VerifyUserAttributeResponse|any) => void): Request<CognitoIdentityServiceProvider.VerifyUserAttributeResponse|any,CognitoIdentityServiceProvider.ResourceNotFoundException|CognitoIdentityServiceProvider.InvalidParameterException|CognitoIdentityServiceProvider.CodeMismatchException|CognitoIdentityServiceProvider.ExpiredCodeException|CognitoIdentityServiceProvider.NotAuthorizedException|CognitoIdentityServiceProvider.TooManyRequestsException|CognitoIdentityServiceProvider.LimitExceededException|CognitoIdentityServiceProvider.PasswordResetRequiredException|CognitoIdentityServiceProvider.UserNotFoundException|CognitoIdentityServiceProvider.UserNotConfirmedException|CognitoIdentityServiceProvider.InternalErrorException|any>;

  }

  export module CognitoIdentityServiceProvider {
    
    export type AdminCreateUserUnusedAccountValidityDaysType = number;
    
    export type AliasAttributeType = string;
    
    export type AliasAttributesListType = AliasAttributeType[];
    
    export type ArnType = string;
    
    export type AttributeDataType = string;
    
    export type AttributeListType = AttributeType[];
    
    export type AttributeNameListType = AttributeNameType[];
    
    export type AttributeNameType = string;
    
    export type AttributeValueType = string;
    
    export type AuthFlowType = string;
    
    export type AuthParametersType = {[key:string]: StringType};
    
    export type BooleanType = boolean;
    
    export type ChallengeNameType = string;
    
    export type ChallengeParametersType = {[key:string]: StringType};
    
    export type ChallengeResponsesType = {[key:string]: StringType};
    
    export type ClientIdType = string;
    
    export type ClientMetadataType = {[key:string]: StringType};
    
    export type ClientNameType = string;
    
    export type ClientPermissionListType = ClientPermissionType[];
    
    export type ClientPermissionType = string;
    
    export type ClientSecretType = string;
    
    export type CodeDeliveryDetailsListType = CodeDeliveryDetailsType[];
    
    export type CompletionMessageType = string;
    
    export type ConfirmationCodeType = string;
    
    export type CustomAttributeNameType = string;
    
    export type CustomAttributesListType = SchemaAttributeType[];
    
    export type DateType = number;
    
    export type DeliveryMediumListType = DeliveryMediumType[];
    
    export type DeliveryMediumType = string;
    
    export type DeviceKeyType = string;
    
    export type DeviceListType = DeviceType[];
    
    export type DeviceNameType = string;
    
    export type DeviceRememberedStatusType = string;
    
    export type EmailAddressType = string;
    
    export type EmailVerificationMessageType = string;
    
    export type EmailVerificationSubjectType = string;
    
    export type ExplicitAuthFlowsListType = ExplicitAuthFlowsType[];
    
    export type ExplicitAuthFlowsType = string;
    
    export type ForceAliasCreation = boolean;
    
    export type GenerateSecret = boolean;
    
    export type IntegerType = number;
    
    export type ListOfStringTypes = StringType[];
    
    export type LongType = number;
    
    export type MFAOptionListType = MFAOptionType[];
    
    export type MessageActionType = string;
    
    export type MessageType = string;
    
    export type PaginationKey = string;
    
    export type PaginationKeyType = string;
    
    export type PasswordPolicyMinLengthType = number;
    
    export type PasswordType = string;
    
    export type PoolQueryLimitType = number;
    
    export type PreSignedUrlType = string;
    
    export type QueryLimit = number;
    
    export type QueryLimitType = number;
    
    export type RefreshTokenValidityType = number;
    
    export type SchemaAttributesListType = SchemaAttributeType[];
    
    export type SearchPaginationTokenType = string;
    
    export type SearchedAttributeNamesListType = AttributeNameType[];
    
    export type SecretHashType = string;
    
    export type SessionType = string;
    
    export type SmsVerificationMessageType = string;
    
    export type StatusType = string;
    
    export type StringType = string;
    
    export type TokenModelType = string;
    
    export type UserFilterType = string;
    
    export type UserImportJobIdType = string;
    
    export type UserImportJobNameType = string;
    
    export type UserImportJobStatusType = string;
    
    export type UserImportJobsListType = UserImportJobType[];
    
    export type UserPoolClientListType = UserPoolClientDescription[];
    
    export type UserPoolIdType = string;
    
    export type UserPoolListType = UserPoolDescriptionType[];
    
    export type UserPoolMfaType = string;
    
    export type UserPoolNameType = string;
    
    export type UserStatusType = string;
    
    export type UsernameType = string;
    
    export type UsersListType = UserType[];
    
    export type VerifiedAttributeType = string;
    
    export type VerifiedAttributesListType = VerifiedAttributeType[];

    export interface AddCustomAttributesRequest {
        /** The user pool ID for the user pool where you want to add custom attributes. **/
        UserPoolId: UserPoolIdType;
        /** An array of custom attributes, such as Mutable and Name. **/
        CustomAttributes: CustomAttributesListType;
    }
    export interface AddCustomAttributesResponse {
    }
    export interface AdminConfirmSignUpRequest {
        /** The user pool ID for which you want to confirm user registration. **/
        UserPoolId: UserPoolIdType;
        /** The user name for which you want to confirm user registration. **/
        Username: UsernameType;
    }
    export interface AdminConfirmSignUpResponse {
    }
    export interface AdminCreateUserConfigType {
        /** Set to True if only the administrator is allowed to create user profiles. Set to
False if users can sign themselves up via an app. **/
        AllowAdminCreateUserOnly?: BooleanType;
        /** The user account expiration limit, in days, after which the account is no longer
usable. To reset the account after that time limit, you must call
AdminCreateUser again, specifying &quot;RESEND&quot; for the MessageAction parameter. **/
        UnusedAccountValidityDays?: AdminCreateUserUnusedAccountValidityDaysType;
        /** The message template to be used for the welcome message to new users. **/
        InviteMessageTemplate?: MessageTemplateType;
    }
    export interface AdminCreateUserRequest {
        /** The user pool ID for the user pool where the user will be created. **/
        UserPoolId: UserPoolIdType;
        /** The username for the user. Must be unique within the user pool. Must be a UTF-8
string between 1 and 128 characters. After the user is created, the username
cannot be changed. **/
        Username: UsernameType;
        /** An array of name-value pairs that contain user attributes and attribute values
to be set for the user to be created. You can create a user without specifying
any attributes other than Username. However, any attributes that you specify as
required (in CreateUserPool or in the Attributes tab of the console) must be
supplied either by you (in your call to AdminCreateUser) or by the user (when he
or she signs up in response to your welcome message).

To send a message inviting the user to sign up, you must specify the user&#x27;s
email address or phone number. This can be done in your call to AdminCreateUser
or in the Users tab of the Amazon Cognito console for managing your user pools.

In your call to AdminCreateUser, you can set the email_verified attribute to
True, and you can set the phone_number_verified attribute to True. (You cannot
do this by calling other operations such as AdminUpdateUserAttributes.)

 &amp;#42; email : The email address of the user to whom the message that contains the
   code and username will be sent. Required if the email_verified attribute is
   set to True, or if &quot;EMAIL&quot; is specified in the DesiredDeliveryMediums
   parameter.
   
   
 * phone_number : The phone number of the user to whom the message that contains
   the code and username will be sent. Required if the phone_number_verified
   attribute is set to True, or if &quot;SMS&quot; is specified in the
   DesiredDeliveryMediums parameter. **/
        UserAttributes?: AttributeListType;
        /** The user&#x27;s validation data. This is an array of name-value pairs that contain
user attributes and attribute values that you can use for custom validation,
such as restricting the types of user accounts that can be registered. For
example, you might choose to allow or disallow user sign-up based on the user&#x27;s
domain.

To configure custom validation, you must create a Pre Sign-up Lambda trigger for
the user pool as described in the Amazon Cognito Developer Guide. The Lambda
trigger receives the validation data and uses it in the validation process.

The user&#x27;s validation data is not persisted. **/
        ValidationData?: AttributeListType;
        /** The user&#x27;s temporary password. This password must conform to the password policy
that you specified when you created the user pool.

The temporary password is valid only once. To complete the Admin Create User
flow, the user must enter the temporary password in the sign-in page along with
a new password to be used in all future sign-ins.

This parameter is not required. If you do not specify a value, Amazon Cognito
generates one for you.

The temporary password can only be used until the user account expiration limit
that you specified when you created the user pool. To reset the account after
that time limit, you must call AdminCreateUser again, specifying &quot;RESEND&quot; for
the MessageAction parameter. **/
        TemporaryPassword?: PasswordType;
        /** This parameter is only used if the phone_number_verified or email_verified
attribute is set to True. Otherwise, it is ignored.

If this parameter is set to True and the phone number or email address specified
in the UserAttributes parameter already exists as an alias with a different
user, the API call will migrate the alias from the previous user to the newly
created user. The previous user will no longer be able to log in using that
alias.

If this parameter is set to False, the API throws an AliasExistsException error
if the alias already exists. The default value is False. **/
        ForceAliasCreation?: ForceAliasCreation;
        /** Set to &quot;RESEND&quot; to resend the invitation message to a user that already exists
and reset the expiration limit on the user&#x27;s account. Set to &quot;SUPPRESS&quot; to
suppress sending the message. Only one value can be specified. **/
        MessageAction?: MessageActionType;
        /** Specify &quot;EMAIL&quot; if email will be used to send the welcome message. Specify &quot;SMS&quot;
if the phone number will be used. The default value is &quot;SMS&quot;. More than one
value can be specified. **/
        DesiredDeliveryMediums?: DeliveryMediumListType;
    }
    export interface AdminCreateUserResponse {
        /** The user returned in the request to create a new user. **/
        User?: UserType;
    }
    export interface AdminDeleteUserAttributesRequest {
        /** The user pool ID for the user pool where you want to delete user attributes. **/
        UserPoolId: UserPoolIdType;
        /** The user name of the user from which you would like to delete attributes. **/
        Username: UsernameType;
        /** An array of strings representing the user attribute names you wish to delete. **/
        UserAttributeNames: AttributeNameListType;
    }
    export interface AdminDeleteUserAttributesResponse {
    }
    export interface AdminDeleteUserRequest {
        /** The user pool ID for the user pool where you want to delete the user. **/
        UserPoolId: UserPoolIdType;
        /** The user name of the user you wish to delete. **/
        Username: UsernameType;
    }
    export interface AdminDisableUserRequest {
        /** The user pool ID for the user pool where you want to disable the user. **/
        UserPoolId: UserPoolIdType;
        /** The user name of the user you wish to disable. **/
        Username: UsernameType;
    }
    export interface AdminDisableUserResponse {
    }
    export interface AdminEnableUserRequest {
        /** The user pool ID for the user pool where you want to enable the user. **/
        UserPoolId: UserPoolIdType;
        /** The user name of the user you wish to ebable. **/
        Username: UsernameType;
    }
    export interface AdminEnableUserResponse {
    }
    export interface AdminForgetDeviceRequest {
        /** The user pool ID. **/
        UserPoolId: UserPoolIdType;
        /** The user name. **/
        Username: UsernameType;
        /** The device key. **/
        DeviceKey: DeviceKeyType;
    }
    export interface AdminGetDeviceRequest {
        /** The device key. **/
        DeviceKey: DeviceKeyType;
        /** The user pool ID. **/
        UserPoolId: UserPoolIdType;
        /** The user name. **/
        Username: UsernameType;
    }
    export interface AdminGetDeviceResponse {
        /** The device. **/
        Device: DeviceType;
    }
    export interface AdminGetUserRequest {
        /** The user pool ID for the user pool where you want to get information about the
user. **/
        UserPoolId: UserPoolIdType;
        /** The user name of the user you wish to retrieve. **/
        Username: UsernameType;
    }
    export interface AdminGetUserResponse {
        /** The user name of the user about whom you are receiving information. **/
        Username: UsernameType;
        /** An array of name-value pairs representing user attributes. **/
        UserAttributes?: AttributeListType;
        /** The date the user was created. **/
        UserCreateDate?: DateType;
        /** The date the user was last modified. **/
        UserLastModifiedDate?: DateType;
        /** Indicates that the status is enabled. **/
        Enabled?: BooleanType;
        /** The user status. Can be one of the following:

 &amp;#42; UNCONFIRMED - User has been created but not confirmed.
   
   
 * CONFIRMED - User has been confirmed.
   
   
 * ARCHIVED - User is no longer active.
   
   
 * COMPROMISED - User is disabled due to a potential security threat.
   
   
 * UNKNOWN - User status is not known. **/
        UserStatus?: UserStatusType;
        /** Specifies the options for MFA (e.g., email or phone number). **/
        MFAOptions?: MFAOptionListType;
    }
    export interface AdminInitiateAuthRequest {
        /** The ID of the Amazon Cognito user pool. **/
        UserPoolId: UserPoolIdType;
        /** The client app ID. **/
        ClientId: ClientIdType;
        /** The authentication flow. **/
        AuthFlow: AuthFlowType;
        /** The authentication parameters. **/
        AuthParameters?: AuthParametersType;
        /** The client app metadata. **/
        ClientMetadata?: ClientMetadataType;
    }
    export interface AdminInitiateAuthResponse {
        /** The name of the challenge. **/
        ChallengeName?: ChallengeNameType;
        /** The session. **/
        Session?: SessionType;
        /** The challenge parameters. **/
        ChallengeParameters?: ChallengeParametersType;
        /** The result of the authentication response. **/
        AuthenticationResult?: AuthenticationResultType;
    }
    export interface AdminListDevicesRequest {
        /** The user pool ID. **/
        UserPoolId: UserPoolIdType;
        /** The user name. **/
        Username: UsernameType;
        /** The limit of the devices request. **/
        Limit?: QueryLimitType;
        /** The pagination token. **/
        PaginationToken?: SearchPaginationTokenType;
    }
    export interface AdminListDevicesResponse {
        /** The devices in the list of devices response. **/
        Devices?: DeviceListType;
        /** The pagination token. **/
        PaginationToken?: SearchPaginationTokenType;
    }
    export interface AdminResetUserPasswordRequest {
        /** The user pool ID for the user pool where you want to reset the user&#x27;s password. **/
        UserPoolId: UserPoolIdType;
        /** The user name of the user whose password you wish to reset. **/
        Username: UsernameType;
    }
    export interface AdminResetUserPasswordResponse {
    }
    export interface AdminRespondToAuthChallengeRequest {
        /** The ID of the Amazon Cognito user pool. **/
        UserPoolId: UserPoolIdType;
        /** The client ID. **/
        ClientId: ClientIdType;
        /** The name of the challenge. **/
        ChallengeName: ChallengeNameType;
        /** The challenge response. **/
        ChallengeResponses?: ChallengeResponsesType;
        /** The session. **/
        Session?: SessionType;
    }
    export interface AdminRespondToAuthChallengeResponse {
        /** The name of the challenge. **/
        ChallengeName?: ChallengeNameType;
        /** The session. **/
        Session?: SessionType;
        /** The challenge parameters. **/
        ChallengeParameters?: ChallengeParametersType;
        /** The result returned by the server in response to the authentication request. **/
        AuthenticationResult?: AuthenticationResultType;
    }
    export interface AdminSetUserSettingsRequest {
        /** The user pool ID for the user pool where you want to set the user&#x27;s settings,
such as MFA options. **/
        UserPoolId: UserPoolIdType;
        /** The user name of the user for whom you wish to set user settings. **/
        Username: UsernameType;
        /** Specifies the options for MFA (e.g., email or phone number). **/
        MFAOptions: MFAOptionListType;
    }
    export interface AdminSetUserSettingsResponse {
    }
    export interface AdminUpdateDeviceStatusRequest {
        /** The user pool ID&gt; **/
        UserPoolId: UserPoolIdType;
        /** The user name. **/
        Username: UsernameType;
        /** The device key. **/
        DeviceKey: DeviceKeyType;
        /** The status indicating whether a device has been remembered or not. **/
        DeviceRememberedStatus?: DeviceRememberedStatusType;
    }
    export interface AdminUpdateDeviceStatusResponse {
    }
    export interface AdminUpdateUserAttributesRequest {
        /** The user pool ID for the user pool where you want to update user attributes. **/
        UserPoolId: UserPoolIdType;
        /** The user name of the user for whom you want to update user attributes. **/
        Username: UsernameType;
        /** An array of name-value pairs representing user attributes. **/
        UserAttributes: AttributeListType;
    }
    export interface AdminUpdateUserAttributesResponse {
    }
    export interface AdminUserGlobalSignOutRequest {
        /** The user pool ID. **/
        UserPoolId: UserPoolIdType;
        /** The user name. **/
        Username: UsernameType;
    }
    export interface AdminUserGlobalSignOutResponse {
    }
    export interface AliasExistsException {
        /** The message sent to the user when an alias exists. **/
        message?: MessageType;
    }
    export interface AttributeType {
        /** The name of the attribute. **/
        Name: AttributeNameType;
        /** The value of the attribute. **/
        Value?: AttributeValueType;
    }
    export interface AuthenticationResultType {
        /** The access token of the authentication result. **/
        AccessToken?: TokenModelType;
        /** The expiration period of the authentication result. **/
        ExpiresIn?: IntegerType;
        /** The token type of the authentication result. **/
        TokenType?: StringType;
        /** The refresh token of the authentication result. **/
        RefreshToken?: TokenModelType;
        /** The ID token of the authentication result. **/
        IdToken?: TokenModelType;
        /** The new device metadata from an authentication result. **/
        NewDeviceMetadata?: NewDeviceMetadataType;
    }
    export interface ChangePasswordRequest {
        /** The old password in the change password request. **/
        PreviousPassword: PasswordType;
        /** The new password in the change password request. **/
        ProposedPassword: PasswordType;
        /** The access token in the change password request. **/
        AccessToken?: TokenModelType;
    }
    export interface ChangePasswordResponse {
    }
    export interface CodeDeliveryDetailsType {
        /** The destination for the code delivery details. **/
        Destination?: StringType;
        /** The delivery medium (email message or phone number). **/
        DeliveryMedium?: DeliveryMediumType;
        /** The name of the attribute in the code delivery details type. **/
        AttributeName?: AttributeNameType;
    }
    export interface CodeDeliveryFailureException {
        /** The message sent when a verification code fails to deliver successfully. **/
        message?: MessageType;
    }
    export interface CodeMismatchException {
        /** The message provided when the code mismatch exception is thrown. **/
        message?: MessageType;
    }
    export interface ConcurrentModificationException {
        /** The message provided when the concurrent exception is thrown. **/
        message?: MessageType;
    }
    export interface ConfirmDeviceRequest {
        /** The access token. **/
        AccessToken: TokenModelType;
        /** The device key. **/
        DeviceKey: DeviceKeyType;
        /** The configuration of the device secret verifier. **/
        DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
        /** The device name. **/
        DeviceName?: DeviceNameType;
    }
    export interface ConfirmDeviceResponse {
        /** Indicates whether the user confirmation is necessary to confirm the device
response. **/
        UserConfirmationNecessary?: BooleanType;
    }
    export interface ConfirmForgotPasswordRequest {
        /** The ID of the client associated with the user pool. **/
        ClientId: ClientIdType;
        /** A keyed-hash message authentication code (HMAC) calculated using the secret key
of a user pool client and username plus the client ID in the message. **/
        SecretHash?: SecretHashType;
        /** The user name of the user for whom you want to enter a code to retrieve a
forgotten password. **/
        Username: UsernameType;
        /** The confirmation code sent by a user&#x27;s request to retrieve a forgotten password. **/
        ConfirmationCode: ConfirmationCodeType;
        /** The password sent by sent by a user&#x27;s request to retrieve a forgotten password. **/
        Password: PasswordType;
    }
    export interface ConfirmForgotPasswordResponse {
    }
    export interface ConfirmSignUpRequest {
        /** The ID of the client associated with the user pool. **/
        ClientId: ClientIdType;
        /** A keyed-hash message authentication code (HMAC) calculated using the secret key
of a user pool client and username plus the client ID in the message. **/
        SecretHash?: SecretHashType;
        /** The user name of the user whose registration you wish to confirm. **/
        Username: UsernameType;
        /** The confirmation code sent by a user&#x27;s request to confirm registration. **/
        ConfirmationCode: ConfirmationCodeType;
        /** Boolean to be specified to force user confirmation irrespective of existing
alias. By default set to False. If this parameter is set to True and the phone
number/email used for sign up confirmation already exists as an alias with a
different user, the API call will migrate the alias from the previous user to
the newly created user being confirmed. If set to False, the API will throw an 
AliasExistsException error. **/
        ForceAliasCreation?: ForceAliasCreation;
    }
    export interface ConfirmSignUpResponse {
    }
    export interface CreateUserImportJobRequest {
        /** The job name for the user import job. **/
        JobName: UserImportJobNameType;
        /** The user pool ID for the user pool that the users are being imported into. **/
        UserPoolId: UserPoolIdType;
        /** The role ARN for the Amazon CloudWatch Logging role for the user import job. **/
        CloudWatchLogsRoleArn: ArnType;
    }
    export interface CreateUserImportJobResponse {
        /** The job object that represents the user import job. **/
        UserImportJob?: UserImportJobType;
    }
    export interface CreateUserPoolClientRequest {
        /** The user pool ID for the user pool where you want to create a user pool client. **/
        UserPoolId: UserPoolIdType;
        /** The client name for the user pool client you would like to create. **/
        ClientName: ClientNameType;
        /** Boolean to specify whether you want to generate a secret for the user pool
client being created. **/
        GenerateSecret?: GenerateSecret;
        /** Refreshes the token validity. **/
        RefreshTokenValidity?: RefreshTokenValidityType;
        /** The read attributes. **/
        ReadAttributes?: ClientPermissionListType;
        /** The write attributes. **/
        WriteAttributes?: ClientPermissionListType;
        /** The explicit authentication flows. **/
        ExplicitAuthFlows?: ExplicitAuthFlowsListType;
    }
    export interface CreateUserPoolClientResponse {
        /** The user pool client that was just created. **/
        UserPoolClient?: UserPoolClientType;
    }
    export interface CreateUserPoolRequest {
        /** A string used to name the user pool. **/
        PoolName: UserPoolNameType;
        /** The policies associated with the new user pool. **/
        Policies?: UserPoolPolicyType;
        /** The Lambda trigger configuration information for the new user pool. **/
        LambdaConfig?: LambdaConfigType;
        /** The attributes to be auto-verified. Possible values: email , phone_number . **/
        AutoVerifiedAttributes?: VerifiedAttributesListType;
        /** Attributes supported as an alias for this user pool. Possible values: 
phone_number , email , or preferred_username . **/
        AliasAttributes?: AliasAttributesListType;
        /** A string representing the SMS verification message. **/
        SmsVerificationMessage?: SmsVerificationMessageType;
        /** A string representing the email verification message. **/
        EmailVerificationMessage?: EmailVerificationMessageType;
        /** A string representing the email verification subject. **/
        EmailVerificationSubject?: EmailVerificationSubjectType;
        /** A string representing the SMS authentication message. **/
        SmsAuthenticationMessage?: SmsVerificationMessageType;
        /** Specifies MFA configuration details. **/
        MfaConfiguration?: UserPoolMfaType;
        /** The device configuration. **/
        DeviceConfiguration?: DeviceConfigurationType;
        /** The email configuration. **/
        EmailConfiguration?: EmailConfigurationType;
        /** The SMS configuration. **/
        SmsConfiguration?: SmsConfigurationType;
        /** The configuration for AdminCreateUser requests. **/
        AdminCreateUserConfig?: AdminCreateUserConfigType;
        /** An array of schema attributes for the new user pool. These attributes can be
standard or custom attributes. **/
        Schema?: SchemaAttributesListType;
    }
    export interface CreateUserPoolResponse {
        /** A container for the user pool details. **/
        UserPool?: UserPoolType;
    }
    export interface DeleteUserAttributesRequest {
        /** An array of strings representing the user attribute names you wish to delete. **/
        UserAttributeNames: AttributeNameListType;
        /** The access token used in the request to delete user attributes. **/
        AccessToken?: TokenModelType;
    }
    export interface DeleteUserAttributesResponse {
    }
    export interface DeleteUserPoolClientRequest {
        /** The user pool ID for the user pool where you want to delete the client. **/
        UserPoolId: UserPoolIdType;
        /** The ID of the client associated with the user pool. **/
        ClientId: ClientIdType;
    }
    export interface DeleteUserPoolRequest {
        /** The user pool ID for the user pool you want to delete. **/
        UserPoolId: UserPoolIdType;
    }
    export interface DeleteUserRequest {
        /** The access token from a request to delete a user. **/
        AccessToken?: TokenModelType;
    }
    export interface DescribeUserImportJobRequest {
        /** The user pool ID for the user pool that the users are being imported into. **/
        UserPoolId: UserPoolIdType;
        /** The job ID for the user import job. **/
        JobId: UserImportJobIdType;
    }
    export interface DescribeUserImportJobResponse {
        /** The job object that represents the user import job. **/
        UserImportJob?: UserImportJobType;
    }
    export interface DescribeUserPoolClientRequest {
        /** The user pool ID for the user pool you want to describe. **/
        UserPoolId: UserPoolIdType;
        /** The ID of the client associated with the user pool. **/
        ClientId: ClientIdType;
    }
    export interface DescribeUserPoolClientResponse {
        /** The user pool client from a server response to describe the user pool client. **/
        UserPoolClient?: UserPoolClientType;
    }
    export interface DescribeUserPoolRequest {
        /** The user pool ID for the user pool you want to describe. **/
        UserPoolId: UserPoolIdType;
    }
    export interface DescribeUserPoolResponse {
        /** The container of metadata returned by the server to describe the pool. **/
        UserPool?: UserPoolType;
    }
    export interface DeviceConfigurationType {
        /** Indicates whether a challenge is required on a new device. Only applicable to a
new device. **/
        ChallengeRequiredOnNewDevice?: BooleanType;
        /** If true, a device is only remembered on user prompt. **/
        DeviceOnlyRememberedOnUserPrompt?: BooleanType;
    }
    export interface DeviceSecretVerifierConfigType {
        /** The password verifier. **/
        PasswordVerifier?: StringType;
        /** The salt. **/
        Salt?: StringType;
    }
    export interface DeviceType {
        /** The device key. **/
        DeviceKey?: DeviceKeyType;
        /** The device attributes. **/
        DeviceAttributes?: AttributeListType;
        /** The creation date of the device. **/
        DeviceCreateDate?: DateType;
        /** The last modified date of the device. **/
        DeviceLastModifiedDate?: DateType;
        /** The date in which the device was last authenticated. **/
        DeviceLastAuthenticatedDate?: DateType;
    }
    export interface EmailConfigurationType {
        /** The Amazon Resource Name (ARN) of the email source. **/
        SourceArn?: ArnType;
        /** The REPLY-TO email address. **/
        ReplyToEmailAddress?: EmailAddressType;
    }
    export interface ExpiredCodeException {
        /** The message returned when the expired code exception is thrown. **/
        message?: MessageType;
    }
    export interface ForgetDeviceRequest {
        /** The access token for the forgotten device request. **/
        AccessToken?: TokenModelType;
        /** The device key. **/
        DeviceKey: DeviceKeyType;
    }
    export interface ForgotPasswordRequest {
        /** The ID of the client associated with the user pool. **/
        ClientId: ClientIdType;
        /** A keyed-hash message authentication code (HMAC) calculated using the secret key
of a user pool client and username plus the client ID in the message. **/
        SecretHash?: SecretHashType;
        /** The user name of the user for whom you want to enter a code to reset a forgotten
password. **/
        Username: UsernameType;
    }
    export interface ForgotPasswordResponse {
        /** The code delivery details returned by the server in response to the request to
reset a password. **/
        CodeDeliveryDetails?: CodeDeliveryDetailsType;
    }
    export interface GetCSVHeaderRequest {
        /** The user pool ID for the user pool that the users are to be imported into. **/
        UserPoolId: UserPoolIdType;
    }
    export interface GetCSVHeaderResponse {
        /** The user pool ID for the user pool that the users are to be imported into. **/
        UserPoolId?: UserPoolIdType;
        /** The header information for the .csv file for the user import job. **/
        CSVHeader?: ListOfStringTypes;
    }
    export interface GetDeviceRequest {
        /** The device key. **/
        DeviceKey: DeviceKeyType;
        /** The access token. **/
        AccessToken?: TokenModelType;
    }
    export interface GetDeviceResponse {
        /** The device. **/
        Device: DeviceType;
    }
    export interface GetUserAttributeVerificationCodeRequest {
        /** The access token returned by the server response to get the user attribute
verification code. **/
        AccessToken?: TokenModelType;
        /** The attribute name returned by the server response to get the user attribute
verification code. **/
        AttributeName: AttributeNameType;
    }
    export interface GetUserAttributeVerificationCodeResponse {
        /** The code delivery details returned by the server in response to the request to
get the user attribute verification code. **/
        CodeDeliveryDetails?: CodeDeliveryDetailsType;
    }
    export interface GetUserRequest {
        /** The access token returned by the server response to get information about the
user. **/
        AccessToken?: TokenModelType;
    }
    export interface GetUserResponse {
        /** The user name of the user you wish to retrieve from the get user request. **/
        Username: UsernameType;
        /** An array of name-value pairs representing user attributes. **/
        UserAttributes: AttributeListType;
        /** Specifies the options for MFA (e.g., email or phone number). **/
        MFAOptions?: MFAOptionListType;
    }
    export interface GlobalSignOutRequest {
        /** The access token. **/
        AccessToken?: TokenModelType;
    }
    export interface GlobalSignOutResponse {
    }
    export interface InitiateAuthRequest {
        /** The authentication flow. **/
        AuthFlow: AuthFlowType;
        /** The authentication parameters. **/
        AuthParameters?: AuthParametersType;
        /** The client app&#x27;s metadata. **/
        ClientMetadata?: ClientMetadataType;
        /** The client ID. **/
        ClientId: ClientIdType;
    }
    export interface InitiateAuthResponse {
        /** The name of the challenge. **/
        ChallengeName?: ChallengeNameType;
        /** The session. **/
        Session?: SessionType;
        /** The challenge parameters. **/
        ChallengeParameters?: ChallengeParametersType;
        /** The result returned by the server in response to the request to initiate
authentication. **/
        AuthenticationResult?: AuthenticationResultType;
    }
    export interface InternalErrorException {
        /** The message returned when Amazon Cognito throws an internal error exception. **/
        message?: MessageType;
    }
    export interface InvalidEmailRoleAccessPolicyException {
        /** The message returned when you have an unverified email address or the identity
policy is not set on an email address that Amazon Cognito can access. **/
        message?: MessageType;
    }
    export interface InvalidLambdaResponseException {
        /** The message returned when the Amazon Cognito service throws an invalid AWS
Lambda response exception. **/
        message?: MessageType;
    }
    export interface InvalidParameterException {
        /** The message returned when the Amazon Cognito service throws an invalid parameter
exception. **/
        message?: MessageType;
    }
    export interface InvalidPasswordException {
        /** The message returned when the Amazon Cognito service throws an invalid user
password exception. **/
        message?: MessageType;
    }
    export interface InvalidSmsRoleAccessPolicyException {
        /** The message retuned when the invalid SMS role access policy exception is thrown. **/
        message?: MessageType;
    }
    export interface InvalidSmsRoleTrustRelationshipException {
        /** The message returned when the role trust relationship for the SMS message is
invalid. **/
        message?: MessageType;
    }
    export interface InvalidUserPoolConfigurationException {
        /** The message returned when the user pool configuration is invalid. **/
        message?: MessageType;
    }
    export interface LambdaConfigType {
        /** A pre-registration AWS Lambda trigger. **/
        PreSignUp?: ArnType;
        /** A custom Message AWS Lambda trigger. **/
        CustomMessage?: ArnType;
        /** A post-confirmation AWS Lambda trigger. **/
        PostConfirmation?: ArnType;
        /** A pre-authentication AWS Lambda trigger. **/
        PreAuthentication?: ArnType;
        /** A post-authentication AWS Lambda trigger. **/
        PostAuthentication?: ArnType;
        /** Defines the authentication challenge. **/
        DefineAuthChallenge?: ArnType;
        /** Creates an authentication challenge. **/
        CreateAuthChallenge?: ArnType;
        /** Verifies the authentication challenge response. **/
        VerifyAuthChallengeResponse?: ArnType;
    }
    export interface LimitExceededException {
        /** The message returned when Amazon Cognito throws a limit exceeded exception. **/
        message?: MessageType;
    }
    export interface ListDevicesRequest {
        /** The access tokens for the request to list devices. **/
        AccessToken: TokenModelType;
        /** The limit of the device request. **/
        Limit?: QueryLimitType;
        /** The pagination token for the list request. **/
        PaginationToken?: SearchPaginationTokenType;
    }
    export interface ListDevicesResponse {
        /** The devices returned in the list devices response. **/
        Devices?: DeviceListType;
        /** The pagination token for the list device response. **/
        PaginationToken?: SearchPaginationTokenType;
    }
    export interface ListUserImportJobsRequest {
        /** The user pool ID for the user pool that the users are being imported into. **/
        UserPoolId: UserPoolIdType;
        /** The maximum number of import jobs you want the request to return. **/
        MaxResults: PoolQueryLimitType;
        /** An identifier that was returned from the previous call to ListUserImportJobs,
which can be used to return the next set of import jobs in the list. **/
        PaginationToken?: PaginationKeyType;
    }
    export interface ListUserImportJobsResponse {
        /** The user import jobs. **/
        UserImportJobs?: UserImportJobsListType;
        /** An identifier that can be used to return the next set of user import jobs in the
list. **/
        PaginationToken?: PaginationKeyType;
    }
    export interface ListUserPoolClientsRequest {
        /** The user pool ID for the user pool where you want to list user pool clients. **/
        UserPoolId: UserPoolIdType;
        /** The maximum number of results you want the request to return when listing the
user pool clients. **/
        MaxResults?: QueryLimit;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        NextToken?: PaginationKey;
    }
    export interface ListUserPoolClientsResponse {
        /** The user pool clients in the response that lists user pool clients. **/
        UserPoolClients?: UserPoolClientListType;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        NextToken?: PaginationKey;
    }
    export interface ListUserPoolsRequest {
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        NextToken?: PaginationKeyType;
        /** The maximum number of results you want the request to return when listing the
user pools. **/
        MaxResults: PoolQueryLimitType;
    }
    export interface ListUserPoolsResponse {
        /** The user pools from the response to list users. **/
        UserPools?: UserPoolListType;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        NextToken?: PaginationKeyType;
    }
    export interface ListUsersRequest {
        /** The user pool ID for which you want to list users. **/
        UserPoolId: UserPoolIdType;
        /** The attributes to get from the request to list users. **/
        AttributesToGet?: SearchedAttributeNamesListType;
        /** The limit of the request to list users. **/
        Limit?: QueryLimitType;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        PaginationToken?: SearchPaginationTokenType;
        /** The filter for the list users request. **/
        Filter?: UserFilterType;
    }
    export interface ListUsersResponse {
        /** The users returned in the request to list users. **/
        Users?: UsersListType;
        /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
        PaginationToken?: SearchPaginationTokenType;
    }
    export interface MFAMethodNotFoundException {
        /** The message returned when Amazon Cognito throws an MFA method not found
exception. **/
        message?: MessageType;
    }
    export interface MFAOptionType {
        /** The delivery medium (email message or SMS message) to send the MFA code. **/
        DeliveryMedium?: DeliveryMediumType;
        /** The attribute name of the MFA option type. **/
        AttributeName?: AttributeNameType;
    }
    export interface MessageTemplateType {
        /** The message template for SMS messages. **/
        SMSMessage?: SmsVerificationMessageType;
        /** The message template for email messages. **/
        EmailMessage?: EmailVerificationMessageType;
        /** The subject line for email messages. **/
        EmailSubject?: EmailVerificationSubjectType;
    }
    export interface NewDeviceMetadataType {
        /** The device key. **/
        DeviceKey?: DeviceKeyType;
        /** The device group key. **/
        DeviceGroupKey?: StringType;
    }
    export interface NotAuthorizedException {
        /** The message returned when the Amazon Cognito service returns a not authorized
exception. **/
        message?: MessageType;
    }
    export interface NumberAttributeConstraintsType {
        /** The minimum value of an attribute that is of the number data type. **/
        MinValue?: StringType;
        /** The maximum value of an attribute that is of the number data type. **/
        MaxValue?: StringType;
    }
    export interface PasswordPolicyType {
        /** The minimum length of the password policy that you have set. Cannot be less than
6. **/
        MinimumLength?: PasswordPolicyMinLengthType;
        /** In the password policy that you have set, refers to whether you have required
users to use at least one uppercase letter in their password. **/
        RequireUppercase?: BooleanType;
        /** In the password policy that you have set, refers to whether you have required
users to use at least one lowercase letter in their password. **/
        RequireLowercase?: BooleanType;
        /** In the password policy that you have set, refers to whether you have required
users to use at least one number in their password. **/
        RequireNumbers?: BooleanType;
        /** In the password policy that you have set, refers to whether you have required
users to use at least one symbol in their password. **/
        RequireSymbols?: BooleanType;
    }
    export interface PasswordResetRequiredException {
        /** The message returned when a password reset is required. **/
        message?: MessageType;
    }
    export interface PreconditionNotMetException {
        /** The message returned when a precondition is not met. **/
        message?: MessageType;
    }
    export interface ResendConfirmationCodeRequest {
        /** The ID of the client associated with the user pool. **/
        ClientId: ClientIdType;
        /** A keyed-hash message authentication code (HMAC) calculated using the secret key
of a user pool client and username plus the client ID in the message. **/
        SecretHash?: SecretHashType;
        /** The user name of the user to whom you wish to resend a confirmation code. **/
        Username: UsernameType;
    }
    export interface ResendConfirmationCodeResponse {
        /** The code delivery details returned by the server in response to the request to
resend the confirmation code. **/
        CodeDeliveryDetails?: CodeDeliveryDetailsType;
    }
    export interface ResourceNotFoundException {
        /** The message returned when the Amazon Cognito service returns a resource not
found exception. **/
        message?: MessageType;
    }
    export interface RespondToAuthChallengeRequest {
        /** The client ID. **/
        ClientId: ClientIdType;
        /** The name of the challenge. **/
        ChallengeName: ChallengeNameType;
        /** The session. **/
        Session?: SessionType;
        /** The responses to the authentication challenge. **/
        ChallengeResponses?: ChallengeResponsesType;
    }
    export interface RespondToAuthChallengeResponse {
        /** The challenge name. **/
        ChallengeName?: ChallengeNameType;
        /** The session. **/
        Session?: SessionType;
        /** The challenge parameters. **/
        ChallengeParameters?: ChallengeParametersType;
        /** The result returned by the server in response to the request to respond to the
authentication challenge. **/
        AuthenticationResult?: AuthenticationResultType;
    }
    export interface SchemaAttributeType {
        /** A schema attribute of the name type. **/
        Name?: CustomAttributeNameType;
        /** The attribute data type. **/
        AttributeDataType?: AttributeDataType;
        /** Specifies whether the attribute type is developer only. **/
        DeveloperOnlyAttribute?: BooleanType;
        /** Specifies whether the attribute can be changed once it has been created. **/
        Mutable?: BooleanType;
        /** Specifies whether a user pool attribute is required. If the attribute is
required and the user does not provide a value, registration or sign-in will
fail. **/
        Required?: BooleanType;
        /** Specifies the constraints for an attribute of the number type. **/
        NumberAttributeConstraints?: NumberAttributeConstraintsType;
        /** Specifies the constraints for an attribute of the string type. **/
        StringAttributeConstraints?: StringAttributeConstraintsType;
    }
    export interface SetUserSettingsRequest {
        /** The access token for the set user settings request. **/
        AccessToken: TokenModelType;
        /** Specifies the options for MFA (e.g., email or phone number). **/
        MFAOptions: MFAOptionListType;
    }
    export interface SetUserSettingsResponse {
    }
    export interface SignUpRequest {
        /** The ID of the client associated with the user pool. **/
        ClientId: ClientIdType;
        /** A keyed-hash message authentication code (HMAC) calculated using the secret key
of a user pool client and username plus the client ID in the message. **/
        SecretHash?: SecretHashType;
        /** The user name of the user you wish to register. **/
        Username: UsernameType;
        /** The password of the user you wish to register. **/
        Password: PasswordType;
        /** An array of name-value pairs representing user attributes. **/
        UserAttributes?: AttributeListType;
        /** The validation data in the request to register a user. **/
        ValidationData?: AttributeListType;
    }
    export interface SignUpResponse {
        /** A response from the server indicating that a user registration has been
confirmed. **/
        UserConfirmed?: BooleanType;
        /** The code delivery details returned by the server response to the user
registration request. **/
        CodeDeliveryDetails?: CodeDeliveryDetailsType;
    }
    export interface SmsConfigurationType {
        /** The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)
caller. **/
        SnsCallerArn: ArnType;
        /** The external ID. **/
        ExternalId?: StringType;
    }
    export interface StartUserImportJobRequest {
        /** The user pool ID for the user pool that the users are being imported into. **/
        UserPoolId: UserPoolIdType;
        /** The job ID for the user import job. **/
        JobId: UserImportJobIdType;
    }
    export interface StartUserImportJobResponse {
        /** The job object that represents the user import job. **/
        UserImportJob?: UserImportJobType;
    }
    export interface StopUserImportJobRequest {
        /** The user pool ID for the user pool that the users are being imported into. **/
        UserPoolId: UserPoolIdType;
        /** The job ID for the user import job. **/
        JobId: UserImportJobIdType;
    }
    export interface StopUserImportJobResponse {
        /** The job object that represents the user import job. **/
        UserImportJob?: UserImportJobType;
    }
    export interface StringAttributeConstraintsType {
        /** The minimum length of an attribute value of the string type. **/
        MinLength?: StringType;
        /** The maximum length of an attribute value of the string type. **/
        MaxLength?: StringType;
    }
    export interface TooManyFailedAttemptsException {
        /** The message returned when the Amazon Cognito service returns a too many failed
attempts exception. **/
        message?: MessageType;
    }
    export interface TooManyRequestsException {
        /** The message returned when the Amazon Cognito service returns a too many requests
exception. **/
        message?: MessageType;
    }
    export interface UnexpectedLambdaException {
        /** The message returned when the Amazon Cognito service returns an unexpected AWS
Lambda exception. **/
        message?: MessageType;
    }
    export interface UnsupportedUserStateException {
        /** The message returned when the user is in an unsupported state. **/
        message?: MessageType;
    }
    export interface UpdateDeviceStatusRequest {
        /** The access token. **/
        AccessToken: TokenModelType;
        /** The device key. **/
        DeviceKey: DeviceKeyType;
        /** The status of whether a device is remembered. **/
        DeviceRememberedStatus?: DeviceRememberedStatusType;
    }
    export interface UpdateDeviceStatusResponse {
    }
    export interface UpdateUserAttributesRequest {
        /** An array of name-value pairs representing user attributes. **/
        UserAttributes: AttributeListType;
        /** The access token for the request to update user attributes. **/
        AccessToken?: TokenModelType;
    }
    export interface UpdateUserAttributesResponse {
        /** The code delivery details list from the server for the request to update user
attributes. **/
        CodeDeliveryDetailsList?: CodeDeliveryDetailsListType;
    }
    export interface UpdateUserPoolClientRequest {
        /** The user pool ID for the user pool where you want to update the user pool
client. **/
        UserPoolId: UserPoolIdType;
        /** The ID of the client associated with the user pool. **/
        ClientId: ClientIdType;
        /** The client name from the update user pool client request. **/
        ClientName?: ClientNameType;
        /** The validity of the refresh token. **/
        RefreshTokenValidity?: RefreshTokenValidityType;
        /** The read-only attributes of the user pool. **/
        ReadAttributes?: ClientPermissionListType;
        /** The writeable attributes of the user pool. **/
        WriteAttributes?: ClientPermissionListType;
        /** Explicit authentication flows. **/
        ExplicitAuthFlows?: ExplicitAuthFlowsListType;
    }
    export interface UpdateUserPoolClientResponse {
        /** The user pool client value from the response from the server when an update user
pool client request is made. **/
        UserPoolClient?: UserPoolClientType;
    }
    export interface UpdateUserPoolRequest {
        /** The user pool ID for the user pool you want to update. **/
        UserPoolId: UserPoolIdType;
        /** A container with the policies you wish to update in a user pool. **/
        Policies?: UserPoolPolicyType;
        /** The AWS Lambda configuration information from the request to update the user
pool. **/
        LambdaConfig?: LambdaConfigType;
        /** The attributes that are automatically verified when the Amazon Cognito service
makes a request to update user pools. **/
        AutoVerifiedAttributes?: VerifiedAttributesListType;
        /** A container with information about the SMS verification message. **/
        SmsVerificationMessage?: SmsVerificationMessageType;
        /** The contents of the email verification message. **/
        EmailVerificationMessage?: EmailVerificationMessageType;
        /** The subject of the email verfication message. **/
        EmailVerificationSubject?: EmailVerificationSubjectType;
        /** The contents of the SMS authentication message. **/
        SmsAuthenticationMessage?: SmsVerificationMessageType;
        /** Can be one of the following values:

 &amp;#42; OFF - MFA tokens are not required and cannot be specified during user
   registration.
   
   
 * ON - MFA tokens are required for all user registrations. You can only specify
   required when you are initially creating a user pool.
   
   
 * OPTIONAL - Users have the option when registering to create an MFA token. **/
        MfaConfiguration?: UserPoolMfaType;
        /** Device configuration. **/
        DeviceConfiguration?: DeviceConfigurationType;
        /** Email configuration. **/
        EmailConfiguration?: EmailConfigurationType;
        /** SMS configuration. **/
        SmsConfiguration?: SmsConfigurationType;
        /** The configuration for AdminCreateUser requests. **/
        AdminCreateUserConfig?: AdminCreateUserConfigType;
    }
    export interface UpdateUserPoolResponse {
    }
    export interface UserImportInProgressException {
        /** The message returned when the user pool has an import job running. **/
        message?: MessageType;
    }
    export interface UserImportJobType {
        /** The job name for the user import job. **/
        JobName?: UserImportJobNameType;
        /** The job ID for the user import job. **/
        JobId?: UserImportJobIdType;
        /** The user pool ID for the user pool that the users are being imported into. **/
        UserPoolId?: UserPoolIdType;
        /** The pre-signed URL to be used to upload the .csv file. **/
        PreSignedUrl?: PreSignedUrlType;
        /** The date when the user import job was created. **/
        CreationDate?: DateType;
        /** The date when the user import job was started. **/
        StartDate?: DateType;
        /** The date when the user imoprt job was completed. **/
        CompletionDate?: DateType;
        /** The status of the user import job. One of the following:

 &amp;#42; Created - The job was created but not started.
   
   
 * Pending - A transition state. You have started the job, but it has not begun
   importing users yet.
   
   
 * InProgress - The job has started, and users are being imported.
   
   
 * Stopping - You have stopped the job, but the job has not stopped importing
   users yet.
   
   
 * Stopped - You have stopped the job, and the job has stopped importing users.
   
   
 * Succeeded - The job has completed successfully.
   
   
 * Failed - The job has stopped due to an error.
   
   
 * Expired - You created a job, but did not start the job within 24-48 hours.
   All data associated with the job was deleted, and the job cannot be started. **/
        Status?: UserImportJobStatusType;
        /** The role ARN for the Amazon CloudWatch Logging role for the user import job. For
more information, see &quot;Creating the CloudWatch Logs IAM Role&quot; in the Amazon
Cognito Developer Guide. **/
        CloudWatchLogsRoleArn?: ArnType;
        /** The number of users that were successfully imported. **/
        ImportedUsers?: LongType;
        /** The number of users that were skipped. **/
        SkippedUsers?: LongType;
        /** The number of users that could not be imported. **/
        FailedUsers?: LongType;
        /** The message returned when the user import job is completed. **/
        CompletionMessage?: CompletionMessageType;
    }
    export interface UserLambdaValidationException {
        /** The message returned when the Amazon Cognito service returns a user validation
exception with the AWS Lambda service. **/
        message?: MessageType;
    }
    export interface UserNotConfirmedException {
        /** The message returned when a user is not confirmed successfully. **/
        message?: MessageType;
    }
    export interface UserNotFoundException {
        /** The message returned when a user is not found. **/
        message?: MessageType;
    }
    export interface UserPoolClientDescription {
        /** The ID of the client associated with the user pool. **/
        ClientId?: ClientIdType;
        /** The user pool ID for the user pool where you want to describe the user pool
client. **/
        UserPoolId?: UserPoolIdType;
        /** The client name from the user pool client description. **/
        ClientName?: ClientNameType;
    }
    export interface UserPoolClientType {
        /** The user pool ID for the user pool client. **/
        UserPoolId?: UserPoolIdType;
        /** The client name from the user pool request of the client type. **/
        ClientName?: ClientNameType;
        /** The ID of the client associated with the user pool. **/
        ClientId?: ClientIdType;
        /** The client secret from the user pool request of the client type. **/
        ClientSecret?: ClientSecretType;
        /** The last modified date from the user pool request of the client type. **/
        LastModifiedDate?: DateType;
        /** The creation date from the user pool request of the client type. **/
        CreationDate?: DateType;
        /** The validity of the refresh token. **/
        RefreshTokenValidity?: RefreshTokenValidityType;
        /** The Read-only attributes. **/
        ReadAttributes?: ClientPermissionListType;
        /** The writeable attributes. **/
        WriteAttributes?: ClientPermissionListType;
        /** The explicit authentication flows. **/
        ExplicitAuthFlows?: ExplicitAuthFlowsListType;
    }
    export interface UserPoolDescriptionType {
        /** The ID in a user pool description. **/
        Id?: UserPoolIdType;
        /** The name in a user pool description. **/
        Name?: UserPoolNameType;
        /** The AWS Lambda configuration information in a user pool description. **/
        LambdaConfig?: LambdaConfigType;
        /** The user pool status in a user pool description. **/
        Status?: StatusType;
        /** The last modified date in a user pool description. **/
        LastModifiedDate?: DateType;
        /** The creation date in a user pool description. **/
        CreationDate?: DateType;
    }
    export interface UserPoolPolicyType {
        /** A container with information about the user pool password policy. **/
        PasswordPolicy?: PasswordPolicyType;
    }
    export interface UserPoolType {
        /** The ID of the user pool. **/
        Id?: UserPoolIdType;
        /** The name of the user pool. **/
        Name?: UserPoolNameType;
        /** A container describing the policies associated with a user pool. **/
        Policies?: UserPoolPolicyType;
        /** A container describing the AWS Lambda triggers associated with a user pool. **/
        LambdaConfig?: LambdaConfigType;
        /** The status of a user pool. **/
        Status?: StatusType;
        /** The last modified date of a user pool. **/
        LastModifiedDate?: DateType;
        /** The creation date of a user pool. **/
        CreationDate?: DateType;
        /** A container with the schema attributes of a user pool. **/
        SchemaAttributes?: SchemaAttributesListType;
        /** Specifies the attributes that are auto-verified in a user pool. **/
        AutoVerifiedAttributes?: VerifiedAttributesListType;
        /** Specifies the attributes that are aliased in a user pool. **/
        AliasAttributes?: AliasAttributesListType;
        /** The contents of the SMS verification message. **/
        SmsVerificationMessage?: SmsVerificationMessageType;
        /** The contents of the email verification message. **/
        EmailVerificationMessage?: EmailVerificationMessageType;
        /** The subject of the email verification message. **/
        EmailVerificationSubject?: EmailVerificationSubjectType;
        /** The contents of the SMS authentication message. **/
        SmsAuthenticationMessage?: SmsVerificationMessageType;
        /** Can be one of the following values:

 &amp;#42; OFF - MFA tokens are not required and cannot be specified during user
   registration.
   
   
 * ON - MFA tokens are required for all user registrations. You can only specify
   required when you are initially creating a user pool.
   
   
 * OPTIONAL - Users have the option when registering to create an MFA token. **/
        MfaConfiguration?: UserPoolMfaType;
        /** The device configuration. **/
        DeviceConfiguration?: DeviceConfigurationType;
        /** A number estimating the size of the user pool. **/
        EstimatedNumberOfUsers?: IntegerType;
        /** The email configuration. **/
        EmailConfiguration?: EmailConfigurationType;
        /** The SMS configuration. **/
        SmsConfiguration?: SmsConfigurationType;
        /** The reason why the SMS configuration cannot send the message(s) to your users. **/
        SmsConfigurationFailure?: StringType;
        /** The reason why the email configuration cannot send the messages to your users. **/
        EmailConfigurationFailure?: StringType;
        /** The configuration for AdminCreateUser requests. **/
        AdminCreateUserConfig?: AdminCreateUserConfigType;
    }
    export interface UserType {
        /** The user name of the user you wish to describe. **/
        Username?: UsernameType;
        /** A container with information about the user type attributes. **/
        Attributes?: AttributeListType;
        /** The creation date of the user. **/
        UserCreateDate?: DateType;
        /** The last modified date of the user. **/
        UserLastModifiedDate?: DateType;
        /** Specifies whether the user is enabled. **/
        Enabled?: BooleanType;
        /** The user status. Can be one of the following:

 &amp;#42; UNCONFIRMED - User has been created but not confirmed.
   
   
 * CONFIRMED - User has been confirmed.
   
   
 * ARCHIVED - User is no longer active.
   
   
 * COMPROMISED - User is disabled due to a potential security threat.
   
   
 * UNKNOWN - User status is not known. **/
        UserStatus?: UserStatusType;
        /** The MFA options for the user. **/
        MFAOptions?: MFAOptionListType;
    }
    export interface UsernameExistsException {
        /** The message returned when Amazon Cognito throws a user name exists exception. **/
        message?: MessageType;
    }
    export interface VerifyUserAttributeRequest {
        /** Represents the access token of the request to verify user attributes. **/
        AccessToken?: TokenModelType;
        /** The attribute name in the request to verify user attributes. **/
        AttributeName: AttributeNameType;
        /** The verification code in the request to verify user attributes. **/
        Code: ConfirmationCodeType;
    }
    export interface VerifyUserAttributeResponse {
    }
  }
}
