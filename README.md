# Exment Contract

## 1. Run Development

### 1.1Clone the project

```bash
  git clone git@pm.trithucmoi.co:ex1/blockchain.git
```

### 1.2 Create file env
```bash
cp .env_development .env
```
### 1.3 Install package

```bash
  npm install -g win-node-env
```

```bash
  yarn
```

### 1.4 Deploy

### 1.4.1 Deploy Exment Token
```bash
  yarn deploy:dev_goerli scripts/0_deploy_ExmentToken.js
```
### 1.5 Verify
```bash
  yarn verify:dev_goerli {address} {params}
```

## Document

### 1. Solidity

learning: https://solidity-by-example.org/
IDE online: https://remix.ethereum.org/
Course: https://cryptozombies.io/
Debug: https://dashboard.tenderly.co/

### 2. Hardhat

https://hardhat.org/hardhat-runner/docs/getting-started#overview
