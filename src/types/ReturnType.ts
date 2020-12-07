export interface IReturnType {
    error: boolean;
    statusCode: number;
    trace?: any;
    successMessage?: string;
    errorMessage?: string;
    data?: any;
}