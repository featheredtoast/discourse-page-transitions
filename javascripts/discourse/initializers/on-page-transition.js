import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "page-transitions",

  initialize(container) {
    withPluginApi((api) => {
      api.registerBehaviorTransformer(
        "discovery:before-model",
        ({ next, context }) => {
          const transition = context.transition;
          console.log("before model transition discovery");
          document.documentElement.style.setProperty('--vt-scroll-y-old', `${-document.documentElement.scrollTop}px`);
          document.startViewTransition(() => transition.promise);
          next();
        }
      );

      const viewTransition = {
        async beforeModel(transition) {
          console.log("before model");
        },
      };
    });
  }
}
