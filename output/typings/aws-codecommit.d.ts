// Type definitions for aws-sdk - AWS CodeCommit
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

///<reference path="./aws-sdk-common.d.ts" />

declare module "aws-sdk" {

    /*
     * apiVersion: 2015-04-13
     * endpointPrefix: codecommit
     * serviceAbbreviation: CodeCommit
     * signatureVersion: v4
     * protocol: json
     */
    export class CodeCommit extends Service {
      constructor(options?: any);
      endpoint: Endpoint;
      batchGetRepositories(params: CodeCommit.BatchGetRepositoriesInput, callback?: (err: CodeCommit.RepositoryNamesRequiredException|CodeCommit.MaximumRepositoryNamesExceededException|CodeCommit.InvalidRepositoryNameException|CodeCommit.EncryptionIntegrityChecksFailedException|CodeCommit.EncryptionKeyAccessDeniedException|CodeCommit.EncryptionKeyDisabledException|CodeCommit.EncryptionKeyNotFoundException|CodeCommit.EncryptionKeyUnavailableException|any, data: CodeCommit.BatchGetRepositoriesOutput|any) => void): Request;
      createBranch(params: CodeCommit.CreateBranchInput, callback?: (err: CodeCommit.RepositoryNameRequiredException|CodeCommit.InvalidRepositoryNameException|CodeCommit.RepositoryDoesNotExistException|CodeCommit.BranchNameRequiredException|CodeCommit.BranchNameExistsException|CodeCommit.InvalidBranchNameException|CodeCommit.CommitIdRequiredException|CodeCommit.CommitDoesNotExistException|CodeCommit.InvalidCommitIdException|CodeCommit.EncryptionIntegrityChecksFailedException|CodeCommit.EncryptionKeyAccessDeniedException|CodeCommit.EncryptionKeyDisabledException|CodeCommit.EncryptionKeyNotFoundException|CodeCommit.EncryptionKeyUnavailableException|any, data: any) => void): Request;
      createRepository(params: CodeCommit.CreateRepositoryInput, callback?: (err: CodeCommit.RepositoryNameExistsException|CodeCommit.RepositoryNameRequiredException|CodeCommit.InvalidRepositoryNameException|CodeCommit.InvalidRepositoryDescriptionException|CodeCommit.RepositoryLimitExceededException|CodeCommit.EncryptionIntegrityChecksFailedException|CodeCommit.EncryptionKeyAccessDeniedException|CodeCommit.EncryptionKeyDisabledException|CodeCommit.EncryptionKeyNotFoundException|CodeCommit.EncryptionKeyUnavailableException|any, data: CodeCommit.CreateRepositoryOutput|any) => void): Request;
      deleteRepository(params: CodeCommit.DeleteRepositoryInput, callback?: (err: CodeCommit.RepositoryNameRequiredException|CodeCommit.InvalidRepositoryNameException|CodeCommit.EncryptionIntegrityChecksFailedException|CodeCommit.EncryptionKeyAccessDeniedException|CodeCommit.EncryptionKeyDisabledException|CodeCommit.EncryptionKeyNotFoundException|CodeCommit.EncryptionKeyUnavailableException|any, data: CodeCommit.DeleteRepositoryOutput|any) => void): Request;
      getBranch(params: CodeCommit.GetBranchInput, callback?: (err: CodeCommit.RepositoryNameRequiredException|CodeCommit.RepositoryDoesNotExistException|CodeCommit.InvalidRepositoryNameException|CodeCommit.BranchNameRequiredException|CodeCommit.InvalidBranchNameException|CodeCommit.BranchDoesNotExistException|CodeCommit.EncryptionIntegrityChecksFailedException|CodeCommit.EncryptionKeyAccessDeniedException|CodeCommit.EncryptionKeyDisabledException|CodeCommit.EncryptionKeyNotFoundException|CodeCommit.EncryptionKeyUnavailableException|any, data: CodeCommit.GetBranchOutput|any) => void): Request;
      getRepository(params: CodeCommit.GetRepositoryInput, callback?: (err: CodeCommit.RepositoryNameRequiredException|CodeCommit.RepositoryDoesNotExistException|CodeCommit.InvalidRepositoryNameException|CodeCommit.EncryptionIntegrityChecksFailedException|CodeCommit.EncryptionKeyAccessDeniedException|CodeCommit.EncryptionKeyDisabledException|CodeCommit.EncryptionKeyNotFoundException|CodeCommit.EncryptionKeyUnavailableException|any, data: CodeCommit.GetRepositoryOutput|any) => void): Request;
      listBranches(params: CodeCommit.ListBranchesInput, callback?: (err: CodeCommit.RepositoryNameRequiredException|CodeCommit.RepositoryDoesNotExistException|CodeCommit.InvalidRepositoryNameException|CodeCommit.EncryptionIntegrityChecksFailedException|CodeCommit.EncryptionKeyAccessDeniedException|CodeCommit.EncryptionKeyDisabledException|CodeCommit.EncryptionKeyNotFoundException|CodeCommit.EncryptionKeyUnavailableException|CodeCommit.InvalidContinuationTokenException|any, data: CodeCommit.ListBranchesOutput|any) => void): Request;
      listRepositories(params: CodeCommit.ListRepositoriesInput, callback?: (err: CodeCommit.InvalidSortByException|CodeCommit.InvalidOrderException|CodeCommit.InvalidContinuationTokenException|any, data: CodeCommit.ListRepositoriesOutput|any) => void): Request;
      updateDefaultBranch(params: CodeCommit.UpdateDefaultBranchInput, callback?: (err: CodeCommit.RepositoryNameRequiredException|CodeCommit.RepositoryDoesNotExistException|CodeCommit.InvalidRepositoryNameException|CodeCommit.BranchNameRequiredException|CodeCommit.InvalidBranchNameException|CodeCommit.BranchDoesNotExistException|CodeCommit.EncryptionIntegrityChecksFailedException|CodeCommit.EncryptionKeyAccessDeniedException|CodeCommit.EncryptionKeyDisabledException|CodeCommit.EncryptionKeyNotFoundException|CodeCommit.EncryptionKeyUnavailableException|any, data: any) => void): Request;
      updateRepositoryDescription(params: CodeCommit.UpdateRepositoryDescriptionInput, callback?: (err: CodeCommit.RepositoryNameRequiredException|CodeCommit.RepositoryDoesNotExistException|CodeCommit.InvalidRepositoryNameException|CodeCommit.InvalidRepositoryDescriptionException|CodeCommit.EncryptionIntegrityChecksFailedException|CodeCommit.EncryptionKeyAccessDeniedException|CodeCommit.EncryptionKeyDisabledException|CodeCommit.EncryptionKeyNotFoundException|CodeCommit.EncryptionKeyUnavailableException|any, data: any) => void): Request;
      updateRepositoryName(params: CodeCommit.UpdateRepositoryNameInput, callback?: (err: CodeCommit.RepositoryDoesNotExistException|CodeCommit.RepositoryNameExistsException|CodeCommit.RepositoryNameRequiredException|CodeCommit.InvalidRepositoryNameException|any, data: any) => void): Request;

    }

    export module CodeCommit {
        export type AccountId = string;
        export type Arn = string;
        export type BranchName = string;    // max: 100, min: 1
        export type BranchNameList = BranchName[];
        export type CloneUrlHttp = string;
        export type CloneUrlSsh = string;
        export type CommitId = string;
        export type CreationDate = number;
        export type LastModifiedDate = number;
        export type NextToken = string;
        export type OrderEnum = string;
        export type RepositoryDescription = string;    // max: 1000
        export type RepositoryId = string;
        export type RepositoryMetadataList = RepositoryMetadata[];
        export type RepositoryName = string;    // pattern: &quot;[\\w\\.-]+&quot;, max: 100, min: 1
        export type RepositoryNameIdPairList = RepositoryNameIdPair[];
        export type RepositoryNameList = RepositoryName[];
        export type RepositoryNotFoundList = RepositoryName[];
        export type SortByEnum = string;

        export interface BatchGetRepositoriesInput {
            repositoryNames: RepositoryNameList;
        }
        export interface BatchGetRepositoriesOutput {
            repositories?: RepositoryMetadataList;
            repositoriesNotFound?: RepositoryNotFoundList;
        }
        export interface BranchDoesNotExistException {
        }
        export interface BranchInfo {
            branchName?: BranchName;
            commitId?: CommitId;
        }
        export interface BranchNameExistsException {
        }
        export interface BranchNameRequiredException {
        }
        export interface CommitDoesNotExistException {
        }
        export interface CommitIdRequiredException {
        }
        export interface CreateBranchInput {
            repositoryName: RepositoryName;
            branchName: BranchName;
            commitId: CommitId;
        }
        export interface CreateRepositoryInput {
            repositoryName: RepositoryName;
            repositoryDescription?: RepositoryDescription;
        }
        export interface CreateRepositoryOutput {
            repositoryMetadata?: RepositoryMetadata;
        }
        export interface DeleteRepositoryInput {
            repositoryName: RepositoryName;
        }
        export interface DeleteRepositoryOutput {
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
            repositoryName?: RepositoryName;
            branchName?: BranchName;
        }
        export interface GetBranchOutput {
            branch?: BranchInfo;
        }
        export interface GetRepositoryInput {
            repositoryName: RepositoryName;
        }
        export interface GetRepositoryOutput {
            repositoryMetadata?: RepositoryMetadata;
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
        export interface InvalidSortByException {
        }
        export interface ListBranchesInput {
            repositoryName: RepositoryName;
            nextToken?: NextToken;
        }
        export interface ListBranchesOutput {
            branches?: BranchNameList;
            nextToken?: NextToken;
        }
        export interface ListRepositoriesInput {
            nextToken?: NextToken;
            sortBy?: SortByEnum;
            order?: OrderEnum;
        }
        export interface ListRepositoriesOutput {
            repositories?: RepositoryNameIdPairList;
            nextToken?: NextToken;
        }
        export interface MaximumRepositoryNamesExceededException {
        }
        export interface RepositoryDoesNotExistException {
        }
        export interface RepositoryLimitExceededException {
        }
        export interface RepositoryMetadata {
            accountId?: AccountId;
            repositoryId?: RepositoryId;
            repositoryName?: RepositoryName;
            repositoryDescription?: RepositoryDescription;
            defaultBranch?: BranchName;
            lastModifiedDate?: LastModifiedDate;
            creationDate?: CreationDate;
            cloneUrlHttp?: CloneUrlHttp;
            cloneUrlSsh?: CloneUrlSsh;
            Arn?: Arn;
        }
        export interface RepositoryNameExistsException {
        }
        export interface RepositoryNameIdPair {
            repositoryName?: RepositoryName;
            repositoryId?: RepositoryId;
        }
        export interface RepositoryNameRequiredException {
        }
        export interface RepositoryNamesRequiredException {
        }
        export interface UpdateDefaultBranchInput {
            repositoryName: RepositoryName;
            defaultBranchName: BranchName;
        }
        export interface UpdateRepositoryDescriptionInput {
            repositoryName: RepositoryName;
            repositoryDescription?: RepositoryDescription;
        }
        export interface UpdateRepositoryNameInput {
            oldName: RepositoryName;
            newName: RepositoryName;
        }

    }
}
