# ItPay Protocol

Open-source specification for AI-native, QR-based payment aggregation.

**License:** Apache 2.0  
**Spec Version:** 2025-06-01  
**Documentation:** [docs.itpay.ai](https://docs.itpay.ai)

## Overview

The ItPay Protocol is a decentralized, channel-agnostic payment protocol that decouples payment orchestration from underlying payment rails. It defines a canonical **four-party model** — Payer, Payee, Channel, Platform — where the platform never touches money.

### Key Design Decisions

- **Decoupled money and data** — Platform routes payment information only. Funds flow directly from Payer to Payee.
- **QR-native** — Built around the EMVCo QR standard. Extended with structured intent data.
- **Channel-agnostic core** — All payment-rail-specific logic in pluggable Channel adapters.
- **Agent-first** — All operations designed for autonomous AI Agent execution via HTTP 402 semantics, MCP tools, and webhook-driven state machines.

## Core Capabilities

| Capability | Description |
|-----------|-------------|
| Broadcast/Discovery | Payee publishes ServiceManifest; Payers discover via directory |
| One-Time Pay | Single payment for a discrete service |
| Subscribe Pay | Recurring payments for ongoing service |
| Cumulative Pay | Aggregated charges across multiple sessions |
| Refund with Revocation | Return funds and revoke service entitlements |
| Void Service | Cancel pending or future service without refund |
| Escrow Payments | Conditionally held funds released on delivery confirmation |
| Install Payments | Split single total into scheduled installments |
| Request Payment | Payer-initiated payment request to a Payee |

## Documentation

The full protocol specification and API reference is available at **[docs.itpay.ai](https://docs.itpay.ai)**.

### Local Development

```bash
git clone https://github.com/itpay-ai/protocol.git
cd protocol
npm install
npm start
```

## License

Copyright © 2025 ItPay. This project is [Apache 2.0](LICENSE) licensed.
