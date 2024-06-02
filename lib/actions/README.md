```markdown
### `lib/actions` Folder

The `lib` folder in this Next.js application is used to store utility functions, configuration files, and other shared code that doesn't fit into the typical page or component structure. This helps in organizing reusable code, maintaining a clean project structure, and promoting code reuse.

please organize the actions based on the feature or the entity that it's related to.

for example, if we have a feature called "user", then we can create a folder called "user" inside the /actions folder.

#### exemple of Folder Structure:

- `lib/actions/user`:

  - `fetchUser.ts`: Function to fetch user data from an API.
  - `updateUser.ts`: Function to update user data.
  - `deleteUser.ts`: Function to delete a user.
  - `createUser.ts`: Function to create a new user.

- `lib/actions/post`:
  - `fetchPosts.ts`: Function to fetch posts from an API.
  - `createPost.ts`: Function to create a new post.
  - `updatePost.ts`: Function to update a post.
  - `deletePost.ts`: Function to delete a post.

#### Common Uses:

- **PRISMA Call**: Functions to interact with the database using Prisma.
- **State Management**: Functions to manage the state of the application.

- **API Calls**: Functions to make API calls to external services.
- **Utility Functions**: Helper functions that can be reused across the application.

#### Note:

- Make sure to keep the functions small, focused, and reusable.
- Use TypeScript to define the types of the parameters and return values.
- Add JSDoc comments to describe the purpose of the function, parameters, and return values.
- Test the functions thoroughly to ensure they work as expected.

#### Resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [JSDoc Documentation](https://jsdoc.app/)
- [Testing Library](https://testing-library.com/docs/intro)
```
