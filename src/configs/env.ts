import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.test' : '.env',
});

export default {
  port: process.env.PORT || 3000,
  service: {
    name: process.env.SERVICE_NAME,
    code_version: process.env.CODE_VERSION || '1.0.0',
  },
  database: {
    url: process.env.DB_URI || undefined,
  },
};
