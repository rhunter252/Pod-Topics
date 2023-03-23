import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "wpjdxhmj",
  dataset: "production",
  apiVersion: "2023-01-21",
  useCdn: true,
  token:
    "skNFXVgpAURUItLXa67e94gfKsBwUr43FIjMEVe8m8IQphkJ80Btw7TEZ6iGFg95ixfYLXnlAFWuBrKFUwFTvqs4eAe18bBzXwOXf0CtzXtWVWdCoQMftZYkcV1DqHXole0mOFyA4Fo9rWVGGirtKJFYEv78lFlWw1Z1gcX2Uw237HYugRJx",
});
