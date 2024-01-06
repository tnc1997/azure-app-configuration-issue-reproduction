1. Observe the non-default port of the emulator:
   ```yaml
   services:
     azure-app-configuration-emulator:
       environment:
         - ASPNETCORE_HTTP_PORTS=8080
       ports:
         - "8080:8080"
     azure-sdk-for-js:
       environment:
         - ConnectionStrings__AzureAppConfiguration=Endpoint=http://azure-app-configuration-emulator:8080;Id=abcd;Secret=c2VjcmV0;
     azure-sdk-for-net:
       environment:
         - ConnectionStrings__AzureAppConfiguration=Endpoint=http://azure-app-configuration-emulator:8080;Id=abcd;Secret=c2VjcmV0;
   ```
2. Compose the services using the non-default port:
   ```shell
   docker compose up
   ```
3. Change the port of the emulator to the default:
   ```yaml
   services:
     azure-app-configuration-emulator:
       environment:
         - ASPNETCORE_HTTP_PORTS=80
       ports:
         - "80:80"
     azure-sdk-for-js:
       environment:
         - ConnectionStrings__AzureAppConfiguration=Endpoint=http://azure-app-configuration-emulator;Id=abcd;Secret=c2VjcmV0;
     azure-sdk-for-net:
       environment:
         - ConnectionStrings__AzureAppConfiguration=Endpoint=http://azure-app-configuration-emulator;Id=abcd;Secret=c2VjcmV0;
   ```
4. Compose the services using the default port:
   ```shell
   docker compose up
   ```
