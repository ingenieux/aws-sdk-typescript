// Type definitions for aws-sdk - AWS CodeBuild
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-10-06
   * endpointPrefix: codebuild
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: json
   *
   * AWS CodeBuildAWS CodeBuild is a fully-managed build service in the cloud. AWS
CodeBuild compiles your source code, runs unit tests, and produces artifacts
that are ready to deploy. AWS CodeBuild eliminates the need to provision,
manage, and scale your own build servers. It provides prepackaged build
environments for the most popular programming languages and build tools such as
Apach Maven, Gradle, and more. You can also fully customize build environments
in AWS CodeBuild to use your own build tools. AWS CodeBuild scales automatically
to meet peak build requests, and you pay only for the build time you consume.
For more information about AWS CodeBuild, see the AWS CodeBuild User Guide .

AWS CodeBuild supports these operations:

 &amp;#42; BatchGetProjects : Gets information about one or more build projects. A build
   project defines how AWS CodeBuild will run a build. This includes information
   such as where to get the source code to build, the build environment to use,
   the build commands to run, and where to store the build output. A build
   environment represents a combination of operating system, programming
   language runtime, and tools that AWS CodeBuild will use to run a build. Also,
   you can add tags to build projects to help manage your resources and costs.
   
   
 * CreateProject : Creates a build project.
   
   
 * DeleteProject : Deletes a build project.
   
   
 * ListProjects : Gets a list of build project names, with each build project
   name representing a single build project.
   
   
 * UpdateProject : Changes the settings of an existing build project.
   
   
 * BatchGetBuilds : Gets information about one or more builds.
   
   
 * ListBuilds : Gets a list of build IDs, with each build ID representing a
   single build.
   
   
 * ListBuildsForProject : Gets a list of build IDs for the specified build
   project, with each build ID representing a single build.
   
   
 * StartBuild : Starts running a build.
   
   
 * StopBuild : Attempts to stop running a build.
   
   
 * ListCuratedEnvironmentImages : Gets information about Docker images that are
   managed by AWS CodeBuild.
   *
   */
  export class CodeBuild extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Gets information about one or more builds.
     *
     * @error InvalidInputException   
     */
    batchGetBuilds(params: CodeBuild.BatchGetBuildsInput, callback?: (err: CodeBuild.InvalidInputException|any, data: CodeBuild.BatchGetBuildsOutput|any) => void): Request<CodeBuild.BatchGetBuildsOutput|any,CodeBuild.InvalidInputException|any>;
    /**
     * Gets information about one or more build projects.
     *
     * @error InvalidInputException   
     */
    batchGetProjects(params: CodeBuild.BatchGetProjectsInput, callback?: (err: CodeBuild.InvalidInputException|any, data: CodeBuild.BatchGetProjectsOutput|any) => void): Request<CodeBuild.BatchGetProjectsOutput|any,CodeBuild.InvalidInputException|any>;
    /**
     * Creates a build project.
     *
     * @error InvalidInputException   
     * @error ResourceAlreadyExistsException   
     * @error AccountLimitExceededException   
     */
    createProject(params: CodeBuild.CreateProjectInput, callback?: (err: CodeBuild.InvalidInputException|CodeBuild.ResourceAlreadyExistsException|CodeBuild.AccountLimitExceededException|any, data: CodeBuild.CreateProjectOutput|any) => void): Request<CodeBuild.CreateProjectOutput|any,CodeBuild.InvalidInputException|CodeBuild.ResourceAlreadyExistsException|CodeBuild.AccountLimitExceededException|any>;
    /**
     * Deletes a build project.
     *
     * @error InvalidInputException   
     */
    deleteProject(params: CodeBuild.DeleteProjectInput, callback?: (err: CodeBuild.InvalidInputException|any, data: CodeBuild.DeleteProjectOutput|any) => void): Request<CodeBuild.DeleteProjectOutput|any,CodeBuild.InvalidInputException|any>;
    /**
     * Gets a list of build IDs, with each build ID representing a single build.
     *
     * @error InvalidInputException   
     */
    listBuilds(params: CodeBuild.ListBuildsInput, callback?: (err: CodeBuild.InvalidInputException|any, data: CodeBuild.ListBuildsOutput|any) => void): Request<CodeBuild.ListBuildsOutput|any,CodeBuild.InvalidInputException|any>;
    /**
     * Gets a list of build IDs for the specified build project, with each build ID
representing a single build.
     *
     * @error InvalidInputException   
     * @error ResourceNotFoundException   
     */
    listBuildsForProject(params: CodeBuild.ListBuildsForProjectInput, callback?: (err: CodeBuild.InvalidInputException|CodeBuild.ResourceNotFoundException|any, data: CodeBuild.ListBuildsForProjectOutput|any) => void): Request<CodeBuild.ListBuildsForProjectOutput|any,CodeBuild.InvalidInputException|CodeBuild.ResourceNotFoundException|any>;
    /**
     * Gets information about Docker images that are managed by AWS CodeBuild.
     *
     */
    listCuratedEnvironmentImages(params: CodeBuild.ListCuratedEnvironmentImagesInput, callback?: (err: any, data: CodeBuild.ListCuratedEnvironmentImagesOutput|any) => void): Request<CodeBuild.ListCuratedEnvironmentImagesOutput|any,any>;
    /**
     * Gets a list of build project names, with each build project name representing a
single build project.
     *
     * @error InvalidInputException   
     */
    listProjects(params: CodeBuild.ListProjectsInput, callback?: (err: CodeBuild.InvalidInputException|any, data: CodeBuild.ListProjectsOutput|any) => void): Request<CodeBuild.ListProjectsOutput|any,CodeBuild.InvalidInputException|any>;
    /**
     * Starts running a build.
     *
     * @error InvalidInputException   
     * @error ResourceNotFoundException   
     * @error AccountLimitExceededException   
     */
    startBuild(params: CodeBuild.StartBuildInput, callback?: (err: CodeBuild.InvalidInputException|CodeBuild.ResourceNotFoundException|CodeBuild.AccountLimitExceededException|any, data: CodeBuild.StartBuildOutput|any) => void): Request<CodeBuild.StartBuildOutput|any,CodeBuild.InvalidInputException|CodeBuild.ResourceNotFoundException|CodeBuild.AccountLimitExceededException|any>;
    /**
     * Attempts to stop running a build.

Completed builds cannot be stopped.
     *
     * @error InvalidInputException   
     * @error ResourceNotFoundException   
     */
    stopBuild(params: CodeBuild.StopBuildInput, callback?: (err: CodeBuild.InvalidInputException|CodeBuild.ResourceNotFoundException|any, data: CodeBuild.StopBuildOutput|any) => void): Request<CodeBuild.StopBuildOutput|any,CodeBuild.InvalidInputException|CodeBuild.ResourceNotFoundException|any>;
    /**
     * Changes the settings of an existing build project.
     *
     * @error InvalidInputException   
     * @error ResourceNotFoundException   
     */
    updateProject(params: CodeBuild.UpdateProjectInput, callback?: (err: CodeBuild.InvalidInputException|CodeBuild.ResourceNotFoundException|any, data: CodeBuild.UpdateProjectOutput|any) => void): Request<CodeBuild.UpdateProjectOutput|any,CodeBuild.InvalidInputException|CodeBuild.ResourceNotFoundException|any>;

  }

  export module CodeBuild {
    
    export type ArtifactNamespace = string;
    
    export type ArtifactPackaging = string;
    
    export type ArtifactsType = string;
    
    export type Boolean = boolean;
    
    export type BuildIds = NonEmptyString[];
    
    export type BuildPhaseType = string;
    
    export type BuildPhases = BuildPhase[];
    
    export type Builds = Build[];
    
    export type ComputeType = string;
    
    export type EnvironmentImages = EnvironmentImage[];
    
    export type EnvironmentLanguages = EnvironmentLanguage[];
    
    export type EnvironmentPlatforms = EnvironmentPlatform[];
    
    export type EnvironmentType = string;
    
    export type EnvironmentVariables = EnvironmentVariable[];
    
    export type KeyInput = string;
    
    export type LanguageType = string;
    
    export type NonEmptyString = string;
    
    export type PhaseContexts = PhaseContext[];
    
    export type PlatformType = string;
    
    export type ProjectDescription = string;
    
    export type ProjectName = string;
    
    export type ProjectNames = NonEmptyString[];
    
    export type ProjectSortByType = string;
    
    export type Projects = Project[];
    
    export type SortOrderType = string;
    
    export type SourceAuthType = string;
    
    export type SourceType = string;
    
    export type StatusType = string;
    
    export type String = string;
    
    export type TagList = Tag[];
    
    export type TimeOut = number;
    
    export type Timestamp = number;
    
    export type ValueInput = string;
    
    export type WrapperInt = number;
    
    export type WrapperLong = number;

    export interface AccountLimitExceededException {
    }
    export interface BatchGetBuildsInput {
        /** The IDs of the builds to get information about. **/
        ids: BuildIds;
    }
    export interface BatchGetBuildsOutput {
        /** Information about the requested builds. **/
        builds?: Builds;
        /** The IDs of builds for which information could not be found. **/
        buildsNotFound?: BuildIds;
    }
    export interface BatchGetProjectsInput {
        /** The names of the build projects to get information about. **/
        names: ProjectNames;
    }
    export interface BatchGetProjectsOutput {
        /** Information about the requested build projects. **/
        projects?: Projects;
        /** The names of build projects for which information could not be found. **/
        projectsNotFound?: ProjectNames;
    }
    export interface Build {
        /** The build&#x27;s unique ID. **/
        id?: NonEmptyString;
        /** The build&#x27;s Amazon Resource Name (ARN). **/
        arn?: NonEmptyString;
        /** When the build process started, expressed in Unix time format. **/
        startTime?: Timestamp;
        /** When the build process ended, expressed in Unix time format. **/
        endTime?: Timestamp;
        /** The build&#x27;s current build phase. **/
        currentPhase?: String;
        /** The build&#x27;s current status. Valid values include:

 &amp;#42; FAILED : The build failed.
   
   
 * FAULT : The build faulted.
   
   
 * IN_PROGRESS : The build is still in progress.
   
   
 * STOPPED : The build stopped.
   
   
 * SUCCEEDED : The build succeeded.
   
   
 * TIMED_OUT : The build timed out. **/
        buildStatus?: StatusType;
        /** Any version identifier for the version of the source code to be built. **/
        sourceVersion?: NonEmptyString;
        /** The build project&#x27;s name. **/
        projectName?: NonEmptyString;
        /** Information about all previous build phases that have completed, and information
about any current build phase that has not yet completed. **/
        phases?: BuildPhases;
        /** Information about the source code to be built. **/
        source?: ProjectSource;
        /** Information about the build&#x27;s output artifacts. **/
        artifacts?: BuildArtifacts;
        /** Information about the build environment for this build. **/
        environment?: ProjectEnvironment;
        /** Information about the build&#x27;s logs in Amazon CloudWatch Logs. **/
        logs?: LogsLocation;
        /** How long in minutes for AWS CodeBuild to wait to timeout this build if it does
not get marked as completed. **/
        timeoutInMinutes?: WrapperInt;
        /** Whether the build has finished. Valid values include true if completed;
otherwise, false. **/
        buildComplete?: Boolean;
        /** The entity that started the build. Valid values include:

 &amp;#42; If AWS CodePipeline started the build, the pipeline&#x27;s name, for example 
   codepipeline/my-demo-pipeline .
   
   
 * If an AWS Identity and Access Management (IAM) user started the build, the
   user&#x27;s name, for example MyUserName .
   
   
 * If the Jenkins plugin for AWS CodeBuild started the build, the string 
   CodeBuild-Jenkins-Plugin . **/
        initiator?: String;
    }
    export interface BuildArtifacts {
        /** Information about the build artifacts&#x27; location. **/
        location?: String;
        /** The SHA-256 hash of the build artifact.

You can use this hash along with a checksum tool to confirm both file integrity
and authenticity.

This value is available only if the related build project&#x27;s packaging value is
set to ZIP . **/
        sha256sum?: String;
        /** The MD5 hash of the build artifact.

You can use this hash along with a checksum tool to confirm both file integrity
and authenticity.

This value is available only if the related build project&#x27;s packaging value is
set to ZIP . **/
        md5sum?: String;
    }
    export interface BuildPhase {
        /** The build phase&#x27;s name. Valid values include:

 &amp;#42; BUILD : Core build activities typically occur in this build phase.
   
   
 * COMPLETED : The build has completed.
   
   
 * DOWNLOAD_SOURCE : Source code is being downloaded in this build phase.
   
   
 * FINALIZING : The build process is completing in this build phase.
   
   
 * INSTALL : Installation activities typically occur in this build phase.
   
   
 * POST_BUILD : Post-build activities typically occur in this build phase.
   
   
 * PRE_BUILD : Pre-build activities typically occur in this build phase.
   
   
 * PROVISIONING : The build environment is being set up.
   
   
 * SUBMITTED : The build has been submitted.
   
   
 * UPLOAD_ARTIFACTS : Build output artifacts are being uploaded to output
   location. **/
        phaseType?: BuildPhaseType;
        /** The build phase&#x27;s current status. Valid values include:

 &amp;#42; FAILED : The build phase failed.
   
   
 * FAULT : The build phase faulted.
   
   
 * IN_PROGRESS : The build phase is still in progress.
   
   
 * STOPPED : The build phase stopped.
   
   
 * SUCCEEDED : The build phase succeeded.
   
   
 * TIMED_OUT : The build phase timed out. **/
        phaseStatus?: StatusType;
        /** When the build phase started, expressed in Unix time format. **/
        startTime?: Timestamp;
        /** When the build phase ended, expressed in Unix time format. **/
        endTime?: Timestamp;
        /** How long, in seconds, between the build&#x27;s phase starting and ending times. **/
        durationInSeconds?: WrapperLong;
        /** Additional information about a build phase, especially to help troubleshoot a
failed build. **/
        contexts?: PhaseContexts;
    }
    export interface CreateProjectInput {
        /** The build project&#x27;s name. **/
        name: ProjectName;
        /** A meaningful description of the build project. **/
        description?: ProjectDescription;
        /** Information about the build project&#x27;s build input source code. **/
        source: ProjectSource;
        /** Information about the build project&#x27;s build output artifacts. **/
        artifacts: ProjectArtifacts;
        /** Information about the build project&#x27;s build environment. **/
        environment: ProjectEnvironment;
        /** The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM)
role that enables AWS CodeBuild to interact with dependent AWS services on
behalf of the AWS account. **/
        serviceRole?: NonEmptyString;
        /** How long in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until
timing out any related build that does not get marked as completed. The default
is 60 minutes. **/
        timeoutInMinutes?: TimeOut;
        /** The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used
for encrypting the build project&#x27;s build output artifacts.

You can specify either the CMK&#x27;s Amazon Resource Name (ARN) or, if available,
the CMK&#x27;s alias (using the format alias/ alias-name ). **/
        encryptionKey?: NonEmptyString;
        /** A set of tags for this build project.

These tags are available for use by AWS services that support AWS CodeBuild
build project tags. **/
        tags?: TagList;
    }
    export interface CreateProjectOutput {
        /** Information about the build project that was created. **/
        project?: Project;
    }
    export interface DeleteProjectInput {
        /** The name of the build project to delete. **/
        name: NonEmptyString;
    }
    export interface DeleteProjectOutput {
    }
    export interface EnvironmentImage {
        /** The Docker image&#x27;s name. **/
        name?: String;
        /** The Docker image&#x27;s description. **/
        description?: String;
    }
    export interface EnvironmentLanguage {
        /** The programming language for the related set of Docker images. **/
        language?: LanguageType;
        /** The list of Docker images that are related by the specified programming
language. **/
        images?: EnvironmentImages;
    }
    export interface EnvironmentPlatform {
        /** The platform&#x27;s name. **/
        platform?: PlatformType;
        /** The list of programming languages that are available for the specified platform. **/
        languages?: EnvironmentLanguages;
    }
    export interface EnvironmentVariable {
        /** The environment variable&#x27;s name or key. **/
        name: NonEmptyString;
        /** The environment variable&#x27;s value. **/
        value: String;
    }
    export interface InvalidInputException {
    }
    export interface ListBuildsForProjectInput {
        /** The name of the build project to get a list of build IDs for. **/
        projectName: NonEmptyString;
        /** The order to list build IDs. Valid values include:

 &amp;#42; ASCENDING : List the build IDs in ascending order by build ID.
   
   
 * DESCENDING : List the build IDs in descending order by build ID. **/
        sortOrder?: SortOrderType;
        /** During a previous call, if there are more than 100 items in the list, only the
first 100 items are returned, along with a unique string called a next token .
To get the next batch of items in the list, call this operation again, adding
the next token to the call. To get all of the items in the list, keep calling
this operation with each subsequent next token that is returned, until no more
next tokens are returned. **/
        nextToken?: String;
    }
    export interface ListBuildsForProjectOutput {
        /** A list of build IDs for the specified build project, with each build ID
representing a single build. **/
        ids?: BuildIds;
        /** If there are more than 100 items in the list, only the first 100 items are
returned, along with a unique string called a next token . To get the next batch
of items in the list, call this operation again, adding the next token to the
call. **/
        nextToken?: String;
    }
    export interface ListBuildsInput {
        /** The order to list build IDs. Valid values include:

 &amp;#42; ASCENDING : List the build IDs in ascending order by build ID.
   
   
 * DESCENDING : List the build IDs in descending order by build ID. **/
        sortOrder?: SortOrderType;
        /** During a previous call, if there are more than 100 items in the list, only the
first 100 items are returned, along with a unique string called a next token .
To get the next batch of items in the list, call this operation again, adding
the next token to the call. To get all of the items in the list, keep calling
this operation with each subsequent next token that is returned, until no more
next tokens are returned. **/
        nextToken?: String;
    }
    export interface ListBuildsOutput {
        /** A list of build IDs, with each build ID representing a single build. **/
        ids?: BuildIds;
        /** If there are more than 100 items in the list, only the first 100 items are
returned, along with a unique string called a next token . To get the next batch
of items in the list, call this operation again, adding the next token to the
call. **/
        nextToken?: String;
    }
    export interface ListCuratedEnvironmentImagesInput {
    }
    export interface ListCuratedEnvironmentImagesOutput {
        /** Information about supported platforms for Docker images that are managed by AWS
CodeBuild. **/
        platforms?: EnvironmentPlatforms;
    }
    export interface ListProjectsInput {
        /** The criterion to be used to list build project names. Valid values include:

 &amp;#42; CREATED_TIME : List the build project names based on when each build project
   was created.
   
   
 * LAST_MODIFIED_TIME : List the build project names based on when information
   about each build project was last changed.
   
   
 * NAME : List the build project names based on each build project&#x27;s name.
   
   

Use sortOrder to specify in what order to list the build project names based on
the preceding criteria. **/
        sortBy?: ProjectSortByType;
        /** The order in which to list build projects. Valid values include:

 &amp;#42; ASCENDING : List the build project names in ascending order.
   
   
 * DESCENDING : List the build project names in descending order.
   
   

Use sortBy to specify the criterion to be used to list build project names. **/
        sortOrder?: SortOrderType;
        /** During a previous call, if there are more than 100 items in the list, only the
first 100 items are returned, along with a unique string called a next token .
To get the next batch of items in the list, call this operation again, adding
the next token to the call. To get all of the items in the list, keep calling
this operation with each subsequent next token that is returned, until no more
next tokens are returned. **/
        nextToken?: NonEmptyString;
    }
    export interface ListProjectsOutput {
        /** If there are more than 100 items in the list, only the first 100 items are
returned, along with a unique string called a next token . To get the next batch
of items in the list, call this operation again, adding the next token to the
call. **/
        nextToken?: String;
        /** The list of build project names, with each build project name representing a
single build project. **/
        projects?: ProjectNames;
    }
    export interface LogsLocation {
        /** The name of the Amazon CloudWatch Logs group for the associated build logs. **/
        groupName?: String;
        /** The name of the Amazon CloudWatch Logs stream for the associated build logs. **/
        streamName?: String;
        /** The URL to an individual build log in Amazon CloudWatch Logs. **/
        deepLink?: String;
    }
    export interface PhaseContext {
        /** The status code for the context of the build phase. **/
        statusCode?: String;
        /** An explanation of the build phase&#x27;s context. This explanation may include a
command ID and an exit code. **/
        message?: String;
    }
    export interface Project {
        /** The build project&#x27;s name. **/
        name?: ProjectName;
        /** The build project&#x27;s Amazon Resource Name (ARN). **/
        arn?: String;
        /** A meaningful description of the build project. **/
        description?: ProjectDescription;
        /** Information about the build project&#x27;s build input source code. **/
        source?: ProjectSource;
        /** Information about the build project&#x27;s build output artifacts. **/
        artifacts?: ProjectArtifacts;
        /** Information about the build environment for this build project. **/
        environment?: ProjectEnvironment;
        /** The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM)
role that enables AWS CodeBuild to interact with dependent AWS services on
behalf of the AWS account. **/
        serviceRole?: NonEmptyString;
        /** How long in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait to
timeout any related build that did not get marked as completed. The default is
60 minutes. **/
        timeoutInMinutes?: TimeOut;
        /** The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used
for encrypting the build project&#x27;s build output artifacts.

This is expressed either as the CMK&#x27;s Amazon Resource Name (ARN) or, if
specified, the CMK&#x27;s alias (using the format alias/ alias-name ). **/
        encryptionKey?: NonEmptyString;
        /** The tags for this build project.

These tags are available for use by AWS services that support AWS CodeBuild
build project tags. **/
        tags?: TagList;
        /** When the build project was created, expressed in Unix time format. **/
        created?: Timestamp;
        /** When the build project&#x27;s settings were last modified, expressed in Unix time
format. **/
        lastModified?: Timestamp;
    }
    export interface ProjectArtifacts {
        /** The build output artifact&#x27;s type. Valid values include:

 &amp;#42; CODEPIPELINE : The build project with have build output generated through AWS
   CodePipeline.
   
   
 * NO_ARTIFACTS : The build project will not produce any build output.
   
   
 * S3 : The build project will store build output in Amazon Simple Storage
   Service (Amazon S3). **/
        type: ArtifactsType;
        /** Information about the build output artifact location, as follows:

 &amp;#42; If type is set to CODEPIPELINE , then AWS CodePipeline will ignore this value
   if specified. This is because AWS CodePipeline manages its build output
   locations instead of AWS CodeBuild.
   
   
 * If type is set to NO_ARTIFACTS , then this value will be ignored if
   specified, because no build output will be produced.
   
   
 * If type is set to S3 , this is the name of the output bucket. If path is not
   also specified, then location can also specify the path of the output
   artifact in the output bucket. **/
        location?: String;
        /** Along with namespaceType and name , the pattern that AWS CodeBuild will use to
name and store the output artifact, as follows:

 &amp;#42; If type is set to CODEPIPELINE , then AWS CodePipeline will ignore this value
   if specified. This is because AWS CodePipeline manages its build output names
   instead of AWS CodeBuild.
   
   
 * If type is set to NO_ARTIFACTS , then this value will be ignored if
   specified, because no build output will be produced.
   
   
 * If type is set to S3 , this is the path to the output artifact. If path is
   not specified, then path will not be used.
   
   

For example, if path is set to MyArtifacts , namespaceType is set to NONE , and 
name is set to MyArtifact.zip , then the output artifact would be stored in the
output bucket at MyArtifacts/MyArtifact.zip . **/
        path?: String;
        /** Along with path and name , the pattern that AWS CodeBuild will use to determine
the name and location to store the output artifact, as follows:

 &amp;#42; If type is set to CODEPIPELINE , then AWS CodePipeline will ignore this value
   if specified. This is because AWS CodePipeline manages its build output names
   instead of AWS CodeBuild.
   
   
 * If type is set to NO_ARTIFACTS , then this value will be ignored if
   specified, because no build output will be produced.
   
   
 * If type is set to S3 , then valid values include:
   
    * BUILD_ID : Include the build ID in the location of the build output
      artifact.
      
      
    * NONE : Do not include the build ID. This is the default if namespaceType 
      is not specified.
      
      
   
   

For example, if path is set to MyArtifacts , namespaceType is set to BUILD_ID ,
and name is set to MyArtifact.zip , then the output artifact would be stored in 
MyArtifacts/ build-ID /MyArtifact.zip . **/
        namespaceType?: ArtifactNamespace;
        /** Along with path and namespaceType , the pattern that AWS CodeBuild will use to
name and store the output artifact, as follows:

 &amp;#42; If type is set to CODEPIPELINE , then AWS CodePipeline will ignore this value
   if specified. This is because AWS CodePipeline manages its build output names
   instead of AWS CodeBuild.
   
   
 * If type is set to NO_ARTIFACTS , then this value will be ignored if
   specified, because no build output will be produced.
   
   
 * If type is set to S3 , this is the name of the output artifact object.
   
   

For example, if path is set to MyArtifacts , namespaceType is set to BUILD_ID ,
and name is set to MyArtifact.zip , then the output artifact would be stored in 
MyArtifacts/ build-ID /MyArtifact.zip . **/
        name?: String;
        /** The type of build output artifact to create, as follows:

 &amp;#42; If type is set to CODEPIPELINE , then AWS CodePipeline will ignore this value
   if specified. This is because AWS CodePipeline manages its build output
   artifacts instead of AWS CodeBuild.
   
   
 * If type is set to NO_ARTIFACTS , then this value will be ignored if
   specified, because no build output will be produced.
   
   
 * If type is set to S3 , valid values include:
   
    * NONE : AWS CodeBuild will create in the output bucket a folder containing
      the build output. This is the default if packaging is not specified.
      
      
    * ZIP : AWS CodeBuild will create in the output bucket a ZIP file containing
      the build output. **/
        packaging?: ArtifactPackaging;
    }
    export interface ProjectEnvironment {
        /** The type of build environment to use for related builds.

The only valid value is LINUX_CONTAINER , which represents a Linux-based build
environment. **/
        type: EnvironmentType;
        /** The ID of the Docker image to use for this build project. **/
        image: NonEmptyString;
        /** Information about the compute resources the build project will use. Available
values include:

 &amp;#42; BUILD_GENERAL1_SMALL : Use up to 3 GB memory and 2 vCPUs for builds.
   
   
 * BUILD_GENERAL1_MEDIUM : Use up to 7 GB memory and 4 vCPUs for builds.
   
   
 * BUILD_GENERAL1_LARGE : Use up to 15 GB memory and 8 vCPUs for builds. **/
        computeType: ComputeType;
        /** A set of environment variables to make available to builds for this build
project. **/
        environmentVariables?: EnvironmentVariables;
    }
    export interface ProjectSource {
        /** The type of repository that contains the source code to be built. Valid values
include:

 &amp;#42; CODECOMMIT : The source code is in an AWS CodeCommit repository.
   
   
 * CODEPIPELINE : The source code settings are specified in the source action of
   a pipeline in AWS CodePipeline.
   
   
 * GITHUB : The source code is in a GitHub repository.
   
   
 * S3 : The source code is in an Amazon Simple Storage Service (Amazon S3) input
   bucket. **/
        type: SourceType;
        /** Information about the location of the source code to be built. Valid values
include:

 &amp;#42; For source code settings that are specified in the source action of a
   pipeline in AWS CodePipeline, location should not be specified. If it is
   specified, AWS CodePipeline will ignore it. This is because AWS CodePipeline
   uses the settings in a pipeline&#x27;s source action instead of this value.
   
   
 * For source code in an AWS CodeCommit repository, the HTTPS clone URL to the
   repository that contains the source code and the build spec (for example, 
   https://git-codecommit. region-ID .amazonaws.com/v1/repos/ repo-name ).
   
   
 * For source code in an Amazon Simple Storage Service (Amazon S3) input bucket,
   the path to the ZIP file that contains the source code (for example, 
   bucket-name / path / to / object-name .zip )
   
   
 * For source code in a GitHub repository, the HTTPS clone URL, including the
   user name and personal access token, to the repository that contains the
   source code and the build spec (for example, https:// login-user-name : 
   personal-access-token @github.com/ repo-owner-name / repo-name .git ). For
   more information, see Creating an Access Token for Command-Line Use
   [https://help.github.com/articles/creating-an-access-token-for-command-line-use/] 
   on the GitHub Help website. **/
        location?: String;
        /** The build spec declaration to use for this build project&#x27;s related builds.

If this value is not specified, a build spec must be included along with the
source code to be built. **/
        buildspec?: String;
        /** Information about the authorization settings for AWS CodeBuild to access the
source code to be built.

This information is only for the AWS CodeBuild console&#x27;s use. Your code should
not get or set this information directly. **/
        auth?: SourceAuth;
    }
    export interface ResourceAlreadyExistsException {
    }
    export interface ResourceNotFoundException {
    }
    export interface SourceAuth {
        /** The authorization type to use. The only valid value is OAUTH , which represents
the OAuth authorization type. **/
        type: SourceAuthType;
        /** The resource value that applies to the specified authorization type. **/
        resource?: String;
    }
    export interface StartBuildInput {
        /** The name of the build project to start running a build. **/
        projectName: NonEmptyString;
        /** A version of the build input to be built, for this build only. If not specified,
the latest version will be used. If specified, must be one of:

 &amp;#42; For AWS CodeCommit or GitHub: the commit ID to use.
   
   
 * For Amazon Simple Storage Service (Amazon S3): the version ID of the object
   representing the build input ZIP file to use. **/
        sourceVersion?: String;
        /** Build output artifact settings that override, for this build only, the latest
ones already defined in the corresponding build project. **/
        artifactsOverride?: ProjectArtifacts;
        /** A set of environment variables that overrides, for this build only, the latest
ones already defined in the corresponding build project. **/
        environmentVariablesOverride?: EnvironmentVariables;
        /** A build spec declaration that overrides, for this build only, the latest one
already defined in the corresponding build project. **/
        buildspecOverride?: String;
        /** The number of build timeout minutes, from 5 to 480 (8 hours) that overrides, for
this build only, the latest setting already defined in the corresponding build
project. **/
        timeoutInMinutesOverride?: TimeOut;
    }
    export interface StartBuildOutput {
        /** Information about the build to be run. **/
        build?: Build;
    }
    export interface StopBuildInput {
        /** The ID of the build to attempt to stop running. **/
        id: NonEmptyString;
    }
    export interface StopBuildOutput {
        /** Information about the build that was attempted to be stopped. **/
        build?: Build;
    }
    export interface Tag {
        /** The tag&#x27;s key. **/
        key?: KeyInput;
        /** The tag&#x27;s value. **/
        value?: ValueInput;
    }
    export interface UpdateProjectInput {
        /** The name of the existing build project to change settings.

You cannot change an existing build project&#x27;s name. **/
        name: NonEmptyString;
        /** A new or replacement description of the build project. **/
        description?: ProjectDescription;
        /** Information to be changed about the build project&#x27;s build input source code. **/
        source?: ProjectSource;
        /** Information to be changed about the build project&#x27;s build output artifacts. **/
        artifacts?: ProjectArtifacts;
        /** Information to be changed about the build project&#x27;s build environment. **/
        environment?: ProjectEnvironment;
        /** The replacement Amazon Resource Name (ARN) of the AWS Identity and Access
Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS
services on behalf of the AWS account. **/
        serviceRole?: NonEmptyString;
        /** The replacement value in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to
wait to timeout any related build that did not get marked as completed. **/
        timeoutInMinutes?: TimeOut;
        /** The replacement AWS Key Management Service (AWS KMS) customer master key (CMK)
to be used for encrypting the build project&#x27;s build output artifacts.

You can specify either the CMK&#x27;s Amazon Resource Name (ARN) or, if available,
the CMK&#x27;s alias (using the format alias/ alias-name ). **/
        encryptionKey?: NonEmptyString;
        /** The replacement set of tags for this build project.

These tags are available for use by AWS services that support AWS CodeBuild
build project tags. **/
        tags?: TagList;
    }
    export interface UpdateProjectOutput {
        /** Information about the build project that was changed. **/
        project?: Project;
    }
  }
}
