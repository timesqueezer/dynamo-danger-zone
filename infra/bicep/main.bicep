targetScope = 'resourceGroup'

@minLength(1)
@maxLength(64)
@description('Name which is used to generate a short unique hash for each resource')
param name string

@minLength(1)
@description('Primary location for all resources')
param location string

var resourceToken = toLower(uniqueString(subscription().id, name, location))

// resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' existing = {
//   name: 'rg-Matz-Jona-Radloff'
// }
// rg-Matz-Jona-Radloff

module resources 'resources.bicep' = {
  name: 'resources'
  // scope: resourceGroup
  params: {
    name: name
    location: location
    resourceToken: resourceToken
  }
}

output backendAppName string = resources.outputs.backendAppName
output frontendAppName string = resources.outputs.frontendAppName
output backendWebAppUri string = resources.outputs.backendWebAppUri
output frontendWebAppUri string = resources.outputs.frontendWebAppUri
// output connectionSettings array = resources.outputs.connectionSettings
output backendWebAppLogStream string = resources.outputs.backendWebAppLogStream
output backendWebAppSSH string = resources.outputs.backendWebAppSSH
output backendWebAppConfig string = resources.outputs.backendWebAppConfig
