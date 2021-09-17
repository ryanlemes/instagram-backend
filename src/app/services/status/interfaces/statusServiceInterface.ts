export interface Info {
  status: number,
  dateTime: string,
  codeVersion: string,
}

export interface Health {
  status: number,
  data: Info
}

export interface StatusService {
  retrieveHealth: () => Promise<Health>;
}
