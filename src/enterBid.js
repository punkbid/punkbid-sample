import MerkleTree from "@punk.bid/merkle";
import { Cart, filter } from "@punk.bid/sdk";
import { ethers, utils } from "ethers";
import { PUNKBIDV1_ABI, PUNKBIDV1_ADDRESS } from "./constants.js";

// Instantiate a new cart object
const cart = new Cart();

// Add all non humans to our cart
// note: typescript provide strong typing and auto completion on filters
cart.add(filter("Alien"));
cart.add(filter("Ape"));
cart.add(filter("Zombie"));

// Our cart is filled, now we can retrieve its content and serialize it
// note: computeContent returns a Set<number>
const punkIds = Array.from(cart.computeContent());
console.log("this is the content of the cart:\n", punkIds);
const cartMetadata = cart.serialize();

// Before sending our transaction, we need to compute the root hash
// of a merkle tree where each leaf is a punk id in our cart
const tree = new MerkleTree(Array.from(punkIds));
const root = tree.root;
console.log(`the merkle root hash is ${root}`);

const provider = new ethers.providers.WebSocketProvider(
  process.env.ETH_WS_ENDPOINT
);
const wallet = new ethers.Wallet(process.env.MY_PRIVATE_KEY, provider);
const contract = new ethers.Contract(PUNKBIDV1_ADDRESS, PUNKBIDV1_ABI, wallet);

const txResponse = await contract.enterBid(
  // bid amount of WETH (in wei)
  utils.parseEther("0.1"),

  // expiration date, here in 24 hours
  Math.round(Date.now() / 1000) + 60 * 60 * 24,

  // the merkle root hash
  root,

  // a name for our bid, handy to sort out your bids
  "Non Humans",

  // the serialized cart
  cartMetadata,

  {
    gasLimit: 200_000,
  }
);

const receipt = await txResponse.wait();

console.log(receipt);
process.exit(0);
