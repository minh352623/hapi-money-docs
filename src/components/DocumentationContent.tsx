
import { CodeBlock } from "./CodeBlock";

export function DocumentationContent() {
  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-white mb-6">
          Chữ ký điện tử & Mã hoá dữ liệu
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-zinc-300 mb-6">
            Signature là một chữ ký được tạo ra từ mật mã học biên cho trước, sử dụng để kiểm tra tính dụng dẫn của dữ liệu đầu vào truyền qua 2 hệ thống. Đảm bảo tính chẵn vẹn & chống chối bỏ. Một số thuật toán: RSA, MD5, SHA1, SHA256 và Hmac.
          </p>
          <p className="text-zinc-300 mb-6">
            Chỉ cần chữ ký khi thực hiện đổi voucher, không cần chữ ký khi lấy thông tin quà.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Trong tài liệu này URBox sử dụng các yếu tố sau để tạo Signature:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
            <li>Dữ liệu đầu vào bảo gồm Private key & data.</li>
            <li>Thuật toán: RSA – Sign HASH.
              <ul className="list-disc list-inside ml-6 mt-2">
                <li className="text-zinc-400">HASH: SHA256.</li>
                <li className="text-zinc-400">Keysize: 2048.</li>
              </ul>
            </li>
            <li>Cách tạo chữ ký điện tử:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li className="text-zinc-400">Truyền dữ liệu data (JSON mã hoá cặc trường thông tin dưới đây)</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <CodeBlock
            language="json"
            title="data = array"
            code={`data = array;
"app_id" => "id bên bán đưa chúng cấp.",
"app_code" => "đã nào bên bán yêu cầu trong code chặn.",
"campaign_code" => "Mã chương trình do URBox cung cấp.",
"gateway" => [
    {
        "price": "Mã quà",
        "quantity": "Số lượng quà",
        "amount": "Giá tiền"
    }
],
"signature" => [...],
"trans_id" => "Id của đối tác.",
"transaction_id" => "Đề của đối tác giao dịch.",
"price_total_fee" => "Tổng giá trị để giao dịch"`}
            className="mb-6"
          />
          
          <div className="text-sm text-zinc-400 mb-2">
            {`==>`} Sử dụng ksort (sắp xếp theo key, sử dụng alphabet):
          </div>
          <div className="bg-zinc-800 text-white px-3 py-1 rounded inline-block mb-6">
            <code>data.ksort();</code>
          </div>
          
          <div className="text-sm text-zinc-400 mb-2">
            {`==>`} Sử dụng json_encode:
          </div>
          <div className="bg-zinc-800 text-white px-3 py-1 rounded inline-block mb-6">
            <code>json_encode(data);</code>
          </div>
          
          <div className="text-sm text-zinc-400 mb-2">
            {`==>`} Dùng data đã encode cùng PrivateKey để tạo Signature
          </div>
          <div className="text-sm text-zinc-400 mb-2">
            Private key:
          </div>
          <div className="bg-zinc-800 text-white px-3 py-1 rounded inline-block mb-6">
            <code>$signature = HASH($data, $privateKey);</code>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            Một số ví dụ theo ngôn ngữ lập trình
          </h2>
          
          <div className="text-sm font-medium text-white mb-2">C#</div>
          <CodeBlock
            language="c#"
            code={`public byte[] SignData(byte[] dataToSign)
{
    using (var rsa = new RSACryptoServiceProvider(2048))
    {
        AsymmetricCipherKeyPair privateKey = AsymmetricCipherKeyPair.FromPemFile(new StringReader(
            rsa.ExportParameters(privateKey.privateKey));
        
        var rsaFormatter = new RSAPKCS1SignatureFormatter(rsa);
        rsaFormatter.SetHashAlgorithm("SHA256");
        
        byte[] sign = rsaFormatter.CreateSignature(dataToSign);
        return Convert.ToBase64String(sign);
    }
}`}
            className="mb-6"
          />
          
          <div className="text-sm font-medium text-white mb-2">PHP</div>
          <CodeBlock
            language="php"
            code={`public function generateSignature($params, $privateKey = false): string
{
    // ... Implementation details ...
}`}
            className="mb-2"
          />
        </div>
      </div>
    </div>
  );
}
