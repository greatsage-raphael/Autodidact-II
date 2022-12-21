import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x13742896d8bEb5d288F22eA9c1c61aBc33a146bC';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}

