import { API_URLS } from '../config/urls';
import { CreateUserRequestBody, CreateUserResponseBody } from './post-merchant.type';
import { request } from './request';
import { GeneralRequestOptions } from './request.type';

export const postMerchant = async (
  CreateUserRequestBody: CreateUserRequestBody,
  { status = 201, silent = false }: GeneralRequestOptions = {},
): Promise<CreateUserResponseBody> => {
  const { body } = await request({
    type: 'POST',
    url: API_URLS.merchant(),
    body: CreateUserRequestBody,
    status,
    silent,
  });

  return body;
};
