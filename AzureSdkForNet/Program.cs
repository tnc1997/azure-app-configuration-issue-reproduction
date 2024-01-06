using Azure.Data.AppConfiguration;

var client = new ConfigurationClient(Environment.GetEnvironmentVariable("ConnectionStrings__AzureAppConfiguration"));

await client.SetConfigurationSettingAsync(new ConfigurationSetting("azure-sdk-for-net", "Hello World"));

Console.WriteLine($"The value of the configuration setting is: {(await client.GetConfigurationSettingAsync("azure-sdk-for-net")).Value}");

await client.DeleteConfigurationSettingAsync("azure-sdk-for-net");
