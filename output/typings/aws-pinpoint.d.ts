// Type definitions for aws-sdk - Amazon Pinpoint
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-12-01
   * endpointPrefix: pinpoint
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: rest-json
   *
   * 
   *
   */
  export class Pinpoint extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Creates or updates a campaign.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    createCampaign(params: Pinpoint.CreateCampaignRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.CreateCampaignResponse|any) => void): Request<Pinpoint.CreateCampaignResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Creates or updates an import job.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    createImportJob(params: Pinpoint.CreateImportJobRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.CreateImportJobResponse|any) => void): Request<Pinpoint.CreateImportJobResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Used to create or update a segment.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    createSegment(params: Pinpoint.CreateSegmentRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.CreateSegmentResponse|any) => void): Request<Pinpoint.CreateSegmentResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Deletes the APNs channel for an app.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    deleteApnsChannel(params: Pinpoint.DeleteApnsChannelRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.DeleteApnsChannelResponse|any) => void): Request<Pinpoint.DeleteApnsChannelResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Deletes a campaign.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    deleteCampaign(params: Pinpoint.DeleteCampaignRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.DeleteCampaignResponse|any) => void): Request<Pinpoint.DeleteCampaignResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Deletes the GCM channel for an app.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    deleteGcmChannel(params: Pinpoint.DeleteGcmChannelRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.DeleteGcmChannelResponse|any) => void): Request<Pinpoint.DeleteGcmChannelResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Deletes a segment.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    deleteSegment(params: Pinpoint.DeleteSegmentRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.DeleteSegmentResponse|any) => void): Request<Pinpoint.DeleteSegmentResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about the APNs channel for an app.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getApnsChannel(params: Pinpoint.GetApnsChannelRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetApnsChannelResponse|any) => void): Request<Pinpoint.GetApnsChannelResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Used to request the settings for an app.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getApplicationSettings(params: Pinpoint.GetApplicationSettingsRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetApplicationSettingsResponse|any) => void): Request<Pinpoint.GetApplicationSettingsResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about a campaign.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getCampaign(params: Pinpoint.GetCampaignRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetCampaignResponse|any) => void): Request<Pinpoint.GetCampaignResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about the activity performed by a campaign.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getCampaignActivities(params: Pinpoint.GetCampaignActivitiesRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetCampaignActivitiesResponse|any) => void): Request<Pinpoint.GetCampaignActivitiesResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about your campaign versions.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getCampaignVersion(params: Pinpoint.GetCampaignVersionRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetCampaignVersionResponse|any) => void): Request<Pinpoint.GetCampaignVersionResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about your campaign versions.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getCampaignVersions(params: Pinpoint.GetCampaignVersionsRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetCampaignVersionsResponse|any) => void): Request<Pinpoint.GetCampaignVersionsResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about your campaigns.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getCampaigns(params: Pinpoint.GetCampaignsRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetCampaignsResponse|any) => void): Request<Pinpoint.GetCampaignsResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about an endpoint.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getEndpoint(params: Pinpoint.GetEndpointRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetEndpointResponse|any) => void): Request<Pinpoint.GetEndpointResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about the GCM channel for an app.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getGcmChannel(params: Pinpoint.GetGcmChannelRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetGcmChannelResponse|any) => void): Request<Pinpoint.GetGcmChannelResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about an import job.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getImportJob(params: Pinpoint.GetImportJobRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetImportJobResponse|any) => void): Request<Pinpoint.GetImportJobResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about your import jobs.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getImportJobs(params: Pinpoint.GetImportJobsRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetImportJobsResponse|any) => void): Request<Pinpoint.GetImportJobsResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about a segment.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getSegment(params: Pinpoint.GetSegmentRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetSegmentResponse|any) => void): Request<Pinpoint.GetSegmentResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns a list of import jobs for a specific segment.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getSegmentImportJobs(params: Pinpoint.GetSegmentImportJobsRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetSegmentImportJobsResponse|any) => void): Request<Pinpoint.GetSegmentImportJobsResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about a segment version.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getSegmentVersion(params: Pinpoint.GetSegmentVersionRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetSegmentVersionResponse|any) => void): Request<Pinpoint.GetSegmentVersionResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Returns information about your segment versions.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getSegmentVersions(params: Pinpoint.GetSegmentVersionsRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetSegmentVersionsResponse|any) => void): Request<Pinpoint.GetSegmentVersionsResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Used to get information about your segments.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    getSegments(params: Pinpoint.GetSegmentsRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.GetSegmentsResponse|any) => void): Request<Pinpoint.GetSegmentsResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Use to update the APNs channel for an app.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    updateApnsChannel(params: Pinpoint.UpdateApnsChannelRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.UpdateApnsChannelResponse|any) => void): Request<Pinpoint.UpdateApnsChannelResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Used to update the settings for an app.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    updateApplicationSettings(params: Pinpoint.UpdateApplicationSettingsRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.UpdateApplicationSettingsResponse|any) => void): Request<Pinpoint.UpdateApplicationSettingsResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Use to update a campaign.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    updateCampaign(params: Pinpoint.UpdateCampaignRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.UpdateCampaignResponse|any) => void): Request<Pinpoint.UpdateCampaignResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Use to update an endpoint.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    updateEndpoint(params: Pinpoint.UpdateEndpointRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.UpdateEndpointResponse|any) => void): Request<Pinpoint.UpdateEndpointResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Use to update your endpoints.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    updateEndpointsBatch(params: Pinpoint.UpdateEndpointsBatchRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.UpdateEndpointsBatchResponse|any) => void): Request<Pinpoint.UpdateEndpointsBatchResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Use to update the GCM channel for an app.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    updateGcmChannel(params: Pinpoint.UpdateGcmChannelRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.UpdateGcmChannelResponse|any) => void): Request<Pinpoint.UpdateGcmChannelResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;
    /**
     * Use to update a segment.
     *
     * @error BadRequestException 400 response  
     * @error InternalServerErrorException 500 response  
     * @error ForbiddenException 403 response  
     * @error NotFoundException 404 response  
     * @error MethodNotAllowedException 405 response  
     * @error TooManyRequestsException 429 response  
     */
    updateSegment(params: Pinpoint.UpdateSegmentRequest, callback?: (err: Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any, data: Pinpoint.UpdateSegmentResponse|any) => void): Request<Pinpoint.UpdateSegmentResponse|any,Pinpoint.BadRequestException|Pinpoint.InternalServerErrorException|Pinpoint.ForbiddenException|Pinpoint.NotFoundException|Pinpoint.MethodNotAllowedException|Pinpoint.TooManyRequestsException|any>;

  }

  export module Pinpoint {
    
    export type Action = string;
    
    export type AttributeType = string;
    
    export type CampaignStatus = string;
    
    export type ChannelType = string;
    
    export type DimensionType = string;
    
    export type Duration = string;
    
    export type Format = string;
    
    export type Frequency = string;
    
    export type JobStatus = string;
    
    export type ListOfActivityResponse = ActivityResponse[];
    
    export type ListOfCampaignResponse = CampaignResponse[];
    
    export type ListOfEndpointBatchItem = EndpointBatchItem[];
    
    export type ListOfImportJobResponse = ImportJobResponse[];
    
    export type ListOfSegmentResponse = SegmentResponse[];
    
    export type ListOfTreatmentResource = TreatmentResource[];
    
    export type ListOfWriteTreatmentResource = WriteTreatmentResource[];
    
    export type ListOf__string = __string[];
    
    export type MapOfAttributeDimension = {[key:string]: AttributeDimension};
    
    export type MapOfListOf__string = {[key:string]: ListOf__string};
    
    export type MapOf__double = {[key:string]: __double};
    
    export type RecencyType = string;
    
    export type SegmentType = string;
    
    export type __boolean = boolean;
    
    export type __double = number;
    
    export type __integer = number;
    
    export type __string = string;

    export interface APNSChannelRequest {
        /** The distribution certificate from Apple. **/
        Certificate?: __string;
        /** The certificate private key. **/
        PrivateKey?: __string;
    }
    export interface APNSChannelResponse {
        ApplicationId?: __string;
        /** When was this segment created **/
        CreationDate?: __string;
        Id?: __string;
        /** Is this channel archived **/
        IsArchived?: __boolean;
        /** Who last updated this entry **/
        LastModifiedBy?: __string;
        /** Last date this was updated **/
        LastModifiedDate?: __string;
        /** The platform type. Will be APNS. **/
        Platform?: __string;
        /** Version of channel **/
        Version?: __integer;
    }
    export interface ActivitiesResponse {
        /** List of campaign activities **/
        Item?: ListOfActivityResponse;
    }
    export interface ActivityResponse {
        /** The ID of the application to which the campaign applies. **/
        ApplicationId?: __string;
        /** The ID of the campaign to which the activity applies. **/
        CampaignId?: __string;
        /** The actual time the activity was marked CANCELLED or COMPLETED. Provided in ISO
8601 format. **/
        End?: __string;
        /** The unique activity ID. **/
        Id?: __string;
        /** Indicates whether the activity succeeded. Valid values: SUCCESS, FAIL **/
        Result?: __string;
        /** The scheduled start time for the activity in ISO 8601 format. **/
        ScheduledStart?: __string;
        /** The actual start time of the activity in ISO 8601 format. **/
        Start?: __string;
        /** The state of the activity. Valid values: PENDING, INITIALIZING, RUNNING, PAUSED,
CANCELLED, COMPLETED **/
        State?: __string;
        /** The total number of endpoints to which the campaign successfully delivered
messages. **/
        SuccessfulEndpointCount?: __integer;
        /** The total number of endpoints to which the campaign attempts to deliver
messages. **/
        TotalEndpointCount?: __integer;
        /** The ID of a variation of the campaign used for A/B testing. **/
        TreatmentId?: __string;
    }
    export interface ApplicationSettingsResource {
        /** The unique ID for the application. **/
        ApplicationId?: __string;
        /** The date that the settings were last updated in ISO 8601 format. **/
        LastModifiedDate?: __string;
        /** The default campaign limits for the app. These limits apply to each campaign for
the app, unless the campaign overrides the default with limits of its own. **/
        Limits?: CampaignLimits;
        /** The default quiet time for the app. Each campaign for this app sends no messages
during this time unless the campaign overrides the default with a quiet time of
its own. **/
        QuietTime?: QuietTime;
    }
    export interface AttributeDimension {
        /** The type of dimension: INCLUSIVE – Endpoints that match the criteria are
included in the segment. EXCLUSIVE – Endpoints that match the criteria are
excluded from the segment. **/
        AttributeType?: AttributeType;
        /** The criteria values for the segment dimension. Endpoints with matching attribute
values are included or excluded from the segment, depending on the setting for
Type. **/
        Values?: ListOf__string;
    }
    export interface BadRequestException {
        Message?: __string;
    }
    export interface CampaignLimits {
        /** The maximum number of messages that the campaign can send daily. **/
        Daily?: __integer;
        /** The maximum total number of messages that the campaign can send. **/
        Total?: __integer;
    }
    export interface CampaignResponse {
        /** Treatments that are defined in addition to the default treatment. **/
        AdditionalTreatments?: ListOfTreatmentResource;
        /** The ID of the application to which the campaign applies. **/
        ApplicationId?: __string;
        /** The date the campaign was created in ISO 8601 format. **/
        CreationDate?: __string;
        /** The status of the campaign&#x27;s default treatment. Only present for A/B test
campaigns. **/
        DefaultState?: CampaignState;
        /** A description of the campaign. **/
        Description?: __string;
        /** The allocated percentage of end users who will not receive messages from this
campaign. **/
        HoldoutPercent?: __integer;
        /** The unique campaign ID. **/
        Id?: __string;
        /** Indicates whether the campaign is paused. A paused campaign does not send
messages unless you resume it by setting IsPaused to false. **/
        IsPaused?: __boolean;
        /** The date the campaign was last updated in ISO 8601 format. **/
        LastModifiedDate?: __string;
        /** The campaign limits settings. **/
        Limits?: CampaignLimits;
        /** The message configuration settings. **/
        MessageConfiguration?: MessageConfiguration;
        /** The custom name of the campaign. **/
        Name?: __string;
        /** The campaign schedule. **/
        Schedule?: Schedule;
        /** The ID of the segment to which the campaign sends messages. **/
        SegmentId?: __string;
        /** The version of the segment to which the campaign sends messages. **/
        SegmentVersion?: __integer;
        /** The campaign status. An A/B test campaign will have a status of COMPLETED only
when all treatments have a status of COMPLETED. **/
        State?: CampaignState;
        /** A custom description for the treatment. **/
        TreatmentDescription?: __string;
        /** The custom name of a variation of the campaign used for A/B testing. **/
        TreatmentName?: __string;
        /** The campaign version number. **/
        Version?: __integer;
    }
    export interface CampaignState {
        /** The status of the campaign, or the status of a treatment that belongs to an A/B
test campaign. Valid values: SCHEDULED, EXECUTING, PENDING_NEXT_RUN, COMPLETED,
PAUSED **/
        CampaignStatus?: CampaignStatus;
    }
    export interface CampaignsResponse {
        /** A list of campaigns. **/
        Item?: ListOfCampaignResponse;
        /** The string that you use in a subsequent request to get the next page of results
in a paginated response. **/
        NextToken?: __string;
    }
    export interface CreateCampaignRequest {
        ApplicationId: __string;
        WriteCampaignRequest: WriteCampaignRequest;
    }
    export interface CreateCampaignResponse {
        CampaignResponse: CampaignResponse;
    }
    export interface CreateImportJobRequest {
        ApplicationId: __string;
        ImportJobRequest: ImportJobRequest;
    }
    export interface CreateImportJobResponse {
        ImportJobResponse: ImportJobResponse;
    }
    export interface CreateSegmentRequest {
        ApplicationId: __string;
        WriteSegmentRequest: WriteSegmentRequest;
    }
    export interface CreateSegmentResponse {
        SegmentResponse: SegmentResponse;
    }
    export interface DeleteApnsChannelRequest {
        ApplicationId: __string;
    }
    export interface DeleteApnsChannelResponse {
        APNSChannelResponse: APNSChannelResponse;
    }
    export interface DeleteCampaignRequest {
        ApplicationId: __string;
        CampaignId: __string;
    }
    export interface DeleteCampaignResponse {
        CampaignResponse: CampaignResponse;
    }
    export interface DeleteGcmChannelRequest {
        ApplicationId: __string;
    }
    export interface DeleteGcmChannelResponse {
        GCMChannelResponse: GCMChannelResponse;
    }
    export interface DeleteSegmentRequest {
        ApplicationId: __string;
        SegmentId: __string;
    }
    export interface DeleteSegmentResponse {
        SegmentResponse: SegmentResponse;
    }
    export interface EndpointBatchItem {
        /** The address or token of the endpoint. **/
        Address?: __string;
        /** Custom attributes that your app reports to Amazon Pinpoint. You can use these
attributes as selection criteria when you create a segment. **/
        Attributes?: MapOfListOf__string;
        /** The channel type. Valid values: APNS, GCM **/
        ChannelType?: ChannelType;
        /** The endpoint demographic attributes. **/
        Demographic?: EndpointDemographic;
        /** The last time the endpoint was updated. Provided in ISO 8601 format. **/
        EffectiveDate?: __string;
        /** The endpoint status. Can be either ACTIVE or INACTIVE. Will be set to INACTIVE
if a delivery fails. Will be set to ACTIVE if the address is updated. **/
        EndpointStatus?: __string;
        Id?: __string;
        /** The endpoint location attributes. **/
        Location?: EndpointLocation;
        /** Custom metrics that your app reports to Amazon Pinpoint. **/
        Metrics?: MapOf__double;
        /** Indicates whether a user has opted out of receiving messages with one of the
following values: ALL – User receives all messages. NONE – User receives no
messages. **/
        OptOut?: __string;
        /** The unique ID for the most recent request to update the endpoint. **/
        RequestId?: __string;
        /** Custom user-specific attributes that your app reports to Amazon Pinpoint. **/
        User?: EndpointUser;
    }
    export interface EndpointBatchRequest {
        /** List of items to update. Maximum 100 items **/
        Item?: ListOfEndpointBatchItem;
    }
    export interface EndpointDemographic {
        /** The version of the application associated with the endpoint. **/
        AppVersion?: __string;
        /** The endpoint locale in the following format: The ISO 639-1 alpha-2 code,
followed by an underscore, followed by an ISO 3166-1 alpha-2 value. **/
        Locale?: __string;
        /** The endpoint make, such as such as Apple or Samsung. **/
        Make?: __string;
        /** The endpoint model, such as iPhone. **/
        Model?: __string;
        /** The endpoint model version. **/
        ModelVersion?: __string;
        /** The endpoint platform, such as ios or android. **/
        Platform?: __string;
        /** The endpoint platform version. **/
        PlatformVersion?: __string;
        /** The timezone of the endpoint. Specified as a tz database value, such as
Americas/Los_Angeles. **/
        Timezone?: __string;
    }
    export interface EndpointLocation {
        /** The city where the endpoint is located. **/
        City?: __string;
        /** Country according to ISO 3166-1 Alpha-2 codes. For example, US. **/
        Country?: __string;
        /** The latitude of the endpoint location. Rounded to one decimal (Roughly
corresponding to a mile). **/
        Latitude?: __double;
        /** The longitude of the endpoint location. Rounded to one decimal (Roughly
corresponding to a mile). **/
        Longitude?: __double;
        /** The postal code or zip code of the endpoint. **/
        PostalCode?: __string;
        /** The region of the endpoint location. For example, corresponds to a state in US. **/
        Region?: __string;
    }
    export interface EndpointRequest {
        /** The address or token of the endpoint. **/
        Address?: __string;
        /** Custom attributes that your app reports to Amazon Pinpoint. You can use these
attributes as selection criteria when you create a segment. **/
        Attributes?: MapOfListOf__string;
        /** The channel type. Valid values: APNS, GCM **/
        ChannelType?: ChannelType;
        /** The endpoint demographic attributes. **/
        Demographic?: EndpointDemographic;
        /** The last time the endpoint was updated. Provided in ISO 8601 format. **/
        EffectiveDate?: __string;
        /** The endpoint status. Can be either ACTIVE or INACTIVE. Will be set to INACTIVE
if a delivery fails. Will be set to ACTIVE if the address is updated. **/
        EndpointStatus?: __string;
        /** The endpoint location attributes. **/
        Location?: EndpointLocation;
        /** Custom metrics that your app reports to Amazon Pinpoint. **/
        Metrics?: MapOf__double;
        /** Indicates whether a user has opted out of receiving messages with one of the
following values: ALL – User receives all messages. NONE – User receives no
messages. **/
        OptOut?: __string;
        /** The unique ID for the most recent request to update the endpoint. **/
        RequestId?: __string;
        /** Custom user-specific attributes that your app reports to Amazon Pinpoint. **/
        User?: EndpointUser;
    }
    export interface EndpointResponse {
        /** The address or token of the endpoint. **/
        Address?: __string;
        /** The ID of the application associated with the endpoint. **/
        ApplicationId?: __string;
        /** Custom attributes that your app reports to Amazon Pinpoint. You can use these
attributes as selection criteria when you create a segment. **/
        Attributes?: MapOfListOf__string;
        /** The channel type. Valid values: APNS, GCM **/
        ChannelType?: ChannelType;
        /** A number from 0 - 99 that represents the cohort the endpoint is assigned to.
Endpoints are grouped into cohorts randomly, and each cohort contains
approximately 1 percent of the endpoints for an app. Amazon Pinpoint assigns
cohorts to the holdout or treatment allocations for a campaign. **/
        CohortId?: __string;
        /** The last time the endpoint was created. Provided in ISO 8601 format. **/
        CreationDate?: __string;
        /** The endpoint demographic attributes. **/
        Demographic?: EndpointDemographic;
        /** The last time the endpoint was updated. Provided in ISO 8601 format. **/
        EffectiveDate?: __string;
        /** The endpoint status. Can be either ACTIVE or INACTIVE. Will be set to INACTIVE
if a delivery fails. Will be set to ACTIVE if the address is updated. **/
        EndpointStatus?: __string;
        /** The unique ID that you assigned to the endpoint. The ID should be a globally
unique identifier (GUID) to ensure that it is unique compared to all other
endpoints for the application. **/
        Id?: __string;
        /** The endpoint location attributes. **/
        Location?: EndpointLocation;
        /** Custom metrics that your app reports to Amazon Pinpoint. **/
        Metrics?: MapOf__double;
        /** Indicates whether a user has opted out of receiving messages with one of the
following values: ALL – User receives all messages. NONE – User receives no
messages. **/
        OptOut?: __string;
        /** The unique ID for the most recent request to update the endpoint. **/
        RequestId?: __string;
        /** The ShardId of endpoint **/
        ShardId?: __string;
        /** Custom user-specific attributes that your app reports to Amazon Pinpoint. **/
        User?: EndpointUser;
    }
    export interface EndpointUser {
        /** Custom attributesd specific to the user. **/
        UserAttributes?: MapOfListOf__string;
        /** The unique ID of the user. **/
        UserId?: __string;
    }
    export interface ForbiddenException {
        Message?: __string;
    }
    export interface GCMChannelRequest {
        /** Platform credential API key from Google. **/
        ApiKey?: __string;
    }
    export interface GCMChannelResponse {
        ApplicationId?: __string;
        /** When was this segment created **/
        CreationDate?: __string;
        /** The GCM API key from Google. **/
        Credential?: __string;
        Id?: __string;
        /** Is this channel archived **/
        IsArchived?: __boolean;
        /** Who last updated this entry **/
        LastModifiedBy?: __string;
        /** Last date this was updated **/
        LastModifiedDate?: __string;
        /** The platform type. Will be GCM **/
        Platform?: __string;
        /** Version of channel **/
        Version?: __integer;
    }
    export interface GetApnsChannelRequest {
        ApplicationId: __string;
    }
    export interface GetApnsChannelResponse {
        APNSChannelResponse: APNSChannelResponse;
    }
    export interface GetApplicationSettingsRequest {
        ApplicationId: __string;
    }
    export interface GetApplicationSettingsResponse {
        ApplicationSettingsResource: ApplicationSettingsResource;
    }
    export interface GetCampaignActivitiesRequest {
        ApplicationId: __string;
        CampaignId: __string;
        PageSize?: __string;
        Token?: __string;
    }
    export interface GetCampaignActivitiesResponse {
        ActivitiesResponse: ActivitiesResponse;
    }
    export interface GetCampaignRequest {
        ApplicationId: __string;
        CampaignId: __string;
    }
    export interface GetCampaignResponse {
        CampaignResponse: CampaignResponse;
    }
    export interface GetCampaignVersionRequest {
        ApplicationId: __string;
        CampaignId: __string;
        Version: __string;
    }
    export interface GetCampaignVersionResponse {
        CampaignResponse: CampaignResponse;
    }
    export interface GetCampaignVersionsRequest {
        ApplicationId: __string;
        CampaignId: __string;
        PageSize?: __string;
        Token?: __string;
    }
    export interface GetCampaignVersionsResponse {
        CampaignsResponse: CampaignsResponse;
    }
    export interface GetCampaignsRequest {
        ApplicationId: __string;
        PageSize?: __string;
        Token?: __string;
    }
    export interface GetCampaignsResponse {
        CampaignsResponse: CampaignsResponse;
    }
    export interface GetEndpointRequest {
        ApplicationId: __string;
        EndpointId: __string;
    }
    export interface GetEndpointResponse {
        EndpointResponse: EndpointResponse;
    }
    export interface GetGcmChannelRequest {
        ApplicationId: __string;
    }
    export interface GetGcmChannelResponse {
        GCMChannelResponse: GCMChannelResponse;
    }
    export interface GetImportJobRequest {
        ApplicationId: __string;
        JobId: __string;
    }
    export interface GetImportJobResponse {
        ImportJobResponse: ImportJobResponse;
    }
    export interface GetImportJobsRequest {
        ApplicationId: __string;
        PageSize?: __string;
        Token?: __string;
    }
    export interface GetImportJobsResponse {
        ImportJobsResponse: ImportJobsResponse;
    }
    export interface GetSegmentImportJobsRequest {
        ApplicationId: __string;
        PageSize?: __string;
        SegmentId: __string;
        Token?: __string;
    }
    export interface GetSegmentImportJobsResponse {
        ImportJobsResponse: ImportJobsResponse;
    }
    export interface GetSegmentRequest {
        ApplicationId: __string;
        SegmentId: __string;
    }
    export interface GetSegmentResponse {
        SegmentResponse: SegmentResponse;
    }
    export interface GetSegmentVersionRequest {
        ApplicationId: __string;
        SegmentId: __string;
        Version: __string;
    }
    export interface GetSegmentVersionResponse {
        SegmentResponse: SegmentResponse;
    }
    export interface GetSegmentVersionsRequest {
        ApplicationId: __string;
        PageSize?: __string;
        SegmentId: __string;
        Token?: __string;
    }
    export interface GetSegmentVersionsResponse {
        SegmentsResponse: SegmentsResponse;
    }
    export interface GetSegmentsRequest {
        ApplicationId: __string;
        PageSize?: __string;
        Token?: __string;
    }
    export interface GetSegmentsResponse {
        SegmentsResponse: SegmentsResponse;
    }
    export interface ImportJobRequest {
        /** Sets whether the endpoints create a segment when they are imported. **/
        DefineSegment?: __boolean;
        /** A unique, custom ID assigned to the IAM role that restricts who can assume the
role. **/
        ExternalId?: __string;
        /** The format of the files that contain the endpoint definitions. Valid values:
CSV, JSON **/
        Format?: Format;
        /** Sets whether the endpoints are registered with Amazon Pinpoint when they are
imported. **/
        RegisterEndpoints?: __boolean;
        /** The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access
to the Amazon S3 location that contains the endpoints to import. **/
        RoleArn?: __string;
        /** A URL that points to the location within an Amazon S3 bucket that contains the
endpoints to import. The location can be a folder or a single file. The URL
should follow this format: s3://bucket-name/folder-name/file-name Amazon
Pinpoint will import endpoints from this location and any subfolders it
contains. **/
        S3Url?: __string;
        /** The ID of the segment to update if the import job is meant to update an existing
segment. **/
        SegmentId?: __string;
        /** A custom name for the segment created by the import job. Use if DefineSegment is
true. **/
        SegmentName?: __string;
    }
    export interface ImportJobResource {
        /** Sets whether the endpoints create a segment when they are imported. **/
        DefineSegment?: __boolean;
        /** A unique, custom ID assigned to the IAM role that restricts who can assume the
role. **/
        ExternalId?: __string;
        /** The format of the files that contain the endpoint definitions. Valid values:
CSV, JSON **/
        Format?: Format;
        /** Sets whether the endpoints are registered with Amazon Pinpoint when they are
imported. **/
        RegisterEndpoints?: __boolean;
        /** The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access
to the Amazon S3 location that contains the endpoints to import. **/
        RoleArn?: __string;
        /** A URL that points to the location within an Amazon S3 bucket that contains the
endpoints to import. The location can be a folder or a single file. The URL
should follow this format: s3://bucket-name/folder-name/file-name Amazon
Pinpoint will import endpoints from this location and any subfolders it
contains. **/
        S3Url?: __string;
        /** The ID of the segment to update if the import job is meant to update an existing
segment. **/
        SegmentId?: __string;
        /** A custom name for the segment created by the import job. Use if DefineSegment is
true. **/
        SegmentName?: __string;
    }
    export interface ImportJobResponse {
        /** The unique ID of the application to which the import job applies. **/
        ApplicationId?: __string;
        /** The number of pieces that have successfully imported as of the time of the
request. **/
        CompletedPieces?: __integer;
        /** The date the import job completed in ISO 8601 format. **/
        CompletionDate?: __string;
        /** The date the import job was created in ISO 8601 format. **/
        CreationDate?: __string;
        /** The import job settings. **/
        Definition?: ImportJobResource;
        /** The number of pieces that have failed to import as of the time of the request. **/
        FailedPieces?: __integer;
        /** Provides up to 100 of the first failed entries for the job, if any exist. **/
        Failures?: ListOf__string;
        /** The unique ID of the import job. **/
        Id?: __string;
        /** The status of the import job. Valid values: CREATED, INITIALIZING, PROCESSING,
COMPLETING, COMPLETED, FAILING, FAILED The job status is FAILED if one or more
pieces failed to import. **/
        JobStatus?: JobStatus;
        /** The number of endpoints that failed to import; for example, because of syntax
errors. **/
        TotalFailures?: __integer;
        /** The total number of pieces that must be imported to finish the job. Each piece
is an approximately equal portion of the endpoints to import. **/
        TotalPieces?: __integer;
        /** The number of endpoints that were processed by the import job. **/
        TotalProcessed?: __integer;
        /** The job type. Will be Import. **/
        Type?: __string;
    }
    export interface ImportJobsResponse {
        /** A list of import jobs for the application. **/
        Item?: ListOfImportJobResponse;
        /** The string that you use in a subsequent request to get the next page of results
in a paginated response. **/
        NextToken?: __string;
    }
    export interface InternalServerErrorException {
        Message?: __string;
    }
    export interface Message {
        /** The action that occurs if the user taps a push notification delivered by the
campaign: OPEN_APP – Your app launches, or it becomes the foreground app if it
has been sent to the background. This is the default action. DEEP_LINK – Uses
deep linking features in iOS and Android to open your app and display a
designated user interface within the app. URL – The default mobile browser on
the user&#x27;s device launches and opens a web page at the URL you specify. **/
        Action?: Action;
        /** The message body. Can include up to 140 characters. **/
        Body?: __string;
        /** The URL that points to the icon image for the push notification icon, for
example, the app icon. **/
        ImageIconUrl?: __string;
        /** The URL that points to an image used in the push notification. **/
        ImageUrl?: __string;
        /** The JSON payload used for a silent push. **/
        JsonBody?: __string;
        /** The URL that points to the media resource, for example a .mp4 or .gif file. **/
        MediaUrl?: __string;
        /** Indicates if the message should display on the users device. Silent pushes can
be used for Remote Configuration and Phone Home use cases. **/
        SilentPush?: __boolean;
        /** The message title that displays above the message on the user&#x27;s device. **/
        Title?: __string;
        /** The URL to open in the user&#x27;s mobile browser. Used if the value for Action is
URL. **/
        Url?: __string;
    }
    export interface MessageBody {
        Message?: __string;
        RequestID?: __string;
    }
    export interface MessageConfiguration {
        /** The message that the campaign delivers to APNS channels. Overrides the default
message. **/
        APNSMessage?: Message;
        /** The default message for all channels. **/
        DefaultMessage?: Message;
        /** The message that the campaign delivers to GCM channels. Overrides the default
message. **/
        GCMMessage?: Message;
    }
    export interface MethodNotAllowedException {
        Message?: __string;
    }
    export interface NotFoundException {
        Message?: __string;
    }
    export interface QuietTime {
        /** The default end time for quiet time in ISO 8601 format. **/
        End?: __string;
        /** The default start time for quiet time in ISO 8601 format. **/
        Start?: __string;
    }
    export interface RecencyDimension {
        /** The length of time during which users have been active or inactive with your
app. Valid values: HR_24, DAY_7, DAY_14, DAY_30 **/
        Duration?: Duration;
        /** The recency dimension type: ACTIVE – Users who have used your app within the
specified duration are included in the segment. INACTIVE – Users who have not
used your app within the specified duration are included in the segment. **/
        RecencyType?: RecencyType;
    }
    export interface Schedule {
        /** The scheduled time that the campaign ends in ISO 8601 format. **/
        EndTime?: __string;
        /** How often the campaign delivers messages. Valid values: ONCE, HOURLY, DAILY,
WEEKLY, MONTHLY **/
        Frequency?: Frequency;
        /** Indicates whether the campaign schedule takes effect according to each user&#x27;s
local time. **/
        IsLocalTime?: __boolean;
        /** The time during which the campaign sends no messages. **/
        QuietTime?: QuietTime;
        /** The scheduled time that the campaign begins in ISO 8601 format. **/
        StartTime?: __string;
        /** The starting UTC offset for the schedule if the value for isLocalTime is true
Valid values: UTC UTC+01 UTC+02 UTC+03 UTC+03:30 UTC+04 UTC+04:30 UTC+05
UTC+05:30 UTC+05:45 UTC+06 UTC+06:30 UTC+07 UTC+08 UTC+09 UTC+09:30 UTC+10
UTC+10:30 UTC+11 UTC+12 UTC+13 UTC-02 UTC-03 UTC-04 UTC-05 UTC-06 UTC-07 UTC-08
UTC-09 UTC-10 UTC-11 **/
        Timezone?: __string;
    }
    export interface SegmentBehaviors {
        /** The recency of use. **/
        Recency?: RecencyDimension;
    }
    export interface SegmentDemographics {
        /** The app version criteria for the segment. **/
        AppVersion?: SetDimension;
        /** The device type criteria for the segment. **/
        DeviceType?: SetDimension;
        /** The device make criteria for the segment. **/
        Make?: SetDimension;
        /** The device model criteria for the segment. **/
        Model?: SetDimension;
        /** The device platform criteria for the segment. **/
        Platform?: SetDimension;
    }
    export interface SegmentDimensions {
        /** Custom segment attributes. **/
        Attributes?: MapOfAttributeDimension;
        /** The segment behaviors attributes. **/
        Behavior?: SegmentBehaviors;
        /** The segment demographics attributes. **/
        Demographic?: SegmentDemographics;
        /** The segment location attributes. **/
        Location?: SegmentLocation;
    }
    export interface SegmentImportResource {
        /** A unique, custom ID assigned to the IAM role that restricts who can assume the
role. **/
        ExternalId?: __string;
        /** The format of the endpoint files that were imported to create this segment.
Valid values: CSV, JSON **/
        Format?: Format;
        /** The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access
to the endpoints in Amazon S3. **/
        RoleArn?: __string;
        /** A URL that points to the Amazon S3 location from which the endpoints for this
segment were imported. **/
        S3Url?: __string;
        /** The number of endpoints that were successfully imported to create this segment. **/
        Size?: __integer;
    }
    export interface SegmentLocation {
        /** The country filter according to ISO 3166-1 Alpha-2 codes. **/
        Country?: SetDimension;
    }
    export interface SegmentResponse {
        /** The ID of the application to which the segment applies. **/
        ApplicationId?: __string;
        /** The date the segment was created in ISO 8601 format. **/
        CreationDate?: __string;
        /** The segment dimensions attributes. **/
        Dimensions?: SegmentDimensions;
        /** The unique segment ID. **/
        Id?: __string;
        /** The import job settings. **/
        ImportDefinition?: SegmentImportResource;
        /** The date the segment was last updated in ISO 8601 format. **/
        LastModifiedDate?: __string;
        /** The name of segment **/
        Name?: __string;
        /** The segment type: DIMENSIONAL – A dynamic segment built from selection criteria
based on endpoint data reported by your app. You create this type of segment by
using the segment builder in the Amazon Pinpoint console or by making a POST
request to the segments resource. IMPORT – A static segment built from an
imported set of endpoint definitions. You create this type of segment by
importing a segment in the Amazon Pinpoint console or by making a POST request
to the jobs/import resource. **/
        SegmentType?: SegmentType;
        /** The segment version number. **/
        Version?: __integer;
    }
    export interface SegmentsResponse {
        /** The list of segments. **/
        Item?: ListOfSegmentResponse;
        /** An identifier used to retrieve the next page of results. The token is null if no
additional pages exist. **/
        NextToken?: __string;
    }
    export interface SetDimension {
        /** The type of dimension: INCLUSIVE – Endpoints that match the criteria are
included in the segment. EXCLUSIVE – Endpoints that match the criteria are
excluded from the segment. **/
        DimensionType?: DimensionType;
        /** The criteria values for the segment dimension. Endpoints with matching attribute
values are included or excluded from the segment, depending on the setting for
Type. **/
        Values?: ListOf__string;
    }
    export interface TooManyRequestsException {
        Message?: __string;
    }
    export interface TreatmentResource {
        /** The unique treatment ID. **/
        Id?: __string;
        /** The message configuration settings. **/
        MessageConfiguration?: MessageConfiguration;
        /** The campaign schedule. **/
        Schedule?: Schedule;
        /** The allocated percentage of users for this treatment. **/
        SizePercent?: __integer;
        /** The treatment status. **/
        State?: CampaignState;
        /** A custom description for the treatment. **/
        TreatmentDescription?: __string;
        /** The custom name of a variation of the campaign used for A/B testing. **/
        TreatmentName?: __string;
    }
    export interface UpdateApnsChannelRequest {
        APNSChannelRequest: APNSChannelRequest;
        ApplicationId: __string;
    }
    export interface UpdateApnsChannelResponse {
        APNSChannelResponse: APNSChannelResponse;
    }
    export interface UpdateApplicationSettingsRequest {
        ApplicationId: __string;
        WriteApplicationSettingsRequest: WriteApplicationSettingsRequest;
    }
    export interface UpdateApplicationSettingsResponse {
        ApplicationSettingsResource: ApplicationSettingsResource;
    }
    export interface UpdateCampaignRequest {
        ApplicationId: __string;
        CampaignId: __string;
        WriteCampaignRequest: WriteCampaignRequest;
    }
    export interface UpdateCampaignResponse {
        CampaignResponse: CampaignResponse;
    }
    export interface UpdateEndpointRequest {
        ApplicationId: __string;
        EndpointId: __string;
        EndpointRequest: EndpointRequest;
    }
    export interface UpdateEndpointResponse {
        MessageBody: MessageBody;
    }
    export interface UpdateEndpointsBatchRequest {
        ApplicationId: __string;
        EndpointBatchRequest: EndpointBatchRequest;
    }
    export interface UpdateEndpointsBatchResponse {
        MessageBody: MessageBody;
    }
    export interface UpdateGcmChannelRequest {
        ApplicationId: __string;
        GCMChannelRequest: GCMChannelRequest;
    }
    export interface UpdateGcmChannelResponse {
        GCMChannelResponse: GCMChannelResponse;
    }
    export interface UpdateSegmentRequest {
        ApplicationId: __string;
        SegmentId: __string;
        WriteSegmentRequest: WriteSegmentRequest;
    }
    export interface UpdateSegmentResponse {
        SegmentResponse: SegmentResponse;
    }
    export interface WriteApplicationSettingsRequest {
        /** The default campaign limits for the app. These limits apply to each campaign for
the app, unless the campaign overrides the default with limits of its own. **/
        Limits?: CampaignLimits;
        /** The default quiet time for the app. Each campaign for this app sends no messages
during this time unless the campaign overrides the default with a quiet time of
its own. **/
        QuietTime?: QuietTime;
    }
    export interface WriteCampaignRequest {
        /** Treatments that are defined in addition to the default treatment. **/
        AdditionalTreatments?: ListOfWriteTreatmentResource;
        /** A description of the campaign. **/
        Description?: __string;
        /** The allocated percentage of end users who will not receive messages from this
campaign. **/
        HoldoutPercent?: __integer;
        /** Indicates whether the campaign is paused. A paused campaign does not send
messages unless you resume it by setting IsPaused to false. **/
        IsPaused?: __boolean;
        /** The campaign limits settings. **/
        Limits?: CampaignLimits;
        /** The message configuration settings. **/
        MessageConfiguration?: MessageConfiguration;
        /** The custom name of the campaign. **/
        Name?: __string;
        /** The campaign schedule. **/
        Schedule?: Schedule;
        /** The ID of the segment to which the campaign sends messages. **/
        SegmentId?: __string;
        /** The version of the segment to which the campaign sends messages. **/
        SegmentVersion?: __integer;
        /** A custom description for the treatment. **/
        TreatmentDescription?: __string;
        /** The custom name of a variation of the campaign used for A/B testing. **/
        TreatmentName?: __string;
    }
    export interface WriteSegmentRequest {
        /** The segment dimensions attributes. **/
        Dimensions?: SegmentDimensions;
        /** The name of segment **/
        Name?: __string;
    }
    export interface WriteTreatmentResource {
        /** The message configuration settings. **/
        MessageConfiguration?: MessageConfiguration;
        /** The campaign schedule. **/
        Schedule?: Schedule;
        /** The allocated percentage of users for this treatment. **/
        SizePercent?: __integer;
        /** A custom description for the treatment. **/
        TreatmentDescription?: __string;
        /** The custom name of a variation of the campaign used for A/B testing. **/
        TreatmentName?: __string;
    }
  }
}
