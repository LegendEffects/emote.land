export default async (ctx) => {
  // Since nuxt didn't do it for us, we just loop through every registered store action
  // and check if it is nuxtClientInit and then give it the context.

  for(const action in ctx.store._actions) {
    const split = action.split('/');
    if(split.pop() === 'nuxtClientInit') {
      ctx.store.dispatch(action, ctx);
    }
  }
}
