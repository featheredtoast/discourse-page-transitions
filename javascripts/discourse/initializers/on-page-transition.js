export default {
  name: "page-transitions",

  initialize(container) {
    const router = container.lookup("service:router");
    router.on('routeWillChange', (transition) => {
      console.log("route will change");
      console.log(transition?.from?.name);
      console.log(transition?.to?.name);
      // view transition should be waiting on the router to settle
      // route will change is within a router, so this should be async?
      //set scroll based on y scroll for old transition element
      document.documentElement.style.setProperty('--vt-scroll-y-old', `${-document.documentElement.scrollTop}px`);
      document.startViewTransition(() => {
        return transition.promise;
      });
    });
    router.on('routeDidChange', (transition) => {
      console.log("route did change");
      console.log(transition?.from?.name);
      console.log(transition?.to?.name);
    });
  }
}
