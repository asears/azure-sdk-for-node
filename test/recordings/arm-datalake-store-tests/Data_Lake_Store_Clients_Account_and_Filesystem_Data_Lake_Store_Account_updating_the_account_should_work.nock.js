// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8152?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8152.azuredatalakestore.net\",\"creationTime\":\"2016-03-15T20:31:37.3932086Z\",\"lastModifiedTime\":\"2016-03-15T20:32:50.3128467Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8152\",\"name\":\"xplattestadls8152\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '48bec4aa-5b47-44b6-ade8-f90eed4af4ca',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'fac39045-d53f-47f5-838c-b46901d19a74',
  'x-ms-routing-request-id': 'WESTUS:20160315T203252Z:fac39045-d53f-47f5-838c-b46901d19a74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:32:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8152?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8152.azuredatalakestore.net\",\"creationTime\":\"2016-03-15T20:31:37.3932086Z\",\"lastModifiedTime\":\"2016-03-15T20:32:50.3128467Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8152\",\"name\":\"xplattestadls8152\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '48bec4aa-5b47-44b6-ade8-f90eed4af4ca',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'fac39045-d53f-47f5-838c-b46901d19a74',
  'x-ms-routing-request-id': 'WESTUS:20160315T203252Z:fac39045-d53f-47f5-838c-b46901d19a74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:32:51 GMT',
  connection: 'close' });
 return result; }]];