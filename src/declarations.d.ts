declare module "*.yaml" {
  const data: Record<string, unknown>;
  export default data;
}

interface ImportMetaEnv {
  readonly VITE_DEMO_MODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
