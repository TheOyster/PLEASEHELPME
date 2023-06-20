
async function depositDOTtoMoonbeam() {
  const wsProvider = new WsProvider("wss://rpc.polkadot.io");
  const api = await ApiPromise.create({ provider: wsProvider });

  const mnemonic =
    "SEED PHRASE ";
  const keyring = new Keyring({ type: "sr25519" });
  const polkadotKeyring = keyring.addFromUri(mnemonic);

  const addr = "1CUKKQhuqcbqXSY4QhWZxFct5uTKbWVCMKMUBHqWyc8ds1c";
 

  const dot = AssetSymbol.DOT;
  const polkadot = ChainKey.Polkadot;
  const { chains, from } = moonbeam.deposit(dot);


    const { asset, sourceBalance, source, min, send } = await from(polkadot).get("0xD27cEcE5CE8b4f6Fa47A160105D842F97aee227d", polkadotKeyring);
 
    await send(+"1000000", (event) => console.log(event));
    await sleep(10000);
  }
