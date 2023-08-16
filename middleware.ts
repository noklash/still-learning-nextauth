//  without a defined matcher, this one line applies next-auth to the entire project

export { default } from "next-auth/middleware"
// the code above locks the entire app with next-auth


// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/extra", "/dashboard"] }