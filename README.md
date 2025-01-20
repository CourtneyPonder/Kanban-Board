# Kanban Board

Authentication with JSON Web Tokens (JWTs) is crucial for full-stack applications, as it provides a secure and scalable method for verifying user identities. JWTs are compact, URL-safe tokens that encode a user's authentication data, allowing servers to authenticate requests. Additionally, JWTs can include metadata and be easily verified and decoded, enhancing security while enabling seamless authentication across various parts of an application.

## User Story

```
AS A member of an agile team
I WANT a Kanban board with a secure login page
SO THAT I can securely access and manage my work tasks
```

## Technologies

Create a .env file for the server that includes:

A username for the database.

A password for the database.

A secret key for the JWT (this can be any random string).

Complete the authenticateToken method in server/src/middleware/auth.ts.

Complete the login method in server/src/routes/auth-routes.ts.

Add authentication to the API routes in server/src/routes/index.ts.

Complete the login method in client/src/api/authAPI.tsx.

Complete the methods of the AuthService in client/src/utils/auth.ts.

## References

I had some help with bootcamp course info, chatGPT, and stackoverflow
