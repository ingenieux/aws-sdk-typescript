// DO NOT EDIT!
//

///<reference path="./aws-sdk-common.d.ts" />
declare module "aws-sdk" {
    export class CodeCommit {
      constructor(options?: any);
      batchGetRepositories(params: CodeCommitBatchGetRepositoriesInput, callback: (err: CodeCommitRepositoryNamesRequiredException|CodeCommitMaximumRepositoryNamesExceededException|CodeCommitInvalidRepositoryNameException|CodeCommitEncryptionIntegrityChecksFailedException|CodeCommitEncryptionKeyAccessDeniedException|CodeCommitEncryptionKeyDisabledException|CodeCommitEncryptionKeyNotFoundException|CodeCommitEncryptionKeyUnavailableException|any, data: CodeCommitBatchGetRepositoriesOutput|any) => void): void;
      createBranch(params: CodeCommitCreateBranchInput, callback: (err: CodeCommitRepositoryNameRequiredException|CodeCommitInvalidRepositoryNameException|CodeCommitRepositoryDoesNotExistException|CodeCommitBranchNameRequiredException|CodeCommitBranchNameExistsException|CodeCommitInvalidBranchNameException|CodeCommitCommitIdRequiredException|CodeCommitCommitDoesNotExistException|CodeCommitInvalidCommitIdException|CodeCommitEncryptionIntegrityChecksFailedException|CodeCommitEncryptionKeyAccessDeniedException|CodeCommitEncryptionKeyDisabledException|CodeCommitEncryptionKeyNotFoundException|CodeCommitEncryptionKeyUnavailableException|any, data: any) => void): void;
      createRepository(params: CodeCommitCreateRepositoryInput, callback: (err: CodeCommitRepositoryNameExistsException|CodeCommitRepositoryNameRequiredException|CodeCommitInvalidRepositoryNameException|CodeCommitInvalidRepositoryDescriptionException|CodeCommitRepositoryLimitExceededException|CodeCommitEncryptionIntegrityChecksFailedException|CodeCommitEncryptionKeyAccessDeniedException|CodeCommitEncryptionKeyDisabledException|CodeCommitEncryptionKeyNotFoundException|CodeCommitEncryptionKeyUnavailableException|any, data: CodeCommitCreateRepositoryOutput|any) => void): void;
      deleteRepository(params: CodeCommitDeleteRepositoryInput, callback: (err: CodeCommitRepositoryNameRequiredException|CodeCommitInvalidRepositoryNameException|CodeCommitEncryptionIntegrityChecksFailedException|CodeCommitEncryptionKeyAccessDeniedException|CodeCommitEncryptionKeyDisabledException|CodeCommitEncryptionKeyNotFoundException|CodeCommitEncryptionKeyUnavailableException|any, data: CodeCommitDeleteRepositoryOutput|any) => void): void;
      getBranch(params: CodeCommitGetBranchInput, callback: (err: CodeCommitRepositoryNameRequiredException|CodeCommitRepositoryDoesNotExistException|CodeCommitInvalidRepositoryNameException|CodeCommitBranchNameRequiredException|CodeCommitInvalidBranchNameException|CodeCommitBranchDoesNotExistException|CodeCommitEncryptionIntegrityChecksFailedException|CodeCommitEncryptionKeyAccessDeniedException|CodeCommitEncryptionKeyDisabledException|CodeCommitEncryptionKeyNotFoundException|CodeCommitEncryptionKeyUnavailableException|any, data: CodeCommitGetBranchOutput|any) => void): void;
      getRepository(params: CodeCommitGetRepositoryInput, callback: (err: CodeCommitRepositoryNameRequiredException|CodeCommitRepositoryDoesNotExistException|CodeCommitInvalidRepositoryNameException|CodeCommitEncryptionIntegrityChecksFailedException|CodeCommitEncryptionKeyAccessDeniedException|CodeCommitEncryptionKeyDisabledException|CodeCommitEncryptionKeyNotFoundException|CodeCommitEncryptionKeyUnavailableException|any, data: CodeCommitGetRepositoryOutput|any) => void): void;
      listBranches(params: CodeCommitListBranchesInput, callback: (err: CodeCommitRepositoryNameRequiredException|CodeCommitRepositoryDoesNotExistException|CodeCommitInvalidRepositoryNameException|CodeCommitEncryptionIntegrityChecksFailedException|CodeCommitEncryptionKeyAccessDeniedException|CodeCommitEncryptionKeyDisabledException|CodeCommitEncryptionKeyNotFoundException|CodeCommitEncryptionKeyUnavailableException|CodeCommitInvalidContinuationTokenException|any, data: CodeCommitListBranchesOutput|any) => void): void;
      listRepositories(params: CodeCommitListRepositoriesInput, callback: (err: CodeCommitInvalidSortByException|CodeCommitInvalidOrderException|CodeCommitInvalidContinuationTokenException|any, data: CodeCommitListRepositoriesOutput|any) => void): void;
      updateDefaultBranch(params: CodeCommitUpdateDefaultBranchInput, callback: (err: CodeCommitRepositoryNameRequiredException|CodeCommitRepositoryDoesNotExistException|CodeCommitInvalidRepositoryNameException|CodeCommitBranchNameRequiredException|CodeCommitInvalidBranchNameException|CodeCommitBranchDoesNotExistException|CodeCommitEncryptionIntegrityChecksFailedException|CodeCommitEncryptionKeyAccessDeniedException|CodeCommitEncryptionKeyDisabledException|CodeCommitEncryptionKeyNotFoundException|CodeCommitEncryptionKeyUnavailableException|any, data: any) => void): void;
      updateRepositoryDescription(params: CodeCommitUpdateRepositoryDescriptionInput, callback: (err: CodeCommitRepositoryNameRequiredException|CodeCommitRepositoryDoesNotExistException|CodeCommitInvalidRepositoryNameException|CodeCommitInvalidRepositoryDescriptionException|CodeCommitEncryptionIntegrityChecksFailedException|CodeCommitEncryptionKeyAccessDeniedException|CodeCommitEncryptionKeyDisabledException|CodeCommitEncryptionKeyNotFoundException|CodeCommitEncryptionKeyUnavailableException|any, data: any) => void): void;
      updateRepositoryName(params: CodeCommitUpdateRepositoryNameInput, callback: (err: CodeCommitRepositoryDoesNotExistException|CodeCommitRepositoryNameExistsException|CodeCommitRepositoryNameRequiredException|CodeCommitInvalidRepositoryNameException|any, data: any) => void): void;
    }

    export type CodeCommitAccountId = string;
    export type CodeCommitArn = string;
    export interface CodeCommitBatchGetRepositoriesInput {
        repositoryNames: CodeCommitRepositoryNameList;
    }

    export interface CodeCommitBatchGetRepositoriesOutput {
        repositories?: CodeCommitRepositoryMetadataList;
        repositoriesNotFound?: CodeCommitRepositoryNotFoundList;
    }

    export interface CodeCommitBranchDoesNotExistException {
    }

    export interface CodeCommitBranchInfo {
        branchName?: CodeCommitBranchName;
        commitId?: CodeCommitCommitId;
    }

    export type CodeCommitBranchName = string;
    export interface CodeCommitBranchNameExistsException {
    }

    export type CodeCommitBranchNameList = Array<CodeCommitBranchName>;
    export interface CodeCommitBranchNameRequiredException {
    }

    export type CodeCommitCloneUrlHttp = string;
    export type CodeCommitCloneUrlSsh = string;
    export interface CodeCommitCommitDoesNotExistException {
    }

    export type CodeCommitCommitId = string;
    export interface CodeCommitCommitIdRequiredException {
    }

    export interface CodeCommitCreateBranchInput {
        repositoryName: CodeCommitRepositoryName;
        branchName: CodeCommitBranchName;
        commitId: CodeCommitCommitId;
    }

    export interface CodeCommitCreateRepositoryInput {
        repositoryName: CodeCommitRepositoryName;
        repositoryDescription?: CodeCommitRepositoryDescription;
    }

    export interface CodeCommitCreateRepositoryOutput {
        repositoryMetadata?: CodeCommitRepositoryMetadata;
    }

    export type CodeCommitCreationDate = number;
    export interface CodeCommitDeleteRepositoryInput {
        repositoryName: CodeCommitRepositoryName;
    }

    export interface CodeCommitDeleteRepositoryOutput {
        repositoryId?: CodeCommitRepositoryId;
    }

    export interface CodeCommitEncryptionIntegrityChecksFailedException {
    }

    export interface CodeCommitEncryptionKeyAccessDeniedException {
    }

    export interface CodeCommitEncryptionKeyDisabledException {
    }

    export interface CodeCommitEncryptionKeyNotFoundException {
    }

    export interface CodeCommitEncryptionKeyUnavailableException {
    }

    export interface CodeCommitGetBranchInput {
        repositoryName?: CodeCommitRepositoryName;
        branchName?: CodeCommitBranchName;
    }

    export interface CodeCommitGetBranchOutput {
        branch?: CodeCommitBranchInfo;
    }

    export interface CodeCommitGetRepositoryInput {
        repositoryName: CodeCommitRepositoryName;
    }

    export interface CodeCommitGetRepositoryOutput {
        repositoryMetadata?: CodeCommitRepositoryMetadata;
    }

    export interface CodeCommitInvalidBranchNameException {
    }

    export interface CodeCommitInvalidCommitIdException {
    }

    export interface CodeCommitInvalidContinuationTokenException {
    }

    export interface CodeCommitInvalidOrderException {
    }

    export interface CodeCommitInvalidRepositoryDescriptionException {
    }

    export interface CodeCommitInvalidRepositoryNameException {
    }

    export interface CodeCommitInvalidSortByException {
    }

    export type CodeCommitLastModifiedDate = number;
    export interface CodeCommitListBranchesInput {
        repositoryName: CodeCommitRepositoryName;
        nextToken?: CodeCommitNextToken;
    }

    export interface CodeCommitListBranchesOutput {
        branches?: CodeCommitBranchNameList;
        nextToken?: CodeCommitNextToken;
    }

    export interface CodeCommitListRepositoriesInput {
        nextToken?: CodeCommitNextToken;
        sortBy?: CodeCommitSortByEnum;
        order?: CodeCommitOrderEnum;
    }

    export interface CodeCommitListRepositoriesOutput {
        repositories?: CodeCommitRepositoryNameIdPairList;
        nextToken?: CodeCommitNextToken;
    }

    export interface CodeCommitMaximumRepositoryNamesExceededException {
    }

    export type CodeCommitNextToken = string;
    export type CodeCommitOrderEnum = string;
    export type CodeCommitRepositoryDescription = string;
    export interface CodeCommitRepositoryDoesNotExistException {
    }

    export type CodeCommitRepositoryId = string;
    export interface CodeCommitRepositoryLimitExceededException {
    }

    export interface CodeCommitRepositoryMetadata {
        accountId?: CodeCommitAccountId;
        repositoryId?: CodeCommitRepositoryId;
        repositoryName?: CodeCommitRepositoryName;
        repositoryDescription?: CodeCommitRepositoryDescription;
        defaultBranch?: CodeCommitBranchName;
        lastModifiedDate?: CodeCommitLastModifiedDate;
        creationDate?: CodeCommitCreationDate;
        cloneUrlHttp?: CodeCommitCloneUrlHttp;
        cloneUrlSsh?: CodeCommitCloneUrlSsh;
        Arn?: CodeCommitArn;
    }

    export type CodeCommitRepositoryMetadataList = Array<CodeCommitRepositoryMetadata>;
    export type CodeCommitRepositoryName = string; // pattern: "[\\w\\.-]+"
    export interface CodeCommitRepositoryNameExistsException {
    }

    export interface CodeCommitRepositoryNameIdPair {
        repositoryName?: CodeCommitRepositoryName;
        repositoryId?: CodeCommitRepositoryId;
    }

    export type CodeCommitRepositoryNameIdPairList = Array<CodeCommitRepositoryNameIdPair>;
    export type CodeCommitRepositoryNameList = Array<CodeCommitRepositoryName>;
    export interface CodeCommitRepositoryNameRequiredException {
    }

    export interface CodeCommitRepositoryNamesRequiredException {
    }

    export type CodeCommitRepositoryNotFoundList = Array<CodeCommitRepositoryName>;
    export type CodeCommitSortByEnum = string;
    export interface CodeCommitUpdateDefaultBranchInput {
        repositoryName: CodeCommitRepositoryName;
        defaultBranchName: CodeCommitBranchName;
    }

    export interface CodeCommitUpdateRepositoryDescriptionInput {
        repositoryName: CodeCommitRepositoryName;
        repositoryDescription?: CodeCommitRepositoryDescription;
    }

    export interface CodeCommitUpdateRepositoryNameInput {
        oldName: CodeCommitRepositoryName;
        newName: CodeCommitRepositoryName;
    }

}
