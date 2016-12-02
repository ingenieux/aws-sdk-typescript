// Type definitions for aws-sdk - Amazon AppStream
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-12-01
   * endpointPrefix: appstream2
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * Amazon AppStream 2.0API documentation for Amazon AppStream 2.0.
   *
   */
  export class AppStream extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Associate a fleet to a stack.
     *
     * @error LimitExceededException   
     * @error ResourceNotFoundException   
     */
    associateFleet(params: AppStream.AssociateFleetRequest, callback?: (err: AppStream.LimitExceededException|AppStream.ResourceNotFoundException|any, data: AppStream.AssociateFleetResult|any) => void): Request<AppStream.AssociateFleetResult|any,AppStream.LimitExceededException|AppStream.ResourceNotFoundException|any>;
    /**
     * Creates a new fleet.
     *
     * @error ResourceAlreadyExistsException   
     * @error ResourceNotAvailableException   
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     * @error InvalidRoleException   
     */
    createFleet(params: AppStream.CreateFleetRequest, callback?: (err: AppStream.ResourceAlreadyExistsException|AppStream.ResourceNotAvailableException|AppStream.ResourceNotFoundException|AppStream.LimitExceededException|AppStream.InvalidRoleException|any, data: AppStream.CreateFleetResult|any) => void): Request<AppStream.CreateFleetResult|any,AppStream.ResourceAlreadyExistsException|AppStream.ResourceNotAvailableException|AppStream.ResourceNotFoundException|AppStream.LimitExceededException|AppStream.InvalidRoleException|any>;
    /**
     * Create a new stack.
     *
     * @error LimitExceededException   
     * @error ResourceAlreadyExistsException   
     */
    createStack(params: AppStream.CreateStackRequest, callback?: (err: AppStream.LimitExceededException|AppStream.ResourceAlreadyExistsException|any, data: AppStream.CreateStackResult|any) => void): Request<AppStream.CreateStackResult|any,AppStream.LimitExceededException|AppStream.ResourceAlreadyExistsException|any>;
    /**
     * Creates a URL to start an AppStream 2.0 streaming session for a user. By
default, the URL is valid only for 1 minute from the time that it is generated.
     *
     * @error ResourceNotFoundException   
     * @error ResourceNotAvailableException   
     * @error OperationNotPermittedException   
     */
    createStreamingURL(params: AppStream.CreateStreamingURLRequest, callback?: (err: AppStream.ResourceNotFoundException|AppStream.ResourceNotAvailableException|AppStream.OperationNotPermittedException|any, data: AppStream.CreateStreamingURLResult|any) => void): Request<AppStream.CreateStreamingURLResult|any,AppStream.ResourceNotFoundException|AppStream.ResourceNotAvailableException|AppStream.OperationNotPermittedException|any>;
    /**
     * Deletes a fleet.
     *
     * @error ResourceInUseException   
     * @error ResourceNotFoundException   
     */
    deleteFleet(params: AppStream.DeleteFleetRequest, callback?: (err: AppStream.ResourceInUseException|AppStream.ResourceNotFoundException|any, data: AppStream.DeleteFleetResult|any) => void): Request<AppStream.DeleteFleetResult|any,AppStream.ResourceInUseException|AppStream.ResourceNotFoundException|any>;
    /**
     * Deletes the stack. After this operation completes, the environment can no longer
be activated, and any reservations made for the stack are released.
     *
     * @error ResourceInUseException   
     * @error ResourceNotFoundException   
     */
    deleteStack(params: AppStream.DeleteStackRequest, callback?: (err: AppStream.ResourceInUseException|AppStream.ResourceNotFoundException|any, data: AppStream.DeleteStackResult|any) => void): Request<AppStream.DeleteStackResult|any,AppStream.ResourceInUseException|AppStream.ResourceNotFoundException|any>;
    /**
     * If fleet names are provided, this operation describes the specified fleets;
otherwise, all the fleets in the account are described.
     *
     * @error ResourceNotFoundException   
     */
    describeFleets(params: AppStream.DescribeFleetsRequest, callback?: (err: AppStream.ResourceNotFoundException|any, data: AppStream.DescribeFleetsResult|any) => void): Request<AppStream.DescribeFleetsResult|any,AppStream.ResourceNotFoundException|any>;
    /**
     * Describes the images. If a list of names is not provided, all images in your
account are returned. This operation does not return a paginated result.
     *
     * @error ResourceNotFoundException   
     */
    describeImages(params: AppStream.DescribeImagesRequest, callback?: (err: AppStream.ResourceNotFoundException|any, data: AppStream.DescribeImagesResult|any) => void): Request<AppStream.DescribeImagesResult|any,AppStream.ResourceNotFoundException|any>;
    /**
     * Describes the streaming sessions for a stack and a fleet. If a user ID is
provided, this operation returns streaming sessions for only that user. Pass
this value for the nextToken parameter in a subsequent call to this operation to
retrieve the next set of items.
     *
     */
    describeSessions(params: AppStream.DescribeSessionsRequest, callback?: (err: any, data: AppStream.DescribeSessionsResult|any) => void): Request<AppStream.DescribeSessionsResult|any,any>;
    /**
     * If stack names are not provided, this operation describes the specified stacks;
otherwise, all stacks in the account are described. Pass the nextToken value in
a subsequent call to this operation to retrieve the next set of items.
     *
     * @error ResourceNotFoundException   
     */
    describeStacks(params: AppStream.DescribeStacksRequest, callback?: (err: AppStream.ResourceNotFoundException|any, data: AppStream.DescribeStacksResult|any) => void): Request<AppStream.DescribeStacksResult|any,AppStream.ResourceNotFoundException|any>;
    /**
     * Disassociates a fleet from a stack.
     *
     * @error ResourceInUseException   
     * @error ResourceNotFoundException   
     */
    disassociateFleet(params: AppStream.DisassociateFleetRequest, callback?: (err: AppStream.ResourceInUseException|AppStream.ResourceNotFoundException|any, data: AppStream.DisassociateFleetResult|any) => void): Request<AppStream.DisassociateFleetResult|any,AppStream.ResourceInUseException|AppStream.ResourceNotFoundException|any>;
    /**
     * This operation immediately stops a streaming session.
     *
     */
    expireSession(params: AppStream.ExpireSessionRequest, callback?: (err: any, data: AppStream.ExpireSessionResult|any) => void): Request<AppStream.ExpireSessionResult|any,any>;
    /**
     * Lists all fleets associated with the stack.
     *
     */
    listAssociatedFleets(params: AppStream.ListAssociatedFleetsRequest, callback?: (err: any, data: AppStream.ListAssociatedFleetsResult|any) => void): Request<AppStream.ListAssociatedFleetsResult|any,any>;
    /**
     * Lists all stacks to which the specified fleet is associated.
     *
     */
    listAssociatedStacks(params: AppStream.ListAssociatedStacksRequest, callback?: (err: any, data: AppStream.ListAssociatedStacksResult|any) => void): Request<AppStream.ListAssociatedStacksResult|any,any>;
    /**
     * Starts a fleet.
     *
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     */
    startFleet(params: AppStream.StartFleetRequest, callback?: (err: AppStream.ResourceNotFoundException|AppStream.LimitExceededException|any, data: AppStream.StartFleetResult|any) => void): Request<AppStream.StartFleetResult|any,AppStream.ResourceNotFoundException|AppStream.LimitExceededException|any>;
    /**
     * Stops a fleet.
     *
     * @error ResourceNotFoundException   
     */
    stopFleet(params: AppStream.StopFleetRequest, callback?: (err: AppStream.ResourceNotFoundException|any, data: AppStream.StopFleetResult|any) => void): Request<AppStream.StopFleetResult|any,AppStream.ResourceNotFoundException|any>;
    /**
     * Updates an existing fleet. All the attributes except the fleet name can be
updated in the STOPPED state. Only ComputeCapacity and ImageName can be updated
in any other state.
     *
     * @error ResourceInUseException   
     * @error LimitExceededException   
     * @error InvalidRoleException   
     * @error ResourceNotFoundException   
     */
    updateFleet(params: AppStream.UpdateFleetRequest, callback?: (err: AppStream.ResourceInUseException|AppStream.LimitExceededException|AppStream.InvalidRoleException|AppStream.ResourceNotFoundException|any, data: AppStream.UpdateFleetResult|any) => void): Request<AppStream.UpdateFleetResult|any,AppStream.ResourceInUseException|AppStream.LimitExceededException|AppStream.InvalidRoleException|AppStream.ResourceNotFoundException|any>;
    /**
     * Updates the specified fields in the stack with the specified name.
     *
     * @error ResourceNotFoundException   
     * @error ResourceInUseException   
     */
    updateStack(params: AppStream.UpdateStackRequest, callback?: (err: AppStream.ResourceNotFoundException|AppStream.ResourceInUseException|any, data: AppStream.UpdateStackResult|any) => void): Request<AppStream.UpdateStackResult|any,AppStream.ResourceNotFoundException|AppStream.ResourceInUseException|any>;

  }

  export module AppStream {
    
    export type Applications = Application[];
    
    export type Arn = string;
    
    export type Boolean = boolean;
    
    export type Description = string;
    
    export type DisplayName = string;
    
    export type ErrorMessage = string;
    
    export type FleetErrorCode = string;
    
    export type FleetErrors = FleetError[];
    
    export type FleetList = Fleet[];
    
    export type FleetState = string;
    
    export type ImageList = Image[];
    
    export type ImageState = string;
    
    export type ImageStateChangeReasonCode = string;
    
    export type Integer = number;
    
    export type Long = number;
    
    export type Metadata = {[key:string]: String};
    
    export type Name = string;
    
    export type PlatformType = string;
    
    export type SessionList = Session[];
    
    export type SessionState = string;
    
    export type StackList = Stack[];
    
    export type String = string;
    
    export type StringList = String[];
    
    export type SubnetIdList = String[];
    
    export type Timestamp = number;
    
    export type UserId = string;
    
    export type VisibilityType = string;

    export interface Application {
        /** The unique identifier for the application. **/
        Name?: String;
        /** The name of the application shown to the end users. **/
        DisplayName?: String;
        /** The URL for the application icon. This URL may be time-limited. **/
        IconURL?: String;
        /** The path to the application executable in the instance. **/
        LaunchPath?: String;
        /** A list of arguments that are passed to the application at launch. **/
        LaunchParameters?: String;
        /** An application can be disabled after image creation if there is a problem. **/
        Enabled?: Boolean;
        /** Additional attributes that describes the application. **/
        Metadata?: Metadata;
    }
    export interface AssociateFleetRequest {
        /** The name of the fleet to associate. **/
        FleetName: String;
        /** The name of the stack to which the fleet is associated. **/
        StackName: String;
    }
    export interface AssociateFleetResult {
    }
    export interface ComputeCapacity {
        /** The desired number of streaming instances. **/
        DesiredInstances: Integer;
    }
    export interface ComputeCapacityStatus {
        /** The desired number of streaming instances. **/
        Desired: Integer;
        /** The total number of simultaneous streaming instances that are running. **/
        Running?: Integer;
        /** The number of instances that are being used for streaming. **/
        InUse?: Integer;
        /** The number of currently available instances that can be used to stream sessions. **/
        Available?: Integer;
    }
    export interface CreateFleetRequest {
        /** A unique identifier for the fleet. **/
        Name: Name;
        /** Unique name of the image used by the fleet. **/
        ImageName: String;
        /** The instance type of compute resources for the fleet. Fleet instances are
launched from this instance type. **/
        InstanceType: String;
        /** The parameters for the capacity allocated to the fleet. **/
        ComputeCapacity: ComputeCapacity;
        /** The VPC configuration for the fleet. **/
        VpcConfig?: VpcConfig;
        /** The maximum time up to which a streaming session can run. **/
        MaxUserDurationInSeconds?: Integer;
        /** The time after disconnection when a session is considered to have ended. If a
user who got disconnected reconnects within this timeout interval, the user is
connected back to his/her previous session. **/
        DisconnectTimeoutInSeconds?: Integer;
        /** The description of the fleet. **/
        Description?: Description;
        /** The display name of the fleet. **/
        DisplayName?: DisplayName;
    }
    export interface CreateFleetResult {
        /** The details for the created fleet. **/
        Fleet?: Fleet;
    }
    export interface CreateStackRequest {
        /** The unique identifier for this stack. **/
        Name: String;
        /** The description displayed to end users on the AppStream 2.0 portal. **/
        Description?: Description;
        /** The name displayed to end users on the AppStream 2.0 portal. **/
        DisplayName?: DisplayName;
    }
    export interface CreateStackResult {
        /** The details for the created stack. **/
        Stack?: Stack;
    }
    export interface CreateStreamingURLRequest {
        /** The stack for which the URL is generated. **/
        StackName: String;
        /** The fleet for which the URL is generated. **/
        FleetName: String;
        /** A unique user ID for whom the URL is generated. **/
        UserId: UserId;
        /** The ID of the application that must be launched after the session starts. **/
        ApplicationId?: String;
        /** The validity duration of the URL in seconds. After this duration, the URL
returned by this operation becomes invalid. **/
        Validity?: Long;
        /** The sessionContext of the streaming URL. **/
        SessionContext?: String;
    }
    export interface CreateStreamingURLResult {
        /** The URL to start the AppStream 2.0 streaming session. **/
        StreamingURL?: String;
        /** Elapsed seconds after the Unix epoch, at which time this URL expires. **/
        Expires?: Timestamp;
    }
    export interface DeleteFleetRequest {
        /** The name of the fleet to be deleted. **/
        Name: String;
    }
    export interface DeleteFleetResult {
    }
    export interface DeleteStackRequest {
        /** The name of the stack to delete. **/
        Name: String;
    }
    export interface DeleteStackResult {
    }
    export interface DescribeFleetsRequest {
        /** The fleet names to describe. Use null to describe all the fleets for the AWS
account. **/
        Names?: StringList;
        /** The pagination token to use to retrieve the next page of results for this
operation. If this value is null, it retrieves the first page. **/
        NextToken?: String;
    }
    export interface DescribeFleetsResult {
        /** The list of fleet details. **/
        Fleets?: FleetList;
        /** The pagination token to use to retrieve the next page of results for this
operation. If there are no more pages, this value is null. **/
        NextToken?: String;
    }
    export interface DescribeImagesRequest {
        /** A specific list of images to describe. **/
        Names?: StringList;
    }
    export interface DescribeImagesResult {
        /** The list of images. **/
        Images?: ImageList;
    }
    export interface DescribeSessionsRequest {
        /** The name of the stack for which to list sessions. **/
        StackName: String;
        /** The name of the fleet for which to list sessions. **/
        FleetName: String;
        /** The user for whom to list sessions. Use null to describe all the sessions for
the stack and fleet. **/
        UserId?: UserId;
        /** The pagination token to use to retrieve the next page of results for this
operation. If this value is null, it retrieves the first page. **/
        NextToken?: String;
        /** The size of each page of results. The default value is 20 and the maximum
supported value is 50. **/
        Limit?: Integer;
    }
    export interface DescribeSessionsResult {
        /** The list of streaming sessions. **/
        Sessions?: SessionList;
        /** The pagination token to use to retrieve the next page of results for this
operation. If there are no more pages, this value is null. **/
        NextToken?: String;
    }
    export interface DescribeStacksRequest {
        /** The stack names to describe. Use null to describe all the stacks for the AWS
account. **/
        Names?: StringList;
        /** The pagination token to use to retrieve the next page of results for this
operation. If this value is null, it retrieves the first page. **/
        NextToken?: String;
    }
    export interface DescribeStacksResult {
        /** The list of stack details. **/
        Stacks?: StackList;
        /** The pagination token to use to retrieve the next page of results for this
operation. If there are no more pages, this value is null. **/
        NextToken?: String;
    }
    export interface DisassociateFleetRequest {
        /** The name of the fleet to disassociate. **/
        FleetName: String;
        /** The name of the stack with which the fleet is associated. **/
        StackName: String;
    }
    export interface DisassociateFleetResult {
    }
    export interface ExpireSessionRequest {
        /** The unique identifier of the streaming session to be stopped. **/
        SessionId: String;
    }
    export interface ExpireSessionResult {
    }
    export interface Fleet {
        /** The ARN for the fleet. **/
        Arn: Arn;
        /** The name of the fleet. **/
        Name: String;
        /** The name displayed to end users on the AppStream 2.0 portal. **/
        DisplayName?: String;
        /** The description displayed to end users on the AppStream 2.0 portal. **/
        Description?: String;
        /** The image used by the fleet. **/
        ImageName: String;
        /** The instance type of compute resources for the fleet. The fleet instances are
launched from this instance type. **/
        InstanceType: String;
        /** The capacity information for the fleet. **/
        ComputeCapacityStatus: ComputeCapacityStatus;
        /** The maximum time during which a streaming session can run. **/
        MaxUserDurationInSeconds?: Integer;
        /** The time after disconnection when a session is considered to have ended. When a
user reconnects after a disconnection, the user is connected to the same session
and instance within this time interval. **/
        DisconnectTimeoutInSeconds?: Integer;
        /** The current state for the fleet. **/
        State: FleetState;
        /** The VPC configuration for the fleet. **/
        VpcConfig?: VpcConfig;
        /** The time at which the fleet was created. **/
        CreatedTime?: Timestamp;
        /** The list of fleet errors is appended to this list. **/
        FleetErrors?: FleetErrors;
    }
    export interface FleetError {
        /** The error code for the fleet error. **/
        ErrorCode?: FleetErrorCode;
        /** The error message generated when the fleet has errors. **/
        ErrorMessage?: String;
    }
    export interface Image {
        /** The unique identifier for the image. **/
        Name: String;
        /** The ARN for the image. **/
        Arn?: Arn;
        /** The source image ARN from which this image was created. **/
        BaseImageArn?: Arn;
        /** The display name for the image. **/
        DisplayName?: String;
        /** The image starts in the PENDING state, and then moves to AVAILABLE if image
creation succeeds and FAILED if image creation has failed. **/
        State?: ImageState;
        /** The visibility of an image to the user; images can be public or private. **/
        Visibility?: VisibilityType;
        /** The operating system platform of the image. **/
        Platform?: PlatformType;
        /** A meaningful description for the image. **/
        Description?: String;
        /** The reason why the last state change occurred. **/
        StateChangeReason?: ImageStateChangeReason;
        /** The applications associated with an image. **/
        Applications?: Applications;
        /** The timestamp when the image was created. **/
        CreatedTime?: Timestamp;
    }
    export interface ImageStateChangeReason {
        /** The state change reason code of the image. **/
        Code?: ImageStateChangeReasonCode;
        /** The state change reason message to the end user. **/
        Message?: String;
    }
    export interface InvalidRoleException {
        Message?: ErrorMessage;
    }
    export interface LimitExceededException {
        Message?: ErrorMessage;
    }
    export interface ListAssociatedFleetsRequest {
        /** The name of the stack whose associated fleets are listed. **/
        StackName: String;
        /** The pagination token to use to retrieve the next page of results for this
operation. If this value is null, it retrieves the first page. **/
        NextToken?: String;
    }
    export interface ListAssociatedFleetsResult {
        /** The names of associated fleets. **/
        Names?: StringList;
        /** The pagination token to use to retrieve the next page of results for this
operation. If there are no more pages, this value is null. **/
        NextToken?: String;
    }
    export interface ListAssociatedStacksRequest {
        /** The name of the fleet whose associated stacks are listed. **/
        FleetName: String;
        /** The pagination token to use to retrieve the next page of results for this
operation. If this value is null, it retrieves the first page. **/
        NextToken?: String;
    }
    export interface ListAssociatedStacksResult {
        /** The names of associated stacks. **/
        Names?: StringList;
        /** The pagination token to use to retrieve the next page of results for this
operation. If there are no more pages, this value is null. **/
        NextToken?: String;
    }
    export interface OperationNotPermittedException {
        Message?: ErrorMessage;
    }
    export interface ResourceAlreadyExistsException {
        Message?: ErrorMessage;
    }
    export interface ResourceInUseException {
        Message?: ErrorMessage;
    }
    export interface ResourceNotAvailableException {
        Message?: ErrorMessage;
    }
    export interface ResourceNotFoundException {
        Message?: ErrorMessage;
    }
    export interface Session {
        /** The unique ID for a streaming session. **/
        Id: String;
        /** The identifier of the user for whom the session was created. **/
        UserId: UserId;
        /** The name of the stack for which the streaming session was created. **/
        StackName: String;
        /** The name of the fleet for which the streaming session was created. **/
        FleetName: String;
        /** The current state of the streaming session. **/
        State: SessionState;
    }
    export interface Stack {
        /** The ARN of the stack. **/
        Arn?: Arn;
        /** The unique identifier of the stack. **/
        Name: String;
        /** A meaningful description for the stack. **/
        Description?: String;
        /** A display name for the stack. **/
        DisplayName?: String;
        /** The timestamp when the stack was created. **/
        CreatedTime?: Timestamp;
    }
    export interface StartFleetRequest {
        /** The name of the fleet to start. **/
        Name: String;
    }
    export interface StartFleetResult {
    }
    export interface StopFleetRequest {
        /** The name of the fleet to stop. **/
        Name: String;
    }
    export interface StopFleetResult {
    }
    export interface UpdateFleetRequest {
        /** The image name from which a fleet is created. **/
        ImageName?: String;
        /** The name of the fleet. **/
        Name: String;
        /** The instance type of compute resources for the fleet. Fleet instances are
launched from this instance type. **/
        InstanceType?: String;
        /** The parameters for the capacity allocated to the fleet. **/
        ComputeCapacity?: ComputeCapacity;
        /** The VPC configuration for the fleet. **/
        VpcConfig?: VpcConfig;
        /** The maximum time during which a streaming session can run. **/
        MaxUserDurationInSeconds?: Integer;
        /** The time after disconnection when a session is considered to have ended. When
the user reconnects after a disconnection, the user is connected to the same
instance within this time interval. **/
        DisconnectTimeoutInSeconds?: Integer;
        /** Delete the VPC association for the specified fleet. **/
        DeleteVpcConfig?: Boolean;
        /** The description displayed to end users on the AppStream 2.0 portal. **/
        Description?: Description;
        /** The name displayed to end users on the AppStream 2.0 portal. **/
        DisplayName?: DisplayName;
    }
    export interface UpdateFleetResult {
        /** A list of fleet details. **/
        Fleet?: Fleet;
    }
    export interface UpdateStackRequest {
        /** The name displayed to end users on the AppStream 2.0 portal. **/
        DisplayName?: DisplayName;
        /** The description displayed to end users on the AppStream 2.0 portal. **/
        Description?: Description;
        /** The name of the stack to update. **/
        Name: String;
    }
    export interface UpdateStackResult {
        /** A list of stack details. **/
        Stack?: Stack;
    }
    export interface VpcConfig {
        /** The list of subnets to which a network interface is established from the fleet
instance. **/
        SubnetIds: SubnetIdList;
    }
  }
}
