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
            Thuật toán: ED25519.
            
          </li>
          <li>
            Cách tạo chữ ký điện tử:
            <p className="mt-2">Truyền dữ liệu: (lưu ý: CHỈ mã hoá các trường thông tin dưới đây)</p>
          </li>
        </ul>
        
        <CopyBlock
          language="json"
          text={`data = "Connection key do URBox cung cấp"`}
        />
      
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Một số ví dụ theo ngôn ngữ lập trình</h2>
        
        <h3 className="text-lg font-medium mt-6 mb-4">Golang</h3>
        <CopyBlock
          language="go"
          text={`func (a *T) EncryptAndSignEd25519V2(msg []byte, senderPriv interface{}) (string, error) {
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

    return base64.StdEncoding.EncodeToString(msgWithSignature), nil
}`}
          showLineNumbers={true}
          theme={dracula}
          codeBlock
        />
       

         <h3 className="text-lg font-medium mb-4">C#</h3> 
        <CopyBlock
          language="csharp"
          text={`public class SecurityService
{
    public static string EncryptAndSignEd25519V2(string msg, byte[] senderPriv)
    {
        // If no private key provided, use the one from the config
        if (senderPriv == null)
        {
            throw new ArgumentNullException("Private key cannot be null");
        }

        // Create timestamp and append it to the message
        var timestamp = DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString();
        var msgWithTimestamp = timestamp + "|" + msg;

        // Convert the message to bytes
        byte[] msgBytes = Encoding.UTF8.GetBytes(msgWithTimestamp);

        // Sign the message using ED25519
        var signedMessage = Ed25519.Sign(msgBytes, senderPriv);

        // Combine the original message and signature
        byte[] msgWithSignature = new byte[msgBytes.Length + signedMessage.Length + 1];
        msgBytes.CopyTo(msgWithSignature, 0);
        msgWithSignature[msgBytes.Length] = (byte)'|';
        signedMessage.CopyTo(msgWithSignature, msgBytes.Length + 1);

        // Return the base64 encoded result
        return Convert.ToBase64String(msgWithSignature);
    }
}`}
      showLineNumbers={true}
          theme={dracula}
          codeBlock
        />

        <h3 className="text-lg font-medium mb-4">Javascript</h3>
        <CopyBlock
          language="javascript"
          text={`const nacl = require('tweetnacl');
const base64 = require('base64-js');
const crypto = require('crypto');

function encryptAndSignEd25519V2(msg, senderPriv) {
  // If no private key provided, use the one from the config
  if (!senderPriv && process.env.PRIVATE_KEY) {
    senderPriv = process.env.PRIVATE_KEY;
  }

  // Convert the private key (if string) to byte array
  let privKey;
  if (typeof senderPriv === 'string') {
    privKey = Buffer.from(senderPriv, 'base64');
  } else if (senderPriv instanceof Uint8Array) {
    privKey = senderPriv;
  } else {
    throw new Error('Private key must be string or Uint8Array');
  }

  // Create timestamp
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const msgWithTimestamp = Buffer.concat([Buffer.from(timestamp + '|'), Buffer.from(msg)]);

  // Sign the message using Ed25519
  const signature = nacl.sign.detached(msgWithTimestamp, privKey);

  // Combine the message and signature
  const msgWithSignature = Buffer.concat([msgWithTimestamp, Buffer.from('|'), signature]);

  // Return base64 encoded result
  return base64.fromByteArray(msgWithSignature);
}`}
            showLineNumbers={true}
          theme={dracula}
          codeBlock
        /> 
      </section>
    </div>
  );
}
