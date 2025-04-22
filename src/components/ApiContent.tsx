import { CopyBlock, dracula } from "react-code-blocks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Info } from "lucide-react";
import { API_URL, data } from "@/data/apiJson";
import { useEffect, useState } from "react";

export function ApiContent() {
  const [activeSection, setActiveSection] = useState<string>(data[0].title);

  return (
    <div className="flex-1 grid grid-cols-4 gap-4 pb-16 py-8">
      <div className="col-span-1 pl-6">
        <h4 className="text-zinc-300 text-[16px] pb-3">Contents</h4>
        {data.map((item, index) => (
          <div className="py-[2px]" key={index}>
            <a 
              className={`text-[12px] ${activeSection === item.title ? 'text-blue-400' : 'text-zinc-300'}`} 
              href={`#${item.title}`}
              onClick={() => setActiveSection(item.title)}
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
      <div className="col-span-3 max-w-4xl overflow-y-auto px-6 ">
        <h1 className="text-2xl font-bold text-white mb-6">Kết nối API</h1>

        <div className="space-y-8">
          <section>
            <div className="mb-6">
              <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
                <li>
                  Sandbox url:{" "}
                  <a href={API_URL} className="text-blue-400 hover:underline">
                    {API_URL}
                  </a>
                </li>

                <li>
                  Staging url:{" "}
                  <a
                    href="https://sandapi.urbox.dev/"
                    className="text-blue-400 hover:underline"
                  >
                    N/A
                  </a>
                </li>
                <li>API method: form-data, json</li>
                <li>Request timeout: 60s.</li>
                <li>
                  Xử lý timeout: đối tác gọi lại request với transaction_id cũ
                  để URBox check. Nếu dã tồn tại sẽ trả về trạng thái giao dịch.
                </li>
              </ul>
            </div>
          </section>
          {data.map((item, index) => (
            <section id={item.title} key={index}>
              <h2 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h2>
              <div className="prose prose-invert max-w-none mb-6">
                <p className="text-zinc-300">{item.description}</p>
              </div>

             {item.note &&  <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded flex items-start gap-3 mb-6">
                <Info className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-300">
                  <div dangerouslySetInnerHTML={{ __html: item.note }} />
                </div>
              </div>}

              <div className="mb-6">
                <h3 className="text-base font-medium text-white mb-2">
                  Request
                </h3>
                <div className="flex items-center mb-2">
                  <span className="font-mono bg-zinc-800 text-white px-2 py-0.5 rounded mr-2">
                    {item.method}
                  </span>
                  <a
                    href={`${item.url}`}
                    className="text-blue-400 hover:underline"
                  >{`${item.url}`}</a>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-base font-medium text-white mb-3">
                  Parameter
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/5">Parameter</TableHead>
                      <TableHead className="w-1/6">Data type</TableHead>
                      <TableHead className="w-1/6">Required</TableHead>
                      <TableHead className="w-1/4">Mô tả</TableHead>
                      <TableHead>Dữ liệu test mẫu</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {item.parameter.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono">{item.name}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.required ? "Yes" : "No"}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.example}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mb-8">
                <h3 className="text-base font-medium text-white mb-3">
                  Request mẫu
                </h3>
                <CopyBlock
                  showLineNumbers={true}
                  theme={dracula}
                  codeBlock
                  language="bash"
                  text={item.exampleRequest}
                />
              </div>

              <div className="mb-8">
                <h3 className="text-base font-medium text-white mb-3">
                  Response
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/5">Parameter</TableHead>
                      <TableHead className="w-1/5">Data type</TableHead>
                      <TableHead className="w-1/3">Mô tả</TableHead>
                      <TableHead>Chi tiết</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {item.responseInfo.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono">{item.parameter}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.example}</TableCell>
                      </TableRow>
                    ))}
                  
                  </TableBody>
                </Table>
              </div>

              <div className="mb-8">
                <h3 className="text-base font-medium text-white mb-3">
                  Response mẫu
                </h3>
                <CopyBlock
                  language="json"
                  text={item.exampleResponse}
                  showLineNumbers={true}
                  theme={dracula}
                  codeBlock
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>

  );
}
