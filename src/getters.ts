import axios from "axios";
import { Globals, Round, Season, Grant, Match, User, LoginAccount, Profile, GrantClaim } from "../types"

const FUNCTIONS_BASE_URL = 'https://functions.eosn.io/v1/pomelo/'
const EOSIO_BASE_URL = 'https://eos.eosn.io'

export async function get_globals(): Promise<Globals> {
  const { data } = await axios.get<{rows: Globals[]}>(FUNCTIONS_BASE_URL + "globals");
  return data.rows[0];
}

export async function get_rounds() {
  const results: Round[] = [];
  const { data } = await axios.get<{rows: Round[]}>(FUNCTIONS_BASE_URL + "rounds");
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

export async function get_seasons() {
  const results: Season[] = [];
  const { data } = await axios.get<{rows: Season[]}>(FUNCTIONS_BASE_URL + "seasons");
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

export async function get_grants(grant_id?: string) {
  const results: Grant[] = [];
  const params: any = {}
  if ( grant_id ) params.grant_id = grant_id;
  const { data } = await axios.get<{rows: Grant[]}>(FUNCTIONS_BASE_URL + "grants", {params});
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

export async function get_users(round_id: number, eosn_id?: string) {
  const results: User[] = [];
  const params: any = {}
  if ( eosn_id ) params.eosn_id = eosn_id;
  const { data } = await axios.get<{rows: User[]}>(FUNCTIONS_BASE_URL + `users/${round_id}`, {params});
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

export async function get_match(round_id: number, grant_id?: string) {
  const results: Match[] = [];
  const params: any = {}
  if ( grant_id ) params.grant_id = grant_id;
  const { data } = await axios.get<{rows: Match[]}>(FUNCTIONS_BASE_URL + `match/${round_id}`, {params});
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

export async function get_login_accounts(account?: string) {
  const results: LoginAccount[] = [];
  const params: any = {}
  if ( account ) params.account = account;
  const { data } = await axios.get<{rows: LoginAccount[]}>(FUNCTIONS_BASE_URL + `login/accounts`, {params});
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

export async function get_pfp_profiles(account?: string) {
  const results: Profile[] = [];
  const params: any = {}
  if ( account ) params.account = account;
  const { data } = await axios.get<{rows: Profile[]}>(FUNCTIONS_BASE_URL + `pfp/profiles`, {params});
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

export async function get_grant_claims(round_id: number, eosn_id?: string, code = "claim.pomelo" ) {
  const results: GrantClaim[] = [];
  const payload: any = {
    code,
    scope: round_id,
    table: "claims",
    json: true,
  }
  if ( eosn_id ) {
    payload.lower_bound = eosn_id;
    payload.upper_bound = eosn_id;
    payload.index_position = "secondary";
    payload.key_type = "name"
  }
  const { data } = await axios.post<{rows: GrantClaim[]}>(EOSIO_BASE_URL + `/v1/chain/get_table_rows`, payload );
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

// get_grant_claims(101).then( data => console.log(data)).catch(e => console.error(e))
// get_grant_claims(101, "3332221.eosn").then( data => console.log(data)).catch(e => console.error(e))
