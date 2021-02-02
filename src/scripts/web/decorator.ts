import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_KEY } from './constants';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const CurrentUser = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();;
        return request.user;
    },
);