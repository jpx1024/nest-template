export class Paginated<T> {
    total: number;

    data: T[];

    static of<T>(result: [T[], number]): Paginated<T>{
        let paginated = new Paginated<T>();
        paginated.data = result[0];
        paginated.total = result[1];
        return paginated;
    }
}