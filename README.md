# solidity-react-campaign

Project build off Stephen Griders Udemy course: Ethereum and Solidity: The Complete Developer's Guide

## Available commands

### Compile

Compiles the project generating the abi and the bytecode.

```bash
$ node compile
```

### Deploy

Deploys the project and create a file with the respective address

```bash
$ node deploy
```

> **_REMINDER TO SELF:_** ADDED ENVIRONMENT VARIABLE TO HIDE MY MNEMONIC PHRASE AND INFURA LINK AFTER DEPLOYMENT

### Test

Runs the mocha tests for the smart contracts.

```bash
$ npm run test
```

### Development server

Starts the development server.

```bash
$ npm run dev
```

## Overview

### Root Page - Campaigns List

![root-page](public/campaigns.png)

### Create Campaign Page

![create-campaign-form](public/createcampaign.png)

### Campaign Details Page

![campaign-details](public/details.png)

### Requests List

![requests](public/requestsFIN.png)

### New Request Form

![new-request](public/createrequest.png)

### Approved & Finalized Request Form

![finalized-request](public/approvedfin.png)
