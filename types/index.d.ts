export interface Globals {
  bounty_fee: number;          // 500
  fee_account: string;         // 'd.fee.pomelo'
  grant_fee: number;           // 500
  login_contract: string;      // 'd.login.eosn'
  season_id: number;           // 1
}

export interface ExtendedAsset {
  quantity: string;
  contract: string;
}

export interface Round {
  created_at: string;                   // '2021-10-18T20:59:43'
  description: string;                  // 'Matching Round #101'
  donated_tokens: ExtendedAsset[];      // [ { quantity: '126.3500 PLAY', contract: 'play.pomelo' } ]
  grant_ids: string[],                  // ['fredtestfred','deleted','bad','eoswallet','eosmonthly','oreus']
  match_value: number;                  // 500000
  round_id: number;                     // 101
  season_id: number;                    // 1
  sum_boost: number;                    // 0
  sum_square: number;                   // 1269.616953849954
  sum_value: number;                    // 598.4335950000001
  updated_at: string;                   // '2021-10-22T01:40:49'
  user_ids: string[];                   // [ '53322.d.eosn', '31325.d.eosn', '43512.d.eosn', '14543.d.eosn' ]
}

export interface Season {
  created_at: string;             // '2021-10-18T20:59:30'
  description: string;            // 'Pomelo Season #1'
  end_at: string;                 // '2021-10-25T00:00:00'
  match_value: number;            // 500000
  round_ids: number[];            // [ 101 ]
  season_id: number;              // 1
  start_at: string;               // '2021-10-20T00:00:00'
  submission_end_at: string;      // '2021-10-24T00:00:00'
  submission_start_at: string;    // '2021-10-18T00:00:00'
  updated_at: string;             // '2021-10-21T17:28:28'
}

export interface Contribution {
  id: string;
  value: number;
}

export interface User {
  boost: number;                      // 0
  contributions: Contribution[]       // [ { id: 'eoswallet', value: 43.966 } ]
  multiplier: number;                 // 0
  updated_at: string;                 // '2021-10-20T14:40:46'
  user_id: string;                    // '53322.d.eosn'
  value: number;                      // 43.966
}

export interface Match {
  grant_id: string;           // 'oreus'
  round_id: number;           // 101
  square: number;             // 107.42732003426362
  sum_boost: number;          // 0
  sum_sqrt: number;           // 10.364715144868363
  sum_value: number;          // 58.40885
  total_users: number;        // 2
  updated_at: string;         // '2021-10-22T01:40:49'
}

export interface LoginAccount {
  account: string;          // 'fred.gm'
  user_id: string;          // '54221.d.eosn'
}

export interface PFP {
  asset_id?: number            // '2199023384632'
  collection_name?: string     // 'genesis.eden'
  schema_name?: string         // 'members'
  template_id?: number         // 1423
  img?: string                 // 'QmSSdxU5sXfAjvNkuri24itbr9Hv2zpcPM6pesV7Z5dSMP'
}

export interface Profile {
  owner: string             // 'keyes'
  avatar: PFP,
  border: PFP,
  badge: PFP,
  created_at: string        // '2021-10-26T02:19:53'
  last_updated: string      // '2021-10-26T02:19:53'
}
