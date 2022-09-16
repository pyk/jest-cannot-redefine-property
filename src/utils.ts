// TODO: refactor this
interface Chain {
    chainId: number;
}

interface BaseConfig extends Chain {
    supportedChains: Array<Chain>;
}

const Arbitrum = {
    chainId: 42161,
};

const BSC = {
    chainId: 56,
};

const supportedChains = [Arbitrum, BSC];

const baseConfigs = {
    bsc: BSC,
    arbitrum: Arbitrum,
};

/**
 * Given NEXT_PUBLIC_CHAIN_SLUG from configuration then return the base config
 */
export function getBaseConfig(): BaseConfig {
    const chainSlug = process.env.NEXT_PUBLIC_CHAIN_SLUG || "bsc";
    // @ts-ignore
    return { ...baseConfigs[chainSlug], supportedChains };
}

export default getBaseConfig;
