 var appConfig = {
  OMSUri: 'wss://api_globalcrypto_prod.alphapoint.com/WSGateway/',
  serversList: [
    'ws://localhost:8086/WSGateway/',
    'ws://api.qa1.alphapoint.com:8086/WSGateway/',
    'ws://206.72.204.117:8086/WSGateway/',
    'ws://206.72.204.117:8000/WSAdminGateway/',
    'ws://apdev01.eastus.cloudapp.azure.com:8086/WSGateway/',
    'wss://api_aztec.alphapoint.com:443/WSGateway/',
    'wss://api.yap.cx:8443/WSGateway/',
    'ws://164.132.149.68:8086/WSGateway/',
    'wss://acceptance.alphapoint.com:8086/WSGateway/',
  ],
  useServerSelect: false,
  OperatorId: 1,
  DateTimeFormat: 'YYYY/MM/DD, HH:mm:ss.SSS',
  TwoFACookie: 'UNOAuth',
  enableCreateUser: true,
  UsersInfoRequestedKeys: [
    'LoginId',
  ],
  AccountsInfoRequestedKeys: [
    'FirmId',
    'FirmName',
  ],
  releaseVersion: 'v2.20.1 r4881',
};
