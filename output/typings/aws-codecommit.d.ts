// Type definitions for aws-sdk - AWS CodeCommit
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-04-13
    * endpointPrefix: codecommit
    * serviceAbbreviation: CodeCommit
    * signatureVersion: v4
    * protocol: json
    *
    * AWS CodeCommit This is the AWS CodeCommit API Reference. This reference provides descriptions
 of the operations and data types for AWS CodeCommit API.
 
 You can use the AWS CodeCommit API to work with the following objects:
 
  &amp;#42; Repositories, by calling the following:  * BatchGetRepositories, which returns information about one or more
       repositories associated with your AWS account
     * CreateRepository, which creates an AWS CodeCommit repository
     * DeleteRepository, which deletes an AWS CodeCommit repository
     * GetRepository, which returns information about a specified repository
     * ListRepositories, which lists all AWS CodeCommit repositories associated
       with your AWS account
     * UpdateRepositoryDescription, which sets or updates the description of the
       repository
     * UpdateRepositoryName, which changes the name of the repository. If you
       change the name of a repository, no other users of that repository will be
       able to access it until you send them the new HTTPS or SSH URL to use.
    
    
  * Branches, by calling the following:  * CreateBranch, which creates a new branch in a specified repository
     * GetBranch, which returns information about a specified branch
     * ListBranches, which lists all branches for a specified repository
     * UpdateDefaultBranch, which changes the default branch for a repository
    
    
  * Information about committed code in a repository, by calling the following:  * 
       GetCommit, which returns information about a commit, including commit
       messages and committer information.
    
    
  * Triggers, by calling the following:  * GetRepositoryTriggers, which returns information about triggers configured
       for a repository
     * PutRepositoryTriggers, which replaces all triggers for a repository and
       can be used to create or delete triggers
     * TestRepositoryTriggers, which tests the functionality of a repository
       trigger by sending data to the trigger target
    
    
 
 For information about how to use AWS CodeCommit, see the AWS CodeCommit User
 Guide [http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html].
    *
    */
  export class CodeCommit extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Returns information about one or more repositories.

The description field for a repository accepts all HTML characters and all valid
Unicode characters. Applications that do not HTML-encode the description and
display it in a web page could expose users to potentially malicious code. Make
sure that you HTML-encode the description field in any application that uses
this API to display the repository description on a web page.
     *
     * @error RepositoryNamesRequiredException   
     * @error MaximumRepositoryNamesExceededException   
     * @error InvalidRepositoryNameException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    batchGetRepositories(params: CodeCommit.BatchGetRepositoriesInput, callback?: (err: CodeCommit.RepositoryNamesRequiredException | CodeCommit.MaximumRepositoryNamesExceededException | CodeCommit.InvalidRepositoryNameException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: CodeCommit.BatchGetRepositoriesOutput | any) => void): Request<CodeCommit.BatchGetRepositoriesOutput | any, CodeCommit.RepositoryNamesRequiredException | CodeCommit.MaximumRepositoryNamesExceededException | CodeCommit.InvalidRepositoryNameException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Creates a new branch in a repository and points the branch to a commit.

Calling the create branch operation does not set a repository&#x27;s default branch.
To do this, call the update default branch operation.
     *
     * @error RepositoryNameRequiredException   
     * @error InvalidRepositoryNameException   
     * @error RepositoryDoesNotExistException   
     * @error BranchNameRequiredException   
     * @error BranchNameExistsException   
     * @error InvalidBranchNameException   
     * @error CommitIdRequiredException   
     * @error CommitDoesNotExistException   
     * @error InvalidCommitIdException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    createBranch(params: CodeCommit.CreateBranchInput, callback?: (err: CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.BranchNameRequiredException | CodeCommit.BranchNameExistsException | CodeCommit.InvalidBranchNameException | CodeCommit.CommitIdRequiredException | CodeCommit.CommitDoesNotExistException | CodeCommit.InvalidCommitIdException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: any) => void): Request<any, CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.BranchNameRequiredException | CodeCommit.BranchNameExistsException | CodeCommit.InvalidBranchNameException | CodeCommit.CommitIdRequiredException | CodeCommit.CommitDoesNotExistException | CodeCommit.InvalidCommitIdException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Creates a new, empty repository.
     *
     * @error RepositoryNameExistsException   
     * @error RepositoryNameRequiredException   
     * @error InvalidRepositoryNameException   
     * @error InvalidRepositoryDescriptionException   
     * @error RepositoryLimitExceededException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    createRepository(params: CodeCommit.CreateRepositoryInput, callback?: (err: CodeCommit.RepositoryNameExistsException | CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.InvalidRepositoryDescriptionException | CodeCommit.RepositoryLimitExceededException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: CodeCommit.CreateRepositoryOutput | any) => void): Request<CodeCommit.CreateRepositoryOutput | any, CodeCommit.RepositoryNameExistsException | CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.InvalidRepositoryDescriptionException | CodeCommit.RepositoryLimitExceededException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Deletes a repository. If a specified repository was already deleted, a null
repository ID will be returned.

Deleting a repository also deletes all associated objects and metadata. After a
repository is deleted, all future push calls to the deleted repository will
fail.
     *
     * @error RepositoryNameRequiredException   
     * @error InvalidRepositoryNameException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    deleteRepository(params: CodeCommit.DeleteRepositoryInput, callback?: (err: CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: CodeCommit.DeleteRepositoryOutput | any) => void): Request<CodeCommit.DeleteRepositoryOutput | any, CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Returns information about a repository branch, including its name and the last
commit ID.
     *
     * @error RepositoryNameRequiredException   
     * @error RepositoryDoesNotExistException   
     * @error InvalidRepositoryNameException   
     * @error BranchNameRequiredException   
     * @error InvalidBranchNameException   
     * @error BranchDoesNotExistException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    getBranch(params: CodeCommit.GetBranchInput, callback?: (err: CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.BranchNameRequiredException | CodeCommit.InvalidBranchNameException | CodeCommit.BranchDoesNotExistException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: CodeCommit.GetBranchOutput | any) => void): Request<CodeCommit.GetBranchOutput | any, CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.BranchNameRequiredException | CodeCommit.InvalidBranchNameException | CodeCommit.BranchDoesNotExistException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Returns information about a commit, including commit message and committer
information.
     *
     * @error RepositoryNameRequiredException   
     * @error InvalidRepositoryNameException   
     * @error RepositoryDoesNotExistException   
     * @error CommitIdRequiredException   
     * @error InvalidCommitIdException   
     * @error CommitIdDoesNotExistException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    getCommit(params: CodeCommit.GetCommitInput, callback?: (err: CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.CommitIdRequiredException | CodeCommit.InvalidCommitIdException | CodeCommit.CommitIdDoesNotExistException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: CodeCommit.GetCommitOutput | any) => void): Request<CodeCommit.GetCommitOutput | any, CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.CommitIdRequiredException | CodeCommit.InvalidCommitIdException | CodeCommit.CommitIdDoesNotExistException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Returns information about a repository.

The description field for a repository accepts all HTML characters and all valid
Unicode characters. Applications that do not HTML-encode the description and
display it in a web page could expose users to potentially malicious code. Make
sure that you HTML-encode the description field in any application that uses
this API to display the repository description on a web page.
     *
     * @error RepositoryNameRequiredException   
     * @error RepositoryDoesNotExistException   
     * @error InvalidRepositoryNameException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    getRepository(params: CodeCommit.GetRepositoryInput, callback?: (err: CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: CodeCommit.GetRepositoryOutput | any) => void): Request<CodeCommit.GetRepositoryOutput | any, CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Gets information about triggers configured for a repository.
     *
     * @error RepositoryNameRequiredException   
     * @error InvalidRepositoryNameException   
     * @error RepositoryDoesNotExistException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    getRepositoryTriggers(params: CodeCommit.GetRepositoryTriggersInput, callback?: (err: CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: CodeCommit.GetRepositoryTriggersOutput | any) => void): Request<CodeCommit.GetRepositoryTriggersOutput | any, CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Gets information about one or more branches in a repository.
     *
     * @error RepositoryNameRequiredException   
     * @error RepositoryDoesNotExistException   
     * @error InvalidRepositoryNameException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     * @error InvalidContinuationTokenException   
     */
    listBranches(params: CodeCommit.ListBranchesInput, callback?: (err: CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | CodeCommit.InvalidContinuationTokenException | any, data: CodeCommit.ListBranchesOutput | any) => void): Request<CodeCommit.ListBranchesOutput | any, CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | CodeCommit.InvalidContinuationTokenException | any>;
    /**
     * Gets information about one or more repositories.
     *
     * @error InvalidSortByException   
     * @error InvalidOrderException   
     * @error InvalidContinuationTokenException   
     */
    listRepositories(params: CodeCommit.ListRepositoriesInput, callback?: (err: CodeCommit.InvalidSortByException | CodeCommit.InvalidOrderException | CodeCommit.InvalidContinuationTokenException | any, data: CodeCommit.ListRepositoriesOutput | any) => void): Request<CodeCommit.ListRepositoriesOutput | any, CodeCommit.InvalidSortByException | CodeCommit.InvalidOrderException | CodeCommit.InvalidContinuationTokenException | any>;
    /**
     * Replaces all triggers for a repository. This can be used to create or delete
triggers.
     *
     * @error RepositoryDoesNotExistException   
     * @error RepositoryNameRequiredException   
     * @error InvalidRepositoryNameException   
     * @error RepositoryTriggersListRequiredException   
     * @error MaximumRepositoryTriggersExceededException   
     * @error InvalidRepositoryTriggerNameException   
     * @error InvalidRepositoryTriggerDestinationArnException   
     * @error InvalidRepositoryTriggerRegionException   
     * @error InvalidRepositoryTriggerCustomDataException   
     * @error MaximumBranchesExceededException   
     * @error InvalidRepositoryTriggerBranchNameException   
     * @error InvalidRepositoryTriggerEventsException   
     * @error RepositoryTriggerNameRequiredException   
     * @error RepositoryTriggerDestinationArnRequiredException   
     * @error RepositoryTriggerBranchNameListRequiredException   
     * @error RepositoryTriggerEventsListRequiredException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    putRepositoryTriggers(params: CodeCommit.PutRepositoryTriggersInput, callback?: (err: CodeCommit.RepositoryDoesNotExistException | CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryTriggersListRequiredException | CodeCommit.MaximumRepositoryTriggersExceededException | CodeCommit.InvalidRepositoryTriggerNameException | CodeCommit.InvalidRepositoryTriggerDestinationArnException | CodeCommit.InvalidRepositoryTriggerRegionException | CodeCommit.InvalidRepositoryTriggerCustomDataException | CodeCommit.MaximumBranchesExceededException | CodeCommit.InvalidRepositoryTriggerBranchNameException | CodeCommit.InvalidRepositoryTriggerEventsException | CodeCommit.RepositoryTriggerNameRequiredException | CodeCommit.RepositoryTriggerDestinationArnRequiredException | CodeCommit.RepositoryTriggerBranchNameListRequiredException | CodeCommit.RepositoryTriggerEventsListRequiredException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: CodeCommit.PutRepositoryTriggersOutput | any) => void): Request<CodeCommit.PutRepositoryTriggersOutput | any, CodeCommit.RepositoryDoesNotExistException | CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryTriggersListRequiredException | CodeCommit.MaximumRepositoryTriggersExceededException | CodeCommit.InvalidRepositoryTriggerNameException | CodeCommit.InvalidRepositoryTriggerDestinationArnException | CodeCommit.InvalidRepositoryTriggerRegionException | CodeCommit.InvalidRepositoryTriggerCustomDataException | CodeCommit.MaximumBranchesExceededException | CodeCommit.InvalidRepositoryTriggerBranchNameException | CodeCommit.InvalidRepositoryTriggerEventsException | CodeCommit.RepositoryTriggerNameRequiredException | CodeCommit.RepositoryTriggerDestinationArnRequiredException | CodeCommit.RepositoryTriggerBranchNameListRequiredException | CodeCommit.RepositoryTriggerEventsListRequiredException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Tests the functionality of repository triggers by sending information to the
trigger target. If real data is available in the repository, the test will send
data from the last commit. If no data is available, sample data will be
generated.
     *
     * @error RepositoryDoesNotExistException   
     * @error RepositoryNameRequiredException   
     * @error InvalidRepositoryNameException   
     * @error RepositoryTriggersListRequiredException   
     * @error MaximumRepositoryTriggersExceededException   
     * @error InvalidRepositoryTriggerNameException   
     * @error InvalidRepositoryTriggerDestinationArnException   
     * @error InvalidRepositoryTriggerRegionException   
     * @error InvalidRepositoryTriggerCustomDataException   
     * @error MaximumBranchesExceededException   
     * @error InvalidRepositoryTriggerBranchNameException   
     * @error InvalidRepositoryTriggerEventsException   
     * @error RepositoryTriggerNameRequiredException   
     * @error RepositoryTriggerDestinationArnRequiredException   
     * @error RepositoryTriggerBranchNameListRequiredException   
     * @error RepositoryTriggerEventsListRequiredException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    testRepositoryTriggers(params: CodeCommit.TestRepositoryTriggersInput, callback?: (err: CodeCommit.RepositoryDoesNotExistException | CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryTriggersListRequiredException | CodeCommit.MaximumRepositoryTriggersExceededException | CodeCommit.InvalidRepositoryTriggerNameException | CodeCommit.InvalidRepositoryTriggerDestinationArnException | CodeCommit.InvalidRepositoryTriggerRegionException | CodeCommit.InvalidRepositoryTriggerCustomDataException | CodeCommit.MaximumBranchesExceededException | CodeCommit.InvalidRepositoryTriggerBranchNameException | CodeCommit.InvalidRepositoryTriggerEventsException | CodeCommit.RepositoryTriggerNameRequiredException | CodeCommit.RepositoryTriggerDestinationArnRequiredException | CodeCommit.RepositoryTriggerBranchNameListRequiredException | CodeCommit.RepositoryTriggerEventsListRequiredException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: CodeCommit.TestRepositoryTriggersOutput | any) => void): Request<CodeCommit.TestRepositoryTriggersOutput | any, CodeCommit.RepositoryDoesNotExistException | CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | CodeCommit.RepositoryTriggersListRequiredException | CodeCommit.MaximumRepositoryTriggersExceededException | CodeCommit.InvalidRepositoryTriggerNameException | CodeCommit.InvalidRepositoryTriggerDestinationArnException | CodeCommit.InvalidRepositoryTriggerRegionException | CodeCommit.InvalidRepositoryTriggerCustomDataException | CodeCommit.MaximumBranchesExceededException | CodeCommit.InvalidRepositoryTriggerBranchNameException | CodeCommit.InvalidRepositoryTriggerEventsException | CodeCommit.RepositoryTriggerNameRequiredException | CodeCommit.RepositoryTriggerDestinationArnRequiredException | CodeCommit.RepositoryTriggerBranchNameListRequiredException | CodeCommit.RepositoryTriggerEventsListRequiredException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Sets or changes the default branch name for the specified repository.

If you use this operation to change the default branch name to the current
default branch name, a success message is returned even though the default
branch did not change.
     *
     * @error RepositoryNameRequiredException   
     * @error RepositoryDoesNotExistException   
     * @error InvalidRepositoryNameException   
     * @error BranchNameRequiredException   
     * @error InvalidBranchNameException   
     * @error BranchDoesNotExistException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    updateDefaultBranch(params: CodeCommit.UpdateDefaultBranchInput, callback?: (err: CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.BranchNameRequiredException | CodeCommit.InvalidBranchNameException | CodeCommit.BranchDoesNotExistException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: any) => void): Request<any, CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.BranchNameRequiredException | CodeCommit.InvalidBranchNameException | CodeCommit.BranchDoesNotExistException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Sets or changes the comment or description for a repository.

The description field for a repository accepts all HTML characters and all valid
Unicode characters. Applications that do not HTML-encode the description and
display it in a web page could expose users to potentially malicious code. Make
sure that you HTML-encode the description field in any application that uses
this API to display the repository description on a web page.
     *
     * @error RepositoryNameRequiredException   
     * @error RepositoryDoesNotExistException   
     * @error InvalidRepositoryNameException   
     * @error InvalidRepositoryDescriptionException   
     * @error EncryptionIntegrityChecksFailedException   
     * @error EncryptionKeyAccessDeniedException   
     * @error EncryptionKeyDisabledException   
     * @error EncryptionKeyNotFoundException   
     * @error EncryptionKeyUnavailableException   
     */
    updateRepositoryDescription(params: CodeCommit.UpdateRepositoryDescriptionInput, callback?: (err: CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.InvalidRepositoryDescriptionException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any, data: any) => void): Request<any, CodeCommit.RepositoryNameRequiredException | CodeCommit.RepositoryDoesNotExistException | CodeCommit.InvalidRepositoryNameException | CodeCommit.InvalidRepositoryDescriptionException | CodeCommit.EncryptionIntegrityChecksFailedException | CodeCommit.EncryptionKeyAccessDeniedException | CodeCommit.EncryptionKeyDisabledException | CodeCommit.EncryptionKeyNotFoundException | CodeCommit.EncryptionKeyUnavailableException | any>;
    /**
     * Renames a repository. The repository name must be unique across the calling AWS
account. In addition, repository names are limited to 100 alphanumeric, dash,
and underscore characters, and cannot include certain characters. The suffix
&quot;.git&quot; is prohibited. For a full description of the limits on repository names,
see Limits [http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html] 
in the AWS CodeCommit User Guide.
     *
     * @error RepositoryDoesNotExistException   
     * @error RepositoryNameExistsException   
     * @error RepositoryNameRequiredException   
     * @error InvalidRepositoryNameException   
     */
    updateRepositoryName(params: CodeCommit.UpdateRepositoryNameInput, callback?: (err: CodeCommit.RepositoryDoesNotExistException | CodeCommit.RepositoryNameExistsException | CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | any, data: any) => void): Request<any, CodeCommit.RepositoryDoesNotExistException | CodeCommit.RepositoryNameExistsException | CodeCommit.RepositoryNameRequiredException | CodeCommit.InvalidRepositoryNameException | any>;

  }

  export module CodeCommit {

    export type AccountId = string;

    export type AdditionalData = string;

    export type Arn = string;

    export type BranchName = string;

    export type BranchNameList = BranchName[];

    export type CloneUrlHttp = string;

    export type CloneUrlSsh = string;

    export type CommitId = string;

    export type CreationDate = number;

    export type Date = string;

    export type Email = string;

    export type LastModifiedDate = number;

    export type Message = string;

    export type Name = string;

    export type NextToken = string;

    export type ObjectId = string;

    export type OrderEnum = string;

    export type ParentList = ObjectId[];

    export type RepositoryDescription = string;

    export type RepositoryId = string;

    export type RepositoryMetadataList = RepositoryMetadata[];

    export type RepositoryName = string;

    export type RepositoryNameIdPairList = RepositoryNameIdPair[];

    export type RepositoryNameList = RepositoryName[];

    export type RepositoryNotFoundList = RepositoryName[];

    export type RepositoryTriggerCustomData = string;

    export type RepositoryTriggerEventEnum = string;

    export type RepositoryTriggerEventList = RepositoryTriggerEventEnum[];

    export type RepositoryTriggerExecutionFailureList = RepositoryTriggerExecutionFailure[];

    export type RepositoryTriggerExecutionFailureMessage = string;

    export type RepositoryTriggerName = string;

    export type RepositoryTriggerNameList = RepositoryTriggerName[];

    export type RepositoryTriggersConfigurationId = string;

    export type RepositoryTriggersList = RepositoryTrigger[];

    export type SortByEnum = string;

    export interface BatchGetRepositoriesInput {
      /** The names of the repositories to get information about. **/
      repositoryNames: RepositoryNameList;
    }
    export interface BatchGetRepositoriesOutput {
      /** A list of repositories returned by the batch get repositories operation. **/
      repositories?: RepositoryMetadataList;
      /** Returns a list of repository names for which information could not be found. **/
      repositoriesNotFound?: RepositoryNotFoundList;
    }
    export interface BranchDoesNotExistException {
    }
    export interface BranchInfo {
      /** The name of the branch. **/
      branchName?: BranchName;
      /** The ID of the last commit made to the branch. **/
      commitId?: CommitId;
    }
    export interface BranchNameExistsException {
    }
    export interface BranchNameRequiredException {
    }
    export interface Commit {
      /** Tree information for the specified commit. **/
      treeId?: ObjectId;
      /** The parent list for the specified commit. **/
      parents?: ParentList;
      /** The message associated with the specified commit. **/
      message?: Message;
      /** Information about the author of the specified commit. **/
      author?: UserInfo;
      /** Information about the person who committed the specified commit, also known as
the committer. For more information about the difference between an author and a
committer in Git, see Viewing the Commit History
[http://git-scm.com/book/ch2-3.html] in Pro Git by Scott Chacon and Ben Straub. **/
      committer?: UserInfo;
      /** Any additional data associated with the specified commit. **/
      additionalData?: AdditionalData;
    }
    export interface CommitDoesNotExistException {
    }
    export interface CommitIdDoesNotExistException {
    }
    export interface CommitIdRequiredException {
    }
    export interface CreateBranchInput {
      /** The name of the repository in which you want to create the new branch. **/
      repositoryName: RepositoryName;
      /** The name of the new branch to create. **/
      branchName: BranchName;
      /** The ID of the commit to point the new branch to. **/
      commitId: CommitId;
    }
    export interface CreateRepositoryInput {
      /** The name of the new repository to be created.

The repository name must be unique across the calling AWS account. In addition,
repository names are limited to 100 alphanumeric, dash, and underscore
characters, and cannot include certain characters. For a full description of the
limits on repository names, see Limits
[http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html] in the AWS
CodeCommit User Guide. The suffix &quot;.git&quot; is prohibited. **/
      repositoryName: RepositoryName;
      /** A comment or description about the new repository.

The description field for a repository accepts all HTML characters and all valid
Unicode characters. Applications that do not HTML-encode the description and
display it in a web page could expose users to potentially malicious code. Make
sure that you HTML-encode the description field in any application that uses
this API to display the repository description on a web page. **/
      repositoryDescription?: RepositoryDescription;
    }
    export interface CreateRepositoryOutput {
      /** Information about the newly created repository. **/
      repositoryMetadata?: RepositoryMetadata;
    }
    export interface DeleteRepositoryInput {
      /** The name of the repository to delete. **/
      repositoryName: RepositoryName;
    }
    export interface DeleteRepositoryOutput {
      /** The ID of the repository that was deleted. **/
      repositoryId?: RepositoryId;
    }
    export interface EncryptionIntegrityChecksFailedException {
    }
    export interface EncryptionKeyAccessDeniedException {
    }
    export interface EncryptionKeyDisabledException {
    }
    export interface EncryptionKeyNotFoundException {
    }
    export interface EncryptionKeyUnavailableException {
    }
    export interface GetBranchInput {
      /** The name of the repository that contains the branch for which you want to
retrieve information. **/
      repositoryName?: RepositoryName;
      /** The name of the branch for which you want to retrieve information. **/
      branchName?: BranchName;
    }
    export interface GetBranchOutput {
      /** The name of the branch. **/
      branch?: BranchInfo;
    }
    export interface GetCommitInput {
      /** The name of the repository to which the commit was made. **/
      repositoryName: RepositoryName;
      /** The commit ID. **/
      commitId: ObjectId;
    }
    export interface GetCommitOutput {
      /** Information about the specified commit. **/
      commit: Commit;
    }
    export interface GetRepositoryInput {
      /** The name of the repository to get information about. **/
      repositoryName: RepositoryName;
    }
    export interface GetRepositoryOutput {
      /** Information about the repository. **/
      repositoryMetadata?: RepositoryMetadata;
    }
    export interface GetRepositoryTriggersInput {
      /** The name of the repository for which the trigger is configured. **/
      repositoryName?: RepositoryName;
    }
    export interface GetRepositoryTriggersOutput {
      /** The system-generated unique ID for the trigger. **/
      configurationId?: RepositoryTriggersConfigurationId;
      /** The JSON block of configuration information for each trigger. **/
      triggers?: RepositoryTriggersList;
    }
    export interface InvalidBranchNameException {
    }
    export interface InvalidCommitIdException {
    }
    export interface InvalidContinuationTokenException {
    }
    export interface InvalidOrderException {
    }
    export interface InvalidRepositoryDescriptionException {
    }
    export interface InvalidRepositoryNameException {
    }
    export interface InvalidRepositoryTriggerBranchNameException {
    }
    export interface InvalidRepositoryTriggerCustomDataException {
    }
    export interface InvalidRepositoryTriggerDestinationArnException {
    }
    export interface InvalidRepositoryTriggerEventsException {
    }
    export interface InvalidRepositoryTriggerNameException {
    }
    export interface InvalidRepositoryTriggerRegionException {
    }
    export interface InvalidSortByException {
    }
    export interface ListBranchesInput {
      /** The name of the repository that contains the branches. **/
      repositoryName: RepositoryName;
      /** An enumeration token that allows the operation to batch the results. **/
      nextToken?: NextToken;
    }
    export interface ListBranchesOutput {
      /** The list of branch names. **/
      branches?: BranchNameList;
      /** An enumeration token that returns the batch of the results. **/
      nextToken?: NextToken;
    }
    export interface ListRepositoriesInput {
      /** An enumeration token that allows the operation to batch the results of the
operation. Batch sizes are 1,000 for list repository operations. When the client
sends the token back to AWS CodeCommit, another page of 1,000 records is
retrieved. **/
      nextToken?: NextToken;
      /** The criteria used to sort the results of a list repositories operation. **/
      sortBy?: SortByEnum;
      /** The order in which to sort the results of a list repositories operation. **/
      order?: OrderEnum;
    }
    export interface ListRepositoriesOutput {
      /** Lists the repositories called by the list repositories operation. **/
      repositories?: RepositoryNameIdPairList;
      /** An enumeration token that allows the operation to batch the results of the
operation. Batch sizes are 1,000 for list repository operations. When the client
sends the token back to AWS CodeCommit, another page of 1,000 records is
retrieved. **/
      nextToken?: NextToken;
    }
    export interface MaximumBranchesExceededException {
    }
    export interface MaximumRepositoryNamesExceededException {
    }
    export interface MaximumRepositoryTriggersExceededException {
    }
    export interface PutRepositoryTriggersInput {
      /** The name of the repository where you want to create or update the trigger. **/
      repositoryName?: RepositoryName;
      /** The JSON block of configuration information for each trigger. **/
      triggers?: RepositoryTriggersList;
    }
    export interface PutRepositoryTriggersOutput {
      /** The system-generated unique ID for the create or update operation. **/
      configurationId?: RepositoryTriggersConfigurationId;
    }
    export interface RepositoryDoesNotExistException {
    }
    export interface RepositoryLimitExceededException {
    }
    export interface RepositoryMetadata {
      /** The ID of the AWS account associated with the repository. **/
      accountId?: AccountId;
      /** The ID of the repository. **/
      repositoryId?: RepositoryId;
      /** The repository&#x27;s name. **/
      repositoryName?: RepositoryName;
      /** A comment or description about the repository. **/
      repositoryDescription?: RepositoryDescription;
      /** The repository&#x27;s default branch name. **/
      defaultBranch?: BranchName;
      /** The date and time the repository was last modified, in timestamp format. **/
      lastModifiedDate?: LastModifiedDate;
      /** The date and time the repository was created, in timestamp format. **/
      creationDate?: CreationDate;
      /** The URL to use for cloning the repository over HTTPS. **/
      cloneUrlHttp?: CloneUrlHttp;
      /** The URL to use for cloning the repository over SSH. **/
      cloneUrlSsh?: CloneUrlSsh;
      /** The Amazon Resource Name (ARN) of the repository. **/
      Arn?: Arn;
    }
    export interface RepositoryNameExistsException {
    }
    export interface RepositoryNameIdPair {
      /** The name associated with the repository. **/
      repositoryName?: RepositoryName;
      /** The ID associated with the repository. **/
      repositoryId?: RepositoryId;
    }
    export interface RepositoryNameRequiredException {
    }
    export interface RepositoryNamesRequiredException {
    }
    export interface RepositoryTrigger {
      /** The name of the trigger. **/
      name?: RepositoryTriggerName;
      /** The ARN of the resource that is the target for a trigger. For example, the ARN
of a topic in Amazon Simple Notification Service (SNS). **/
      destinationArn?: Arn;
      /** Any custom data associated with the trigger that will be included in the
information sent to the target of the trigger. **/
      customData?: RepositoryTriggerCustomData;
      /** The branches that will be included in the trigger configuration. If no branches
are specified, the trigger will apply to all branches. **/
      branches?: BranchNameList;
      /** The repository events that will cause the trigger to run actions in another
service, such as sending a notification through Amazon Simple Notification
Service (SNS). If no events are specified, the trigger will run for all
repository events. **/
      events?: RepositoryTriggerEventList;
    }
    export interface RepositoryTriggerBranchNameListRequiredException {
    }
    export interface RepositoryTriggerDestinationArnRequiredException {
    }
    export interface RepositoryTriggerEventsListRequiredException {
    }
    export interface RepositoryTriggerExecutionFailure {
      /** The name of the trigger that did not run. **/
      trigger?: RepositoryTriggerName;
      /** Additional message information about the trigger that did not run. **/
      failureMessage?: RepositoryTriggerExecutionFailureMessage;
    }
    export interface RepositoryTriggerNameRequiredException {
    }
    export interface RepositoryTriggersListRequiredException {
    }
    export interface TestRepositoryTriggersInput {
      /** The name of the repository in which to test the triggers. **/
      repositoryName?: RepositoryName;
      /** The list of triggers to test. **/
      triggers?: RepositoryTriggersList;
    }
    export interface TestRepositoryTriggersOutput {
      /** The list of triggers that were successfully tested. This list provides the names
of the triggers that were successfully tested, separated by commas. **/
      successfulExecutions?: RepositoryTriggerNameList;
      /** The list of triggers that were not able to be tested. This list provides the
names of the triggers that could not be tested, separated by commas. **/
      failedExecutions?: RepositoryTriggerExecutionFailureList;
    }
    export interface UpdateDefaultBranchInput {
      /** The name of the repository to set or change the default branch for. **/
      repositoryName: RepositoryName;
      /** The name of the branch to set as the default. **/
      defaultBranchName: BranchName;
    }
    export interface UpdateRepositoryDescriptionInput {
      /** The name of the repository to set or change the comment or description for. **/
      repositoryName: RepositoryName;
      /** The new comment or description for the specified repository. Repository
descriptions are limited to 1,000 characters. **/
      repositoryDescription?: RepositoryDescription;
    }
    export interface UpdateRepositoryNameInput {
      /** The existing name of the repository. **/
      oldName: RepositoryName;
      /** The new name for the repository. **/
      newName: RepositoryName;
    }
    export interface UserInfo {
      /** The name of the user who made the specified commit. **/
      name?: Name;
      /** The email address associated with the user who made the commit, if any. **/
      email?: Email;
      /** The date when the specified commit was pushed to the repository. **/
      date?: Date;
    }
  }
}
