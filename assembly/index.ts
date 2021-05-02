memory.grow(2) // 128Kb
store<u8>(0, 21)
store<u8>(1, 99)

export function readMemory(n: i32): i32 {
  return load<u8>(n)
}
