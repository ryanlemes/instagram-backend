import { Context } from 'koa';
import statusService from '../services/status';
import { Health, StatusService } from '../services/status/interfaces/statusServiceInterface';

function StatusController(_statusService?: StatusService) {
  const service = _statusService || statusService();

  const health = async (ctx: Context) => {
    const responseHealth: Health = await service.retrieveHealth();
    ctx.status = responseHealth.status;
    ctx.body = responseHealth.data;
  };

  return {
    health,
  };
}

export default StatusController;
