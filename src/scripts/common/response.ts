import { Paginated } from "./paginated";

const DEFAULT_CODE = "SUCCESS"
const DEFAULT_MESSAGE = "成功"
/**
 * 响应
 * @author ike jpx1024@gmail.com
 */
export class Response {

    /**
     * 代码
     */
    code: string

    /**
     * 消息
     */
    message: string

    /**
     * 构筑成功
     * @return 响应
     */
    static buildSuccess(): Response {
        let response = new Response();
        response.code = DEFAULT_CODE
        return response;
    }
    
    /**
     * 构筑失败
     * @param responseState 响应状态
     * @return 响应
     */
    static buildFailure(responseState: ResponseState): Response{
        let response = new Response();
        response.code = responseState.getCode();
        response.message = responseState.getMessage();
        return response;
    }

}

/**
 * 多响应
 */
export class MultiResponse<T> extends Response {
    /**
     * 总数
     */
    total: number;

    /**
     * 数据
     */
    data: Array<T>;


    /**
     * 构建数据
     * @param data 数据
     * @param total 总数
     */
    static of<T>(data: Array<T>, total: number): MultiResponse<T>{
        let multiResponse = new MultiResponse<T>();
        multiResponse.code = DEFAULT_CODE;
        multiResponse.message = DEFAULT_MESSAGE;
        multiResponse.data = data;
        multiResponse.total = total;
        return multiResponse;
    }

    /**
     * 构建分页
     * @param Paginated<T> 分页
     */
    static ofPaginated<T>(paginated: Paginated<T>): MultiResponse<T>{
        let multiResponse = new MultiResponse<T>();
        multiResponse.code = DEFAULT_CODE;
        multiResponse.message = DEFAULT_MESSAGE;
        multiResponse.data = paginated.data;
        multiResponse.total = paginated.total;
        return multiResponse;
    }

    /**
     * 构建数据
     * @param data 数据
     */
    static ofWithoutTotal<T>(data: Array<T>): MultiResponse<T>{
        return this.of(data, 0);
    }

    static buildSuccess<T>(): MultiResponse<T> {
        let multiResponse = new MultiResponse<T>();
        multiResponse.code = DEFAULT_CODE;
        return multiResponse;
    }

    /**
     * 构筑失败
     * @param responseState 响应状态
     */
    static buildFailure<T>(responseState: ResponseState): MultiResponse<T>{
        let multiResponse = new MultiResponse<T>();
        multiResponse.code = responseState.getCode();
        multiResponse.message = responseState.getMessage();
        return multiResponse;
    }
}

/**
 * 单响应
 * @author ike jpx1024@gmail.com
 */
export class SingleResponse<T> extends Response {
    /**
     * 数据
     */
    data: T;

    /**
     * 构建数据
     * @param data 数据
     */
    static of<T>(data: T): SingleResponse<T>{
        let singleResponse = new SingleResponse<T>();
        singleResponse.code = DEFAULT_CODE;
        singleResponse.message = DEFAULT_MESSAGE;
        singleResponse.data = data;
        return singleResponse;
    }

    /**
     * 构筑成功
     * @return 单响应
     */
    static buildSuccess<T>(): SingleResponse<T> {
        let singleResponse = new SingleResponse<T>();
        singleResponse.code = DEFAULT_CODE;
        return singleResponse;
    }

    /**
     * 构筑失败
     * @param responseState 响应状态
     * @return 单响应
     */
    static buildFailure<T>(responseState: ResponseState): SingleResponse<T>{
        let singleResponse = new SingleResponse<T>();
        singleResponse.code = responseState.getCode();
        singleResponse.message = responseState.getMessage();
        return singleResponse;
    }
}

/**
 * 响应状态
 * @author ike jpx1024@gmail.com
 */
export interface ResponseState{
    /**
     * 获取代码
     */
    getCode(): string;

    /**
     * 获取消息
     */
    getMessage(): string;

}