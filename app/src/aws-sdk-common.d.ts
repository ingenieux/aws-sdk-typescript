
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
	
	export class Endpoint {
		constructor(endpoint:string);
		
		host:string;
		hostname:string;
		href:string;
		port:number;
		protocol:string;
	}
	
	export class Service {
		apiVersions:string[];
		makeRequest(operation:string, params:Object, callback:(error?:Error, data?:any) => void): void; 
		makeUnauthenticatedRequest(operation:string, params:Object, callback: (error?:Error, data?:any) => void): void;
		setupRequestListeners(): void;
		waitFor(state:string, params:Object, callback:(error?:Error, data?:any) => void): void;   
	}
	
    export class Request extends EventEmitter {
		constructor(service:Service, operation:string, params:Object);
		
		on(event: string, listener: Function):Request;
		httpRequest: HttpRequest;
		startTime: Date;
		abort(): Request;
		createReadStream(): ReadableStream;
		eachItem(callback:Function): void;
		eachPage(callback: (err:Error, data:any, done?:() => void) => boolean|void): void;
		isPageable(): boolean;
		send(callback?: (err:Error, data:any) => void): void;
		
    }
	
	export class HttpRequest {
		body: string;
		endpoint: Endpoint;
		headers: {[index:string]: string};
		method: string;
		path: string;
		pathName(): string;
		search(): string;
	}
	
	/*
	 * Node-compatible interfaces
	 */
	class EventEmitter {
		on(event: string, listener: Function):EventEmitter;
	}
	
    export interface ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
    }
	
    export interface WritableStream extends EventEmitter {
        writable: boolean;
        write: Function;
        end: Function;
    }

}
	
