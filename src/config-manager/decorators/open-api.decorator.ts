import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { ConfigManagerUpsertReq } from '../dtos/config-manager-upsert-req.dto';

const ServiceIdParam = () => ApiParam({ name: 'serviceId', type: String });
const ConfigIdParam = () => ApiParam({ name: 'configIds', type: String });

export function OpenApi_Upsert() {
  return applyDecorators(
    ApiBody({
      required: true,
      type: ConfigManagerUpsertReq,
      isArray: true,
    }),
    ApiQuery({
      name: 'ttlServiceId',
      type: Number,
      required: false,
    }),
    ApiCreatedResponse(),
    ApiInternalServerErrorResponse(),
    ApiBadRequestResponse(),
    ApiBearerAuth(),
  );
}

export function OpenApi_GetByServiceId() {
  return applyDecorators(
    ApiInternalServerErrorResponse(),
    ApiUnprocessableEntityResponse(),
    ApiOkResponse({
      isArray: true,
      type: ConfigManagerUpsertReq,
    }),
    ServiceIdParam(),
    ApiBearerAuth(),
  );
}

export function OpenApi_GetByServiceIdConfigIds() {
  return applyDecorators(
    ApiInternalServerErrorResponse(),
    ApiUnprocessableEntityResponse(),
    ApiOkResponse(),
    ServiceIdParam(),
    ConfigIdParam(),
    ApiBearerAuth(),
  );
}

export function OpenApi_DeleteByServiceId() {
  return applyDecorators(
    ApiOkResponse(),
    ApiInternalServerErrorResponse(),
    ServiceIdParam(),
    ApiBearerAuth(),
  );
}

export function OpenApi_DeleteByServiceIdConfigIds() {
  return applyDecorators(
    ApiOkResponse(),
    ApiInternalServerErrorResponse(),
    ServiceIdParam(),
    ConfigIdParam(),
    ApiBearerAuth(),
  );
}
