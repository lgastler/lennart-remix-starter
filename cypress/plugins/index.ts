module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => {
  const isDev = config.watchForFileChanges
  const port = process.env.PORT ?? (isDev ? '3000' : '8811')
  const configOverrides: Partial<Cypress.PluginConfigOptions> = {
    baseUrl: `http://localhost:${port}`,
    viewportWidth: 1030,
    viewportHeight: 800,
    integrationFolder: 'cypress/e2e',
    video: !process.env.CI,
    screenshotOnRunFailure: !process.env.CI,
  }
  Object.assign(config, configOverrides)

  return config
}
