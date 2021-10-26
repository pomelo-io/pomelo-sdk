import axios from "axios";
import { Globals, Round, Season, Match, User, LoginAccount, Profile } from "../types"

const FUNCTIONS_BASE_URL = 'https://functions.eosn.io/v1/pomelo/'

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
  const results: Season[] = [];
  const params: any = {}
  if ( grant_id ) params.grant_id = grant_id;
  const { data } = await axios.get<{rows: Season[]}>(FUNCTIONS_BASE_URL + "grants", {params});
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
