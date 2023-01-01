import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import type { PackMetadataWithBalance, BundleMetadata } from "@3rdweb/sdk";
import { useEffect, useState } from "react";
import { packAddress, bundleAddress } from "../lib/contractAddresses";
import NFT from "../components/nft";
import OpenButton from "../components/open-button";


export function getStaticProps() {
  return {
    props: {
      title: "Winner's Lounge",
    },
  };
}

export default function Lounge() {

const { address, provider } = useWeb3();
const [loading, setLoading] = useState(false);
const [packNfts, setPackNfts] = useState<PackMetadataWithBalance[]>([]);
const [bundleNfts, setBundleNfts] = useState<BundleMetadata[]>([]);


const signer = provider?.getSigner()
const sdk = new ThirdwebSDK("https://rpc-mumbai.maticvigil.com/")
const packModule = sdk.getPackModule(packAddress);
const bundleModule = sdk.getBundleModule(bundleAddress);

async function getNfts() {
  const [fetchedPackNfts, fetchedBundleNfts] = await Promise.all([
    packModule.getOwned(address),
    bundleModule.getOwned(address),
  ])
  console.log({ fetchedPackNfts, fetchedBundleNfts });
  setPackNfts(fetchedPackNfts);
  setBundleNfts(fetchedBundleNfts);
}

async function getNftsWithLoading() {
  setLoading(true);
  try {
    await getNfts()
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  if (address) {
    getNftsWithLoading()
  }
}, [address])

useEffect(() => {
  if (signer) {
    sdk.setProviderOrSigner(signer)
  }
}, [signer])


if (!address) {
  return <p className="text-red-800">Please connect your wallet to access the lounge!</p>
}

if (loading) {
  return (
    <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      <span className="sr-only">Loading</span>
    </svg>
  )
}

if (packNfts.length === 0 && bundleNfts.length === 0) {
  return (
    <p>You need to own some NFTs to access the lounge!</p>
  )
}

return (
  <div className="flex flex-col gap-8">
    {bundleNfts.length > 0 && (
  <div>
    <h2 className="text-4xl font-bold">Your Collection</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-2">
      {bundleNfts.map((nft) => (
        <div className="border border-blue-500 rounded-lg p-4" key={nft.metadata.id}>
          <NFT metadata={nft.metadata} />
          <p className="text-gray-800">Balance: {nft.ownedByAddress.toString()}</p>
        </div>
      ))}
    </div>
  </div>
)}

    <div>
      <h2 className="text-4xl font-bold">Welcome Autodidact</h2>
      <p>Congratulations on making it here</p>
    </div>
  </div>
)
}
