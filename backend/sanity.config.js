import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'pod topics',

  projectId: 'wpjdxhmj',
  dataset: 'production',

  token:
    'skNFXVgpAURUItLXa67e94gfKsBwUr43FIjMEVe8m8IQphkJ80Btw7TEZ6iGFg95ixfYLXnlAFWuBrKFUwFTvqs4eAe18bBzXwOXf0CtzXtWVWdCoQMftZYkcV1DqHXole0mOFyA4Fo9rWVGGirtKJFYEv78lFlWw1Z1gcX2Uw237HYugRJx',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
