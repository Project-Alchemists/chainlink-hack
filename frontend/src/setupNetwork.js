import { injected } from "./connectors";

export const setupNetwork = async (chainId, rpcUrl) => {
  try {
    const provider = await injected.getProvider();
    try {
      provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          provider.request({
            method: "wallet_addEthereumChain",
            params: [{ chainId: `0x${chainId.toString(16)}`, rpcUrl }],
          });
        } catch (addError) {
          // handle "add" error
          console.log(addError);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};
