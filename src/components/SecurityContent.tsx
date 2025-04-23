import { CopyBlock, dracula } from "react-code-blocks";
export function SecurityContent() {
  return (
    <div className="flex-1 overflow-y-auto p-6 max-w-5xl mx-auto">
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Yêu cầu bảo mật</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Sử dụng giao thức https</h3>
          <p className="text-zinc-300">Whitelist IP/Domain</p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>Đối tác cung cấp IP/Domain để URBox thực hiện whitelist trên API đổi quà.</li>
            <li>IP whitelist chỉ yêu cầu trên môi trường PROD.</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Chữ ký điện tử & Mã hoá dữ liệu</h2>
        <p className="text-zinc-300 mb-4">
          Signature là một chuỗi ký tự được tạo ra từ một thuật toán cho trước, sử dụng để kiểm tra tính đúng đắn của dữ 
          liệu trên đường truyền giữa 2 hệ thống, đảm bảo tính chính xác & chống chối bỏ. Một số thuật toán đang sử dụng 
          là MD5, SHA1, SHA256 và Hmac.
        </p>
        <p className="text-zinc-300 mb-4">
          Trong tài liệu này URBox sử dụng các yêu tố sau để tạo Signature:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
          <li>Dữ liệu đầu vào bao gồm Private key & data.</li>
          <li>
            Thuật toán: ED25519, AES-GCM.
            
          </li>
          <li>
            Cách tạo chữ ký điện tử:
            <p className="mt-2">Truyền dữ liệu: (lưu ý: CHỈ mã hoá các trường thông tin dưới đây)</p>
          </li>
        </ul>
        
        <CopyBlock
          language="json"
          text={`data = "Provider key do URBox cung cấp"`}
        />
      
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Một số ví dụ theo ngôn ngữ lập trình</h2>
        
        <h3 className="text-lg font-medium mt-6 mb-4">Golang</h3>
        <CopyBlock
          language="go"
          text={`func (a *SecurityService) EncryptAndSignEd25519(msg []byte, senderPriv interface{}, recipientAESKey interface{}) (string, error) {
	// If no AES key provided, use the one from struct
	if recipientAESKey == nil && a.AESKey != "" {
		recipientAESKey = a.AESKey
	}

	// If no private key provided, use the one from struct
	if senderPriv == nil && a.PrivKey != "" {
		senderPriv = a.PrivKey
	}

	// Handle AES key - can be string or []byte
	var aesKey []byte
	switch k := recipientAESKey.(type) {
	case string:
		decoded, err := base64.StdEncoding.DecodeString(k)
		if err != nil {
			return "", fmt.Errorf("invalid AES key format: %w", err)
		}
		aesKey = decoded
	case []byte:
		aesKey = k
	default:
		return "", fmt.Errorf("AES key must be string or []byte")
	}

	// Handle private key - can be string or ed25519.PrivateKey
	var privKey ed25519.PrivateKey
	switch p := senderPriv.(type) {
	case string:
		decoded, err := base64.StdEncoding.DecodeString(p)
		if err != nil {
			return "", fmt.Errorf("invalid private key format: %w", err)
		}
		privKey = decoded
	case ed25519.PrivateKey:
		privKey = p
	case []byte:
		privKey = ed25519.PrivateKey(p)
	default:
		return "", fmt.Errorf("private key must be string, []byte, or ed25519.PrivateKey")
	}

	// Rest of the encryption logic...
	timestamp := fmt.Sprintf("%d", time.Now().Unix())
	msgWithTimestamp := append([]byte(timestamp+"|"), msg...)

	signature := a.SignMessageEd25519(msgWithTimestamp, privKey)
	msgWithSignature := append(msgWithTimestamp, []byte("|"+signature)...)

	encryptedMsg, err := a.EncryptAESGCM(msgWithSignature, aesKey)
	if err != nil {
		return "", err
	}

	return base64.StdEncoding.EncodeToString(encryptedMsg), nil
}
func (a *SecurityService) EncryptAESGCM(msg []byte, key []byte) ([]byte, error) {
	block, err := aes.NewCipher(key)
	if err != nil {
		return nil, err
	}
	aesGCM, err := cipher.NewGCM(block)
	if err != nil {
		return nil, err
	}

	nonce := make([]byte, aesGCM.NonceSize())
	if _, err := io.ReadFull(rand.Reader, nonce); err != nil {
		return nil, err
	}

	ciphertext := aesGCM.Seal(nil, nonce, msg, nil)
	return append(nonce, ciphertext...), nil
}
`}
          showLineNumbers={true}
          theme={dracula}
          codeBlock
        />
       
        <h3 className="text-lg font-medium my-4">Javascript</h3>
        <CopyBlock
          language="javascript"
          text={`function encryptAndSignEd25519(
  msg: string,
  senderPriv?: string,
  recipientAESKey?: string,
): string {
  const aesKey = resolveKey(recipientAESKey, AESKey);
  const privKey = resolveKey(senderPriv, PrivKey);

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const msgWithTimestamp = "timestamp|msg";

  const signature = signMessageEd25519(msgWithTimestamp, privKey);
  const finalMessage = "msgWithTimestamp}|signature";

  return encryptAESGCM(finalMessage, aesKey);
}
function encryptAESGCM(msg: string, keyBase64: string): string {
  const key = Buffer.from(keyBase64, 'base64');
  const iv = crypto.randomBytes(12); // 12-byte nonce for AES-GCM
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

  const encrypted = Buffer.concat([cipher.update(msg, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  const result = Buffer.concat([iv, encrypted, tag]);

  return result.toString('base64');
}`}
            showLineNumbers={true}
          theme={dracula}
          codeBlock
        /> 
      </section>
    </div>
  );
}
