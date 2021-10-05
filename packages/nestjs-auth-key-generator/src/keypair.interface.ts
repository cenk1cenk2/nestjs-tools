export interface KeypairOptions {
  keySize: number // the size for the private key in bits (default: 1024)
  days: number // how long till expiry of the signed certificate (default: 365)
  algorithm: 'sha1' | 'sha256' | string // sign the certificate with specified algorithm (default: 'sha1')
  extensions: Record<string, any>[] // certificate extensions array
  pkcs7: boolean // include PKCS#7 as part of the output (default: false)
  clientCertificate: boolean // generate client cert signed by the original key (default: false)
  clientCertificateCN: 'Cenk Kilic <cenk@kilic.dev>' // client certificate's common name (default: 'John Doe jdoe123')
}

export interface KeypairResults {
  public?: string
  private?: string
  cert?: string
  clientpublic?: string
  clientprivate?: string
  clientcert?: string
}
