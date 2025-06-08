import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(comments: Plugin[]) {
  const installer = (app: App) => each(comments, (c) => app.use(c));
  return installer as Plugin;
}

export function withInstall<T>(component: T) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component.install = (app: App) => {
    const name = (component as any).name;
    app.component(name, component as Plugin);
  };
  return component as SFCWithInstall<T>;
}
