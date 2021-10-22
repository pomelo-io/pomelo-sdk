import axios from "axios";
import { Globals, Round, Season, Match, User } from "../types"

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

export async function get_round( round_id: number ) {
  for ( const row of await get_rounds() ) {
    if ( row.round_id == round_id ) return row;
  }
  throw new Error("[round_id] does not exists");
}

export async function get_seasons() {
  const results: Season[] = [];
  const { data } = await axios.get<{rows: Season[]}>(FUNCTIONS_BASE_URL + "seasons");
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

export async function get_season( season_id: number ): Promise<Season> {
  for ( const row of await get_seasons() ) {
    if ( row.season_id == season_id ) return row;
  }
  throw new Error("[season_id] does not exists");
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

export async function get_user(round_id: number, eosn_id: string) {
  return (await get_users(round_id, eosn_id) )[0] || {};
}

export async function get_matches(round_id: number, grant_id?: string) {
  const results: Match[] = [];
  const params: any = {}
  if ( grant_id ) params.grant_id = grant_id;
  const { data } = await axios.get<{rows: Match[]}>(FUNCTIONS_BASE_URL + `match/${round_id}`, {params});
  for ( const row of data.rows) {
    results.push(row);
  }
  return results;
}

export async function get_match(round_id: number, grant_id: string) {
  return (await get_matches(round_id, grant_id) )[0] || {};
}
