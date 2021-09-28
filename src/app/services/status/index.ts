import env from '../../../configs/env';
import { Info, StatusService } from './interfaces/statusServiceInterface';

function statusService(): StatusService {
  const info: Info = {
    status: 200,
    dateTime: new Date().toISOString(),
    codeVersion: env.service.code_version,
  };

  const retrieveHealth = async () => ({
    status: 200,
    data: info,
  });

  return {
    retrieveHealth,
  };
}

export default statusService;
