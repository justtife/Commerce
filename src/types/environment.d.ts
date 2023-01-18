export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      MONGO_URI: string;
      NODE_ENV: 'test' | 'development' | 'production';
      SLACK_WEBHOOK_URL: string;
    }
  }
}