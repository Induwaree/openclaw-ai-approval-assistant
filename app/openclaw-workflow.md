# OpenClaw Workflow

This project uses OpenClaw as an AI workflow assistant for approval automation.

## Workflow

When a new approval request is submitted:

1. OpenClaw receives the request details from the dashboard.
2. OpenClaw reads the request title, department, and description.
3. OpenClaw generates a short summary.
4. OpenClaw detects the request category.
5. OpenClaw assigns priority as Low, Medium, or High.
6. OpenClaw creates an approval task.
7. OpenClaw sends a notification to the approver.
8. The dashboard displays the request status as Pending, Approved, or Rejected.

## Example Prompt for OpenClaw

You are an AI approval workflow assistant.

Read the following business request and return:
- summary
- category
- priority
- suggested action

Request:
{{request_description}}

Return response in JSON format.
