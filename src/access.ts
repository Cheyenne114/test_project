/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
    const { isAdmin, hasRoutes = [] } = initialState;
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
