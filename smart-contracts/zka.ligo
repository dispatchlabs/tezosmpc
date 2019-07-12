type secret_map is map(nat, string);

function store_secret (const new_pair: (nat * string); var secret_map : secret_map) : (list(operation) * secret_map) is
 begin
    secret_map[new_pair.0] := new_pair.1;

 end with ((nil : list(operation)), secret_map)