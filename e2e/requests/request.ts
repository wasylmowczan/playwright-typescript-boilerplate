import supertestRequest from 'supertest';
import { Url } from '../config/urls.type';
import { log } from '../helpers/common';
import { Method, Request, RequestOptions } from './request.type';

const prepareRequest = (type: Method, url: Url): supertestRequest.Test => {
  const request = supertestRequest(url.base);
  switch (type) {
    case 'GET':
      return request.get(url.path);
    case 'POST':
      return request.post(url.path);
    case 'PUT':
      return request.put(url.path);
    case 'PATCH':
      return request.patch(url.path);
    case 'DELETE':
      return request.delete(url.path);
    default:
      throw new Error(`Type ${type} not supported`);
  }
};

export const request = ({ type, url, silent = false, status = 200, query, body }: RequestOptions): Request => {
  const _request = prepareRequest(type, url);

  if (!silent) {
    void _request.expect((res) =>
      log({
        request: type,
        url: `${url.base}${url.path}`,
        query,
        expectedStatus: status,
        body,
        response: res.body,
      }),
    );
  }

  if (query) {
    void _request.query(query);
  }

  if (body) {
    void _request.send(body);
  }

  void _request.expect(status);

  return _request;
};
