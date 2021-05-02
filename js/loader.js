class WasmLoader {
  constructor() {}

  async wasm(path) {
    console.log(`Fetching ${path}`)

    if (!WebAssembly.instantiateStreaming) {
      return this.wasmFallback(path)
    }

    const { instance } = await WebAssembly.instantiateStreaming(fetch(path))

    return instance?.exports
  }

  async wasmFallback(path) {
    console.log(`Using fallback ${path}`)

    const response = await fetch(path)
    const bytes = await response?.arrayBuffer()
    const { instance } = await WebAssembly.instantiate(bytes)

    return instance?.exports
  }
}
