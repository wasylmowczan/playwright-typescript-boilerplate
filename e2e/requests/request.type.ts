import supertestRequest from 'supertest';
import { Url } from '../config/urls.type';

export type Method = 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE';

export interface RequestOptions {
  type: Method;
  url: Url;
  silent?: boolean;
  status?: number;
  query?: string | Record<string, string>;
  body?: string | object | undefined;
}

export type Request = supertestRequest.Test;

export interface GeneralRequestOptions {
  status?: number;
  silent?: boolean;
}
