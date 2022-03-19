/** Root level API config */
export interface IApiConfig {
  /** Allowed origins for CORS */
  allowedOrigins: string[];
  /** API port */
  port: number;
  /** Whether API is in a production environment */
  production: boolean;
  /** Release date */
  releaseDate?: string;
  /** Git commit hash */
  releaseHash?: string;
  /** API project version */
  version: string;
}
