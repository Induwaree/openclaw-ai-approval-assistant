export async function analyzeWithOpenClaw(description: string) {
  let category = "General";
  let priority = "Low";

  if (description.toLowerCase().includes("credit card")) {
    category = "Credit Card";
    priority = "Medium";
  }

  if (
    description.toLowerCase().includes("payment") ||
    description.toLowerCase().includes("transaction")
  ) {
    category = "Finance";
    priority = "High";
  }

  if (description.toLowerCase().includes("leave")) {
    category = "Human Resources";
    priority = "Low";
  }

  return {
    summary: `OpenClaw analyzed this request and categorized it as ${category}.`,
    category,
    priority,
    suggestedAction:
      "Send request to approval manager for review.",
  };
}