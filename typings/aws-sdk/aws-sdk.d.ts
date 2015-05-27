// Type definitions for aws-sdk
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: midknight41 <https://github.com/midknight41>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/aws-sdk.d.ts

/// <reference path="../node/node.d.ts" />

declare module "aws-sdk" {

	export var config: ClientConfig;

	export function Config(json: any): void;

	export class Credentials {
		constructor(accessKeyId: string, secretAccessKey: string, sessionToken?: string);
		accessKeyId: string;
	}

	export interface Logger {
		write?: (chunk: any, encoding?: string, callback?: () => void) => void;
		log?: (...messages: any[]) => void;
	}

	export interface HttpOptions {
		proxy?: string;
		agent?: any;
		timeout?: number;
		xhrAsync?: boolean;
		xhrWithCredentials?: boolean;
	}

	export interface Services {
		autoscaling?: any;
		cloudformation?: any;
		cloudfront?: any;
		cloudsearch?: any;
		cloudsearchdomain?: any;
		cloudtrail?: any;
		cloudwatch?: any;
		cloudwatchlogs?: any;
		cognitoidentity?: any;
		cognitosync?: any;
		datapipeline?: any;
		directconnect?: any;
		dynamodb?: any;
		ec2?: any;
		elasticache?: any;
		elasticbeanstalk?: any;
		elastictranscoder?: any;
		elb?: any;
		emr?: any;
		glacier?: any;
		httpOptions?: HttpOptions;
		iam?: any;
		importexport?: any;
		kinesis?: any;
		opsworks?: any;
		rds?: any;
		redshift?: any;
		route53?: any;
		route53domains?: any;
		s3?: any;
		ses?: any;
		simpledb?: any;
		sns?: any;
		sqs?: any;
		storagegateway?: any;
		sts?: any;
		support?: any;
		swf?: any;
	}

	export interface ClientConfigPartial extends Services {
		credentials?: Credentials;
		region?: string;
		computeChecksums?: boolean;
		convertResponseTypes?: boolean;
		logger?: Logger;
		maxRedirects?: number;
		maxRetries?: number;
		paramValidation?: boolean;
		s3ForcePathStyle?: boolean;
		apiVersion?: any;
		apiVersions?: Services;
		signatureVersion?: string;
		sslEnabled?: boolean;
		systemClockOffset?: number;
	}

	export interface ClientConfig extends ClientConfigPartial {
		update?: (options: ClientConfigPartial, allUnknownKeys?: boolean) => void;
		getCredentials?: (callback: (err?: any) => void) => void ;
		loadFromPath?: (path: string) => void;
		credentials: Credentials;
		region: string;
	}
}
