export class PaginatedDto<T> {
    total: number;

    limit: number;

    offset: number;

    results: T[];
}