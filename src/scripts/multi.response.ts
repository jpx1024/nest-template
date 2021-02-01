import { Response } from "./response";

export class MultiResponse<T> extends Response {
    total: number;
    data: Array<T>;


    static of<T>(data: Array<T>, total: number): MultiResponse<T>{
        let multiResponse = new MultiResponse<T>();
        multiResponse.code = "success";
        multiResponse.message = "";
        multiResponse.data = data;
        multiResponse.total = total;
        return multiResponse;
    }
}