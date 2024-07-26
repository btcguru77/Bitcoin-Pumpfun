export type TRaffleTypes = {
  ticketPrice: number;
  ordinalInscription: string;
  ticketList: Array<string>;
  ticketAmounts: number;
  createTime: number;
  endTime: number;
  endTimePeriod: number;
  winner: string;
  creatorOrdinalAddress: string;
  creatorPaymentAddress: string;
  status: number; // 0: Create Pending, 1: Created, 2: Finished
  walletType: string;
  createRaffleTx: string;
  lastBuyTx: string;
};

export type THolderTypes = {
  wallet: string;
  inscription_ids: Array<string>;
};

export type TInscriptionTypes = {
  name: string;
  inscription_id: string;
  inscription_number: number;
};
