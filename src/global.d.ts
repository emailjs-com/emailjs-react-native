export {};

declare global {
  var window: {
    location?: {
      pathname?: string;
    };
    [key: string]: unknown;
  };
}
