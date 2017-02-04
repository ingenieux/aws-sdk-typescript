// Type definitions for aws-sdk - AWS Support
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2013-04-15
   * endpointPrefix: support
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * AWS Support The AWS Support API reference is intended for programmers who need
detailed information about the AWS Support operations and data types. This
service enables you to manage your AWS Support cases programmatically. It uses
HTTP methods that return results in JSON format.

The AWS Support service also exposes a set of Trusted Advisor
[http://aws.amazon.com/premiumsupport/trustedadvisor/] features. You can
retrieve a list of checks and their descriptions, get check results, specify
checks to refresh, and get the refresh status of checks. 

The following list describes the AWS Support case management operations:

 &amp;#42;   Service names, issue categories, and available severity levels. The 
   DescribeServices and DescribeSeverityLevels operations return AWS service
   names, service codes, service categories, and problem severity levels. You
   use these values when you call the CreateCase operation. 
   
   
 *   Case creation, case details, and case resolution. The CreateCase, 
   DescribeCases, DescribeAttachment, and ResolveCase operations create AWS
   Support cases, retrieve information about cases, and resolve cases.
   
   
 *   Case communication. The DescribeCommunications, AddCommunicationToCase, and 
   AddAttachmentsToSet operations retrieve and add communications and
   attachments to AWS Support cases. 
   
   

The following list describes the operations available from the AWS Support
service for Trusted Advisor:

 *   DescribeTrustedAdvisorChecks returns the list of checks that run against
   your AWS resources.
   
   
 *  Using the checkId for a specific check returned by 
   DescribeTrustedAdvisorChecks, you can call DescribeTrustedAdvisorCheckResult 
   to obtain the results for the check you specified.
   
   
 *   DescribeTrustedAdvisorCheckSummaries returns summarized results for one or
   more Trusted Advisor checks.
   
   
 *   RefreshTrustedAdvisorCheck requests that Trusted Advisor rerun a specified
   check. 
   
   
 *   DescribeTrustedAdvisorCheckRefreshStatuses reports the refresh status of one
   or more checks. 
   
   

For authentication of requests, AWS Support uses Signature Version 4 Signing
Process [http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html].

See About the AWS Support API
[http://docs.aws.amazon.com/awssupport/latest/user/Welcome.html] in the AWS
Support User Guide for information about how to use this service to create and
manage your support cases, and how to call Trusted Advisor for results of checks
on your resources.
   *
   */
  export class Support extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds one or more attachments to an attachment set. If an attachmentSetId is not
specified, a new attachment set is created, and the ID of the set is returned in
the response. If an attachmentSetId is specified, the attachments are added to
the specified set, if it exists.

An attachment set is a temporary container for attachments that are to be added
to a case or case communication. The set is available for one hour after it is
created; the expiryTime returned in the response indicates when the set expires.
The maximum number of attachments in a set is 3, and the maximum size of any
attachment in the set is 5 MB.
     *
     * @error InternalServerError   
     * @error AttachmentSetIdNotFound   
     * @error AttachmentSetExpired   
     * @error AttachmentSetSizeLimitExceeded   
     * @error AttachmentLimitExceeded   
     */
    addAttachmentsToSet(params: Support.AddAttachmentsToSetRequest, callback?: (err: Support.InternalServerError|Support.AttachmentSetIdNotFound|Support.AttachmentSetExpired|Support.AttachmentSetSizeLimitExceeded|Support.AttachmentLimitExceeded|any, data: Support.AddAttachmentsToSetResponse|any) => void): Request<Support.AddAttachmentsToSetResponse|any,Support.InternalServerError|Support.AttachmentSetIdNotFound|Support.AttachmentSetExpired|Support.AttachmentSetSizeLimitExceeded|Support.AttachmentLimitExceeded|any>;
    /**
     * Adds additional customer communication to an AWS Support case. You use the 
caseId value to identify the case to add communication to. You can list a set of
email addresses to copy on the communication using the ccEmailAddresses value.
The communicationBody value contains the text of the communication.

The response indicates the success or failure of the request.

This operation implements a subset of the features of the AWS Support Center.
     *
     * @error InternalServerError   
     * @error CaseIdNotFound   
     * @error AttachmentSetIdNotFound   
     * @error AttachmentSetExpired   
     */
    addCommunicationToCase(params: Support.AddCommunicationToCaseRequest, callback?: (err: Support.InternalServerError|Support.CaseIdNotFound|Support.AttachmentSetIdNotFound|Support.AttachmentSetExpired|any, data: Support.AddCommunicationToCaseResponse|any) => void): Request<Support.AddCommunicationToCaseResponse|any,Support.InternalServerError|Support.CaseIdNotFound|Support.AttachmentSetIdNotFound|Support.AttachmentSetExpired|any>;
    /**
     * Creates a new case in the AWS Support Center. This operation is modeled on the
behavior of the AWS Support Center Create Case
[https://console.aws.amazon.com/support/home#/case/create] page. Its parameters
require you to specify the following information: 

 &amp;#42;   issueType. The type of issue for the case. You can specify either
   &quot;customer-service&quot; or &quot;technical.&quot; If you do not indicate a value, the
   default is &quot;technical.&quot; 
   
   
 *   serviceCode. The code for an AWS service. You obtain the serviceCode by
   calling DescribeServices. 
   
   
 *   categoryCode. The category for the service defined for the serviceCode 
   value. You also obtain the category code for a service by calling 
   DescribeServices. Each AWS service defines its own set of category codes. 
   
   
 *   severityCode. A value that indicates the urgency of the case, which in turn
   determines the response time according to your service level agreement with
   AWS Support. You obtain the SeverityCode by calling DescribeSeverityLevels.
   
   
 *   subject. The Subject field on the AWS Support Center Create Case
   [https://console.aws.amazon.com/support/home#/case/create] page.
   
   
 *   communicationBody. The Description field on the AWS Support Center Create
   Case [https://console.aws.amazon.com/support/home#/case/create] page.
   
   
 *   attachmentSetId. The ID of a set of attachments that has been created by
   using AddAttachmentsToSet.
   
   
 *   language. The human language in which AWS Support handles the case. English
   and Japanese are currently supported.
   
   
 *   ccEmailAddresses. The AWS Support Center CC field on the Create Case
   [https://console.aws.amazon.com/support/home#/case/create] page. You can list
   email addresses to be copied on any correspondence about the case. The
   account that opens the case is already identified by passing the AWS
   Credentials in the HTTP POST method or in a method or function call from one
   of the programming languages supported by an AWS SDK
   [http://aws.amazon.com/tools/]. 
   
   

To add additional communication or attachments to an existing case, use 
AddCommunicationToCase.

A successful CreateCase request returns an AWS Support case number. Case numbers
are used by the DescribeCases operation to retrieve existing AWS Support cases.
     *
     * @error InternalServerError   
     * @error CaseCreationLimitExceeded   
     * @error AttachmentSetIdNotFound   
     * @error AttachmentSetExpired   
     */
    createCase(params: Support.CreateCaseRequest, callback?: (err: Support.InternalServerError|Support.CaseCreationLimitExceeded|Support.AttachmentSetIdNotFound|Support.AttachmentSetExpired|any, data: Support.CreateCaseResponse|any) => void): Request<Support.CreateCaseResponse|any,Support.InternalServerError|Support.CaseCreationLimitExceeded|Support.AttachmentSetIdNotFound|Support.AttachmentSetExpired|any>;
    /**
     * Returns the attachment that has the specified ID. Attachment IDs are generated
by the case management system when you add an attachment to a case or case
communication. Attachment IDs are returned in the AttachmentDetails objects that
are returned by the DescribeCommunications operation.
     *
     * @error InternalServerError   
     * @error DescribeAttachmentLimitExceeded   
     * @error AttachmentIdNotFound   
     */
    describeAttachment(params: Support.DescribeAttachmentRequest, callback?: (err: Support.InternalServerError|Support.DescribeAttachmentLimitExceeded|Support.AttachmentIdNotFound|any, data: Support.DescribeAttachmentResponse|any) => void): Request<Support.DescribeAttachmentResponse|any,Support.InternalServerError|Support.DescribeAttachmentLimitExceeded|Support.AttachmentIdNotFound|any>;
    /**
     * Returns a list of cases that you specify by passing one or more case IDs. In
addition, you can filter the cases by date by setting values for the afterTime 
and beforeTime request parameters. You can set values for the 
includeResolvedCases and includeCommunications request parameters to control how
much information is returned. 

Case data is available for 12 months after creation. If a case was created more
than 12 months ago, a request for data might cause an error.

The response returns the following in JSON format:

 &amp;#42;  One or more CaseDetails data types. 
   
   
 *  One or more nextToken values, which specify where to paginate the returned
   records represented by the CaseDetails objects.
     *
     * @error InternalServerError   
     * @error CaseIdNotFound   
     */
    describeCases(params: Support.DescribeCasesRequest, callback?: (err: Support.InternalServerError|Support.CaseIdNotFound|any, data: Support.DescribeCasesResponse|any) => void): Request<Support.DescribeCasesResponse|any,Support.InternalServerError|Support.CaseIdNotFound|any>;
    /**
     * Returns communications (and attachments) for one or more support cases. You can
use the afterTime and beforeTime parameters to filter by date. You can use the 
caseId parameter to restrict the results to a particular case.

Case data is available for 12 months after creation. If a case was created more
than 12 months ago, a request for data might cause an error.

You can use the maxResults and nextToken parameters to control the pagination of
the result set. Set maxResults to the number of cases you want displayed on each
page, and use nextToken to specify the resumption of pagination.
     *
     * @error InternalServerError   
     * @error CaseIdNotFound   
     */
    describeCommunications(params: Support.DescribeCommunicationsRequest, callback?: (err: Support.InternalServerError|Support.CaseIdNotFound|any, data: Support.DescribeCommunicationsResponse|any) => void): Request<Support.DescribeCommunicationsResponse|any,Support.InternalServerError|Support.CaseIdNotFound|any>;
    /**
     * Returns the current list of AWS services and a list of service categories that
applies to each one. You then use service names and categories in your 
CreateCase requests. Each AWS service has its own set of categories.

The service codes and category codes correspond to the values that are displayed
in the Service and Category drop-down lists on the AWS Support Center Create
Case [https://console.aws.amazon.com/support/home#/case/create] page. The values
in those fields, however, do not necessarily match the service codes and
categories returned by the DescribeServices request. Always use the service
codes and categories obtained programmatically. This practice ensures that you
always have the most recent set of service and category codes.
     *
     * @error InternalServerError   
     */
    describeServices(params: Support.DescribeServicesRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeServicesResponse|any) => void): Request<Support.DescribeServicesResponse|any,Support.InternalServerError|any>;
    /**
     * Returns the list of severity levels that you can assign to an AWS Support case.
The severity level for a case is also a field in the CaseDetails data type
included in any CreateCase request.
     *
     * @error InternalServerError   
     */
    describeSeverityLevels(params: Support.DescribeSeverityLevelsRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeSeverityLevelsResponse|any) => void): Request<Support.DescribeSeverityLevelsResponse|any,Support.InternalServerError|any>;
    /**
     * Returns the refresh status of the Trusted Advisor checks that have the specified
check IDs. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks.

Some checks are refreshed automatically, and their refresh statuses cannot be
retrieved by using this operation. Use of the 
DescribeTrustedAdvisorCheckRefreshStatuses operation for these checks causes an 
InvalidParameterValue error.
     *
     * @error InternalServerError   
     */
    describeTrustedAdvisorCheckRefreshStatuses(params: Support.DescribeTrustedAdvisorCheckRefreshStatusesRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeTrustedAdvisorCheckRefreshStatusesResponse|any) => void): Request<Support.DescribeTrustedAdvisorCheckRefreshStatusesResponse|any,Support.InternalServerError|any>;
    /**
     * Returns the results of the Trusted Advisor check that has the specified check
ID. Check IDs can be obtained by calling DescribeTrustedAdvisorChecks.

The response contains a TrustedAdvisorCheckResult object, which contains these
three objects:

 &amp;#42;   TrustedAdvisorCategorySpecificSummary 
   
   
 *   TrustedAdvisorResourceDetail 
   
   
 *   TrustedAdvisorResourcesSummary 
   
   

In addition, the response contains these fields:

 *   status. The alert status of the check: &quot;ok&quot; (green), &quot;warning&quot; (yellow),
   &quot;error&quot; (red), or &quot;not_available&quot;.
   
   
 *   timestamp. The time of the last refresh of the check.
   
   
 *   checkId. The unique identifier for the check.
     *
     * @error InternalServerError   
     */
    describeTrustedAdvisorCheckResult(params: Support.DescribeTrustedAdvisorCheckResultRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeTrustedAdvisorCheckResultResponse|any) => void): Request<Support.DescribeTrustedAdvisorCheckResultResponse|any,Support.InternalServerError|any>;
    /**
     * Returns the summaries of the results of the Trusted Advisor checks that have the
specified check IDs. Check IDs can be obtained by calling 
DescribeTrustedAdvisorChecks.

The response contains an array of TrustedAdvisorCheckSummary objects.
     *
     * @error InternalServerError   
     */
    describeTrustedAdvisorCheckSummaries(params: Support.DescribeTrustedAdvisorCheckSummariesRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeTrustedAdvisorCheckSummariesResponse|any) => void): Request<Support.DescribeTrustedAdvisorCheckSummariesResponse|any,Support.InternalServerError|any>;
    /**
     * Returns information about all available Trusted Advisor checks, including name,
ID, category, description, and metadata. You must specify a language code;
English (&quot;en&quot;) and Japanese (&quot;ja&quot;) are currently supported. The response
contains a TrustedAdvisorCheckDescription for each check.
     *
     * @error InternalServerError   
     */
    describeTrustedAdvisorChecks(params: Support.DescribeTrustedAdvisorChecksRequest, callback?: (err: Support.InternalServerError|any, data: Support.DescribeTrustedAdvisorChecksResponse|any) => void): Request<Support.DescribeTrustedAdvisorChecksResponse|any,Support.InternalServerError|any>;
    /**
     * Requests a refresh of the Trusted Advisor check that has the specified check ID.
Check IDs can be obtained by calling DescribeTrustedAdvisorChecks.

Some checks are refreshed automatically, and they cannot be refreshed by using
this operation. Use of the RefreshTrustedAdvisorCheck operation for these checks
causes an InvalidParameterValue error.

The response contains a TrustedAdvisorCheckRefreshStatus object, which contains
these fields:

 &amp;#42;   status. The refresh status of the check: &quot;none&quot;, &quot;enqueued&quot;, &quot;processing&quot;,
   &quot;success&quot;, or &quot;abandoned&quot;.
   
   
 *   millisUntilNextRefreshable. The amount of time, in milliseconds, until the
   check is eligible for refresh.
   
   
 *   checkId. The unique identifier for the check.
     *
     * @error InternalServerError   
     */
    refreshTrustedAdvisorCheck(params: Support.RefreshTrustedAdvisorCheckRequest, callback?: (err: Support.InternalServerError|any, data: Support.RefreshTrustedAdvisorCheckResponse|any) => void): Request<Support.RefreshTrustedAdvisorCheckResponse|any,Support.InternalServerError|any>;
    /**
     * Takes a caseId and returns the initial state of the case along with the state of
the case after the call to ResolveCase completed.
     *
     * @error InternalServerError   
     * @error CaseIdNotFound   
     */
    resolveCase(params: Support.ResolveCaseRequest, callback?: (err: Support.InternalServerError|Support.CaseIdNotFound|any, data: Support.ResolveCaseResponse|any) => void): Request<Support.ResolveCaseResponse|any,Support.InternalServerError|Support.CaseIdNotFound|any>;

  }

  export module Support {
    
    export type AfterTime = string;
    
    export type AttachmentId = string;
    
    export type AttachmentSet = AttachmentDetails[];
    
    export type AttachmentSetId = string;
    
    export type Attachments = Attachment[];
    
    export type BeforeTime = string;
    
    export type Boolean = boolean;
    
    export type CaseId = string;
    
    export type CaseIdList = CaseId[];
    
    export type CaseList = CaseDetails[];
    
    export type CaseStatus = string;
    
    export type CategoryCode = string;
    
    export type CategoryList = Category[];
    
    export type CategoryName = string;
    
    export type CcEmailAddress = string;
    
    export type CcEmailAddressList = CcEmailAddress[];
    
    export type CommunicationBody = string;
    
    export type CommunicationList = Communication[];
    
    export type Data = any;
    
    export type DisplayId = string;
    
    export type Double = number;
    
    export type ErrorMessage = string;
    
    export type ExpiryTime = string;
    
    export type FileName = string;
    
    export type IncludeCommunications = boolean;
    
    export type IncludeResolvedCases = boolean;
    
    export type IssueType = string;
    
    export type Language = string;
    
    export type Long = number;
    
    export type MaxResults = number;
    
    export type NextToken = string;
    
    export type Result = boolean;
    
    export type ServiceCode = string;
    
    export type ServiceCodeList = ServiceCode[];
    
    export type ServiceList = Service[];
    
    export type ServiceName = string;
    
    export type SeverityCode = string;
    
    export type SeverityLevelCode = string;
    
    export type SeverityLevelName = string;
    
    export type SeverityLevelsList = SeverityLevel[];
    
    export type Status = string;
    
    export type String = string;
    
    export type StringList = String[];
    
    export type Subject = string;
    
    export type SubmittedBy = string;
    
    export type TimeCreated = string;
    
    export type TrustedAdvisorCheckList = TrustedAdvisorCheckDescription[];
    
    export type TrustedAdvisorCheckRefreshStatusList = TrustedAdvisorCheckRefreshStatus[];
    
    export type TrustedAdvisorCheckSummaryList = TrustedAdvisorCheckSummary[];
    
    export type TrustedAdvisorResourceDetailList = TrustedAdvisorResourceDetail[];

    export interface AddAttachmentsToSetRequest {
        /** The ID of the attachment set. If an attachmentSetId is not specified, a new
attachment set is created, and the ID of the set is returned in the response. If
an attachmentSetId is specified, the attachments are added to the specified set,
if it exists. **/
        attachmentSetId?: AttachmentSetId;
        /** One or more attachments to add to the set. The limit is 3 attachments per set,
and the size limit is 5 MB per attachment. **/
        attachments: Attachments;
    }
    export interface AddAttachmentsToSetResponse {
        /** The ID of the attachment set. If an attachmentSetId was not specified, a new
attachment set is created, and the ID of the set is returned in the response. If
an attachmentSetId was specified, the attachments are added to the specified
set, if it exists. **/
        attachmentSetId?: AttachmentSetId;
        /** The time and date when the attachment set expires. **/
        expiryTime?: ExpiryTime;
    }
    export interface AddCommunicationToCaseRequest {
        /** The AWS Support case ID requested or returned in the call. The case ID is an
alphanumeric string formatted as shown in this example: case-
12345678910-2013-c4c1d2bf33c5cf47 **/
        caseId?: CaseId;
        /** The body of an email communication to add to the support case. **/
        communicationBody: CommunicationBody;
        /** The email addresses in the CC line of an email to be added to the support case. **/
        ccEmailAddresses?: CcEmailAddressList;
        /** The ID of a set of one or more attachments for the communication to add to the
case. Create the set by calling AddAttachmentsToSet **/
        attachmentSetId?: AttachmentSetId;
    }
    export interface AddCommunicationToCaseResponse {
        /** True if AddCommunicationToCase succeeds. Otherwise, returns an error. **/
        result?: Result;
    }
    export interface Attachment {
        /** The name of the attachment file. **/
        fileName?: FileName;
        /** The content of the attachment file. **/
        data?: Data;
    }
    export interface AttachmentDetails {
        /** The ID of the attachment. **/
        attachmentId?: AttachmentId;
        /** The file name of the attachment. **/
        fileName?: FileName;
    }
    export interface AttachmentIdNotFound {
        /** An attachment with the specified ID could not be found. **/
        message?: ErrorMessage;
    }
    export interface AttachmentLimitExceeded {
        /** The limit for the number of attachment sets created in a short period of time
has been exceeded. **/
        message?: ErrorMessage;
    }
    export interface AttachmentSetExpired {
        /** The expiration time of the attachment set has passed. The set expires 1 hour
after it is created. **/
        message?: ErrorMessage;
    }
    export interface AttachmentSetIdNotFound {
        /** An attachment set with the specified ID could not be found. **/
        message?: ErrorMessage;
    }
    export interface AttachmentSetSizeLimitExceeded {
        /** A limit for the size of an attachment set has been exceeded. The limits are 3
attachments and 5 MB per attachment. **/
        message?: ErrorMessage;
    }
    export interface CaseCreationLimitExceeded {
        /** An error message that indicates that you have exceeded the number of cases you
can have open. **/
        message?: ErrorMessage;
    }
    export interface CaseDetails {
        /** The AWS Support case ID requested or returned in the call. The case ID is an
alphanumeric string formatted as shown in this example: case-
12345678910-2013-c4c1d2bf33c5cf47 **/
        caseId?: CaseId;
        /** The ID displayed for the case in the AWS Support Center. This is a numeric
string. **/
        displayId?: DisplayId;
        /** The subject line for the case in the AWS Support Center. **/
        subject?: Subject;
        /** The status of the case. **/
        status?: Status;
        /** The code for the AWS service returned by the call to DescribeServices. **/
        serviceCode?: ServiceCode;
        /** The category of problem for the AWS Support case. **/
        categoryCode?: CategoryCode;
        /** The code for the severity level returned by the call to DescribeSeverityLevels. **/
        severityCode?: SeverityCode;
        /** The email address of the account that submitted the case. **/
        submittedBy?: SubmittedBy;
        /** The time that the case was case created in the AWS Support Center. **/
        timeCreated?: TimeCreated;
        /** The five most recent communications between you and AWS Support Center,
including the IDs of any attachments to the communications. Also includes a 
nextToken that you can use to retrieve earlier communications. **/
        recentCommunications?: RecentCaseCommunications;
        /** The email addresses that receive copies of communication about the case. **/
        ccEmailAddresses?: CcEmailAddressList;
        /** The ISO 639-1 code for the language in which AWS provides support. AWS Support
currently supports English (&quot;en&quot;) and Japanese (&quot;ja&quot;). Language parameters must
be passed explicitly for operations that take them. **/
        language?: Language;
    }
    export interface CaseIdNotFound {
        /** The requested CaseId could not be located. **/
        message?: ErrorMessage;
    }
    export interface Category {
        /** The category code for the support case. **/
        code?: CategoryCode;
        /** The category name for the support case. **/
        name?: CategoryName;
    }
    export interface Communication {
        /** The AWS Support case ID requested or returned in the call. The case ID is an
alphanumeric string formatted as shown in this example: case-
12345678910-2013-c4c1d2bf33c5cf47 **/
        caseId?: CaseId;
        /** The text of the communication between the customer and AWS Support. **/
        body?: CommunicationBody;
        /** The email address of the account that submitted the AWS Support case. **/
        submittedBy?: SubmittedBy;
        /** The time the communication was created. **/
        timeCreated?: TimeCreated;
        /** Information about the attachments to the case communication. **/
        attachmentSet?: AttachmentSet;
    }
    export interface CreateCaseRequest {
        /** The title of the AWS Support case. **/
        subject: Subject;
        /** The code for the AWS service returned by the call to DescribeServices. **/
        serviceCode?: ServiceCode;
        /** The code for the severity level returned by the call to DescribeSeverityLevels.

The availability of severity levels depends on each customer&#x27;s support
subscription. In other words, your subscription may not necessarily require the
urgent level of response time. **/
        severityCode?: SeverityCode;
        /** The category of problem for the AWS Support case. **/
        categoryCode?: CategoryCode;
        /** The communication body text when you create an AWS Support case by calling 
CreateCase. **/
        communicationBody: CommunicationBody;
        /** A list of email addresses that AWS Support copies on case correspondence. **/
        ccEmailAddresses?: CcEmailAddressList;
        /** The ISO 639-1 code for the language in which AWS provides support. AWS Support
currently supports English (&quot;en&quot;) and Japanese (&quot;ja&quot;). Language parameters must
be passed explicitly for operations that take them. **/
        language?: Language;
        /** The type of issue for the case. You can specify either &quot;customer-service&quot; or
&quot;technical.&quot; If you do not indicate a value, the default is &quot;technical.&quot; **/
        issueType?: IssueType;
        /** The ID of a set of one or more attachments for the case. Create the set by using 
AddAttachmentsToSet. **/
        attachmentSetId?: AttachmentSetId;
    }
    export interface CreateCaseResponse {
        /** The AWS Support case ID requested or returned in the call. The case ID is an
alphanumeric string formatted as shown in this example: case-
12345678910-2013-c4c1d2bf33c5cf47 **/
        caseId?: CaseId;
    }
    export interface DescribeAttachmentLimitExceeded {
        /** The limit for the number of DescribeAttachment requests in a short period of
time has been exceeded. **/
        message?: ErrorMessage;
    }
    export interface DescribeAttachmentRequest {
        /** The ID of the attachment to return. Attachment IDs are returned by the 
DescribeCommunications operation. **/
        attachmentId: AttachmentId;
    }
    export interface DescribeAttachmentResponse {
        /** The attachment content and file name. **/
        attachment?: Attachment;
    }
    export interface DescribeCasesRequest {
        /** A list of ID numbers of the support cases you want returned. The maximum number
of cases is 100. **/
        caseIdList?: CaseIdList;
        /** The ID displayed for a case in the AWS Support Center user interface. **/
        displayId?: DisplayId;
        /** The start date for a filtered date search on support case communications. Case
communications are available for 12 months after creation. **/
        afterTime?: AfterTime;
        /** The end date for a filtered date search on support case communications. Case
communications are available for 12 months after creation. **/
        beforeTime?: BeforeTime;
        /** Specifies whether resolved support cases should be included in the DescribeCases 
results. The default is false. **/
        includeResolvedCases?: IncludeResolvedCases;
        /** A resumption point for pagination. **/
        nextToken?: NextToken;
        /** The maximum number of results to return before paginating. **/
        maxResults?: MaxResults;
        /** The ISO 639-1 code for the language in which AWS provides support. AWS Support
currently supports English (&quot;en&quot;) and Japanese (&quot;ja&quot;). Language parameters must
be passed explicitly for operations that take them. **/
        language?: Language;
        /** Specifies whether communications should be included in the DescribeCases 
results. The default is true. **/
        includeCommunications?: IncludeCommunications;
    }
    export interface DescribeCasesResponse {
        /** The details for the cases that match the request. **/
        cases?: CaseList;
        /** A resumption point for pagination. **/
        nextToken?: NextToken;
    }
    export interface DescribeCommunicationsRequest {
        /** The AWS Support case ID requested or returned in the call. The case ID is an
alphanumeric string formatted as shown in this example: case-
12345678910-2013-c4c1d2bf33c5cf47 **/
        caseId: CaseId;
        /** The end date for a filtered date search on support case communications. Case
communications are available for 12 months after creation. **/
        beforeTime?: BeforeTime;
        /** The start date for a filtered date search on support case communications. Case
communications are available for 12 months after creation. **/
        afterTime?: AfterTime;
        /** A resumption point for pagination. **/
        nextToken?: NextToken;
        /** The maximum number of results to return before paginating. **/
        maxResults?: MaxResults;
    }
    export interface DescribeCommunicationsResponse {
        /** The communications for the case. **/
        communications?: CommunicationList;
        /** A resumption point for pagination. **/
        nextToken?: NextToken;
    }
    export interface DescribeServicesRequest {
        /** A JSON-formatted list of service codes available for AWS services. **/
        serviceCodeList?: ServiceCodeList;
        /** The ISO 639-1 code for the language in which AWS provides support. AWS Support
currently supports English (&quot;en&quot;) and Japanese (&quot;ja&quot;). Language parameters must
be passed explicitly for operations that take them. **/
        language?: Language;
    }
    export interface DescribeServicesResponse {
        /** A JSON-formatted list of AWS services. **/
        services?: ServiceList;
    }
    export interface DescribeSeverityLevelsRequest {
        /** The ISO 639-1 code for the language in which AWS provides support. AWS Support
currently supports English (&quot;en&quot;) and Japanese (&quot;ja&quot;). Language parameters must
be passed explicitly for operations that take them. **/
        language?: Language;
    }
    export interface DescribeSeverityLevelsResponse {
        /** The available severity levels for the support case. Available severity levels
are defined by your service level agreement with AWS. **/
        severityLevels?: SeverityLevelsList;
    }
    export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
        /** The IDs of the Trusted Advisor checks to get the status of. Note: Specifying the
check ID of a check that is automatically refreshed causes an 
InvalidParameterValue error. **/
        checkIds: StringList;
    }
    export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
        /** The refresh status of the specified Trusted Advisor checks. **/
        statuses: TrustedAdvisorCheckRefreshStatusList;
    }
    export interface DescribeTrustedAdvisorCheckResultRequest {
        /** The unique identifier for the Trusted Advisor check. **/
        checkId: String;
        /** The ISO 639-1 code for the language in which AWS provides support. AWS Support
currently supports English (&quot;en&quot;) and Japanese (&quot;ja&quot;). Language parameters must
be passed explicitly for operations that take them. **/
        language?: String;
    }
    export interface DescribeTrustedAdvisorCheckResultResponse {
        /** The detailed results of the Trusted Advisor check. **/
        result?: TrustedAdvisorCheckResult;
    }
    export interface DescribeTrustedAdvisorCheckSummariesRequest {
        /** The IDs of the Trusted Advisor checks. **/
        checkIds: StringList;
    }
    export interface DescribeTrustedAdvisorCheckSummariesResponse {
        /** The summary information for the requested Trusted Advisor checks. **/
        summaries: TrustedAdvisorCheckSummaryList;
    }
    export interface DescribeTrustedAdvisorChecksRequest {
        /** The ISO 639-1 code for the language in which AWS provides support. AWS Support
currently supports English (&quot;en&quot;) and Japanese (&quot;ja&quot;). Language parameters must
be passed explicitly for operations that take them. **/
        language: String;
    }
    export interface DescribeTrustedAdvisorChecksResponse {
        /** Information about all available Trusted Advisor checks. **/
        checks: TrustedAdvisorCheckList;
    }
    export interface InternalServerError {
        /** An internal server error occurred. **/
        message?: ErrorMessage;
    }
    export interface RecentCaseCommunications {
        /** The five most recent communications associated with the case. **/
        communications?: CommunicationList;
        /** A resumption point for pagination. **/
        nextToken?: NextToken;
    }
    export interface RefreshTrustedAdvisorCheckRequest {
        /** The unique identifier for the Trusted Advisor check to refresh. Note: Specifying
the check ID of a check that is automatically refreshed causes an 
InvalidParameterValue error. **/
        checkId: String;
    }
    export interface RefreshTrustedAdvisorCheckResponse {
        /** The current refresh status for a check, including the amount of time until the
check is eligible for refresh. **/
        status: TrustedAdvisorCheckRefreshStatus;
    }
    export interface ResolveCaseRequest {
        /** The AWS Support case ID requested or returned in the call. The case ID is an
alphanumeric string formatted as shown in this example: case-
12345678910-2013-c4c1d2bf33c5cf47 **/
        caseId?: CaseId;
    }
    export interface ResolveCaseResponse {
        /** The status of the case when the ResolveCase request was sent. **/
        initialCaseStatus?: CaseStatus;
        /** The status of the case after the ResolveCase request was processed. **/
        finalCaseStatus?: CaseStatus;
    }
    export interface Service {
        /** The code for an AWS service returned by the DescribeServices response. The name 
element contains the corresponding friendly name. **/
        code?: ServiceCode;
        /** The friendly name for an AWS service. The code element contains the
corresponding code. **/
        name?: ServiceName;
        /** A list of categories that describe the type of support issue a case describes.
Categories consist of a category name and a category code. Category names and
codes are passed to AWS Support when you call CreateCase. **/
        categories?: CategoryList;
    }
    export interface SeverityLevel {
        /** One of four values: &quot;low,&quot; &quot;medium,&quot; &quot;high,&quot; and &quot;urgent&quot;. These values
correspond to response times returned to the caller in severityLevel.name. **/
        code?: SeverityLevelCode;
        /** The name of the severity level that corresponds to the severity level code. **/
        name?: SeverityLevelName;
    }
    export interface TrustedAdvisorCategorySpecificSummary {
        /** The summary information about cost savings for a Trusted Advisor check that is
in the Cost Optimizing category. **/
        costOptimizing?: TrustedAdvisorCostOptimizingSummary;
    }
    export interface TrustedAdvisorCheckDescription {
        /** The unique identifier for the Trusted Advisor check. **/
        id: String;
        /** The display name for the Trusted Advisor check. **/
        name: String;
        /** The description of the Trusted Advisor check, which includes the alert criteria
and recommended actions (contains HTML markup). **/
        description: String;
        /** The category of the Trusted Advisor check. **/
        category: String;
        /** The column headings for the data returned by the Trusted Advisor check. The
order of the headings corresponds to the order of the data in the Metadata 
element of the TrustedAdvisorResourceDetail for the check. Metadata contains all
the data that is shown in the Excel download, even in those cases where the UI
shows just summary data. **/
        metadata: StringList;
    }
    export interface TrustedAdvisorCheckRefreshStatus {
        /** The unique identifier for the Trusted Advisor check. **/
        checkId: String;
        /** The status of the Trusted Advisor check for which a refresh has been requested:
&quot;none&quot;, &quot;enqueued&quot;, &quot;processing&quot;, &quot;success&quot;, or &quot;abandoned&quot;. **/
        status: String;
        /** The amount of time, in milliseconds, until the Trusted Advisor check is eligible
for refresh. **/
        millisUntilNextRefreshable: Long;
    }
    export interface TrustedAdvisorCheckResult {
        /** The unique identifier for the Trusted Advisor check. **/
        checkId: String;
        /** The time of the last refresh of the check. **/
        timestamp: String;
        /** The alert status of the check: &quot;ok&quot; (green), &quot;warning&quot; (yellow), &quot;error&quot; (red),
or &quot;not_available&quot;. **/
        status: String;
        resourcesSummary: TrustedAdvisorResourcesSummary;
        /** Summary information that relates to the category of the check. Cost Optimizing
is the only category that is currently supported. **/
        categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
        /** The details about each resource listed in the check result. **/
        flaggedResources: TrustedAdvisorResourceDetailList;
    }
    export interface TrustedAdvisorCheckSummary {
        /** The unique identifier for the Trusted Advisor check. **/
        checkId: String;
        /** The time of the last refresh of the check. **/
        timestamp: String;
        /** The alert status of the check: &quot;ok&quot; (green), &quot;warning&quot; (yellow), &quot;error&quot; (red),
or &quot;not_available&quot;. **/
        status: String;
        /** Specifies whether the Trusted Advisor check has flagged resources. **/
        hasFlaggedResources?: Boolean;
        resourcesSummary: TrustedAdvisorResourcesSummary;
        /** Summary information that relates to the category of the check. Cost Optimizing
is the only category that is currently supported. **/
        categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
    }
    export interface TrustedAdvisorCostOptimizingSummary {
        /** The estimated monthly savings that might be realized if the recommended actions
are taken. **/
        estimatedMonthlySavings: Double;
        /** The estimated percentage of savings that might be realized if the recommended
actions are taken. **/
        estimatedPercentMonthlySavings: Double;
    }
    export interface TrustedAdvisorResourceDetail {
        /** The status code for the resource identified in the Trusted Advisor check. **/
        status: String;
        /** The AWS region in which the identified resource is located. **/
        region?: String;
        /** The unique identifier for the identified resource. **/
        resourceId: String;
        /** Specifies whether the AWS resource was ignored by Trusted Advisor because it was
marked as suppressed by the user. **/
        isSuppressed?: Boolean;
        /** Additional information about the identified resource. The exact metadata and its
order can be obtained by inspecting the TrustedAdvisorCheckDescription object
returned by the call to DescribeTrustedAdvisorChecks. Metadata contains all the
data that is shown in the Excel download, even in those cases where the UI shows
just summary data. **/
        metadata: StringList;
    }
    export interface TrustedAdvisorResourcesSummary {
        /** The number of AWS resources that were analyzed by the Trusted Advisor check. **/
        resourcesProcessed: Long;
        /** The number of AWS resources that were flagged (listed) by the Trusted Advisor
check. **/
        resourcesFlagged: Long;
        /** The number of AWS resources ignored by Trusted Advisor because information was
unavailable. **/
        resourcesIgnored: Long;
        /** The number of AWS resources ignored by Trusted Advisor because they were marked
as suppressed by the user. **/
        resourcesSuppressed: Long;
    }
  }
}
