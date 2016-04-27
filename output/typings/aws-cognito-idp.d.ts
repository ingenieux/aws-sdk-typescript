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
    * You can create a user pool in Amazon Cognito Identity to manage directories and
 users. You can authenticate a user to obtain tokens related to user identity and
 access policies.
 
 This API reference provides information about user pools in Amazon Cognito
 Identity, which is a new capability that is available as a beta.
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
     * @error InternalErrorException   
     */
    addCustomAttributes(params: CognitoIdentityServiceProvider.AddCustomAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.AddCustomAttributesResponse | any) => void): Request;
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
     * @error InternalErrorException   
     */
    adminConfirmSignUp(params: CognitoIdentityServiceProvider.AdminConfirmSignUpRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.TooManyFailedAttemptsException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.LimitExceededException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.AdminConfirmSignUpResponse | any) => void): Request;
    /**
     * Deletes a user as an administrator. Works on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    adminDeleteUser(params: CognitoIdentityServiceProvider.AdminDeleteUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: any) => void): Request;
    /**
     * Deletes the user attributes in a user pool as an administrator. Works on any
user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    adminDeleteUserAttributes(params: CognitoIdentityServiceProvider.AdminDeleteUserAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.AdminDeleteUserAttributesResponse | any) => void): Request;
    /**
     * Disables the specified user as an administrator. Works on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    adminDisableUser(params: CognitoIdentityServiceProvider.AdminDisableUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.AdminDisableUserResponse | any) => void): Request;
    /**
     * Enables the specified user as an administrator. Works on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    adminEnableUser(params: CognitoIdentityServiceProvider.AdminEnableUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.AdminEnableUserResponse | any) => void): Request;
    /**
     * Gets the specified user by user name in a user pool as an administrator. Works
on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    adminGetUser(params: CognitoIdentityServiceProvider.AdminGetUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.AdminGetUserResponse | any) => void): Request;
    /**
     * Resets the specified user&#x27;s password in a user pool as an administrator. Works
on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error UnexpectedLambdaException   
     * @error UserLambdaValidationException   
     * @error NotAuthorizedException   
     * @error InvalidLambdaResponseException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error InternalErrorException   
     */
    adminResetUserPassword(params: CognitoIdentityServiceProvider.AdminResetUserPasswordRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.LimitExceededException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.AdminResetUserPasswordResponse | any) => void): Request;
    /**
     * Sets all the user settings for a specified user name. Works on any user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     */
    adminSetUserSettings(params: CognitoIdentityServiceProvider.AdminSetUserSettingsRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.NotAuthorizedException | any, data: CognitoIdentityServiceProvider.AdminSetUserSettingsResponse | any) => void): Request;
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
     * @error InternalErrorException   
     */
    adminUpdateUserAttributes(params: CognitoIdentityServiceProvider.AdminUpdateUserAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.AliasExistsException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.AdminUpdateUserAttributesResponse | any) => void): Request;
    /**
     * Changes the password for a specified user in a user pool.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error InvalidPasswordException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    changePassword(params: CognitoIdentityServiceProvider.ChangePasswordRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.InvalidPasswordException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.ChangePasswordResponse | any) => void): Request;
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
     * @error InternalErrorException   
     */
    confirmForgotPassword(params: CognitoIdentityServiceProvider.ConfirmForgotPasswordRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.InvalidPasswordException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.CodeMismatchException | CognitoIdentityServiceProvider.ExpiredCodeException | CognitoIdentityServiceProvider.TooManyFailedAttemptsException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.LimitExceededException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.ConfirmForgotPasswordResponse | any) => void): Request;
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
     * @error InternalErrorException   
     */
    confirmSignUp(params: CognitoIdentityServiceProvider.ConfirmSignUpRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.TooManyFailedAttemptsException | CognitoIdentityServiceProvider.CodeMismatchException | CognitoIdentityServiceProvider.ExpiredCodeException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.AliasExistsException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.LimitExceededException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.ConfirmSignUpResponse | any) => void): Request;
    /**
     * Creates a new Amazon Cognito user pool and sets the password policy for the
pool.
     *
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     * @error LimitExceededException   
     */
    createUserPool(params: CognitoIdentityServiceProvider.CreateUserPoolRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | CognitoIdentityServiceProvider.LimitExceededException | any, data: CognitoIdentityServiceProvider.CreateUserPoolResponse | any) => void): Request;
    /**
     * Creates the user pool client.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error LimitExceededException   
     * @error InternalErrorException   
     */
    createUserPoolClient(params: CognitoIdentityServiceProvider.CreateUserPoolClientRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.LimitExceededException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.CreateUserPoolClientResponse | any) => void): Request;
    /**
     * Allows a user to delete one&#x27;s self.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    deleteUser(params: CognitoIdentityServiceProvider.DeleteUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: any) => void): Request;
    /**
     * Deletes the attributes for a user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    deleteUserAttributes(params: CognitoIdentityServiceProvider.DeleteUserAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.DeleteUserAttributesResponse | any) => void): Request;
    /**
     * Deletes the specified Amazon Cognito user pool.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    deleteUserPool(params: CognitoIdentityServiceProvider.DeleteUserPoolRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: any) => void): Request;
    /**
     * Allows the developer to delete the user pool client.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    deleteUserPoolClient(params: CognitoIdentityServiceProvider.DeleteUserPoolClientRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: any) => void): Request;
    /**
     * Returns the configuration information and metadata of the specified user pool.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    describeUserPool(params: CognitoIdentityServiceProvider.DescribeUserPoolRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.DescribeUserPoolResponse | any) => void): Request;
    /**
     * Client method for returning the configuration information and metadata of the
specified user pool client.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    describeUserPoolClient(params: CognitoIdentityServiceProvider.DescribeUserPoolClientRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.DescribeUserPoolClientResponse | any) => void): Request;
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
     * @error InternalErrorException   
     */
    forgotPassword(params: CognitoIdentityServiceProvider.ForgotPasswordRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.LimitExceededException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.ForgotPasswordResponse | any) => void): Request;
    /**
     * Gets the user attributes and metadata for a user.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    getUser(params: CognitoIdentityServiceProvider.GetUserRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.GetUserResponse | any) => void): Request;
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
     * @error InternalErrorException   
     */
    getUserAttributeVerificationCode(params: CognitoIdentityServiceProvider.GetUserAttributeVerificationCodeRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.GetUserAttributeVerificationCodeResponse | any) => void): Request;
    /**
     * Lists the clients that have been created for the specified user pool.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    listUserPoolClients(params: CognitoIdentityServiceProvider.ListUserPoolClientsRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.ListUserPoolClientsResponse | any) => void): Request;
    /**
     * Lists the user pools associated with an AWS account.
     *
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    listUserPools(params: CognitoIdentityServiceProvider.ListUserPoolsRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.ListUserPoolsResponse | any) => void): Request;
    /**
     * Lists the users in the Amazon Cognito user pool.
     *
     * @error InvalidParameterException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    listUsers(params: CognitoIdentityServiceProvider.ListUsersRequest, callback?: (err: CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.ListUsersResponse | any) => void): Request;
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
     * @error InternalErrorException   
     */
    resendConfirmationCode(params: CognitoIdentityServiceProvider.ResendConfirmationCodeRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.LimitExceededException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.ResendConfirmationCodeResponse | any) => void): Request;
    /**
     * Sets the user settings like multi-factor authentication (MFA). If MFA is to be
removed for a particular attribute pass the attribute with code delivery as
null. If null list is passed, all MFA options are removed.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error NotAuthorizedException   
     */
    setUserSettings(params: CognitoIdentityServiceProvider.SetUserSettingsRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.NotAuthorizedException | any, data: CognitoIdentityServiceProvider.SetUserSettingsResponse | any) => void): Request;
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
     */
    signUp(params: CognitoIdentityServiceProvider.SignUpRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.InvalidPasswordException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.UsernameExistsException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.SignUpResponse | any) => void): Request;
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
     * @error InternalErrorException   
     */
    updateUserAttributes(params: CognitoIdentityServiceProvider.UpdateUserAttributesRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.CodeMismatchException | CognitoIdentityServiceProvider.ExpiredCodeException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.UnexpectedLambdaException | CognitoIdentityServiceProvider.UserLambdaValidationException | CognitoIdentityServiceProvider.InvalidLambdaResponseException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.AliasExistsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.UpdateUserAttributesResponse | any) => void): Request;
    /**
     * Updates the specified user pool with the specified attributes.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error ConcurrentModificationException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    updateUserPool(params: CognitoIdentityServiceProvider.UpdateUserPoolRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.ConcurrentModificationException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.UpdateUserPoolResponse | any) => void): Request;
    /**
     * Allows the developer to update the specified user pool client and password
policy.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    updateUserPoolClient(params: CognitoIdentityServiceProvider.UpdateUserPoolClientRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.UpdateUserPoolClientResponse | any) => void): Request;
    /**
     * Verifies the specified user attributes in the user pool.
     *
     * @error ResourceNotFoundException   
     * @error InvalidParameterException   
     * @error CodeMismatchException   
     * @error ExpiredCodeException   
     * @error NotAuthorizedException   
     * @error TooManyRequestsException   
     * @error InternalErrorException   
     */
    verifyUserAttribute(params: CognitoIdentityServiceProvider.VerifyUserAttributeRequest, callback?: (err: CognitoIdentityServiceProvider.ResourceNotFoundException | CognitoIdentityServiceProvider.InvalidParameterException | CognitoIdentityServiceProvider.CodeMismatchException | CognitoIdentityServiceProvider.ExpiredCodeException | CognitoIdentityServiceProvider.NotAuthorizedException | CognitoIdentityServiceProvider.TooManyRequestsException | CognitoIdentityServiceProvider.InternalErrorException | any, data: CognitoIdentityServiceProvider.VerifyUserAttributeResponse | any) => void): Request;

  }

  export module CognitoIdentityServiceProvider {

    export type AliasAttributeType = string;

    export type AliasAttributesListType = AliasAttributeType[];

    export type ArnType = string;

    export type AttributeDataType = string;

    export type AttributeListType = AttributeType[];

    export type AttributeNameListType = AttributeNameType[];

    export type AttributeNameType = string;

    export type AttributeValueType = string;

    export type BooleanType = boolean;

    export type ClientIdType = string;

    export type ClientNameType = string;

    export type ClientSecretType = string;

    export type CodeDeliveryDetailsListType = CodeDeliveryDetailsType[];

    export type ConfirmationCodeType = string;

    export type CustomAttributeNameType = string;

    export type CustomAttributesListType = SchemaAttributeType[];

    export type DateType = number;

    export type DeliveryMediumType = string;

    export type EmailVerificationMessageType = string;

    export type EmailVerificationSubjectType = string;

    export type ForceAliasCreation = boolean;

    export type GenerateSecret = boolean;

    export type IntegerType = number;

    export type MFAOptionListType = MFAOptionType[];

    export type MessageType = string;

    export type PaginationKey = string;

    export type PaginationKeyType = string;

    export type PasswordPolicyMinLengthType = number;

    export type PasswordType = string;

    export type QueryLimit = number;

    export type QueryLimitType = number;

    export type SchemaAttributesListType = SchemaAttributeType[];

    export type SearchPaginationTokenType = string;

    export type SearchedAttributeNamesListType = AttributeNameType[];

    export type SecretHashType = string;

    export type SmsVerificationMessageType = string;

    export type StatusType = string;

    export type StringType = string;

    export type TokenModelType = string;

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
    export interface AdminResetUserPasswordRequest {
      /** The user pool ID for the user pool where you want to reset the user&#x27;s password. **/
      UserPoolId: UserPoolIdType;
      /** The user name of the user whose password you wish to reset. **/
      Username: UsernameType;
    }
    export interface AdminResetUserPasswordResponse {
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
    export interface CodeMismatchException {
      /** The message provided when the code mismatch exception is thrown. **/
      message?: MessageType;
    }
    export interface ConcurrentModificationException {
      /** The message provided when the concurrent exception is thrown. **/
      message?: MessageType;
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
    export interface CreateUserPoolClientRequest {
      /** The user pool ID for the user pool where you want to create a user pool client. **/
      UserPoolId: UserPoolIdType;
      /** The client name for the user pool client you would like to create. **/
      ClientName: ClientNameType;
      /** Boolean to specify whether you want to generate a secret for the user pool
client being created. **/
      GenerateSecret?: GenerateSecret;
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
    export interface ExpiredCodeException {
      /** The message returned when the expired code exception is thrown. **/
      message?: MessageType;
    }
    export interface ForgotPasswordRequest {
      /** The ID of the client associated with the user pool. **/
      ClientId: ClientIdType;
      /** A keyed-hash message authentication code (HMAC) calculated using the secret key
of a user pool client and username plus the client ID in the message. **/
      SecretHash?: SecretHashType;
      /** The user name of the user for whom you want to enter a code to retrieve a
forgotten password. **/
      Username: UsernameType;
    }
    export interface ForgotPasswordResponse {
      CodeDeliveryDetails?: CodeDeliveryDetailsType;
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
      /** The code delivery details returned by the server response to get the user
attribute verification code. **/
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
    export interface InternalErrorException {
      /** The message returned when Amazon Cognito throws an internal error exception. **/
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
    }
    export interface LimitExceededException {
      /** The message returned when Amazon Cognito throws a limit exceeded exception. **/
      message?: MessageType;
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
      MaxResults: QueryLimitType;
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
      /** The user status. Can be one of the following:

&amp;#42; UNCONFIRMED - User has been created but not confirmed.
* CONFIRMED - User has been confirmed.
* ARCHIVED - User is no longer active.
* COMPROMISED - User is disabled due to a potential security threat.
* UNKNOWN - User status is not known. **/
      UserStatus?: UserStatusType;
    }
    export interface ListUsersResponse {
      /** The users returned in the request to list users. **/
      Users?: UsersListType;
      /** An identifier that was returned from the previous call to this operation, which
can be used to return the next set of items in the list. **/
      PaginationToken?: SearchPaginationTokenType;
    }
    export interface MFAOptionType {
      /** The delivery medium (email message or SMS message) to send the MFA code. **/
      DeliveryMedium?: DeliveryMediumType;
      /** The attribute name of the MFA option type. **/
      AttributeName?: AttributeNameType;
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
      CodeDeliveryDetails?: CodeDeliveryDetailsType;
    }
    export interface ResourceNotFoundException {
      /** The message returned when the Amazon Cognito service returns a resource not
found exception. **/
      message?: MessageType;
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
      CodeDeliveryDetails?: CodeDeliveryDetailsType;
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
      /** The subject of the email verfication message **/
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
    }
    export interface UpdateUserPoolResponse {
    }
    export interface UserLambdaValidationException {
      /** The message returned when the Amazon Cognito service returns a user validation
exception with the AWS Lambda service. **/
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
      /** A number estimating the size of the user pool. **/
      EstimatedNumberOfUsers?: IntegerType;
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
