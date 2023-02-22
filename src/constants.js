export const PUNKBIDV1_ADDRESS = "0x73c68f1f41e4890d06ba3e71b9e9dfa555f1fb46";

export const PUNKBIDV1_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_WETH",
        type: "address",
      },
      {
        internalType: "address",
        name: "_CRYPTOPUNKS_MARKET",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidBid",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidOffer",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
    ],
    name: "BidCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "expiration",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "itemsChecksum",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "cartMetadata",
        type: "bytes",
      },
    ],
    name: "BidEntered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "punkIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "BidFilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "BidUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "CRYPTOPUNKS_MARKET",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "punkIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minWeiAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "acceptBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bids",
    outputs: [
      {
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "expiration",
        type: "uint96",
      },
      {
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "itemsChecksum",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "bidIds",
        type: "uint256[]",
      },
    ],
    name: "cancelBids",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "expiration",
        type: "uint96",
      },
      {
        internalType: "bytes32",
        name: "itemsChecksum",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "cartMetadata",
        type: "bytes",
      },
    ],
    name: "enterBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nextBidId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bidId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weiAmount",
            type: "uint256",
          },
        ],
        internalType: "struct PunkBidMarketV1.BidUpdate[]",
        name: "updates",
        type: "tuple[]",
      },
    ],
    name: "updateBids",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
