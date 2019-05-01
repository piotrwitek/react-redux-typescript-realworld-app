export {};

// Fix incorrect ALBResult type
declare module 'aws-lambda' {
  export interface ALBResult {
    statusDescription?: string;
    isBase64Encoded?: boolean;
  }
}
