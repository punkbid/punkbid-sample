import { ethers, utils } from "ethers";
import { PUNKBIDV1_ABI, PUNKBIDV1_ADDRESS } from "./constants.js";
import { Cart } from "@punk.bid/sdk";
import MerkleTree from "@punk.bid/merkle";

const provider = new ethers.providers.WebSocketProvider(
  process.env.ETH_WS_ENDPOINT
);
const contract = new ethers.Contract(
  PUNKBIDV1_ADDRESS,
  PUNKBIDV1_ABI,
  provider
);

const handleNewBid = (
  bidId,
  bidder,
  expiration,
  amount,
  name,
  checksum,
  metadata
) => {
  console.log("New bid entered", {
    bidId,
    bidder,
    expiration,
    amount: amount,
    name,
    checksum,
    metadata,
  });

  // let's deserialize the cart and rebuild the merkle tree.
  // we should find that the merkle root hash is equal to the 'checksum' field
  const cart = Cart.deserialize(utils.arrayify(metadata));
  const punkIds = Array.from(cart.computeContent());
  const tree = new MerkleTree(punkIds);
  console.log(`${checksum} === ${tree.root}`);
};

contract.on("BidEntered", handleNewBid);
