import { ConfigManagerUpsertReq } from '@/config-manager/dtos/config-manager-upsert-req.dto';

export function prepareBulkWriteConfigs(req: ConfigManagerUpsertReq[], namespace: string) {
  return req.map((config) => ({
    updateOne: {
      upsert: true,
      filter: { configId: config.configId, namespace },
      update: {
        value: typeof config.value === 'string' ? config.value : JSON.stringify(config.value),
      },
    },
  }));
}
