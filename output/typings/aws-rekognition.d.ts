// Type definitions for aws-sdk - Amazon Rekognition
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-06-27
   * endpointPrefix: rekognition
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * This is the Amazon Rekognition API reference.
   *
   */
  export class Rekognition extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Compares a face in the source input image with each face detected in the target 
input image. 

 If the source image contains multiple faces, the service detects the largest
face and uses it to compare with each face detected in the target image. 

In response, the operation returns an array of face matches ordered by
similarity score with the highest similarity scores first. For each face match,
the response provides a bounding box of the face and confidence value
(indicating the level of confidence that the bounding box contains a face). The
response also provides a similarity score, which indicates how closely the faces
match. 

By default, only faces with the similarity score of greater than or equal to 80%
are returned in the response. You can change this value.

In addition to the face matches, the response returns information about the face
in the source image, including the bounding box of the face and confidence
value.

 This is a stateless API operation. That is, the operation does not persist any
data.

For an example, see get-started-exercise-compare-faces 

This operation requires permissions to perform the rekognition:CompareFaces 
action.
     *
     * @error InvalidParameterException   
     * @error InvalidS3ObjectException   
     * @error ImageTooLargeException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error InvalidImageFormatException   
     */
    compareFaces(params: Rekognition.CompareFacesRequest, callback?: (err: Rekognition.InvalidParameterException|Rekognition.InvalidS3ObjectException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidImageFormatException|any, data: Rekognition.CompareFacesResponse|any) => void): Request<Rekognition.CompareFacesResponse|any,Rekognition.InvalidParameterException|Rekognition.InvalidS3ObjectException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidImageFormatException|any>;
    /**
     * Creates a collection in an AWS Region. You can add faces to the collection using
the operation. 

For example, you might create collections, one for each of your application
users. A user can then index faces using the IndexFaces operation and persist
results in a specific collection. Then, a user can search the collection for
faces in the user-specific container. 

For an example, see example1. 

This operation requires permissions to perform the rekognition:CreateCollection 
action.
     *
     * @error InvalidParameterException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error ResourceAlreadyExistsException   
     */
    createCollection(params: Rekognition.CreateCollectionRequest, callback?: (err: Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceAlreadyExistsException|any, data: Rekognition.CreateCollectionResponse|any) => void): Request<Rekognition.CreateCollectionResponse|any,Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceAlreadyExistsException|any>;
    /**
     * Deletes the specified collection. Note that this operation removes all faces in
the collection. For an example, see example1.

This operation requires permissions to perform the rekognition:DeleteCollection 
action.
     *
     * @error InvalidParameterException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     */
    deleteCollection(params: Rekognition.DeleteCollectionRequest, callback?: (err: Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|any, data: Rekognition.DeleteCollectionResponse|any) => void): Request<Rekognition.DeleteCollectionResponse|any,Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|any>;
    /**
     * Deletes faces from a collection. You specify a collection ID and an array of
face IDs to remove from the collection.

This operation requires permissions to perform the rekognition:DeleteFaces 
action.
     *
     * @error InvalidParameterException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     */
    deleteFaces(params: Rekognition.DeleteFacesRequest, callback?: (err: Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|any, data: Rekognition.DeleteFacesResponse|any) => void): Request<Rekognition.DeleteFacesResponse|any,Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|any>;
    /**
     * Detects faces within an image (JPEG or PNG) that is provided as input.

 For each face detected, the operation returns face details including a bounding
box of the face, a confidence value (that the bounding box contains a face), and
a fixed set of attributes such as facial landmarks (for example, coordinates of
eye and mouth), gender, presence of beard, sunglasses, etc. 

The face-detection algorithm is most effective on frontal faces. For non-frontal
or obscured faces, the algorithm may not detect the faces or might detect faces
with lower confidence. 

This is a stateless API operation. That is, the operation does not persist any
data.

For an example, see get-started-exercise-detect-faces.

This operation requires permissions to perform the rekognition:DetectFaces 
action.
     *
     * @error InvalidS3ObjectException   
     * @error InvalidParameterException   
     * @error ImageTooLargeException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error InvalidImageFormatException   
     */
    detectFaces(params: Rekognition.DetectFacesRequest, callback?: (err: Rekognition.InvalidS3ObjectException|Rekognition.InvalidParameterException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidImageFormatException|any, data: Rekognition.DetectFacesResponse|any) => void): Request<Rekognition.DetectFacesResponse|any,Rekognition.InvalidS3ObjectException|Rekognition.InvalidParameterException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidImageFormatException|any>;
    /**
     * Detects instances of real-world labels within an image (JPEG or PNG) provided as
input. This includes objects like flower, tree, and table; events like wedding,
graduation, and birthday party; and concepts like landscape, evening, and
nature. For an example, see get-started-exercise-detect-labels.

 For each object, scene, and concept the API returns one or more labels. Each
label provides the object name, and the level of confidence that the image
contains the object. For example, suppose the input image has a lighthouse, the
sea, and a rock. The response will include all three labels, one for each
object. 

 {Name: lighthouse, Confidence: 98.4629} 

 {Name: rock,Confidence: 79.2097} 

 {Name: sea,Confidence: 75.061} 

 In the preceding example, the operation returns one label for each of the three
objects. The operation can also return multiple labels for the same object in
the image. For example, if the input image shows a flower (for example, a
tulip), the operation might return the following three labels. 

 {Name: flower,Confidence: 99.0562} 

 {Name: plant,Confidence: 99.0562} 

 {Name: tulip,Confidence: 99.0562} 

In this example, the detection algorithm more precisely identifies the flower as
a tulip.

You can provide the input image as an S3 object or as base64-encoded bytes. In
response, the API returns an array of labels. In addition, the response also
includes the orientation correction. Optionally, you can specify MinConfidence 
to control the confidence threshold for the labels returned. The default is 50%.
You can also add the MaxLabels parameter to limit the number of labels returned. 

If the object detected is a person, the operation doesn&#x27;t provide the same
facial details that the DetectFaces operation provides.

This is a stateless API operation. That is, the operation does not persist any
data.

This operation requires permissions to perform the rekognition:DetectLabels 
action.
     *
     * @error InvalidS3ObjectException   
     * @error InvalidParameterException   
     * @error ImageTooLargeException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error InvalidImageFormatException   
     */
    detectLabels(params: Rekognition.DetectLabelsRequest, callback?: (err: Rekognition.InvalidS3ObjectException|Rekognition.InvalidParameterException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidImageFormatException|any, data: Rekognition.DetectLabelsResponse|any) => void): Request<Rekognition.DetectLabelsResponse|any,Rekognition.InvalidS3ObjectException|Rekognition.InvalidParameterException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidImageFormatException|any>;
    /**
     * Detects faces in the input image and adds them to the specified collection. 

 Amazon Rekognition does not save the actual faces detected. Instead, the
underlying detection algorithm first detects the faces in the input image, and
for each face extracts facial features into a feature vector, and stores it in
the back-end database. Amazon Rekognition uses feature vectors when performing
face match and search operations using the and operations. 

If you provide the optional externalImageID for the input image you provided,
Amazon Rekognition associates this ID with all faces that it detects. When you
call the operation, the response returns the external ID. You can use this
external image ID to create a client-side index to associate the faces with each
image. You can then use the index to find all faces in an image. 

In response, the operation returns an array of metadata for all detected faces.
This includes, the bounding box of the detected face, confidence value
(indicating the bounding box contains a face), a face ID assigned by the service
for each face that is detected and stored, and an image ID assigned by the
service for the input image If you request all facial attributes (using the 
detectionAttributes parameter, Amazon Rekognition returns detailed facial
attributes such as facial landmarks (for example, location of eye and mount) and
other facial attributes such gender. If you provide the same image, specify the
same collection, and use the same external ID in the IndexFaces operation,
Amazon Rekognition doesn&#x27;t save duplicate face metadata. 

For an example, see example2.

This operation requires permissions to perform the rekognition:IndexFaces 
action.
     *
     * @error InvalidS3ObjectException   
     * @error InvalidParameterException   
     * @error ImageTooLargeException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error InvalidImageFormatException   
     */
    indexFaces(params: Rekognition.IndexFacesRequest, callback?: (err: Rekognition.InvalidS3ObjectException|Rekognition.InvalidParameterException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|Rekognition.InvalidImageFormatException|any, data: Rekognition.IndexFacesResponse|any) => void): Request<Rekognition.IndexFacesResponse|any,Rekognition.InvalidS3ObjectException|Rekognition.InvalidParameterException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|Rekognition.InvalidImageFormatException|any>;
    /**
     * Returns list of collection IDs in your account. If the result is truncated, the
response also provides a NextToken that you can use in the subsequent request to
fetch the next set of collection IDs.

For an example, see example1.

This operation requires permissions to perform the rekognition:ListCollections 
action.
     *
     * @error InvalidParameterException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error InvalidPaginationTokenException   
     * @error ResourceNotFoundException   
     */
    listCollections(params: Rekognition.ListCollectionsRequest, callback?: (err: Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidPaginationTokenException|Rekognition.ResourceNotFoundException|any, data: Rekognition.ListCollectionsResponse|any) => void): Request<Rekognition.ListCollectionsResponse|any,Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidPaginationTokenException|Rekognition.ResourceNotFoundException|any>;
    /**
     * Returns metadata for faces in the specified collection. This metadata includes
information such as the bounding box coordinates, the confidence (that the
bounding box contains a face), and face ID. For an example, see example3. 

This operation requires permissions to perform the rekognition:ListFaces action.
     *
     * @error InvalidParameterException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error InvalidPaginationTokenException   
     * @error ResourceNotFoundException   
     */
    listFaces(params: Rekognition.ListFacesRequest, callback?: (err: Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidPaginationTokenException|Rekognition.ResourceNotFoundException|any, data: Rekognition.ListFacesResponse|any) => void): Request<Rekognition.ListFacesResponse|any,Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.InvalidPaginationTokenException|Rekognition.ResourceNotFoundException|any>;
    /**
     * For a given input face ID, searches for matching faces in the collection the
face belongs to. You get a face ID when you add a face to the collection using
the IndexFaces operation. The operation compares the features of the input face
with faces in the specified collection. 

You can also search faces without indexing faces by using the SearchFacesByImage 
operation.

 The operation response returns an array of faces that match, ordered by
similarity score with the highest similarity first. More specifically, it is an
array of metadata for each face match that is found. Along with the metadata,
the response also includes a confidence value for each face match, indicating
the confidence that the specific face matches the input face. 

For an example, see example3.

This operation requires permissions to perform the rekognition:SearchFaces 
action.
     *
     * @error InvalidParameterException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     */
    searchFaces(params: Rekognition.SearchFacesRequest, callback?: (err: Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|any, data: Rekognition.SearchFacesResponse|any) => void): Request<Rekognition.SearchFacesResponse|any,Rekognition.InvalidParameterException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|any>;
    /**
     * For a given input image, first detects the largest face in the image, and then
searches the specified collection for matching faces. The operation compares the
features of the input face with faces in the specified collection. 

 To search for all faces in an input image, you might first call the operation,
and then use the face IDs returned in subsequent calls to the operation. 

 You can also call the DetectFaces operation and use the bounding boxes in the
response to make face crops, which then you can pass in to the 
SearchFacesByImage operation. 

 The response returns an array of faces that match, ordered by similarity score
with the highest similarity first. More specifically, it is an array of metadata
for each face match found. Along with the metadata, the response also includes a 
similarity indicating how similar the face is to the input face. In the
response, the operation also returns the bounding box (and a confidence level
that the bounding box contains a face) of the face that Amazon Rekognition used
for the input image. 

For an example, see example3.

This operation requires permissions to perform the 
rekognition:SearchFacesByImage action.
     *
     * @error InvalidS3ObjectException   
     * @error InvalidParameterException   
     * @error ImageTooLargeException   
     * @error AccessDeniedException   
     * @error InternalServerError   
     * @error ThrottlingException   
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error InvalidImageFormatException   
     */
    searchFacesByImage(params: Rekognition.SearchFacesByImageRequest, callback?: (err: Rekognition.InvalidS3ObjectException|Rekognition.InvalidParameterException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|Rekognition.InvalidImageFormatException|any, data: Rekognition.SearchFacesByImageResponse|any) => void): Request<Rekognition.SearchFacesByImageResponse|any,Rekognition.InvalidS3ObjectException|Rekognition.InvalidParameterException|Rekognition.ImageTooLargeException|Rekognition.AccessDeniedException|Rekognition.InternalServerError|Rekognition.ThrottlingException|Rekognition.ProvisionedThroughputExceededException|Rekognition.ResourceNotFoundException|Rekognition.InvalidImageFormatException|any>;

  }

  export module Rekognition {
    
    export type Attribute = string;
    
    export type Attributes = Attribute[];
    
    export type Boolean = boolean;
    
    export type CollectionId = string;
    
    export type CollectionIdList = CollectionId[];
    
    export type CompareFacesMatchList = CompareFacesMatch[];
    
    export type Degree = number;
    
    export type EmotionName = string;
    
    export type Emotions = Emotion[];
    
    export type ExternalImageId = string;
    
    export type FaceDetailList = FaceDetail[];
    
    export type FaceId = string;
    
    export type FaceIdList = FaceId[];
    
    export type FaceList = Face[];
    
    export type FaceMatchList = FaceMatch[];
    
    export type FaceRecordList = FaceRecord[];
    
    export type Float = number;
    
    export type GenderType = string;
    
    export type ImageBlob = any;
    
    export type ImageId = string;
    
    export type Labels = Label[];
    
    export type LandmarkType = string;
    
    export type Landmarks = Landmark[];
    
    export type MaxFaces = number;
    
    export type OrientationCorrection = string;
    
    export type PageSize = number;
    
    export type PaginationToken = string;
    
    export type Percent = number;
    
    export type S3Bucket = string;
    
    export type S3ObjectName = string;
    
    export type S3ObjectVersion = string;
    
    export type String = string;
    
    export type UInteger = number;

    export interface AccessDeniedException {
    }
    export interface Beard {
        /** Boolean value that indicates whether the face has beard or not. **/
        Value?: Boolean;
        /** Level of confidence in the determination. **/
        Confidence?: Percent;
    }
    export interface BoundingBox {
        /** Width of the bounding box as a ratio of the overall image width. **/
        Width?: Float;
        /** Height of the bounding box as a ratio of the overall image height. **/
        Height?: Float;
        /** Left coordinate of the bounding box as a ratio of overall image width. **/
        Left?: Float;
        /** Top coordinate of the bounding box as a ratio of overall image height. **/
        Top?: Float;
    }
    export interface CompareFacesMatch {
        /** Level of confidence that the faces match. **/
        Similarity?: Percent;
        /** Provides face metadata (bounding box and confidence that the bounding box
actually contains a face). **/
        Face?: ComparedFace;
    }
    export interface CompareFacesRequest {
        /** Source image either as bytes or an S3 object **/
        SourceImage: Image;
        /** Target image either as bytes or an S3 object **/
        TargetImage: Image;
        /** The minimum level of confidence in the match you want included in the result. **/
        SimilarityThreshold?: Percent;
    }
    export interface CompareFacesResponse {
        /** The face from the source image that was used for comparison. **/
        SourceImageFace?: ComparedSourceImageFace;
        /** Provides an array of CompareFacesMatch objects. Each object provides the
bounding box, confidence that the bounding box contains a face, and the
similarity between the face in the bounding box and the face in the source
image. **/
        FaceMatches?: CompareFacesMatchList;
    }
    export interface ComparedFace {
        BoundingBox?: BoundingBox;
        /** Level of confidence that what the bounding box contains is a face. **/
        Confidence?: Percent;
    }
    export interface ComparedSourceImageFace {
        BoundingBox?: BoundingBox;
        /** Confidence level that the selected bounding box contains a face. **/
        Confidence?: Percent;
    }
    export interface CreateCollectionRequest {
        /** ID for the collection that you are creating. **/
        CollectionId: CollectionId;
    }
    export interface CreateCollectionResponse {
        /** HTTP status code indicating the result of the operation. **/
        StatusCode?: UInteger;
        /** Amazon Resource Name (ARN) of the collection. You can use this to manage
permissions on your resources. **/
        CollectionArn?: String;
    }
    export interface DeleteCollectionRequest {
        /** ID of the collection to delete. **/
        CollectionId: CollectionId;
    }
    export interface DeleteCollectionResponse {
        /** HTTP status code that indicates the result of the operation. **/
        StatusCode?: UInteger;
    }
    export interface DeleteFacesRequest {
        /** Collection from which to remove the specific faces. **/
        CollectionId: CollectionId;
        /** An array of face IDs to delete. **/
        FaceIds: FaceIdList;
    }
    export interface DeleteFacesResponse {
        /** An array of strings (face IDs) of the faces that were deleted. **/
        DeletedFaces?: FaceIdList;
    }
    export interface DetectFacesRequest {
        /** The image in which you want to detect faces. You can specify a blob or an S3
object. **/
        Image: Image;
        /** A list of facial attributes you would like to be returned. By default, the API
returns subset of facial attributes. 

For example, you can specify the value as, [&quot;ALL&quot;] or [&quot;DEFAULT&quot;]. If you
provide both, [&quot;ALL&quot;, &quot;DEFAULT&quot;], the service uses a logical AND operator to
determine which attributes to return (in this case, it is all attributes). If
you specify all attributes, Amazon Rekognition performs additional detection. **/
        Attributes?: Attributes;
    }
    export interface DetectFacesResponse {
        /** Details of each face found in the image. **/
        FaceDetails?: FaceDetailList;
        /** The algorithm detects the image orientation. If it detects that the image was
rotated, it returns the degrees of rotation. If your application is displaying
the image, you can use this value to adjust the orientation. 

For example, if the service detects that the input image was rotated by 90
degrees, it corrects orientation, performs face detection, and then returns the
faces. That is, the bounding box coordinates in the response are based on the
corrected orientation. 

If the source image Exif metadata populates the orientation field, Amazon
Rekognition does not perform orientation correction and the value of
OrientationCorrection will be nil. **/
        OrientationCorrection?: OrientationCorrection;
    }
    export interface DetectLabelsRequest {
        /** The input image. You can provide a blob of image bytes or an S3 object. **/
        Image: Image;
        /** Maximum number of labels you want the service to return in the response. The
service returns the specified number of highest confidence labels. **/
        MaxLabels?: UInteger;
        /** Specifies the minimum confidence level for the labels to return. Amazon
Rekognition doesn&#x27;t return any labels with confidence lower than this specified
value.

If minConfidence is not specified, the operation returns labels with a
confidence values greater than or equal to 50 percent. **/
        MinConfidence?: Percent;
    }
    export interface DetectLabelsResponse {
        /** An array of labels for the real-world objects detected. **/
        Labels?: Labels;
        /** Amazon Rekognition returns the orientation of the input image that was detected
(clockwise direction). If your application displays the image, you can use this
value to correct the orientation. If Amazon Rekognition detects that the input
image was rotated (for example, by 90 degrees), it first corrects the
orientation before detecting the labels. 

If the source image Exif metadata populates the orientation field, Amazon
Rekognition does not perform orientation correction and the value of
OrientationCorrection will be nil. **/
        OrientationCorrection?: OrientationCorrection;
    }
    export interface Emotion {
        /** Type of emotion detected. **/
        Type?: EmotionName;
        /** Level of confidence in the determination. **/
        Confidence?: Percent;
    }
    export interface EyeOpen {
        /** Boolean value that indicates whether the eyes on the face are open. **/
        Value?: Boolean;
        /** Level of confidence in the determination. **/
        Confidence?: Percent;
    }
    export interface Eyeglasses {
        /** Boolean value that indicates whether the face is wearing eye glasses or not. **/
        Value?: Boolean;
        /** Level of confidence in the determination. **/
        Confidence?: Percent;
    }
    export interface Face {
        /** Unique identifier that Amazon Rekognition assigns to the face. **/
        FaceId?: FaceId;
        BoundingBox?: BoundingBox;
        /** Unique identifier that Amazon Rekognition assigns to the source image. **/
        ImageId?: ImageId;
        /** Identifier that you assign to all the faces in the input image. **/
        ExternalImageId?: ExternalImageId;
        /** Confidence level that the bounding box contains a face (and not a different
object such as a tree). **/
        Confidence?: Percent;
    }
    export interface FaceDetail {
        /** Bounding box of the face. **/
        BoundingBox?: BoundingBox;
        /** Indicates whether or not the face is smiling, and the confidence level in the
determination. **/
        Smile?: Smile;
        /** Indicates whether or not the face is wearing eye glasses, and the confidence
level in the determination. **/
        Eyeglasses?: Eyeglasses;
        /** Indicates whether or not the face is wearing sunglasses, and the confidence
level in the determination. **/
        Sunglasses?: Sunglasses;
        /** Gender of the face and the confidence level in the determination. **/
        Gender?: Gender;
        /** Indicates whether or not the face has a beard, and the confidence level in the
determination. **/
        Beard?: Beard;
        /** Indicates whether or not the face has a mustache, and the confidence level in
the determination. **/
        Mustache?: Mustache;
        /** Indicates whether or not the eyes on the face are open, and the confidence level
in the determination. **/
        EyesOpen?: EyeOpen;
        /** Indicates whether or not the mouth on the face is open, and the confidence level
in the determination. **/
        MouthOpen?: MouthOpen;
        /** The emotions detected on the face, and the confidence level in the
determination. For example, HAPPY, SAD, and ANGRY. **/
        Emotions?: Emotions;
        /** Indicates the location of the landmark on the face. **/
        Landmarks?: Landmarks;
        /** Indicates the pose of the face as determined by pitch, roll, and the yaw. **/
        Pose?: Pose;
        /** Identifies image brightness and sharpness. **/
        Quality?: ImageQuality;
        /** Confidence level that the bounding box contains a face (and not a different
object such as a tree). **/
        Confidence?: Percent;
    }
    export interface FaceMatch {
        /** Confidence in the match of this face with the input face. **/
        Similarity?: Percent;
        Face?: Face;
    }
    export interface FaceRecord {
        Face?: Face;
        FaceDetail?: FaceDetail;
    }
    export interface Gender {
        /** Gender of the face. **/
        Value?: GenderType;
        /** Level of confidence in the determination. **/
        Confidence?: Percent;
    }
    export interface Image {
        /** Blob of image bytes up to 5 MBs. **/
        Bytes?: ImageBlob;
        /** Identifies an S3 object as the image source. **/
        S3Object?: S3Object;
    }
    export interface ImageQuality {
        /** Value representing brightness of the face. The service returns a value between 0
and 1 (inclusive). **/
        Brightness?: Float;
        /** Value representing sharpness of the face. **/
        Sharpness?: Float;
    }
    export interface ImageTooLargeException {
    }
    export interface IndexFacesRequest {
        /** ID of an existing collection to which you want to add the faces that are
detected in the input images. **/
        CollectionId: CollectionId;
        Image: Image;
        /** ID you want to assign to all the faces detected in the image. **/
        ExternalImageId?: ExternalImageId;
        /** (Optional) Returns detailed attributes of indexed faces. By default, the
operation returns a subset of the facial attributes. 

For example, you can specify the value as, [&quot;ALL&quot;] or [&quot;DEFAULT&quot;]. If you
provide both, [&quot;ALL&quot;, &quot;DEFAULT&quot;], Amazon Rekognition uses the logical AND
operator to determine which attributes to return (in this case, it is all
attributes). If you specify all attributes, the service performs additional
detection, in addition to the default. **/
        DetectionAttributes?: Attributes;
    }
    export interface IndexFacesResponse {
        /** An array of faces detected and added to the collection. For more information,
see howitworks-index-faces. **/
        FaceRecords?: FaceRecordList;
        /** The algorithm detects the image orientation. If it detects that the image was
rotated, it returns the degree of rotation. You can use this value to correct
the orientation and also appropriately analyze the bounding box coordinates that
are returned. 

If the source image Exif metadata populates the orientation field, Amazon
Rekognition does not perform orientation correction and the value of
OrientationCorrection will be nil. **/
        OrientationCorrection?: OrientationCorrection;
    }
    export interface InternalServerError {
    }
    export interface InvalidImageFormatException {
    }
    export interface InvalidPaginationTokenException {
    }
    export interface InvalidParameterException {
    }
    export interface InvalidS3ObjectException {
    }
    export interface Label {
        /** The name (label) of the object. **/
        Name?: String;
        /** Level of confidence. **/
        Confidence?: Percent;
    }
    export interface Landmark {
        /** Type of the landmark. **/
        Type?: LandmarkType;
        /** x-coordinate from the top left of the landmark expressed as the ration of the
width of the image. For example, if the images is 700x200 and the x-coordinate
of the landmark is at 350 pixels, this value is 0.5. **/
        X?: Float;
        /** y-coordinate from the top left of the landmark expressed as the ration of the
height of the image. For example, if the images is 700x200 and the y-coordinate
of the landmark is at 100 pixels, this value is 0.5. **/
        Y?: Float;
    }
    export interface ListCollectionsRequest {
        /** Pagination token from the previous response. **/
        NextToken?: PaginationToken;
        /** Maximum number of collection IDs to return. **/
        MaxResults?: PageSize;
    }
    export interface ListCollectionsResponse {
        /** An array of collection IDs. **/
        CollectionIds?: CollectionIdList;
        /** If the result is truncated, the response provides a NextToken that you can use
in the subsequent request to fetch the next set of collection IDs. **/
        NextToken?: PaginationToken;
    }
    export interface ListFacesRequest {
        /** ID of the collection from which to list the faces. **/
        CollectionId: CollectionId;
        /** If the previous response was incomplete (because there is more data to
retrieve), Amazon Rekognition returns a pagination token in the response. You
can use this pagination token to retrieve the next set of faces. **/
        NextToken?: PaginationToken;
        /** Maximum number of faces to return. **/
        MaxResults?: PageSize;
    }
    export interface ListFacesResponse {
        /** An array of Face objects. **/
        Faces?: FaceList;
        /** If the response is truncated, Amazon Rekognition returns this token that you can
use in the subsequent request to retrieve the next set of faces. **/
        NextToken?: String;
    }
    export interface MouthOpen {
        /** Boolean value that indicates whether the mouth on the face is open or not. **/
        Value?: Boolean;
        /** Level of confidence in the determination. **/
        Confidence?: Percent;
    }
    export interface Mustache {
        /** Boolean value that indicates whether the face has mustache or not. **/
        Value?: Boolean;
        /** Level of confidence in the determination. **/
        Confidence?: Percent;
    }
    export interface Pose {
        /** Value representing the face rotation on the roll axis. **/
        Roll?: Degree;
        /** Value representing the face rotation on the yaw axis. **/
        Yaw?: Degree;
        /** Value representing the face rotation on the pitch axis. **/
        Pitch?: Degree;
    }
    export interface ProvisionedThroughputExceededException {
    }
    export interface ResourceAlreadyExistsException {
    }
    export interface ResourceNotFoundException {
    }
    export interface S3Object {
        /** Name of the S3 bucket. **/
        Bucket?: S3Bucket;
        /** S3 object key name. **/
        Name?: S3ObjectName;
        /** If the bucket is versioning enabled, you can specify the object version. **/
        Version?: S3ObjectVersion;
    }
    export interface SearchFacesByImageRequest {
        /** ID of the collection to search. **/
        CollectionId: CollectionId;
        Image: Image;
        /** Maximum number of faces to return. The operation returns the maximum number of
faces with the highest confidence in the match. **/
        MaxFaces?: MaxFaces;
        /** (Optional) Specifies the minimum confidence in the face match to return. For
example, don&#x27;t return any matches where confidence in matches is less than 70%. **/
        FaceMatchThreshold?: Percent;
    }
    export interface SearchFacesByImageResponse {
        /** The bounding box around the face in the input image that Amazon Rekognition used
for the search. **/
        SearchedFaceBoundingBox?: BoundingBox;
        /** The level of confidence that the searchedFaceBoundingBox, contains a face. **/
        SearchedFaceConfidence?: Percent;
        /** An array of faces that match the input face, along with the confidence in the
match. **/
        FaceMatches?: FaceMatchList;
    }
    export interface SearchFacesRequest {
        /** ID of the collection the face belongs to. **/
        CollectionId: CollectionId;
        /** ID of a face to find matches for in the collection. **/
        FaceId: FaceId;
        /** Maximum number of faces to return. The operation returns the maximum number of
faces with the highest confidence in the match. **/
        MaxFaces?: MaxFaces;
        /** Optional value specifying the minimum confidence in the face match to return.
For example, don&#x27;t return any matches where confidence in matches is less than
70%. **/
        FaceMatchThreshold?: Percent;
    }
    export interface SearchFacesResponse {
        /** ID of the face that was searched for matches in a collection. **/
        SearchedFaceId?: FaceId;
        /** An array of faces that matched the input face, along with the confidence in the
match. **/
        FaceMatches?: FaceMatchList;
    }
    export interface Smile {
        /** Boolean value that indicates whether the face is smiling or not. **/
        Value?: Boolean;
        /** Level of confidence in the determination. **/
        Confidence?: Percent;
    }
    export interface Sunglasses {
        /** Boolean value that indicates whether the face is wearing sunglasses or not. **/
        Value?: Boolean;
        /** Level of confidence in the determination. **/
        Confidence?: Percent;
    }
    export interface ThrottlingException {
    }
  }
}
