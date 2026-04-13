function imageAsset(fileName, alt) {
  return {
    kind: 'image',
    browserSrc: `/images/${fileName}`,
    filePath: `../../../public/images/${fileName}`,
    alt,
  }
}

export const assets = {
  googleDocsPlaceholder: imageAsset(
    'google-docs-screenshot.png',
    'Google Docs business plan screenshot',
  ),
  microsoftWordPlaceholder: imageAsset(
    'microsoft-word-screenshot.png',
    'Microsoft Word blank document screenshot',
  ),
  applePagesPlaceholder: imageAsset(
    'apple-pages-screenshot.png',
    'Apple Pages blank document screenshot',
  ),
  cliSurfacePlaceholder: imageAsset(
    'cli-surface-screenshot.png',
    'Cursor CLI screenshot showing an agent session in the terminal',
  ),
  ideSurfacePlaceholder: imageAsset(
    'ide-surface-screenshot.png',
    'Cursor IDE screenshot showing the editor, slide preview, and agent chat',
  ),
  cloudSurfacePlaceholder: imageAsset(
    'cloud-surface-screenshot.png',
    'Cursor cloud agents screenshot in the browser',
  ),
  marketplacePlaceholder: imageAsset(
    'marketplace-screenshot.png',
    'Cursor marketplace screenshot showing team-pinned plugins',
  ),
  claudePluginPlaceholder: imageAsset(
    'cli-plugin-directory-screenshot.png',
    'Cursor CLI plugins directory screenshot in the terminal',
  ),
}

export function getAsset(key) {
  return assets[key]
}
