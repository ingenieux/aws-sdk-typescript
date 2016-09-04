// Type definitions for aws-sdk - Amazon SimpleDB
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2009-04-15
    * endpointPrefix: sdb
    * serviceAbbreviation: 
    * signatureVersion: v2
    * protocol: query
    *
    * Amazon SimpleDB is a web service providing the core database functions of data
 indexing and querying in the cloud. By offloading the time and effort associated
 with building and operating a web-scale database, SimpleDB provides developers
 the freedom to focus on application development.  A traditional, clustered
 relational database requires a sizable upfront capital outlay, is complex to
 design, and often requires extensive and repetitive database administration.
 Amazon SimpleDB is dramatically simpler, requiring no schema, automatically
 indexing your data and providing a simple API for storage and access. This
 approach eliminates the administrative burden of data modeling, index
 maintenance, and performance tuning. Developers gain access to this
 functionality within Amazon&#x27;s proven computing environment, are able to scale
 instantly, and pay only for what they use. 
 
  Visit http://aws.amazon.com/simpledb/ [http://aws.amazon.com/simpledb/] for
 more information.
    *
    */
  export class SimpleDB extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Performs multiple DeleteAttributes operations in a single call, which reduces
round trips and latencies. This enables Amazon SimpleDB to optimize requests,
which generally yields better throughput. 

 If you specify BatchDeleteAttributes without attributes or values, all the
attributes for the item are deleted. 

 BatchDeleteAttributes is an idempotent operation; running it multiple times on
the same item or attribute doesn&#x27;t result in an error. 

 The BatchDeleteAttributes operation succeeds or fails in its entirety. There
are no partial deletes. You can execute multiple BatchDeleteAttributes
operations and other operations in parallel. However, large numbers of
concurrent BatchDeleteAttributes calls can result in Service Unavailable (503)
responses. 

 This operation is vulnerable to exceeding the maximum URL size when making a
REST request using the HTTP GET method. 

 This operation does not support conditions using Expected.X.Name,
Expected.X.Value, or Expected.X.Exists. 

 The following limitations are enforced for this operation:  &amp;#42; 1 MB request size
 * 25 item limit per
   BatchDeleteAttributes operation
     *
     */
    batchDeleteAttributes(params: SimpleDB.BatchDeleteAttributesRequest, callback?: (err: any, data: any) => void): Request<any, any>;
    /**
     * The BatchPutAttributes operation creates or replaces attributes within one or
more items. By using this operation, the client can perform multiple 
PutAttribute operation with a single call. This helps yield savings in round
trips and latencies, enabling Amazon SimpleDB to optimize requests and generally
produce better throughput. 

 The client may specify the item name with the Item.X.ItemName parameter. The
client may specify new attributes using a combination of the 
Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value parameters. The client may
specify the first attribute for the first item using the parameters 
Item.0.Attribute.0.Name and Item.0.Attribute.0.Value, and for the second
attribute for the first item by the parameters Item.0.Attribute.1.Name and 
Item.0.Attribute.1.Value, and so on. 

 Attributes are uniquely identified within an item by their name/value
combination. For example, a single item can have the attributes { &quot;first_name&quot;,
&quot;first_value&quot; } and { &quot;first_name&quot;, &quot;second_value&quot; }. However, it cannot have
two attribute instances where both the Item.X.Attribute.Y.Name and 
Item.X.Attribute.Y.Value are the same. 

 Optionally, the requester can supply the Replace parameter for each individual
value. Setting this value to true will cause the new attribute values to replace
the existing attribute values. For example, if an item I has the attributes {
&#x27;a&#x27;, &#x27;1&#x27; }, { &#x27;b&#x27;, &#x27;2&#x27;} and { &#x27;b&#x27;, &#x27;3&#x27; } and the requester does a
BatchPutAttributes of {&#x27;I&#x27;, &#x27;b&#x27;, &#x27;4&#x27; } with the Replace parameter set to true,
the final attributes of the item will be { &#x27;a&#x27;, &#x27;1&#x27; } and { &#x27;b&#x27;, &#x27;4&#x27; },
replacing the previous values of the &#x27;b&#x27; attribute with the new value. 

You cannot specify an empty string as an item or as an attribute name. The 
BatchPutAttributes operation succeeds or fails in its entirety. There are no
partial puts. This operation is vulnerable to exceeding the maximum URL size
when making a REST request using the HTTP GET method. This operation does not
support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists
.  You can execute multiple BatchPutAttributes operations and other operations in
parallel. However, large numbers of concurrent BatchPutAttributes calls can
result in Service Unavailable (503) responses. 

 The following limitations are enforced for this operation:  &amp;#42; 256 attribute
   name-value pairs per item
 * 1 MB request size
 * 1 billion
   attributes per domain
 * 10 GB of total
   user data storage per domain
 * 25 item limit per BatchPutAttributes operation
     *
     * @error DuplicateItemName The item name was specified more than once.  
     * @error InvalidParameterValue The value for a parameter is invalid.  
     * @error MissingParameter The request must contain the specified missing parameter.  
     * @error NoSuchDomain The specified domain does not exist.  
     * @error NumberItemAttributesExceeded Too many attributes in this item.  
     * @error NumberDomainAttributesExceeded Too many attributes in this domain.  
     * @error NumberDomainBytesExceeded Too many bytes in this domain.  
     * @error NumberSubmittedItemsExceeded Too many items exist in a single call.  
     * @error NumberSubmittedAttributesExceeded Too many attributes exist in a single call.  
     */
    batchPutAttributes(params: SimpleDB.BatchPutAttributesRequest, callback?: (err: SimpleDB.DuplicateItemName | SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | SimpleDB.NumberItemAttributesExceeded | SimpleDB.NumberDomainAttributesExceeded | SimpleDB.NumberDomainBytesExceeded | SimpleDB.NumberSubmittedItemsExceeded | SimpleDB.NumberSubmittedAttributesExceeded | any, data: any) => void): Request<any, SimpleDB.DuplicateItemName | SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | SimpleDB.NumberItemAttributesExceeded | SimpleDB.NumberDomainAttributesExceeded | SimpleDB.NumberDomainBytesExceeded | SimpleDB.NumberSubmittedItemsExceeded | SimpleDB.NumberSubmittedAttributesExceeded | any>;
    /**
     * The CreateDomain operation creates a new domain. The domain name should be
unique among the domains associated with the Access Key ID provided in the
request. The CreateDomain operation may take 10 or more seconds to complete. 

CreateDomain is an idempotent operation; running it multiple times using the
same domain name will not result in an error response.  The client can create up
to 100 domains per account. 

 If the client requires additional domains, go to 
http://aws.amazon.com/contact-us/simpledb-limit-request/
[http://aws.amazon.com/contact-us/simpledb-limit-request/].
     *
     * @error InvalidParameterValue The value for a parameter is invalid.  
     * @error MissingParameter The request must contain the specified missing parameter.  
     * @error NumberDomainsExceeded Too many domains exist per this account.  
     */
    createDomain(params: SimpleDB.CreateDomainRequest, callback?: (err: SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NumberDomainsExceeded | any, data: any) => void): Request<any, SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NumberDomainsExceeded | any>;
    /**
     * Deletes one or more attributes associated with an item. If all attributes of
the item are deleted, the item is deleted. 

If DeleteAttributes is called without being passed any attributes or values
specified, all the attributes for the item are deleted.  DeleteAttributes is an idempotent operation; running it multiple times on the
same item or attribute does not result in an error response. 

 Because Amazon SimpleDB makes multiple copies of item data and uses an eventual
consistency update model, performing a GetAttributes or Select operation (read)
immediately after a DeleteAttributes or PutAttributes operation (write) might
not return updated item data.
     *
     * @error InvalidParameterValue The value for a parameter is invalid.  
     * @error MissingParameter The request must contain the specified missing parameter.  
     * @error NoSuchDomain The specified domain does not exist.  
     * @error AttributeDoesNotExist The specified attribute does not exist.  
     */
    deleteAttributes(params: SimpleDB.DeleteAttributesRequest, callback?: (err: SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | SimpleDB.AttributeDoesNotExist | any, data: any) => void): Request<any, SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | SimpleDB.AttributeDoesNotExist | any>;
    /**
     * The DeleteDomain operation deletes a domain. Any items (and their attributes)
in the domain are deleted as well. The DeleteDomain operation might take 10 or
more seconds to complete. 

Running DeleteDomain on a domain that does not exist or running the function
multiple times using the same domain name will not result in an error response.
     *
     * @error MissingParameter The request must contain the specified missing parameter.  
     */
    deleteDomain(params: SimpleDB.DeleteDomainRequest, callback?: (err: SimpleDB.MissingParameter | any, data: any) => void): Request<any, SimpleDB.MissingParameter | any>;
    /**
     * Returns information about the domain, including when the domain was created,
the number of items and attributes in the domain, and the size of the attribute
names and values.
     *
     * @error MissingParameter The request must contain the specified missing parameter.  
     * @error NoSuchDomain The specified domain does not exist.  
     */
    domainMetadata(params: SimpleDB.DomainMetadataRequest, callback?: (err: SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | any, data: SimpleDB.DomainMetadataResult | any) => void): Request<SimpleDB.DomainMetadataResult | any, SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | any>;
    /**
     * Returns all of the attributes associated with the specified item. Optionally,
the attributes returned can be limited to one or more attributes by specifying
an attribute name parameter. 

 If the item does not exist on the replica that was accessed for this operation,
an empty set is returned. The system does not return an error as it cannot
guarantee the item does not exist on other replicas. 

If GetAttributes is called without being passed any attribute names, all the
attributes for the item are returned.
     *
     * @error InvalidParameterValue The value for a parameter is invalid.  
     * @error MissingParameter The request must contain the specified missing parameter.  
     * @error NoSuchDomain The specified domain does not exist.  
     */
    getAttributes(params: SimpleDB.GetAttributesRequest, callback?: (err: SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | any, data: SimpleDB.GetAttributesResult | any) => void): Request<SimpleDB.GetAttributesResult | any, SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | any>;
    /**
     * The ListDomains operation lists all domains associated with the Access Key ID.
It returns domain names up to the limit set by MaxNumberOfDomains
[#MaxNumberOfDomains]. A NextToken [#NextToken] is returned if there are more
than MaxNumberOfDomains domains. Calling ListDomains successive times with the 
NextToken provided by the operation returns up to MaxNumberOfDomains more domain
names with each successive operation call.
     *
     * @error InvalidParameterValue The value for a parameter is invalid.  
     * @error InvalidNextToken The specified NextToken is not valid.  
     */
    listDomains(params: SimpleDB.ListDomainsRequest, callback?: (err: SimpleDB.InvalidParameterValue | SimpleDB.InvalidNextToken | any, data: SimpleDB.ListDomainsResult | any) => void): Request<SimpleDB.ListDomainsResult | any, SimpleDB.InvalidParameterValue | SimpleDB.InvalidNextToken | any>;
    /**
     * The PutAttributes operation creates or replaces attributes in an item. The
client may specify new attributes using a combination of the Attribute.X.Name 
and Attribute.X.Value parameters. The client specifies the first attribute by
the parameters Attribute.0.Name and Attribute.0.Value, the second attribute by
the parameters Attribute.1.Name and Attribute.1.Value, and so on. 

 Attributes are uniquely identified in an item by their name/value combination.
For example, a single item can have the attributes { &quot;first_name&quot;, &quot;first_value&quot;
} and { &quot;first_name&quot;, second_value&quot; }. However, it cannot have two attribute
instances where both the Attribute.X.Name and Attribute.X.Value are the same. 

 Optionally, the requestor can supply the Replace parameter for each individual
attribute. Setting this value to true causes the new attribute value to replace
the existing attribute value(s). For example, if an item has the attributes {
&#x27;a&#x27;, &#x27;1&#x27; }, { &#x27;b&#x27;, &#x27;2&#x27;} and { &#x27;b&#x27;, &#x27;3&#x27; } and the requestor calls PutAttributes 
using the attributes { &#x27;b&#x27;, &#x27;4&#x27; } with the Replace parameter set to true, the
final attributes of the item are changed to { &#x27;a&#x27;, &#x27;1&#x27; } and { &#x27;b&#x27;, &#x27;4&#x27; }, which
replaces the previous values of the &#x27;b&#x27; attribute with the new value. 

Using PutAttributes to replace attribute values that do not exist will not
result in an error response.  You cannot specify an empty string as an attribute
name. 

 Because Amazon SimpleDB makes multiple copies of client data and uses an
eventual consistency update model, an immediate GetAttributes or Select 
operation (read) immediately after a PutAttributes or DeleteAttributes operation
(write) might not return the updated data. 

 The following limitations are enforced for this operation:  &amp;#42; 256 total
   attribute name-value pairs per item
 * One billion
   attributes per domain
 * 10 GB of total
   user data storage per domain
     *
     * @error InvalidParameterValue The value for a parameter is invalid.  
     * @error MissingParameter The request must contain the specified missing parameter.  
     * @error NoSuchDomain The specified domain does not exist.  
     * @error NumberDomainAttributesExceeded Too many attributes in this domain.  
     * @error NumberDomainBytesExceeded Too many bytes in this domain.  
     * @error NumberItemAttributesExceeded Too many attributes in this item.  
     * @error AttributeDoesNotExist The specified attribute does not exist.  
     */
    putAttributes(params: SimpleDB.PutAttributesRequest, callback?: (err: SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | SimpleDB.NumberDomainAttributesExceeded | SimpleDB.NumberDomainBytesExceeded | SimpleDB.NumberItemAttributesExceeded | SimpleDB.AttributeDoesNotExist | any, data: any) => void): Request<any, SimpleDB.InvalidParameterValue | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | SimpleDB.NumberDomainAttributesExceeded | SimpleDB.NumberDomainBytesExceeded | SimpleDB.NumberItemAttributesExceeded | SimpleDB.AttributeDoesNotExist | any>;
    /**
     * The Select operation returns a set of attributes for ItemNames that match the
select expression. Select is similar to the standard SQL SELECT statement. 

 The total size of the response cannot exceed 1 MB in total size. Amazon
SimpleDB automatically adjusts the number of items returned per page to enforce
this limit. For example, if the client asks to retrieve 2500 items, but each
individual item is 10 kB in size, the system returns 100 items and an
appropriate NextToken so the client can access the next page of results. 

 For information on how to construct select expressions, see Using Select to
Create Amazon SimpleDB Queries in the Developer Guide.
     *
     * @error InvalidParameterValue The value for a parameter is invalid.  
     * @error InvalidNextToken The specified NextToken is not valid.  
     * @error InvalidNumberPredicates Too many predicates exist in the query expression.  
     * @error InvalidNumberValueTests Too many predicates exist in the query expression.  
     * @error InvalidQueryExpression The specified query expression syntax is not valid.  
     * @error MissingParameter The request must contain the specified missing parameter.  
     * @error NoSuchDomain The specified domain does not exist.  
     * @error RequestTimeout A timeout occurred when attempting to query the specified domain with specified
query expression.  
     * @error TooManyRequestedAttributes Too many attributes requested.  
     */
    select(params: SimpleDB.SelectRequest, callback?: (err: SimpleDB.InvalidParameterValue | SimpleDB.InvalidNextToken | SimpleDB.InvalidNumberPredicates | SimpleDB.InvalidNumberValueTests | SimpleDB.InvalidQueryExpression | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | SimpleDB.RequestTimeout | SimpleDB.TooManyRequestedAttributes | any, data: SimpleDB.SelectResult | any) => void): Request<SimpleDB.SelectResult | any, SimpleDB.InvalidParameterValue | SimpleDB.InvalidNextToken | SimpleDB.InvalidNumberPredicates | SimpleDB.InvalidNumberValueTests | SimpleDB.InvalidQueryExpression | SimpleDB.MissingParameter | SimpleDB.NoSuchDomain | SimpleDB.RequestTimeout | SimpleDB.TooManyRequestedAttributes | any>;

  }

  export module SimpleDB {

    export type AttributeList = Attribute[];

    export type AttributeNameList = String[];

    export type Boolean = boolean;

    export type DeletableAttributeList = DeletableAttribute[];

    export type DeletableItemList = DeletableItem[];

    export type DomainNameList = String[];

    export type Float = number;

    export type Integer = number;

    export type ItemList = Item[];

    export type Long = number;

    export type ReplaceableAttributeList = ReplaceableAttribute[];

    export type ReplaceableItemList = ReplaceableItem[];

    export type String = string;

    export interface Attribute {
      /** The name of the attribute. **/
      Name: String;
      /**  **/
      AlternateNameEncoding?: String;
      /** The value of the attribute. **/
      Value: String;
      /**  **/
      AlternateValueEncoding?: String;
    }
    export interface AttributeDoesNotExist {
      BoxUsage?: Float;
    }
    export interface BatchDeleteAttributesRequest {
      /** The name of the domain in which the attributes are being deleted. **/
      DomainName: String;
      /** A list of items on which to perform the operation. **/
      Items: DeletableItemList;
    }
    export interface BatchPutAttributesRequest {
      /** The name of the domain in which the attributes are being stored. **/
      DomainName: String;
      /** A list of items on which to perform the operation. **/
      Items: ReplaceableItemList;
    }
    export interface CreateDomainRequest {
      /** The name of the domain to create. The name can range between 3 and 255
characters and can contain the following characters: a-z, A-Z, 0-9, &#x27;_&#x27;, &#x27;-&#x27;,
and &#x27;.&#x27;. **/
      DomainName: String;
    }
    export interface DeletableAttribute {
      /** The name of the attribute. **/
      Name: String;
      /** The value of the attribute. **/
      Value?: String;
    }
    export interface DeletableItem {
      Name: String;
      Attributes?: DeletableAttributeList;
    }
    export interface DeleteAttributesRequest {
      /** The name of the domain in which to perform the operation. **/
      DomainName: String;
      /** The name of the item. Similar to rows on a spreadsheet, items represent
individual objects that contain one or more value-attribute pairs. **/
      ItemName: String;
      /** A list of Attributes. Similar to columns on a spreadsheet, attributes represent
categories of data that can be assigned to items. **/
      Attributes?: DeletableAttributeList;
      /** The update condition which, if specified, determines whether the specified
attributes will be deleted or not. The update condition must be satisfied in
order for this request to be processed and the attributes to be deleted. **/
      Expected?: UpdateCondition;
    }
    export interface DeleteDomainRequest {
      /** The name of the domain to delete. **/
      DomainName: String;
    }
    export interface DomainMetadataRequest {
      /** The name of the domain for which to display the metadata of. **/
      DomainName: String;
    }
    export interface DomainMetadataResult {
      /** The number of all items in the domain. **/
      ItemCount?: Integer;
      /** The total size of all item names in the domain, in bytes. **/
      ItemNamesSizeBytes?: Long;
      /** The number of unique attribute names in the domain. **/
      AttributeNameCount?: Integer;
      /** The total size of all unique attribute names in the domain, in bytes. **/
      AttributeNamesSizeBytes?: Long;
      /** The number of all attribute name/value pairs in the domain. **/
      AttributeValueCount?: Integer;
      /** The total size of all attribute values in the domain, in bytes. **/
      AttributeValuesSizeBytes?: Long;
      /** The data and time when metadata was calculated, in Epoch (UNIX) seconds. **/
      Timestamp?: Integer;
    }
    export interface DuplicateItemName {
      BoxUsage?: Float;
    }
    export interface GetAttributesRequest {
      /** The name of the domain in which to perform the operation. **/
      DomainName: String;
      /** The name of the item. **/
      ItemName: String;
      /** The names of the attributes. **/
      AttributeNames?: AttributeNameList;
      /** Determines whether or not strong consistency should be enforced when data is
read from SimpleDB. If true, any data previously written to SimpleDB will be
returned. Otherwise, results will be consistent eventually, and the client may
not see data that was written immediately before your read. **/
      ConsistentRead?: Boolean;
    }
    export interface GetAttributesResult {
      /** The list of attributes returned by the operation. **/
      Attributes?: AttributeList;
    }
    export interface InvalidNextToken {
      BoxUsage?: Float;
    }
    export interface InvalidNumberPredicates {
      BoxUsage?: Float;
    }
    export interface InvalidNumberValueTests {
      BoxUsage?: Float;
    }
    export interface InvalidParameterValue {
      BoxUsage?: Float;
    }
    export interface InvalidQueryExpression {
      BoxUsage?: Float;
    }
    export interface Item {
      /** The name of the item. **/
      Name: String;
      /**  **/
      AlternateNameEncoding?: String;
      /** A list of attributes. **/
      Attributes: AttributeList;
    }
    export interface ListDomainsRequest {
      /** The maximum number of domain names you want returned. The range is 1 to 100. The
default setting is 100. **/
      MaxNumberOfDomains?: Integer;
      /** A string informing Amazon SimpleDB where to start the next list of domain names. **/
      NextToken?: String;
    }
    export interface ListDomainsResult {
      /** A list of domain names that match the expression. **/
      DomainNames?: DomainNameList;
      /** An opaque token indicating that there are more domains than the specified 
MaxNumberOfDomains still available. **/
      NextToken?: String;
    }
    export interface MissingParameter {
      BoxUsage?: Float;
    }
    export interface NoSuchDomain {
      BoxUsage?: Float;
    }
    export interface NumberDomainAttributesExceeded {
      BoxUsage?: Float;
    }
    export interface NumberDomainBytesExceeded {
      BoxUsage?: Float;
    }
    export interface NumberDomainsExceeded {
      BoxUsage?: Float;
    }
    export interface NumberItemAttributesExceeded {
      BoxUsage?: Float;
    }
    export interface NumberSubmittedAttributesExceeded {
      BoxUsage?: Float;
    }
    export interface NumberSubmittedItemsExceeded {
      BoxUsage?: Float;
    }
    export interface PutAttributesRequest {
      /** The name of the domain in which to perform the operation. **/
      DomainName: String;
      /** The name of the item. **/
      ItemName: String;
      /** The list of attributes. **/
      Attributes: ReplaceableAttributeList;
      /** The update condition which, if specified, determines whether the specified
attributes will be updated or not. The update condition must be satisfied in
order for this request to be processed and the attributes to be updated. **/
      Expected?: UpdateCondition;
    }
    export interface ReplaceableAttribute {
      /** The name of the replaceable attribute. **/
      Name: String;
      /** The value of the replaceable attribute. **/
      Value: String;
      /** A flag specifying whether or not to replace the attribute/value pair or to add a
new attribute/value pair. The default setting is false. **/
      Replace?: Boolean;
    }
    export interface ReplaceableItem {
      /** The name of the replaceable item. **/
      Name: String;
      /** The list of attributes for a replaceable item. **/
      Attributes: ReplaceableAttributeList;
    }
    export interface RequestTimeout {
      BoxUsage?: Float;
    }
    export interface SelectRequest {
      /** The expression used to query the domain. **/
      SelectExpression: String;
      /** A string informing Amazon SimpleDB where to start the next list of ItemNames. **/
      NextToken?: String;
      /** Determines whether or not strong consistency should be enforced when data is
read from SimpleDB. If true, any data previously written to SimpleDB will be
returned. Otherwise, results will be consistent eventually, and the client may
not see data that was written immediately before your read. **/
      ConsistentRead?: Boolean;
    }
    export interface SelectResult {
      /** A list of items that match the select expression. **/
      Items?: ItemList;
      /** An opaque token indicating that more items than MaxNumberOfItems were matched,
the response size exceeded 1 megabyte, or the execution time exceeded 5 seconds. **/
      NextToken?: String;
    }
    export interface TooManyRequestedAttributes {
      BoxUsage?: Float;
    }
    export interface UpdateCondition {
      /** The name of the attribute involved in the condition. **/
      Name?: String;
      /** The value of an attribute. This value can only be specified when the Exists 
parameter is equal to true. **/
      Value?: String;
      /** A value specifying whether or not the specified attribute must exist with the
specified value in order for the update condition to be satisfied. Specify true 
if the attribute must exist for the update condition to be satisfied. Specify 
false if the attribute should not exist in order for the update condition to be
satisfied. **/
      Exists?: Boolean;
    }
  }
}
