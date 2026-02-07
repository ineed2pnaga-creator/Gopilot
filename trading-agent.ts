// trading-agent.ts

/**
 * Rule-Based Auto-Sell Trading Agent for Base Network
 * This TypeScript file implements a simple trading agent
 * that automatically sells assets based on predefined rules.
 */

interface Trade {
    asset: string;
    price: number;
    quantity: number;
}

class TradingAgent {
    private trades: Trade[] = [];

    constructor() {}

    public addTrade(asset: string, price: number, quantity: number): void {
        const trade: Trade = { asset, price, quantity };
        this.trades.push(trade);
        console.log(`Trade added:`, trade);
    }

    public evaluateTrades(): void {
        for (const trade of this.trades) {
            if (this.shouldSell(trade)) {
                this.sell(trade);
            }
        }
    }

    private shouldSell(trade: Trade): boolean {
        // Implement your selling logic here
        // Example: sell if the price exceeds a certain threshold
        const priceThreshold = 100; // example threshold
        return trade.price > priceThreshold;
    }

    private sell(trade: Trade): void {
        console.log(`Selling ${trade.quantity} of ${trade.asset} at price ${trade.price}`);
        // Implement your sell logic here
    }
}

// Example usage:
const agent = new TradingAgent();
agent.addTrade('BTC', 102, 1);
agent.evaluateTrades();
