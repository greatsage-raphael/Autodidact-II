import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = '0xD5b1E27b851C3b3C5ed87724005BD78e2Cc3Ea22';
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log('Creating NFT batch...');

  const created = await bundleModule.createAndMintBatch([
    {
        metadata: {
          name: 'Auto 0',
          description: 'cattus',
          image: readFileSync('./assets/7.png'),
          properties: {
            rarity: 'Extremely rare !!!',
            fanciness: 7,
          }
        },
        supply: 5,
      },
    {
      metadata: {
        name: 'Auto I',
        description: 'Mukarami I',
        image: readFileSync('./assets/0.png'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'Auto II',
        description: 'Mukarami II',
        image: readFileSync('./assets/1.png'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'Auto III',
        description: 'Mukarami III',
        image: readFileSync('./assets/2.png'),
        properties: {
          rarity: 'super rare!',
          fanciness: 10,
        }
      },
      supply: 10,
    },
    {
        metadata: {
          name: 'Auto IV',
          description: 'Mukarami IV',
          image: readFileSync('./assets/3.png'),
          properties: {
            rarity: 'a bit rare',
            fanciness: 7,
          }
        },
        supply: 50,
      },
      {
        metadata: {
          name: 'Auto V',
          description: 'Kubo I',
          image: readFileSync('./assets/4.png'),
          properties: {
            rarity: 'a bit rare',
            fanciness: 7,
          }
        },
        supply: 50,
      },
      {
        metadata: {
          name: 'Auto VI',
          description: 'Kubo II',
          image: readFileSync('./assets/5.png'),
          properties: {
            rarity: 'a bit rare',
            fanciness: 7,
          }
        },
        supply: 50,
      },
      {
        metadata: {
          name: 'Auto VII',
          description: 'Mukarami V',
          image: readFileSync('./assets/6.png'),
          properties: {
            rarity: 'a bit rare',
            fanciness: 7,
          }
        },
        supply: 50,
      },
  ]);

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}