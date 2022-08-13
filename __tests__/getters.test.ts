import * as pomelo from "../";

const ROUND_ID = 101;

test("get_globals #1 (pass)", async () => {
    const results = await pomelo.get_globals();
    expect( results ).toBeTruthy;
});

test("get_rounds #1 (pass)", async () => {
    const results = await pomelo.get_rounds();
    expect( results.length ).toBeTruthy;
});

test("get_grants #1 (pass)", async () => {
    const results = await pomelo.get_grants();
    expect( results.length ).toBeTruthy;
});

test("get_seasons #1 (pass)", async () => {
    const results = await pomelo.get_seasons();
    expect( results.length ).toBeTruthy;
});

test("get_users #1 (pass)", async () => {
    const results = await pomelo.get_users(ROUND_ID);
    expect( results.length ).toBeTruthy;
});

test("get_match #1 (pass)", async () => {
    const results = await pomelo.get_match(ROUND_ID);
    expect( results.length ).toBeTruthy;
});

test("get_login_accounts #1 (pass)", async () => {
    const results = await pomelo.get_login_accounts();
    expect( results.length ).toBeTruthy;
});

test("get_pfp_profiles #1 (pass)", async () => {
    const results = await pomelo.get_pfp_profiles();
    expect( results.length ).toBeTruthy;
});

