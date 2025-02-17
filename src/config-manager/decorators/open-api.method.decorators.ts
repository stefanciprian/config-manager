import { ApiBody, ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';

import { ConfigManagerLeanRes } from '../dtos/config-manager.res.dto';
import { ConfigManagerUpsertNamespaceReq } from '../dtos/config-manager-upsert-by-namespace.dto.req';
import { ConfigManagerUpsertReq } from '../dtos/config-manager-upsert-req.dto';

export const ApiParamNamespace = () => ApiParam({ name: 'namespace', type: String });
export const ApiQueryConfigIds = () => ApiQuery({ name: 'configIds', type: String, isArray: true });
export const ApiQueryTake = () => ApiQuery({ name: 'take', example: '100' });
export const ApiQuerySkip = () => ApiQuery({ name: 'skip', example: '0' });
export const ApiQueryNamespaces = (required = false) =>
  ApiQuery({ name: 'namespaces', type: String, isArray: true, required });

export const ApiBodyConfigManagerUpsert = () =>
  ApiBody({
    isArray: true,
    required: true,
    type: ConfigManagerUpsertReq,
  });

export const ApiBodyConfigManagerUpsertPerNamespace = () =>
  ApiBody({
    isArray: true,
    required: true,
    type: ConfigManagerUpsertNamespaceReq,
  });

export const ApiOkResponseConfigManagerUpsert = () =>
  ApiOkResponse({
    isArray: true,
    type: ConfigManagerUpsertReq,
  });

export const ApiOkResponsePagination = () =>
  ApiOkResponse({
    isArray: true,
    type: ConfigManagerLeanRes,
  });
