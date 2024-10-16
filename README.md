# Liquid Staking DApp - Backend

This repository contains the smart contracts and backend scripts for the Liquid Staking Decentralized Application (DApp). It enables users to stake their Ethereum and earn rewards via a liquid staking mechanism.

## Table of Contents

- [Getting Started](#getting-started)
- [Smart Contracts](#smart-contracts)
- [Installation](#installation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Hardhat](https://hardhat.org/) (for Ethereum development)
- Ethereum wallet with test ETH (e.g., MetaMask) for deploying on a test network

### Smart Contracts

The project consists of two main smart contracts:

1. **LiquidToken.sol**: Implements an ERC-20 token used in the staking process.
2. **Stacking.sol**: Manages the staking mechanism, including deposit and redeem functionality.

Both contracts are located in the `contracts/` directory.

## Installation

To set up and install the backend of this DApp:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/balu6914/LS-Dapp.git
    cd LS-Dapp
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Compile the smart contracts using Hardhat:**

    ```bash
    npx hardhat compile
    ```

## Testing

This project includes some basic tests for verifying the smart contract functionality. Tests are located in the `test/` directory.

To run the tests using Hardhat:

```bash
npx hardhat test
Deployment
To deploy the smart contracts on a local or test Ethereum network (e.g., Rinkeby, Goerli), use the deployment script provided.

Update the network settings in hardhat.config.js as needed.

Deploy the contracts by running:

bash
Copy code
npx hardhat run scripts/deploy.js --network <network-name>
After deployment, contract addresses will be printed in the terminal.

Project Structure
bash
Copy code
.
├── README.md                      # Project documentation
├── contracts/                     # Smart contracts
│   ├── LiquidToken.sol            # ERC-20 token contract
│   └── Stacking.sol               # Staking contract
├── hardhat.config.js              # Hardhat configuration
├── ignition/                      # Hardhat ignition scripts (if any)
│   └── modules/                   # Ignition modules
│       └── Lock.js
├── package.json                   # Project dependencies and scripts
├── scripts/                       # Deployment scripts
│   └── deploy.js                  # Contract deployment script
└── test/                          # Contract tests
    └── Lock.js                    # Test cases for the contracts
Key Files
LiquidToken.sol: Implements the liquid staking token (ERC-20).
Stacking.sol: Contains the staking logic and functions.
deploy.js: Script for deploying the contracts to the blockchain.
hardhat.config.js: Configuration for the Hardhat development environment.
License
This project is licensed under the MIT License.
