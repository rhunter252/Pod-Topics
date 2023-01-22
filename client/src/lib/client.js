import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "wpjdxhmj",
  dataset: "production",
  apiVersion: "2023-01-21",
  useCdn: true,
});
