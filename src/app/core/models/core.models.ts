export interface CommonResponse<T = {}> {
  data: T;
  message: string[];
  fieldErrors: string[];
  resultCode: number;
}
