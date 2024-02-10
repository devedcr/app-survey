export interface ResponseJson<D, E> {
    status: boolean;
    data: D;
    errors: E;
}