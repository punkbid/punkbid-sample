This repository contains some code samples showing how to interact with the punk.bid contract.

## Usage

First install the dependencies

```
  npm install
```

- enterBid.js demonstrate how to fill a cart and enter a bid.
- monitorBids.js listens for BidEntered events and print the bid content

```
ETH_WS_ENDPOINT="ws://..." npm run monitorBids
MY_PRIVATE_KEY="" ETH_WS_ENDPOINT="ws://..." npm run enterBid
```
