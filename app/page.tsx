"use client";

import { useState } from "react";

type RequestItem = {
  title: string;
  department: string;
  description: string;
  category: string;
  priority: string;
  status: string;
};

export default function Home() {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("Finance");
  const [description, setDescription] = useState("");
  const [aiResult, setAiResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [requests, setRequests] = useState<RequestItem[]>([
    {
      title: "Credit Card Limit Enhancement",
      department: "Banking Operations",
      description: "Customer requested a credit card limit increase.",
      category: "Credit Card",
      priority: "Medium",
      status: "Pending",
    },
    {
      title: "OTT Transaction Approval",
      department: "Finance",
      description: "High value transaction needs approval.",
      category: "Finance",
      priority: "High",
      status: "Pending",
    },
  ]);

  const analyzeRequest = async () => {
    setLoading(true);
    if (!title || !description) {
      alert("Please enter title and description");
      return;
    setLoading(false);
    }

    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, department, description }),
    });

    const data = await response.json();
    setAiResult(data);
    alert("Approval request analyzed and sent to workflow manager.");

    setRequests([
      {
        title,
        department,
        description,
        category: data.category,
        priority: data.priority,
        status: "Pending",
      },
      ...requests,
    ]);

    setTitle("");
    setDescription("");
  };

  const updateStatus = (index: number, status: string) => {
    const updated = [...requests];
    updated[index].status = status;
    setRequests(updated);
  };

  const total = requests.length;
  const pending = requests.filter((r) => r.status === "Pending").length;
  const approved = requests.filter((r) => r.status === "Approved").length;
  const rejected = requests.filter((r) => r.status === "Rejected").length;

  return (
    <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">OpenClaw AI Approval Assistant</h1>
          <p className="text-gray-600">Smart workflow automation dashboard</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card title="Total Requests" value={total} />
        <Card title="Pending" value={pending} />
        <Card title="Approved" value={approved} />
        <Card title="Rejected" value={rejected} />
      </div>

      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Approval Requests</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3">Request</th>
              <th>Department</th>
              <th>AI Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request, index) => (
              <tr className="border-b" key={index}>
                <td className="py-3">{request.title}</td>
                <td>{request.department}</td>
                <td>{request.category}</td>
                <td>{request.priority}</td>
                <td>
                  <StatusBadge status={request.status} />
                </td>
                <td className="space-x-2">
                  <button
                    onClick={() => updateStatus(index, "Approved")}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(index, "Rejected")}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload Approval Request</h2>

        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Request Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option>Finance</option>
            <option>HR</option>
            <option>Banking Operations</option>
            <option>Procurement</option>
          </select>

          <textarea
            placeholder="Request Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-3 rounded-lg h-32"
          />

          <button
            onClick={analyzeRequest}
            className="bg-black text-white py-3 rounded-lg"
          >
            Submit Request
          </button>
        </div>
      </section>

      {aiResult && (
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">OpenClaw AI Analysis</h2>
          <p><strong>AI Summary:</strong> {aiResult.summary}</p>
          <p><strong>Detected Category:</strong> {aiResult.category}</p>
          <p><strong>Assigned Priority:</strong> {aiResult.priority}</p>
          <p><strong>Suggested Action:</strong> {aiResult.suggestedAction}</p>
        </section>
      )}
    </main>
  );
}

function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "Approved") {
    return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Approved</span>;
  }

  if (status === "Rejected") {
    return <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Rejected</span>;
  }

  return <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Pending</span>;
}