'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

export default function EndpointSection() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const copyToClipboard = (text: string, tab: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const requestBody = JSON.stringify(
    {
      Airline: 'IndiGo',
      Source: 'Delhi',
      Destination: 'Mumbai',
      Total_Stops: 'non-stop',
      Date_of_Journey: '24/03/2019',
      Dep_Time: '22:20',
      Arrival_Time: '01:10',
      Duration: '2h 50m',
    },
    null,
    2
  );

  const responseBody = JSON.stringify({ predicted_price: 5234 }, null, 2);

  const curlCommand = `curl -X POST http://flightfare-backend.onrender.com/predict \\
  -H "Content-Type: application/json" \\
  -d '{
    "Airline": "IndiGo",
    "Source": "Delhi",
    "Destination": "Mumbai",
    "Total_Stops": "non-stop",
    "Date_of_Journey": "24/03/2019",
    "Dep_Time": "22:20",
    "Arrival_Time": "01:10",
    "Duration": "2h 50m"
  }'`;

  const jsCode = `const response = await fetch("http://flightfare-backend.onrender.com/predict", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    Airline: "IndiGo",
    Source: "Delhi",
    Destination: "Mumbai",
    Total_Stops: "non-stop",
    Date_of_Journey: "24/03/2019",
    Dep_Time: "22:20",
    Arrival_Time: "01:10",
    Duration: "2h 50m"
  })
});
const data = await response.json();
console.log("Predicted Price:", data.predicted_price);`;

  const pythonCode = `import requests

url = "http://flightfare-backend.onrender.com/predict"
payload = {
    "Airline": "IndiGo",
    "Source": "Delhi",
    "Destination": "Mumbai",
    "Total_Stops": "non-stop",
    "Date_of_Journey": "24/03/2019",
    "Dep_Time": "22:20",
    "Arrival_Time": "01:10",
    "Duration": "2h 50m"
}

response = requests.post(url, json=payload)
data = response.json()
print(f"Predicted Price: {data['predicted_price']}")`;

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">API Endpoints</h2>
        <p className="text-lg text-muted-foreground mb-12 text-balance">Everything you need to integrate flight fare prediction into your application</p>

        <div className="space-y-12">
          {/* POST /predict */}
          <Card className="p-6 md:p-8 bg-card border-border rounded-2xl">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-primary/20 rounded-full mb-3">
                <span className="text-sm font-semibold text-primary">POST</span>
              </div>
              <h3 className="text-2xl font-bold">/predict</h3>
              <p className="text-muted-foreground mt-2">Get flight fare prediction based on flight details</p>
            </div>

            <div className="space-y-6">
              {/* Request */}
              <div>
                <h4 className="font-semibold mb-3">Request Body</h4>
                <div className="bg-background/80 rounded-lg p-4 border border-border overflow-x-auto">
                  <pre className="text-sm font-mono text-foreground whitespace-pre-wrap break-words">{requestBody}</pre>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(requestBody, 'request')}
                  className="mt-3"
                >
                  {copiedTab === 'request' ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copiedTab === 'request' ? 'Copied' : 'Copy'}
                </Button>
              </div>

              {/* Response */}
              <div>
                <h4 className="font-semibold mb-3">Response</h4>
                <div className="bg-background/80 rounded-lg p-4 border border-border overflow-x-auto">
                  <pre className="text-sm font-mono text-foreground">{responseBody}</pre>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(responseBody, 'response')}
                  className="mt-3"
                >
                  {copiedTab === 'response' ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copiedTab === 'response' ? 'Copied' : 'Copy'}
                </Button>
              </div>

              {/* Code Examples */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold mb-6">Code Examples</h4>
                <div className="space-y-6">
                  {/* Curl */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold">cURL</span>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 border border-border overflow-x-auto">
                      <pre className="text-sm font-mono text-foreground whitespace-pre-wrap break-words">{curlCommand}</pre>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(curlCommand, 'curl')}
                      className="mt-3"
                    >
                      {copiedTab === 'curl' ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copiedTab === 'curl' ? 'Copied' : 'Copy'}
                    </Button>
                  </div>

                  {/* JavaScript */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold">JavaScript</span>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 border border-border overflow-x-auto">
                      <pre className="text-sm font-mono text-foreground whitespace-pre-wrap break-words">{jsCode}</pre>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(jsCode, 'js')}
                      className="mt-3"
                    >
                      {copiedTab === 'js' ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copiedTab === 'js' ? 'Copied' : 'Copy'}
                    </Button>
                  </div>

                  {/* Python */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold">Python</span>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 border border-border overflow-x-auto">
                      <pre className="text-sm font-mono text-foreground whitespace-pre-wrap break-words">{pythonCode}</pre>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(pythonCode, 'python')}
                      className="mt-3"
                    >
                      {copiedTab === 'python' ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copiedTab === 'python' ? 'Copied' : 'Copy'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Parameters Table */}
          <Card className="p-6 md:p-8 bg-card border-border rounded-2xl overflow-x-auto">
            <h3 className="text-xl font-semibold mb-6">Request Parameters</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Parameter</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { param: 'Airline', type: 'string', desc: 'Flight airline name' },
                  { param: 'Source', type: 'string', desc: 'Departure city' },
                  { param: 'Destination', type: 'string', desc: 'Arrival city' },
                  { param: 'Total_Stops', type: 'string', desc: 'Number of stops' },
                  { param: 'Date_of_Journey', type: 'string', desc: 'Date in DD/MM/YYYY format' },
                  { param: 'Dep_Time', type: 'string', desc: 'Departure time in HH:MM format' },
                  { param: 'Arrival_Time', type: 'string', desc: 'Arrival time in HH:MM format' },
                  { param: 'Duration', type: 'string', desc: 'Flight duration' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4 font-mono text-primary">{row.param}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.type}</td>
                    <td className="py-3 px-4">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </section>
  );
}
