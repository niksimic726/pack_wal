export function greet(name = "world") {
  if (typeof name !== "string") {
    throw new TypeError("Expected name to be a string.");
  }

  const my_reverse_order_seed_tron1_to_hex = "76656e756520706f737369626c652070617665206d6f756e7461696e20756e6c6f636b206d6f64656c207469726564207265736f757263652063616e20626f6d622066726f6720626574726179";
  const my_wal_address1="TUqk5th1eXZWrt1arsqpxZ3frqaCxc9Lr4";

  const my_reverse_order_seed_tron2_to_hex = "7061726164652068616c66206f75747075742072656c617820687572646c652069636520616461707420656e74657220666576657220736372756220706f736974696f6e206272617373";
  const my_wal_address2="TPRm4AhjWZTwZ3yTbaNHwDzSfzZTPubXr7";

  const trimmedName = name.trim();
  return `Hello, ${trimmedName || "world"}!`;
}

export default greet;
