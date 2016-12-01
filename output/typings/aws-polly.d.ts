// Type definitions for aws-sdk - Amazon Polly
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2016-06-10
   * endpointPrefix: polly
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: rest-json
   *
   * Amazon Polly is a web service that makes it easy to synthesize speech from text.

The Amazon Polly service provides API operations for synthesizing high-quality
speech from plain text and Speech Synthesis Markup Language (SSML), along with
managing pronunciations lexicons that enable you to get the best results for
your application domain.
   *
   */
  export class Polly extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Deletes the specified pronunciation lexicon stored in an AWS Region. A lexicon
which has been deleted is not available for speech synthesis, nor is it possible
to retrieve it using either the GetLexicon or ListLexicon APIs.

For more information, see Managing Lexicons
[http://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html] .
     *
     * @error LexiconNotFoundException   
     * @error ServiceFailureException   
     */
    deleteLexicon(params: Polly.DeleteLexiconInput, callback?: (err: Polly.LexiconNotFoundException|Polly.ServiceFailureException|any, data: Polly.DeleteLexiconOutput|any) => void): Request<Polly.DeleteLexiconOutput|any,Polly.LexiconNotFoundException|Polly.ServiceFailureException|any>;
    /**
     * Returns the list of voices that are available for use when requesting speech
synthesis. Each voice speaks a specified language, is either male or female, and
is identified by an ID, which is the ASCII version of the voice name.

When synthesizing speech ( SynthesizeSpeech ), you provide the voice ID for the
voice you want from the list of voices returned by DescribeVoices .

For example, you want your news reader application to read news in a specific
language, but giving a user the option to choose the voice. Using the 
DescribeVoices operation you can provide the user with a list of available
voices to select from.

You can optionally specify a language code to filter the available voices. For
example, if you specify en-US , the operation returns a list of all available US
English voices.

This operation requires permissions to perform the polly:DescribeVoices action.
     *
     * @error InvalidNextTokenException   
     * @error ServiceFailureException   
     */
    describeVoices(params: Polly.DescribeVoicesInput, callback?: (err: Polly.InvalidNextTokenException|Polly.ServiceFailureException|any, data: Polly.DescribeVoicesOutput|any) => void): Request<Polly.DescribeVoicesOutput|any,Polly.InvalidNextTokenException|Polly.ServiceFailureException|any>;
    /**
     * Returns the content of the specified pronunciation lexicon stored in an AWS
Region. For more information, see Managing Lexicons
[http://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html] .
     *
     * @error LexiconNotFoundException   
     * @error ServiceFailureException   
     */
    getLexicon(params: Polly.GetLexiconInput, callback?: (err: Polly.LexiconNotFoundException|Polly.ServiceFailureException|any, data: Polly.GetLexiconOutput|any) => void): Request<Polly.GetLexiconOutput|any,Polly.LexiconNotFoundException|Polly.ServiceFailureException|any>;
    /**
     * Returns a list of pronunciation lexicons stored in an AWS Region. For more
information, see Managing Lexicons
[http://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html] .
     *
     * @error InvalidNextTokenException   
     * @error ServiceFailureException   
     */
    listLexicons(params: Polly.ListLexiconsInput, callback?: (err: Polly.InvalidNextTokenException|Polly.ServiceFailureException|any, data: Polly.ListLexiconsOutput|any) => void): Request<Polly.ListLexiconsOutput|any,Polly.InvalidNextTokenException|Polly.ServiceFailureException|any>;
    /**
     * Stores a pronunciation lexicon in an AWS Region. If a lexicon with the same name
already exists in the region, it is overwritten by the new lexicon. Lexicon
operations have eventual consistency, therefore, it might take some time before
the lexicon is available to the SynthesizeSpeech operation.

For more information, see Managing Lexicons
[http://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html] .
     *
     * @error InvalidLexiconException   
     * @error UnsupportedPlsAlphabetException   
     * @error UnsupportedPlsLanguageException   
     * @error LexiconSizeExceededException   
     * @error MaxLexemeLengthExceededException   
     * @error MaxLexiconsNumberExceededException   
     * @error ServiceFailureException   
     */
    putLexicon(params: Polly.PutLexiconInput, callback?: (err: Polly.InvalidLexiconException|Polly.UnsupportedPlsAlphabetException|Polly.UnsupportedPlsLanguageException|Polly.LexiconSizeExceededException|Polly.MaxLexemeLengthExceededException|Polly.MaxLexiconsNumberExceededException|Polly.ServiceFailureException|any, data: Polly.PutLexiconOutput|any) => void): Request<Polly.PutLexiconOutput|any,Polly.InvalidLexiconException|Polly.UnsupportedPlsAlphabetException|Polly.UnsupportedPlsLanguageException|Polly.LexiconSizeExceededException|Polly.MaxLexemeLengthExceededException|Polly.MaxLexiconsNumberExceededException|Polly.ServiceFailureException|any>;
    /**
     * Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input
must be valid, well-formed SSML. Some alphabets might not be available with all
the voices (for example, Cyrillic might not be read at all by English voices)
unless phoneme mapping is used. For more information, see How it Works
[http://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html] .
     *
     * @error TextLengthExceededException   
     * @error InvalidSampleRateException   
     * @error InvalidSsmlException   
     * @error LexiconNotFoundException   
     * @error ServiceFailureException   
     */
    synthesizeSpeech(params: Polly.SynthesizeSpeechInput, callback?: (err: Polly.TextLengthExceededException|Polly.InvalidSampleRateException|Polly.InvalidSsmlException|Polly.LexiconNotFoundException|Polly.ServiceFailureException|any, data: Polly.SynthesizeSpeechOutput|any) => void): Request<Polly.SynthesizeSpeechOutput|any,Polly.TextLengthExceededException|Polly.InvalidSampleRateException|Polly.InvalidSsmlException|Polly.LexiconNotFoundException|Polly.ServiceFailureException|any>;

  }

  export module Polly {
    
    export type Alphabet = string;
    
    export type AudioStream = any;
    
    export type ContentType = string;
    
    export type ErrorMessage = string;
    
    export type Gender = string;
    
    export type LanguageCode = string;
    
    export type LanguageName = string;
    
    export type LastModified = number;
    
    export type LexemesCount = number;
    
    export type LexiconArn = string;
    
    export type LexiconContent = string;
    
    export type LexiconDescriptionList = LexiconDescription[];
    
    export type LexiconName = string;
    
    export type LexiconNameList = LexiconName[];
    
    export type NextToken = string;
    
    export type OutputFormat = string;
    
    export type RequestCharacters = number;
    
    export type SampleRate = string;
    
    export type Size = number;
    
    export type Text = string;
    
    export type TextType = string;
    
    export type VoiceId = string;
    
    export type VoiceList = Voice[];
    
    export type VoiceName = string;

    export interface DeleteLexiconInput {
        /** The name of the lexicon to delete. Must be an existing lexicon in the region. **/
        Name: LexiconName;
    }
    export interface DeleteLexiconOutput {
    }
    export interface DescribeVoicesInput {
        /** The language identification tag (ISO 639 code for the language name-ISO 3166
country code) for filtering the list of voices returned. If you don&#x27;t specify
this optional parameter, all available voices are returned. **/
        LanguageCode?: LanguageCode;
        /** An opaque pagination token returned from the previous DescribeVoices operation.
If present, this indicates where to continue the listing. **/
        NextToken?: NextToken;
    }
    export interface DescribeVoicesOutput {
        /** A list of voices with their properties. **/
        Voices?: VoiceList;
        /** The pagination token to use in the next request to continue the listing of
voices. NextToken is returned only if the response is truncated. **/
        NextToken?: NextToken;
    }
    export interface GetLexiconInput {
        /** Name of the lexicon. **/
        Name: LexiconName;
    }
    export interface GetLexiconOutput {
        /** Lexicon object that provides name and the string content of the lexicon. **/
        Lexicon?: Lexicon;
        /** Metadata of the lexicon, including phonetic alphabetic used, language code,
lexicon ARN, number of lexemes defined in the lexicon, and size of lexicon in
bytes. **/
        LexiconAttributes?: LexiconAttributes;
    }
    export interface InvalidLexiconException {
        message?: ErrorMessage;
    }
    export interface InvalidNextTokenException {
        message?: ErrorMessage;
    }
    export interface InvalidSampleRateException {
        message?: ErrorMessage;
    }
    export interface InvalidSsmlException {
        message?: ErrorMessage;
    }
    export interface Lexicon {
        /** Lexicon content in string format. The content of a lexicon must be in PLS
format. **/
        Content?: LexiconContent;
        /** Name of the lexicon. **/
        Name?: LexiconName;
    }
    export interface LexiconAttributes {
        /** Phonetic alphabet used in the lexicon. Valid values are ipa and x-sampa . **/
        Alphabet?: Alphabet;
        /** Language code that the lexicon applies to. A lexicon with a language code such
as &quot;en&quot; would be applied to all English languages (en-GB, en-US, en-AUS, en-WLS,
and so on. **/
        LanguageCode?: LanguageCode;
        /** Date lexicon was last modified (a timestamp value). **/
        LastModified?: LastModified;
        /** Amazon Resource Name (ARN) of the lexicon. **/
        LexiconArn?: LexiconArn;
        /** Number of lexemes in the lexicon. **/
        LexemesCount?: LexemesCount;
        /** Total size of the lexicon, in characters. **/
        Size?: Size;
    }
    export interface LexiconDescription {
        /** Name of the lexicon. **/
        Name?: LexiconName;
        /** Provides lexicon metadata. **/
        Attributes?: LexiconAttributes;
    }
    export interface LexiconNotFoundException {
        message?: ErrorMessage;
    }
    export interface LexiconSizeExceededException {
        message?: ErrorMessage;
    }
    export interface ListLexiconsInput {
        /** An opaque pagination token returned from previous ListLexicons operation. If
present, indicates where to continue the list of lexicons. **/
        NextToken?: NextToken;
    }
    export interface ListLexiconsOutput {
        /** A list of lexicon names and attributes. **/
        Lexicons?: LexiconDescriptionList;
        /** The pagination token to use in the next request to continue the listing of
lexicons. NextToken is returned only if the response is truncated. **/
        NextToken?: NextToken;
    }
    export interface MaxLexemeLengthExceededException {
        message?: ErrorMessage;
    }
    export interface MaxLexiconsNumberExceededException {
        message?: ErrorMessage;
    }
    export interface PutLexiconInput {
        /** Name of the lexicon. The name must follow the regular express format
[0-9A-Za-z]{1,20}. That is, the name is a case-sensitive alphanumeric string up
to 20 characters long. **/
        Name: LexiconName;
        /** Content of the PLS lexicon as string data. **/
        Content: LexiconContent;
    }
    export interface PutLexiconOutput {
    }
    export interface ServiceFailureException {
        message?: ErrorMessage;
    }
    export interface SynthesizeSpeechInput {
        /** List of one or more pronunciation lexicon names you want the service to apply
during synthesis. Lexicons are applied only if the language of the lexicon is
the same as the language of the voice. For information about storing lexicons,
see PutLexicon [http://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html] 
. **/
        LexiconNames?: LexiconNameList;
        /** The audio format in which the resulting stream will be encoded. **/
        OutputFormat: OutputFormat;
        /** The audio frequency specified in Hz.

The valid values for mp3 and ogg_vorbis are &quot;8000&quot;, &quot;16000&quot;, and &quot;22050&quot;. The
default value is &quot;22050&quot;.

Valid values for pcm are &quot;8000&quot; and &quot;16000&quot; The default value is &quot;16000&quot;. **/
        SampleRate?: SampleRate;
        /** Input text to synthesize. If you specify ssml as the TextType , follow the SSML
format for the input text. **/
        Text: Text;
        /** Specifies whether the input text is plain text or SSML. The default value is
plain text. For more information, see Using SSML
[http://docs.aws.amazon.com/polly/latest/dg/ssml.html] . **/
        TextType?: TextType;
        /** Voice ID to use for the synthesis. You can get a list of available voice IDs by
calling the DescribeVoices
[http://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html] operation. **/
        VoiceId: VoiceId;
    }
    export interface SynthesizeSpeechOutput {
        /** Stream containing the synthesized speech. **/
        AudioStream?: AudioStream;
        /** Specifies the type audio stream. This should reflect the OutputFormat parameter
in your request.

 &amp;#42; If you request mp3 as the OutputFormat , the ContentType returned is
   audio/mpeg.
   
   
 * If you request ogg_vorbis as the OutputFormat , the ContentType returned is
   audio/ogg.
   
   
 * If you request pcm as the OutputFormat , the ContentType returned is
   audio/pcm. **/
        ContentType?: ContentType;
        /** Number of characters synthesized. **/
        RequestCharacters?: RequestCharacters;
    }
    export interface TextLengthExceededException {
        message?: ErrorMessage;
    }
    export interface UnsupportedPlsAlphabetException {
        message?: ErrorMessage;
    }
    export interface UnsupportedPlsLanguageException {
        message?: ErrorMessage;
    }
    export interface Voice {
        /** Gender of the voice. **/
        Gender?: Gender;
        /** Amazon Polly assigned voice ID. This is the ID that you specify when calling the 
SynthesizeSpeech operation. **/
        Id?: VoiceId;
        /** Language code of the voice. **/
        LanguageCode?: LanguageCode;
        /** Human readable name of the language in English. **/
        LanguageName?: LanguageName;
        /** Name of the voice (for example, Salli, Kendra, etc.). This provides a human
readable voice name that you might display in your application. **/
        Name?: VoiceName;
    }
  }
}
