import { 
    convexAuthNextjsMiddleware, 
    createRouteMatcher,
    //isAuthenticatedNextjs,
    nextjsMiddlewareRedirect,
 } from "@convex-dev/auth/nextjs/server";

//  import { parse } from 'cookie'; 




const isPublicPage = createRouteMatcher(["/auth"]);
 
export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {

    const isAuthenticated = await convexAuth.isAuthenticated();

    // console.log("Request path:", request.nextUrl.pathname);
    // console.log("Is authenticated:", isAuthenticated);
    // console.log("Is public page:", isPublicPage(request));
    // console.log("Authorization header:", request.headers.get("Authorization"));
    //console.log(request);

//     const cookies = parse(request.headers.get('cookie') || '');

//     const jwtToken = cookies.__convexAuthJWT;

//   console.log("JWT Token from cookies:", jwtToken);


    //console.log(await convexAuth.isAuthenticated());
    //console.log(request);

    if(!isPublicPage(request) && !isAuthenticated) {
        return nextjsMiddlewareRedirect(request, "/auth");
    }
    if(isPublicPage(request) && isAuthenticated){
        return nextjsMiddlewareRedirect(request,"/")
    }

    return undefined;
    //TODO: redirect user away from "/auth"
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


      
