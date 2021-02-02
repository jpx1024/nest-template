import { ResponseState } from '../common/response';

export class State implements ResponseState {

    constructor(code: string, message: string) {
        this.code = code;
        this.message = message;
    }

    code: string;

    message: string;

    getCode(): string {
        return this.code;
    }
    getMessage(): string {
        return this.message;
    }

}

export class CustomResponse {
    static B_USER_NOT_FOUND = new State("B_USER_NOT_FOUND", "用户找不到")
}