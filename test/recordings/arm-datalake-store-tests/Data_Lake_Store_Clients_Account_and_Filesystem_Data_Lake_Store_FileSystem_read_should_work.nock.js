// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls8152.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?overwrite=true&op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls8152.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/concatfile.txt?overwrite=true&op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '60b6c605-8164-4a42-b9e5-ee9a2c29a47c',
  'set-cookie': [ 'UserPrincipalSession=06c27788-868b-42fc-b510-bf3334b990fb; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[60b6c60581644a42b9e5ee9a2c29a47c][ AuthTime::1397.70593173909::PostAuthTime::31027.1042894774 ][FsDelete :: 00:00:258 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:259 ms]%0a[FsOpenStream :: 00:00:098 ms]%0a[Open :: 00:00:098 ms]%0a[FsAppendStream :: 00:00:601 ms]%0a[Write :: 00:00:602 ms]%0a[CREATE :: 00:00:961 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:33:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls8152.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?overwrite=true&op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls8152.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/concatfile.txt?overwrite=true&op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '60b6c605-8164-4a42-b9e5-ee9a2c29a47c',
  'set-cookie': [ 'UserPrincipalSession=06c27788-868b-42fc-b510-bf3334b990fb; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[60b6c60581644a42b9e5ee9a2c29a47c][ AuthTime::1397.70593173909::PostAuthTime::31027.1042894774 ][FsDelete :: 00:00:258 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:259 ms]%0a[FsOpenStream :: 00:00:098 ms]%0a[Open :: 00:00:098 ms]%0a[FsAppendStream :: 00:00:601 ms]%0a[Write :: 00:00:602 ms]%0a[CREATE :: 00:00:961 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:33:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls8152.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?length=23&offset=0&op=OPEN&read=true&api-version=2015-10-01-preview')
  .reply(200, "adls sdk test content!a", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': 'a9bf28d4-728c-476c-9e2c-491b9899525b',
  'set-cookie': [ 'UserPrincipalSession=fad58b28-816d-4d28-9171-e771896e37b5; path=/; secure; HttpOnly' ],
  'server-perf': '[a9bf28d4728c476c9e2c491b9899525b][ AuthTime::1370.76175861249::PostAuthTime::30883.8398094876 ][FsOpenStream :: 00:00:058 ms]%0a[Open :: 00:00:058 ms]%0a[FsReadStream :: 00:01:543 ms]%0a[OPEN :: 00:01:602 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:33:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls8152.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?length=23&offset=0&op=OPEN&read=true&api-version=2015-10-01-preview')
  .reply(200, "adls sdk test content!a", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': 'a9bf28d4-728c-476c-9e2c-491b9899525b',
  'set-cookie': [ 'UserPrincipalSession=fad58b28-816d-4d28-9171-e771896e37b5; path=/; secure; HttpOnly' ],
  'server-perf': '[a9bf28d4728c476c9e2c491b9899525b][ AuthTime::1370.76175861249::PostAuthTime::30883.8398094876 ][FsOpenStream :: 00:00:058 ms]%0a[Open :: 00:00:058 ms]%0a[FsReadStream :: 00:01:543 ms]%0a[OPEN :: 00:01:602 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 15 Mar 2016 20:33:15 GMT',
  connection: 'close' });
 return result; }]];