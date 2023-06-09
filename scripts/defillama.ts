type TChainTvl = {
  gecko_id: string;
  tvl: number;
  tokenSymbol: string;
  cmcId: string;
  name: string;
  chainId: number;
};
export const getTvlOfAllChains = async (): Promise<TChainTvl[]> => {
  const r: TChainTvl[] = await fetch("https://api.llama.fi/chains").then(
    (res) => res.json()
  );
  const res = r.map((item) => {
    item.tvl = parseFloat(item.tvl.toFixed(2));
    return item;
  });
  return res;
};

// {
//     "gecko_id": "ethereum",
//     "tvl": 53062538971.89303,
//     "tokenSymbol": "ETH",
//     "cmcId": "1027",
//     "name": "Ethereum",
//     "chainId": 1
//   }
