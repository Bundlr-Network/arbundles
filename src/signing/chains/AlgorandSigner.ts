import SolanaSigner from "./SolanaSigner";

export default class AlgorandSigner extends SolanaSigner {
  constructor(_key: string) {
    super(_key.replace("ed25519:", ""));
  }
}
