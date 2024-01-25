export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URI: string;
      PORT: number;
    }
  }
}
