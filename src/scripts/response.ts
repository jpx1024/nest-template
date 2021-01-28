import { ResponseState } from "./response.state";

export class Response {

    code: string

    message: string

    static buildSuccess(): Response {
        let response = new Response();
        response.code = "success"
        return response;
    }
    
    static buildFailure(responseState: ResponseState){
        let response = new Response();
        response.code = "success"
        response.message = responseState.getMessage();
        return response;
    }

}