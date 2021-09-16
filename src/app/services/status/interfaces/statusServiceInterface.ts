export interface Info {
  status: number,
  date_time: string,
  code_version: string,
}

export interface Health {
  status: number,
  data: Info
}

export interface StatusService {
  retrieveHealth: () => Promise<Health>;
}
