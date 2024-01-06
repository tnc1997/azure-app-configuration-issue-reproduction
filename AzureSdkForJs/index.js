const { AppConfigurationClient } = require("@azure/app-configuration");

async function main() {
    const client = new AppConfigurationClient(process.env["ConnectionStrings__AzureAppConfiguration"], { allowInsecureConnection: true });

    await client.setConfigurationSetting({ key: "azure-sdk-for-js", value: "Hello World" });

    console.log(`The value of the configuration setting is: ${(await client.getConfigurationSetting({ key: "azure-sdk-for-js" })).value}`);

    await client.deleteConfigurationSetting({ key: "azure-sdk-for-js" });
}

main().catch((err) => {
    console.error("Failed to run sample:", err);
    process.exit(1);
});
