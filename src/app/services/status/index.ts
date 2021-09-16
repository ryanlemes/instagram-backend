import env from '../../../configs/env';
import { Info, StatusService  } from './interfaces/statusServiceInterface';

function statusService(): StatusService {
  const info: Info = {
    status: 200,
    date_time: new Date().toISOString(),
    code_version: env.service.code_version,
  };

  const retrieveHealth = async () => ({
    status: 200,
    data: info,
  });

  return {
    retrieveHealth
  };
}

export default statusService;
