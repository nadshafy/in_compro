export function isAdmin(session: any) {
  return session?.user?.role === "ADMIN";
}
